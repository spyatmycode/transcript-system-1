import React, { useCallback, useEffect, useMemo } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../ContextProvider/ContextProvider';
import tableData from '../Data/Data';


const TableBody = ({
    
    scores,
    calculateGP,
    calculateLetterGrade,
    handleChange,
    level,semester,key
}) => {
  const{department}=useContext(AppContext)
  const {showOption,setShowOption}=useContext(AppContext)
  
  const {GPA,setGPA, setSummaryLevel,summaryLevel,
    setSummarySemester,gradePointArray,SETCGPA,SETCGP,setTotalCGPA,currentTableResult, setCurrentTableResult,CGPA, CGP}=useContext(AppContext)
  const [gradePoint,setGradePoint]=useState([])

// console.log("table numbers",key);


  const currentResultObjectInit = useCallback(()=>{
    return {
      scores: Object.entries(scores).map(([keys, scores],index)=>(scores && {[keys]:scores})).filter((each)=>(each != 0)),
      department,
      level,
      semester,
      CGP: CGP,
      CGPA: CGPA

      


    }
  },[scores,level,semester,CGP,CGPA])

  console.log(CGPA,CGP);

  console.log(currentResultObjectInit());





 

  useEffect(()=>{
    setCurrentTableResult(currentResultObjectInit())

    
  }, [currentResultObjectInit])

  

  
  
  




  
  

  
  {/* ====================== FUNCTION TO CALCULATE CUMILATIVE GRADE POINT (CGP)===============================  */}

    function calculateCGPA(scores, courses) {
      let totalGradePoints = 0;
      let totalUnits = 0;

     
      console.log(scores);
    
           console.log(courses);
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
 
        const score = scores[`score${i + 1}`];
    
        if (score) {
          const gradePoint = Number(calculateGP(score));
          const units = Number(course.UNIT);
          totalGradePoints += gradePoint * units;
          totalUnits += units;
        
        }
      }
    
      const cgpa = totalUnits > 0 ? totalGradePoints / totalUnits : 0;
      const cumulativeAverage =
        gradePointArray.reduce((a, b) => a + b,0) / gradePointArray.length;
        gradePointArray.push(cgpa);
    // console.log(gradePointArray)


    let total = 0;
      for (let i = 0; i < gradePointArray.length; i++) {
        total += gradePointArray[i];
        setTotalCGPA(total/4)
      }
      const average= totalUnits > 0 ? total / (gradePointArray.length):0
       
    // console.log(cumulativeAverage);
   
     SETCGPA(average)
     SETCGP(cgpa)
     setSummaryLevel(level)
     setSummarySemester(semester)
      return { cgpa, cumulativeAverage ,average};
    }
   
   

 /*    const bd = (gradePointArray) => {
      let total = 0;
      for (let i = 0; i < gradePointArray.length; i++) {
        total += gradePointArray[i];
      }
      const average=  total/ gradePointArray.length
      return average;
    };
   */
    // console.log(111111111111111)
    // console.log(gradePointArray)
    let item =localStorage.getItem("localStorageDb")
    let result=JSON.parse(item)
  return (
    <tbody>
                 

    {tableData.map((row,tableNo) => (
     <>
       {row[department==="" || department=== undefined ? 0 : department].LEVELS[0][level===undefined || level==="" ? 100: level][0].SEMESTER[0][semester===undefined || semester===""? 1:
        semester==='1 st Semester'?1:
        semester==='2nd Semester'?2:
        1][0].COURSES.map((course,i)=>(
      
        
<>
<tr key={i}>
    
<td className=" w-[.3em]    border-[1px] border-[black] bg-white    text-left text-xs font-semibold  uppercase ">
  <div className=" flex items-center">

  <div className=" w-full text-center">
      {/* SERIAL NUMBER */}
     
      <p className='    '>  {i +1}
      </p>
  
      </div>
  </div>
</td>
<td className="    border-[1px] border-[black] bg-white     text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full text-center">
        {/* COURSE CODE */}
      {course.CODE}
      
      </div>
  </div>
</td>
<td className="    border-[1px] border-[black] bg-white      text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full px-2 text-center">
        {/* COURSE TITLE */}
      {course.COURSETITLE}
      </div>
  </div>
</td>
<td className="   w border-[1px] border-[black] bg-white     text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className="w-full text-center">
       <p className='   w-[100%] '> 
       {/* COURSE UNIT */}
        {course.UNIT}</p>
    
      </div>
  </div>
</td>
<td className="   border-[1px] border-[black] bg-white     text-left text-xs font-semibold  uppercase tracking-wider">
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
              className={`w-full px-1 text-center text-base font-semibold py-1 text-gray-700 ${showOption && "bg-gray-100"} rounded`}
              min={4}
              max={100}
              step={1}
              required
            />
     </div>
  </div>
</td>
<td className="   border-[1px] border-[black] bg-white     text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full  flex items-center">

      <div className="w-full  text-center">

         {/* ====================== LETTER GRADE===============================  */}
      <p className={`   w-[100%] ${showOption && 'text-red-600'}  `}>  
         {scores[`score${i + 1}`] ?
         calculateLetterGrade(scores[`score${i + 1}`]) :" "   }
         </p>
           {/* ====================== LETTER GRADE===============================  */}

      </div>
  </div>
</td>
<td className="     border-[1px] border-[black] bg-white     text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">

      <div className=" w-full text-center">

          {/* ====================== GRADE POINT (GP)===============================  */}
      <p className='   w-[100%] '>  {scores[`score${i + 1}`] ?
         calculateGP(scores[`score${i + 1}`]) :" "   }
      </p>
         {/* ======================END OF GRADE POINT (GP)===============================  */}
      </div>
  </div>
</td>
<td className="  border-[1px] border-[black] bg-white     text-left text-xs font-semibold  uppercase tracking-wider">
  <div className="w-full flex items-center">
   
      <div className="w-full text-center">


        {/* ======================TOTAL GRADE POINT===============================  */}
      <p className='   w-[100%] '>  {scores[`score${i + 1}`] ?
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

      {/* ======================CUMILATIVE GRADE POINT (CGP)===============================  */}
    <div className=' absolute b-0 '> Grade Point:   { Number(calculateCGPA(scores, row[department].LEVELS[0][level===undefined || level==="" ? 100: level][0].SEMESTER[0][semester===undefined || semester===""? 1:
        semester==='1 st Semester'?1:
        semester==='1 st Semester'?2:
        1][0].COURSES).cgpa).toPrecision(3) } 
     <div>
     Cumulative Grade Point Average: { Number(calculateCGPA(scores, row[department
     ].LEVELS[0][level===undefined || level==="" ? 100: level][0].SEMESTER[0][semester===undefined || semester===""? 1:
        semester==='1 st Semester'?1:
        semester==='1 st Semester'?2:
        1][0].COURSES).average).toPrecision(3) } 
{   console.log( row[department].LEVELS[0][level===undefined || level==="" ? 100: level][0].SEMESTER[0][semester===undefined || semester===""? 1:
        semester==='1 st Semester'?1:
        semester==='1 st Semester'?2:
        1][0].COURSES)}</div>
   
     </div>
      {/* ======================END OF CUMILATIVE GRADE POINT (CGP)===============================  */}
   
  {/* <div>
cumulativeGradePointAverage:{bd(gradePointArray)}
  </div> */}
     
      </>
  
    ))}



  </tbody>
  )
}

export default TableBody
