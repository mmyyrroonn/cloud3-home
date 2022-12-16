import {MdEditor} from "@components/common/MdEditor";
import {Modal} from "@components/modals/Modal";
import {CommonModalClose} from "@components/pages/home/component/CommonModalClose";
import React, {useState} from "react";

interface IProps {
  onClose: any
}
export function PublisherUpload(p: IProps){
  const {onClose} = p
  const [state,setState] = useState(0)
  return(
    <Modal className="p-0">
      <div
        className="bg-white flex min-h-[43.75rem] relative"
      >
        <CommonModalClose onClose={()=>onClose && onClose()} />
        <div className="bg-black w-80 text-white px-8 py-16 text-lg">
          <h4 className="mb-12 text-2xl font-medium">
            Rich-text Content Publisher Widget
          </h4>
          <div>
            <h5 className="mb-5 font-medium">Demo Step 1:</h5>
            <p className="mb-5 font-light">
              Type in any text and try to do some simple edit work.
            </p>
            <p className="font-light">
              When you finish, click on the <span className="font-medium">'Publish'</span> button to continue.
            </p>
          </div>
        </div>
        <div className="min-w-[57.5rem] flex items-center justify-center">
          <MdEditor/>
        </div>
      </div>
    </Modal>
  )
}