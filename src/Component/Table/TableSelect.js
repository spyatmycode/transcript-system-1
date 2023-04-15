import React, { useContext } from 'react'
import { AppContext} from '../ContextProvider/ContextProvider'
const TableSelect = ({
  level,
  setLevel,
  semester,
  setSemester,
  

}) => {

  const {
    setSummaryLevel,
    setSummarySemester,
    summaryLevel,
    summarySemester,
    showOption,
    
  } = useContext(AppContext)


  return (
    <div  className=' flex gap-8  items-center'>
      <label htmlFor="level" className="py-9">Select Level:  {showOption ? null:level}</label>
      {showOption ?  <select
        id="level"
        className={`m-5  p-[7.9px] ${showOption?'  border-red-900  border-[1.9px]':null}`}
        value={level}
        onChange={(e) =>{ 
          setLevel(Number(e.target.value))
        }}
      >
       
        {setLevel(level)}
        {/* <option value={0}>none</option> */}
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={400}>400</option>
     
      </select>:null }
     


      <label htmlFor="semester" className="py-9">Select Semester: {showOption? null:semester}</label>
      {showOption ?  <select
        id="semester"
        className={`m-5  p-[7.9px] ${showOption?'border-[1.9px]  border-red-900 ':null}`}
        value={semester}
        onChange={(e) =>{
          setSummarySemester(semester)
          setSemester(e.target.value)}}
      >
        {/* <option value={0}>none</option> */}
        <option value={"1st Semester"}>1st Semester</option>
        <option value={"2nd Semester"}>2nd Semester</option>
      </select> : null }
     
    </div>
  );
}

export default TableSelect;
