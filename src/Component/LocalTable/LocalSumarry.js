import React, { useContext } from 'react'
import { AppContext } from '../ContextProvider/ContextProvider'

const LocalSumarry = () => {
    const {showOption,setLocalStorageDb}=useContext(AppContext)
  return (
    <div className=' flex flex-col justify-center min-h-[170vh]    ' >
    <h1 className='text-center my-9 text-[2em] font-serif'>SUMMARY OF DEGREE REULT <span className='block'>(REUME DES RESULTATS)</span></h1>

       {/* Table containig the cgpa  */}
       <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

{/* <!-- ====== Table Section Start --> */}
<section className=" mx-auto h-fit max-h-[100vh]  px-4 sm:px-8 py-4 overflow-x-auto">
  
       
          <div className="inline-block w-fit   shadow rounded-lg">
          
          <table className='my-[3em] mx-auto w-[60vw] text-[1em]  '>
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
      <td></td>
      <td></td>
      <td
        className="
          text-center text-dark
          font-medium
          text-[1em]
          
          px-2
          bg-[#F3F6FF]
          border-b border-[#E8E8E8]
        "
        rowspan='15' 
      >
      {/* ({totalCGPA.toPrecision(3)})  {CGPA.toPrecision(3)} */}
      </td>
      <td
        className="
          text-center text-dark
          font-bold
          text-[1.3em]
          py-5
          px-2
          bg-white
          border-b border-[#E8E8E8]
        "
        rowspan='15' 
      >
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
          py-5
          px-2
          bg-[#F3F6FF]
          border-b border-[#E8E8E8]
         
        "
        rowspan='15' 
      >
        {/* {CGPA.toPrecision(3) >4.5? 
      <>
      <p>FIRST CLASS </p>
      <p >(Excellent)</p>
      </>   
      :
     CGPA.toPrecision(3) >3.5 ?
      <>
      <p>SECOND CLASS</p>
      <p>(Upper Division)</p>
      <p>(Tres-bien)</p>
      </> :
     CGPA.toPrecision(3) >2.4 ?
      <>
      <p>SECOND CLASS</p>
      <p>(Lower Division)</p>
      <p>(Bien)</p>
      </> :
      CGPA.toPrecision(3) >1.5 ?
      <>
      <p>THIRD CLASS</p>
      <p>(Assez-bien)</p>
     
      </> :
     CGPA.toPrecision(3) >1 ?
      <>
      <p>PASS</p>
      <p>(Passable)</p>
     
      </> :
      <>
      
      <p>FAIL</p>
      <p>(Ajourne)</p>
      </>
      
      
      }
        */}
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
