import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../ContextProvider/ContextProvider'
import LocalTableRow from './LocalTableRow'

const LocalSumarry = ({idMatric}) => {
   
const localTables=localStorage.getItem("localStorageDb")
//online status
const [isOnline, setIsOnline] = useState(navigator.onLine);

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

const ParsedLocalTables=JSON.parse(localTables)
useEffect(()=>{
  console.log(ParsedLocalTables[1]);
  console.log(ParsedLocalTables.findIndex((num)=>num.matric=='ko'))
  
},[localTables])


const calculateLetterGrade = (score) => {
  if (score >= 4.50) {
    return 'A';
  } else if (score >= 3.5) {
    return 'B';
  } else if (score >= 2.4) {
    return 'C';
  } else if (score >= 1.5) {
    return 'D';
  } else if (score >= 1) {
    return 'E';
  } else {
    return 'F';
  }
 
};
const calculateDegree = (score) => {
  if (score >= 4.50) {
    return 'FIRST CLASS (Excellent)';
  } else if (score >= 3.5) {
    return 'SECOND CLASS  (Upper Division)   (Tres-Bien)';
  } else if (score >= 2.4) {
    return 'SECOND CLASS (Lower Division) (Bien)';
  } else if (score >= 1.5) {
    return 'THIRD CLASS  (Assez-bien)';
  } else if (score >= 1) {
    return 'PASS (Passable)';
  } else {
    return 'PASS (Passable)';
  }
 
};

const summation=()=>{
  let num=0
   ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>
  num+=(result.CGP)

  )
  
  return num.toPrecision(4)
}


  return (
    <div className=' flex flex-col justify-center    ' >
    <h1 className='text-center text-[2em] mt-[4.7em] font-serif'>SUMMARY OF DEGREE REULT <span className='block'>(REUME DES RESULTATS)</span></h1>

       {/* Table containig the cgpa  */}
       <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

{/* <!-- ====== Table Section Start --> */}
<section className=" mx-auto h-fit max-h-[100vh]  px-4 sm:px-8  overflow-x-auto">
  
       
          <div className="inline-block w-fit   rounded-lg">
          
          <table className='mb-[3em] mt-1 mx-auto w-[60vw] text-[1em]  '>
              <thead className=''>
              <tr className=' bg-[#0e0e42]    text-white '>
              <th className='  border-[.2em]     border-[#4f4f4fe5]  p-4  relative    '>
                        Year  <span className=' block'> (Annee)</span> 
                      </th>
                      <th className='  border-[.2em]     border-[#4f4f4fe5]  p-4  relative    '>
                        Grade Point Average  <span className=' block'> (Moyenne Ponderee )</span> 
                      </th>
                      <th className='  border-[.2em]     border-[#4f4f4fe5]  p-4  relative    '>
                        Cumulative Grade Point Average  <span className=' block'> (Moyenne Ponderee Cumlee)</span>
                      </th>
                      <th className='  border-[.2em]     border-[#4f4f4fe5]  p-4  relative    '>
                        Final Grade  <span className=' block'> (Note Finale)</span>
                      </th>
                      <th className='  border-[.2em]     border-[#4f4f4fe5]  p-4  relative    '>
                        Class of Degree <span className=' block'> (Type de Diplome)</span>
                      </th>
                     
                   </tr>
                </thead>
                <tbody>
                
                 <tr>
      <td 
        className="
          text-center text-dark
          font-medium
          text-[1em]
          
          px-2 py-1
          bg-[#F3F6FF]
           border-[.1em] border-black 
        "
        rowspan='15' 
      >

{ ParsedLocalTables.length > 0 ?

<>

   {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result,n)=>(
    <td 
    className="
      text-center text-dark
      font-medium
      text-[1em]
       flex flex-col
      px-2 py-1
      bg-[#F3F6FF]
       border-[.1em] border-black 
    "
    rowspan='15' 
  > {n +1}  </td>
   ))}
 </>
 :null }

      </td>
      <td 
        className="
          text-center text-dark
          font-medium
          text-[1em]
          
          px-2 py-1
          bg-[#ffffff]
           border-[.1em] border-black 
        "
        rowspan='15' 
      >
 { ParsedLocalTables.length > 0 ?

<>

   {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>(
    <td 
    className="
      text-center text-dark
      font-medium
      text-[1em]
       flex flex-col
      px-2 py-1
      bg-[#ffffff]
       border-[.1em] border-black 
    "
    rowspan='15' 
  > {result.CGP.toPrecision(3)}   </td>
   ))}
 </>
 :null }
      </td>
      
      <td
        className="
          text-center text-dark
          font-medium
          text-[1em]
          
          px-2 py-1
          bg-[#F3F6FF]
           border-[.1em] border-black 
        "
        rowspan='15' 
      >
        { ParsedLocalTables.length > 0 ?

<>

   {/* {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results} */}
    <td 
    className="
      text-center text-dark
      font-medium
      text-[1em]
       flex flex-col
      px-2 py-1
      
     
       
    "
    rowspan='15' 
  > ({summation()})  {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results[ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.length-1].CGPA.toPrecision(3)}  </td>

 </>
 :null }
      {/* ({totalCGPA.toPrecision(3)})  {CGPA.toPrecision(3)} */}
      </td>
      <td
        className="
          text-center text-dark
          font-bold
          text-[1.3em]
          
          px-2 py-1
          bg-white
           border-[.1em] border-black 
        "
        rowspan='15' 
      >
        
      {calculateLetterGrade(ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results[ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.length-1].CGPA.toPrecision(3))}
       
   






       {/* {calculateLetterGrade(CGPA.toPrecision(3))} */}
       {/* {result.scores.map((score, index) => (
        <>
        {result.scores[index][`score${index + 1}`] ?

         <input
          key={index} // Add key prop with unique value
          type="number"
          value={result.scores[index]?result.scores[index][`score${index + 1}`]:0} 
          className={`w-full px-1 text-center font-semibold py-1 text-gray-700 ${showOption?' bg-gray-100 ':null} rounded`}
          min={4}
          max={100}
          step={1}
          required
        />
        :null
        }
        </>
       
      ))} */}
      </td>
      <td
        className="
          text-center text-dark
          font-medium
          text-[1em]
          
          px-2 py-1
          bg-[#F3F6FF]
           border-[.1em] border-black 
         
        "
        rowspan='15' 
      >{calculateDegree(ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results[ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.length-1].CGPA.toPrecision(3))}
       
      </td>
    </tr>

                 {/* {summaryRow.map((row)=>(
                  row.Row 
                ))} */}
                </tbody>
             </table>




           
          </div>
 
  
</section>
{/* <!-- ====== Table Section End --> */}




  </div>
  )
}

export default LocalSumarry
