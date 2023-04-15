import React, { useState } from 'react'

const SaveBtn = ({saveBtn,tableNo,saveBtnColor,saveBtnState,setSaveBtnState}) => {
    const[saveState,setSaveState]=useState(true)
  return (
    <>
        <button
            className={` bg-[#1266 rounded-md  text-white px-4 py-2 mx-3 ${saveState===false ? " bg-[#bfbfbf]" :"bg-[#0d6c0d]"}`}
            onClick={() =>{  
                setSaveBtnState(!saveBtnState)
                setSaveState(!saveState)
                saveBtn(tableNo)}} 
            >
            {saveState===false ? "UnSave" : "Save"}
            </button>
                                

    </>
  )
}

export default SaveBtn
