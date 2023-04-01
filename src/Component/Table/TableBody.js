import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../ContextProvider/ContextProvider';
import tableData from '../Data/Data';

const TableBody = ({
    cgpa,
    scores,
    calculateGP,
    calculateLetterGrade,
    handleChange,
    level,semester,
}) => {
  const{department}=useContext(AppContext)

  const {GPA,setGPA,CGP,SETCGP}=useContext(AppContext)
  const [gradePoint,setGradePoint]=useState([])
  console.log(gradePoint);

  
  
  {/* ====================== FUNCTION TO CALCULATE CUMILATIVE GRADE POINT (CGP)===============================  */}
const calculateCGP = (scores, courses) => {
  console.log(courses);
  let totalGradePoints = 0;
  let totalUnits = 0;
 
  
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    const score = scores[`score${i + 1}`];
    console.log(course,"teuyyr");
    
    if (score) {
      const gradePoint = Number(calculateGP(score));
      const units = Number(course.UNIT);
      totalGradePoints += gradePoint * units;
      totalUnits += units;
    }
  }
  
  const cgp = totalUnits >0 ? totalGradePoints / totalUnits: 0;
   SETCGP(cgp)
  return  cgp;
  
   
}

  {/* ====================== FUNCTION TO HANDLE CHANGEs IN  CUMILATIVE GRADE POINT AVERAGE (CGPA)===============================  */}
const handleChangeCGPA=()=>{

}






  {/* ====================== FUNCTION TO CALCULATE CUMILATIVE GRADE POINT AVERAGE (CGPA)===============================  */}


// const calculatedCGPA=(cgp)=>{
//   const score=0
//   for(let i=0;i<cgp.length;i++){
//     const cgp=cgp[i]
//     const CGPASCORE=cgp[`table${i + 1}`]
//   }

// }

console.log(scores);

  return (
    <tbody>

    {tableData.map((row,index) => (
     <>
     
       {row[department==="" || department=== undefined ? 0 : department].LEVELS[0][level===undefined || level==="" ? 100: level][0].SEMESTER[0][semester===undefined || semester===""? 1:
        semester==='1 st Semester'?1:
        semester==='2 nd Semester'?2:
        1][0].COURSES.map((course,i)=>(
          
      
        
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

          {/* NOTE: 
             ===========================================================================================================================
               THIS INPUT IS TO COLLECT THE SCORES OF EACH TABLE ROW YOU HAVE ,AND THESE DATA ARE PASSED IN  TO THE IMPLEMENT THOSE 
               CALCULATIONS
             ===========================================================================================================================
          */}
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
         {/* ====================== LETTER GRADE===============================  */}
      <p className='p-4 w-[100%] text-red-600 '>  
         {scores[`score${i + 1}`] ?
         calculateLetterGrade(scores[`score${i + 1}`]) :" "   }
         </p>
           {/* ====================== LETTER GRADE===============================  */}

      </div>
  </div>
</td>
<td className="     border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className=" w-fit text-center">

          {/* ====================== GRADE POINT (GP)===============================  */}
      <p className='p-4 w-[100%] '>  {scores[`score${i + 1}`] ?
         calculateGP(scores[`score${i + 1}`]) :" "   }
      </p>
         {/* ======================END OF GRADE POINT (GP)===============================  */}
      </div>
  </div>
</td>
<td className="  border-b border bg-white px-4 py-3  text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">
   
      <div className="w-full text-center">


        {/* ======================TOTAL GRADE POINT===============================  */}
      <p className='p-4 w-[100%] '>  {scores[`score${i + 1}`] ?
       <> 
      {course.UNIT * calculateGP(scores[`score${i + 1}`]) }
      </>:" "   }  
      </p>
   {/* ====================== END OF TOTAL GRADE POINT===============================  */}

      </div>
  </div>
</td>

</tr>

</>

       
      
       ))}
       <tr>

       

<div className='flex justify-between '>


      {/* ======================CUMILATIVE GRADE POINT (CGP)===============================  */}
    <div className='flex'>
      
      <p className=''>CGP: { Number(calculateCGP(scores, row[department==="" || department=== undefined ? 0 : department].LEVELS[0][level===undefined || level==="" ? 100: level][0].SEMESTER[0][semester===undefined || semester===""? 1:
        semester==='1 st Semester'?1:
        semester==='2 nd Semester'?2:
        1][0].COURSES)).toPrecision(3) } </p> 



       
     </div>
      {/* ======================END OF CUMILATIVE GRADE POINT (CGP)===============================  */}
   
  
      {/* ======================CUMILATIVE GRADE POINT (CGP)===============================  */}
    <div className='absolute right-0'>(CGPA): 
      <input type="number" className=' cursor-no-drop w-fit' value={cgpa[`.table${index+1}`]} onChange={(handleChangeCGPA)} disabled />
      
     </div>
      {/* ======================END OF CUMILATIVE GRADE POINT (CGP)===============================  */}
   
</div>
</tr>
      </>
  
    ))}



  </tbody>
  )
}

export default TableBody
