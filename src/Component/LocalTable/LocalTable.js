import React, { useContext, useEffect, useState } from 'react'
import LocalTableHead from './LocalTableHead'
import LocalTableBody from './LocalTableBody'
import TableSelect from '../Table/TableSelect'
import { AppContext } from '../ContextProvider/ContextProvider'
import { useParams } from 'react-router-dom'

const LocalTable = ({result,deleteTable,saveBtn,saveToLocalStorage,saveBtnState,setSaveBtnState}) => {
    const[saveState,setSaveState]=useState(true)
    const {showOption,setLocalStorageDb}=useContext(AppContext)


    const localTables=localStorage.getItem("localStorageDb")

const ParsedLocalTables=JSON.parse(localTables)
useEffect(()=>{
  console.log(ParsedLocalTables[1]);
  console.log(ParsedLocalTables.findIndex((num)=>num.matric=='ko'))
  
},[localTables])

    const {...matricId}=useParams()




   

    
  return (
    <div>
      <div  className="mx-4 my-9  max-h-[200vh] min-h-[100vh]  sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              
         
              <div className="inline-block min-w-full rounded-lg ">
               {/* TABLE SELECTION TO CHOOSE YOUR LEVEL AND SEMESTER  PERTAINING TO YOUR DEPARTMENT OF YOUR CHOICE   */}
              {/* <TableSelect level={level} setLevel={setLevel} semester={semester} department={department} setDepartment={setDepartment} setSemester={setSemester} /> */}
              {/* <TableSelect  /> */}

   <table className="min-w-full my-4 leading-normal ">

     <LocalTableHead/>
  
     <LocalTableBody   result={result} />

     {/* {showOption ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold  py-2 px-4 rounded" onClick={()=>deleteTable(result.id)}>
              Delete table
            </button> : null}
      <button
            className={` my-[2.6em] bg-[#1266 rounded-md  text-white px-4 py-2 mx-3 ${saveState===false ? " bg-[#bfbfbf]" :"bg-[#0d6c0d]"}`}
            onClick={() =>{  
                // setSaveBtnState(!saveBtnState)
                saveBtn(result.id)
                saveToLocalStorage()
                setSaveBtnState(!saveBtnState)
                setSaveState(!saveState)
                setSaveState(!result.saveState)
                
                // saveBtn(tableNo)
                //database, studentMatric, currentResult, tableNo, saveState
                // saveToLocalStorage(localStorageDb,matric,currentTableResult, tableNo, saveState )
              }
              } 
            >
            {saveState===false ? "UnSave" : "Save"}
            </button> */}

   </table>

   </div>
   </div>
    </div>
  )
}

export default LocalTable
