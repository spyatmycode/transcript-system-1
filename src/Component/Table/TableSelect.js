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
    summarySemester

    
  } = useContext(AppContext)


  return (
    <div>
      <label htmlFor="level" className="m-2">Select Level:{level}</label>
      <select
        id="level"
        className="m-2 border-[1.9px] p-[.9px] border-red-900"
        value={level}
        onChange={(e) =>{ 
          setLevel(Number(e.target.value))
        }}
      >
        {console.log(level)}
        {setLevel(level)}
        {/* <option value={0}>none</option> */}
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={400}>400</option>
        <option value={500}>500</option>
      </select>


      <label htmlFor="semester" className="m-2">Select Semester:</label>
      <select
        id="semester"
        className="m-2 border-[1.9px] p-[.9px] border-red-900"
        value={semester}
        onChange={(e) =>{
          setSummarySemester(semester)
          setSemester(e.target.value)}}
      >
        {/* <option value={0}>none</option> */}
        <option value={"1st Semester"}>1st Semester</option>
        <option value={"2nd Semester"}>2nd Semester</option>
      </select>
    </div>
  );
}

export default TableSelect;
