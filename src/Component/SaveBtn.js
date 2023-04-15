import React, { useContext, useState } from 'react'
import { AppContext } from './ContextProvider/ContextProvider'

const SaveBtn = ({saveBtn,tableNo,saveBtnColor,saveBtnState,setSaveBtnState,saveToLocalStorage, matric}) => {
    const[saveState,setSaveState]=useState(true)
    const {localStorageDb, setLocalStorageDb, currentTableResult, setCurrentTableResult} = useContext(AppContext)
  return (
    <>
        <button
            className={` bg-[#1266 rounded-md  text-white px-4 py-2 mx-3 ${saveState===false ? " bg-[#bfbfbf]" :"bg-[#0d6c0d]"}`}
            onClick={() =>{  
                setSaveBtnState(!saveBtnState)
                setSaveState(!saveState)
                saveBtn(tableNo)
                //database, studentMatric, currentResult, tableNo, saveState
                saveToLocalStorage(localStorageDb,matric,currentTableResult, tableNo, saveState )
              }
              } 
            >
            {saveState===false ? "UnSave" : "Save"}
            </button>
                                

    </>
  )
}

export default SaveBtn
