import React, { useContext, useEffect, useState } from 'react'
import LocalTableHead from './LocalTableHead'
import LocalTableBody from './LocalTableBody'
import TableSelect from '../Table/TableSelect'
import { AppContext } from '../ContextProvider/ContextProvider'
import { useParams } from 'react-router-dom'
import LocalSumarry from './LocalSumarry'
import { db } from '../../firebase/firebaseConfig'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
const LocalTable = ({result,deleteTable,saveBtn,saveToLocalStorage,saveBtnState,setSaveBtnState}) => {
    const[saveState,setSaveState]=useState(true)
    const {showOption,setLocalStorageDb}=useContext(AppContext)

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [dbData, setDbData] = useState(null);

 const transcriptTableCollectionRef = doc(collection(db, 'Transcript-tables'), 'Tables');
  // console.log(transcriptHeaderCollectionRef);

    useEffect(() => {
      const handleOnlineStatusChange = () => {
        setIsOnline(navigator.onLine);
      };
  
      window.addEventListener('online', handleOnlineStatusChange);
      window.addEventListener('offline', handleOnlineStatusChange);
  
      return () => {
        window.removeEventListener('online', handleOnlineStatusChange);
        window.removeEventListener('offline', handleOnlineStatusChange);
      };
    }, []);
  

    const localTables=localStorage.getItem("localStorageDb")

const ParsedLocalTables=JSON.parse(localTables)
useEffect(()=>{
  console.log(ParsedLocalTables[1]);
  console.log(ParsedLocalTables.findIndex((num)=>num.matric=='ko'))
  
},[localTables])

    const {...matricId}=useParams()



    useEffect(() => {
      const fetchData = async () => {
        try {
        
        
          const documentSnapshot = await getDoc(transcriptTableCollectionRef);
  
          if (documentSnapshot.exists()) {
            setDbData(documentSnapshot.data());
            console.log(documentSnapshot.data().updatedDb);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    


   

    
  return (
    <div className=' '>
      <div  className="mx-4     sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
              
         
              <div className="inline-block min-w-full rounded-lg ">
               {/* TABLE SELECTION TO CHOOSE YOUR LEVEL AND SEMESTER  PERTAINING TO YOUR DEPARTMENT OF YOUR CHOICE   */}
              {/* <TableSelect level={level} setLevel={setLevel} semester={semester} department={department} setDepartment={setDepartment} setSemester={setSemester} /> */}
              {/* <TableSelect  /> */}

   <table className="min-w-full  leading-normal ">

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
