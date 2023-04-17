import React, { useContext, useEffect } from 'react'
import data from '../Data/Data'
import { AppContext } from '../ContextProvider/ContextProvider'

const LocalTableBody = ({result,handleChange}) => {
    const {showOption}=useContext(AppContext)
const localTables=localStorage.getItem("localStorageDb")
const ParsedLocalTables=JSON.parse(localTables)
useEffect(()=>{
  console.log(ParsedLocalTables);
},[localTables])

  return (
 <tbody>
    
    {data.map((row,i)=>(
        <>
         {row[result.department==="" || result.department=== undefined ? 0 : result.department].LEVELS[0][result.level===undefined || result.level==="" ? 100: result.level][0].SEMESTER[0][result.semester===undefined || result.semester===""? 1:
        result.semester==='1 st Semester'?1:
        result.semester==='2nd Semester'?2:
        1][0].COURSES.map((course,i)=>(
            <>
         
            <tr key={i}>
                
            <td className=" w-[.3em]    border-[1px] border-[black] bg-white    text-left text-xs font-semibold  uppercase ">
              <div className=" flex items-center">
            
              <div className=" w-fit text-center">
                  {/* SERIAL NUMBER */}
                 
                  <p className=' px-4 py-3    '>  {i +1}
                  </p>
              
                  </div>
              </div>
            </td>
            <td className="    border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
              <div className="w-full flex items-center">
            
                  <div className="w-full text-center">
                    {/* COURSE CODE */}
                  {course.CODE}
                  
                  </div>
              </div>
            </td>
            <td className="    border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
              <div className="w-full flex items-center">
            
                  <div className="w-full text-center">
                    {/* COURSE TITLE */}
                  {course.COURSETITLE}
                  </div>
              </div>
            </td>
            <td className="   w border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
              <div className="w-full flex items-center">
            
                  <div className="w-full text-center">
                   <p className=' px-4 py-3   w-[100%] '> 
                   {/* COURSE UNIT */}
                    {course.UNIT}</p>
                
                  </div>
              </div>
            </td>
            
  <td key={i} className="   border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
    <div className="w-full  flex items-center">
    <div className="w-full  text-center">
      {/* NOTE: THIS INPUT IS TO COLLECT THE SCORES OF EACH TABLE ROW YOU HAVE ,AND THESE DATA ARE PASSED IN  TO THE IMPLEMENT THOSE CALCULATIONS */}
      {/* Loop through the scores array and render an input for each score */}
      {result.scores.map((score, index) => (
        <>
        {result.scores[index][`score${i + 1}`] ?

         <input
          key={index} // Add key prop with unique value
          type="number"
          value={result.scores[index]?result.scores[index][`score${i + 1}`]:0} 
          className={`w-full px-1 text-base font-semibold py-1 text-gray-700 ${showOption?' bg-gray-100 ':null} rounded`}
          min={4}
          max={100}
          step={1}
          required
        />
        :null
        }
        </>
       
      ))}
    </div>
    </div>
  </td>

            <td className="   border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
              <div className="w-full  flex items-center">
            
                  <div className="w-full  text-center">
            
                     {/* ====================== LETTER GRADE===============================  */}
                  <p className={` px-4 py-3   w-[100%]  ${showOption? 'text-red-600':null}  `}>  
                  {
                   result.scores[i][`score${i + 1}`] > 70 ? 'A' :
                   result.scores[i][`score${i + 1}`] > 60 ?'B' :
                   result.scores[i][`score${i + 1}`] > 50 ?'C' :
                   result.scores[i][`score${i + 1}`] > 45 ?'D' :
                   result.scores[i][`score${i + 1}`] > 40 ?'E' :
                   'F'
                  }
                     </p>
                       {/* ====================== LETTER GRADE===============================  */}
            
                  </div>
              </div>
            </td>
            <td className="     border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
              <div className="w-full flex items-center">
            
                  <div className=" w-fit text-center">
            
                      {/* ====================== GRADE POINT (GP)===============================  */}
                  <p className=' px-4 py-3   w-[100%] '> 
                  {result.scores[i]?
                  <>
                   {
                   result.scores[i][`score${i + 1}`] > 70 ?5 :
                   result.scores[i][`score${i + 1}`] > 60 ?4 :
                   result.scores[i][`score${i + 1}`] > 50 ?3 :
                   result.scores[i][`score${i + 1}`] > 45 ?2 :
                   result.scores[i][`score${i + 1}`] > 40 ?0 :
                   0
                   
                   }
                  </>
                 
                 
                  
                  :0}
                  </p>
                     {/* ======================END OF GRADE POINT (GP)===============================  */}
                  </div>
              </div>
            </td>
            <td className="  border-[1px] border-[black] bg-white  px-4 py-3    text-left text-xs font-semibold  uppercase tracking-wider">
              <div className="w-full flex items-center">
               
                  <div className="w-full text-center">
            
            
                    {/* ======================TOTAL GRADE POINT===============================  */}
                  <p className=' px-4 py-3   w-[100%] '>
                  {
                   result.scores[i][`score${i + 1}`] > 70 ?5 * course.UNIT :
                   result.scores[i][`score${i + 1}`] > 60 ?4 * course.UNIT:
                   result.scores[i][`score${i + 1}`] > 50 ?3 * course.UNIT:
                   result.scores[i][`score${i + 1}`] > 45 ?2 * course.UNIT:
                   result.scores[i][`score${i + 1}`] > 40 ?0 * course.UNIT:
                   0
                   
                   }
                  </p>
               {/* ====================== END OF TOTAL GRADE POINT===============================  */}
            
                  </div>
              </div>
            </td>
        
            </tr>
          
            </>

            ))}

        </>


    ))}
      
       
   
      

       {/* localTables */}
       {/* {ParsedLocalTables.map((ltable)=>(
          <li>{ltable.results.map((result)=>(
            <li>{result.scores.map((score)=>(
              <li>{score.score1}</li>
            ))}</li>
          ))}</li>
        ))} */}





 </tbody>
  )
}

export default LocalTableBody
