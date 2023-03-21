import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../ContextProvider/ContextProvider';
import Table from '../Table1';
import TableHead from './TableHead';
import TableSelect from './TableSelect';
const TableBody = ({
    department,
    setDepartment,
    level,
    setlevel,
    semester,
    tableData,
    scores,
    calculateGP,
    calculateLetterGrade,
    handleChange,
}) => {
  const [gp, setGp] = useState({scores});
  const {GPA,setGPA}=useContext(AppContext)
  const [gradePoint,setGradePoint]=useState([])
  console.log(gradePoint);
  
  
const calculateCGPA = (scores, courses) => {
  let totalGradePoints = 0;
  let totalUnits = 0;
  
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    const score = scores[`score${i + 1}`];
    
    if (score) {
      const gradePoint = calculateGP(score);
      const units = course.UNIT;
      totalGradePoints += gradePoint * units;
      totalUnits += units;
    }
  }
  
  const cgpa = totalGradePoints / totalUnits;
  return cgpa;
}

// Filter the data based on the selected department, level, and semester
const filteredData = tableData.filter((row) => {
  return (
    row.DEPARTMENT === department &&
    row.LEVEL === level &&
    row.SEMESTER === semester
  );
});


// console.log("xxxxxxxxxxx");

// console.log(level);
// console.log(semester);
// console.log(department);
// console.log("xxxxxxxxxxx");


// if(level==100 && semester== '2 nd Semester' && department=='Health Information Management'){
//   const newTable=row.LEVELS[0][100][0]
//   return newTable
// }


  return (
    <tbody>
    {console.log(department)}
   

    {tableData.map((row, indexd) => (
     <>
    
       {/* {row.LEVELS[0][100][0].COURSES.map((course,i)=>( */}
       {row.LEVELS[0][100][0].COURSES.map((course,i)=>(
        
<>
<tr key={i}>
    
     
<td className="   border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full text-center">
      {/* SERIAL NUMBER */}
      {i +1}

      </div>
  </div>
</td>
<td className="    border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full text-center">
        {/* COURSE CODE */}
      {course.CODE}

      </div>
  </div>
</td>
<td className="    border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full text-center">
        {/* COURSE TITLE */}
      {course.COURSETITLE}
      </div>
  </div>
</td>
<td className="   w border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full text-center">
       <p className='p-4 w-[100%] '> 
       {/* COURSE UNIT */}
        {course.UNIT}</p>
    
      </div>
  </div>
</td>
<td className="   border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full  flex items-center">

      <div className="w-full  text-center">
          <input
              type="number"
              name={`score${i + 1}`}
              value={scores[`.score${i + 1}`]}
              onChange={handleChange}
              className="w-full px-2 py-1 text-gray-700 bg-gray-100 rounded"
              min={4}
              max={100}
              step={1}
              required
            />
     </div>
  </div>
</td>
<td className="      border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-fit flex items-center">

      <div className="w-full text-center">
      <p className='p-4 w-[100%] text-red-600 '>  
      {/* {calculateLetterGrade(scores.score1)} */}
      {console.log(scores[`score${i + 1}`],111)}
         {scores[`score${i + 1}`] ?
         calculateLetterGrade(scores[`score${i + 1}`]) :" "   }</p>
      </div>
  </div>
</td>
<td className="     border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className=" w-fit text-center">
      <p className='p-4 w-[100%] '>  {scores[`score${i + 1}`] ?
         calculateGP(scores[`score${i + 1}`]) :" "   }</p>
      </div>
  </div>
</td>
<td className="  border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">
     {GPA}
      <div className="w-full text-center">
        {/* xxcxccxcx */}
      <p className='p-4 w-[100%] '>  {scores[`score${i + 1}`] ?
      <> 
      
      {course.UNIT * calculateGP(scores[`score${i + 1}`]) }
      {/* {setGradePoint( course.UNIT * calculateGP(scores[`score${i + 1}`])  )} */}
      {/* { console.log(gradePoint)} */}
      {/* {setGradePoint([...gradePoint,{scores}])} */}
      </>
      :" "   }  </p>


      </div>
  </div>
</td>



{/*<td>{row.semester}</td>
<td>{row.total_unit}</td> */}
</tr>

</>

       
      
       ))}

     
    <button>Cumilative GradePoint:  {calculateCGPA(scores, row.LEVELS[0][100][0].COURSES)}</button>
      {/* <button> Cumilative GradePoint: {gradePoint}</button> */}
  

      </>
    ))}



  </tbody>
  )
}

export default TableBody
