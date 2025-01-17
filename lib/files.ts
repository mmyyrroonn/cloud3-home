import axios from "axios";
import { DeCloudLink } from "@lib/config";
import { sleep } from "./utils";

export interface UploadRes {
  Hash: string;
  Size: string;
  Name: string;
  items?: UploadRes[];
}

const AUTH = "ZXRoLTB4MEVDNzJGNEQ5MWVhN2ZiRjAyZTY2NUQzZDU5QzQ3MmVjY2M0ZWZFZDoweDc3NDdmNDkxMWNhOWY2YWJjODE0MTgxZTkzZmM1YjdlNzQ4MGIwYzM0ZGRmOWFmNGQ4NjQ3OTRiZmYzY2EzMTg2MzQyNWEwZDRjZjAyOTA1Mjc5MTIwNDliYjJlYTRkMTM1OGZlZjQ3ZDU4YzBmMTQxNjI3ZmMzMTIwNzMwODdjMWI";
export async function upload({
  data,
  endpoint = DeCloudLink,
  authBasic = `Basic ${AUTH}`,
  onProgress,
  cancelToken = axios.CancelToken.source().token,
}: {
  data: FormData;
  endpoint?: string;
  authBasic?: string;
  cancelToken?: any;
  onProgress?: (num: number) => void;
}) {
  const upResult = await axios.request<UploadRes>({
    data,
    cancelToken,
    headers: { Authorization: authBasic },
    method: "POST",
    onUploadProgress: (p) => {
      if (onProgress) onProgress(p.progress);
    },
    params: { pin: true },
    url: `${endpoint}/api/v0/add`,
  });
  return upResult.data;
}

const pinBase = "https://pin.crustcode.com/psa";
export async function pinCID(cid: string, name: string = "file", auth: string = AUTH) {
  try {
    if (cid.length === 0) {
      throw new Error("CID len err");
    }
    //const { body } = await axios.post(
    const res = await axios.post(
      `${pinBase}/pins`,
      JSON.stringify({
        cid: cid,
        name: name,
      }),
      {
        headers: {
          authorization: "Bearer " + auth,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    return null
  }
}

export async function checkCID(cid: string) : Promise<boolean>{
  try {
    const res = await axios.get<any>(`https://graph.crustnetwork.io/api/file/${cid}/detail`, { timeout: 5000 });
    if(
      res.data &&
      res.data.data &&
      res.data.data.order &&
      res.data.data.order.length){
        return true
      }
  } catch (error) {
    return false;
  }
}

export async function loopCheckCID(cid: string, interval: number = 5000, maxCount: number = 10) {
  while(maxCount > 0){
    maxCount--
    await sleep(interval);
    const success = await checkCID(cid);
    if(success) return true;
  }
  return false;
}