import React, { useState } from 'react'

const SaveBtn = ({saveBtn,tableNo,saveBtnColor,saveBtnState,setSaveBtnState}) => {
    const[saveState,setSaveState]=useState(false)
  return (
    <>
        <button
            className={` bg-[#1266 rounded-md  text-white px-4 py-2 mx-3 ${saveState ? " bg-[#bfbfbf]" :"bg-[#0d6c0d]"}`}
            onClick={() =>{  

                    

                setSaveBtnState(!saveBtnState)
                setSaveState(!saveState)
                saveBtn(tableNo)}} 
            >
           
            
            {saveState ? "UnSave" : "Save"}
            </button>
                                

    </>
  )
}

export default SaveBtn
