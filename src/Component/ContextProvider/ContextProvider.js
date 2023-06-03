import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext()

const ContextProvider = (props) => {


  
  const [CGPA, SETCGPA] = useState(0)
  const [CGP, SETCGP] = useState(0)
  const [tableNo, setTableNo] = useState(1)
  const [department, setDepartment] = useState(0);
  const[totalCGPA,setTotalCGPA]=useState(0)
  const [showLocalTables,setShowLocalTables]=useState(false)
  const [name, setName] = useState('')
  const localstorageInit = () => {
    const existingDb = localStorage.getItem("localStorageDb");
    if (existingDb) {
      // console.log("it exists");
      return JSON.parse(existingDb);
    } else {
      // console.log("it did not exist");
      const newDb = [];
      localStorage.setItem("localStorageDb", JSON.stringify(newDb));
      return newDb;
    }
  };

  console.log("this is it",CGPA, CGP);
  
  const [localStorageDb, setLocalStorageDb] = useState(localstorageInit());

  const [currentTableResult, setCurrentTableResult] = useState({})

  useEffect(()=>{
    localStorage.setItem("localStorageDb", JSON.stringify(localStorageDb))
  }, [localStorageDb])
  
 
  let gradePointArray = [];
const [summaryRow,setSummaryRow]=useState([])
const [summaryLevel,setSummaryLevel]=useState(100)
const [summarySemester,setSummarySemester]=useState('')
const[showOption,setShowOption]=useState(true)
  return (
    <div>
      <AppContext.Provider value={{showLocalTables,setShowLocalTables,name,setName,summaryLevel,showOption,setShowOption, summarySemester,setSummaryLevel,setSummarySemester,setTotalCGPA,totalCGPA,CGP,SETCGP,CGPA,setSummaryRow,summaryRow, gradePointArray, tableNo, setTableNo, SETCGPA, CGPA, department, setDepartment, localStorageDb, setLocalStorageDb, currentTableResult, setCurrentTableResult }}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export { ContextProvider, AppContext }
