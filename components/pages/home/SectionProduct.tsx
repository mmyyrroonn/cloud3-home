import React, {useState} from "react";
import {MonitorMap,basePos} from "@components/common/MonitorMap";
import {randomNum} from "@lib/utils";
import classnames from "classnames";
import IPFSLogoSvg from 'public/images/ipfs_logo.svg'
import CRUSTLogoSvg from 'public/images/crust_logo.svg'
import ContainerSmallSvg from "public/images/container_small.svg";
import UploadSvg from "public/images/upload.svg";
import WidgetSmallSvg from "public/images/widget_small.svg";

export const SectionProduct = React.memo(() => {
  return(
    <div className="w-full py-20 px-12 flex flex-col items-center justify-center text-black">
      <div className="w-container">
        <h3 className="w-full text-left text-40px pb-14">Cloud3 is a Web3 storage cloud</h3>
        <div className="w-full flex justify-between text-lg">
          <div className="w-[348px] h-[418px] border-2 border-black-1 mt-12">
            <div className="flex flex-col items-center border-b-2 border-black-1 py-6">
              <h5 className="text-3xl">IasS</h5>
              <span>Infrastructure-as-a-Service</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mt-6">
                <IPFSLogoSvg />
                <CRUSTLogoSvg className="ml-11" />
              </div>
              <h6 className="text-2xl mt-5 mb-2 underline">IPFS</h6>
              <span>the distrbuted file system</span>
              <h6 className="text-2xl mt-4 mb-2 underline">Crust Network</h6>
              <p className="w-[294px] text-center">the decentralized storage protocol & incentive layer of IPFS</p>
            </div>
            <div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-orange-15 text-3xl pb-3">Cloud3 Products</h4>
            <div className="flex">
              <div className="w-[348px] h-[418px] border-2 border-orange-15">
                <div className="flex flex-col items-center border-b-2 border-orange-15 py-6">
                  <h5 className="text-3xl">PaaS</h5>
                  <span>Platform-as-a-Service</span>
                </div>
                <div className="flex flex-col items-center pt-7 pb-14">
                  <div className="flex items-center text-40px">
                    <span className="mr-2">W3</span>
                    <ContainerSmallSvg/>
                    <span className="px-3">+</span>
                    <span className="mr-2">W3</span>
                    <UploadSvg/>
                  </div>
                  <h6 className="text-2xl mt-6 mb-3 underline">W3Buckets</h6>
                  <span>NFT-nized IPFS storage buckets</span>
                  <h6 className="text-2xl mt-5 mb-3 underline">Crust Network</h6>
                  <span>NFT-nized IPFS Gateways</span>
                </div>
              </div>
              <div className="w-[348px] h-[418px] border-2 border-orange-15">
                <div className="flex flex-col items-center border-b-2 border-orange-15 py-6">
                  <h5 className="text-3xl">SaaS</h5>
                  <span>Software-as-a-Service</span>
                </div>
                <div className="flex flex-col items-center pt-7 pl-6">
                  <div className="flex items-center text-40px">
                    <span className="mr-2">W3</span>
                    <WidgetSmallSvg />
                  </div>
                  <h6 className="text-2xl mt-6 mb-3 underline">Web3 Storage Widgets</h6>
                  <p className="w-[298px] text-center">Rich-text Editor/Publisher Widget
                    IPFS File Storage Widget
                  </p>
                  <p className="w-[298px] text-center">
                    IPFS Storage Retrieval Widget
                    and more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});