import React, { useContext, useEffect, useState } from 'react'
import SummaryRow from './SummaryRow'
import tableData from '../Data/Data';
import { AppContext } from '../ContextProvider/ContextProvider'
import SummaryGrades from './SummaryGrades';
const SummaryTable = ({ level,semester,}) => {
    const {
        department,
        gradePointArray,
        setDepartment,
        tableNo,
        setTableNo,
        setSummaryRow,
        summaryRow,
        CGPA,
        CGP,totalCGPA
      } = useContext(AppContext)


      const [averageGradePoint, setAverageGradePoint] = useState(null);

      useEffect(() => {
        const calculateAverage = () => {
          let total = 0;
          for (let i = 0; i < gradePointArray.length; i++) {
            total += gradePointArray[i];
          }
          const average = total / gradePointArray.length;
          setAverageGradePoint(average);
        };
    
        calculateAverage();
      }, [tableNo]);

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
    //   const calculateDegree = (score) => {
    //     if (score >= 4.50) {
    //       return 'FIRST CLASS (Excellent)';
    //     } else if (score >= 3.5) {
    //       return 'SECOND CLASS  (UpperDivision) (Tres-bien)';
    //     } else if (score >= 2.4) {
    //       return 'SECOND CLASS (Lower-Division) (Bien)';
    //     } else if (score >= 1.5) {
    //       return 'THIRD CLASS (Assez-bien)';
    //     } else if (score >= 1) {
    //       return 'PASS (Passable)';
    //     } else {
    //       return 'FAIL (Ajourne)';
    //     }
       
    //   };

    
  return (
    <div className=' flex flex-col justify-center    ' >
      <h1 className='text-center my-9 text-[2em] font-serif'>SUMMARY OF DEGREE REULT <span className='block'>(REUME DES RESULTATS)</span></h1>
  
         {/* Table containig the cgpa  */}
         <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

{/* <!-- ====== Table Section Start --> */}
<section className=" w-[100%] h-fit max-h-[100vh] min-h-[100vh]  mx-4  sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    
         
            <div className="inline-block w-fit   min-w-full shadow rounded-lg">
            
               <table width={10}   className="min-w-full w-fit h-fit    leading-normal ">
                  <thead>
                     <tr className="bg-[#0b0b32] text-center">
                     <th
                           className="
                           w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] 
                           "
                           >
                          Year  <span className=' block'> (Annee)</span> 
                        </th>
                        <th
                           className="
                           w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] 
                           "
                           >
                          Grade Point Average  <span className=' block'> (Moyenne Ponderee )</span> 
                        </th>
                        <th
                           className="
                           w-1/6
                             min-w-[100px]
                           text-[.8em]
                       
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                            px-5
                           border-[4px] border-[#909090] 
                           "
                           >
                          Cumulative Grade Point Average  <span className=' block'> (Moyenne Ponderee Cumlee)</span>
                        </th>
                        <th
                           className="
                           w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] 
                           "
                           >
                          Final Grade  <span className=' block'> (Note Finale)</span>
                        </th>
                        <th
                           className="
                           w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] 
                           "
                           >
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
            text-base
            
            px-2
            bg-[#F3F6FF]
            border-b border-[#E8E8E8]
          "
          rowspan='15' 
        >
        ({totalCGPA.toPrecision(3)})  {CGPA.toPrecision(3)}
        </td>
        <td
          className="
            text-center text-dark
            font-medium
            text-base
            py-5
            px-2
            bg-white
            border-b border-[#E8E8E8]
          "
          rowspan='15' 
        >
         {calculateLetterGrade(CGPA.toPrecision(3))}
        </td>
        <td
          className="
            text-center text-dark
            font-medium
            text-base
            py-5
            px-2
            bg-[#F3F6FF]
            border-b border-[#E8E8E8]
           
          "
          rowspan='15' 
        >
          {CGPA.toPrecision(3) >4.5?
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
         
        </td>
      </tr>
 
                   {summaryRow.map((row)=>(
                    row.Row 
                  ))}
                  </tbody>
               </table>




             
            </div>
   
    
</section>
{/* <!-- ====== Table Section End --> */}


<SummaryGrades/>

    </div>
  )
}

export default SummaryTable
