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
<section className=" mx-auto h-fit   px-4 sm:px-8 py-4 overflow-x-auto">
    
         
            <div className="inline-block w-fit   rounded-lg">
            
            <table className='mb-4 mt-1 mx-auto w-[60vw] text-[1em]  '>
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
        ({totalCGPA.toPrecision(3)})  {CGPA.toPrecision(3)}
        </td>
        <td
          className="
            text-center text-dark
            font-bold
            text-[1.3em]
            p-1
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
            text-[1em]
            p-1
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




    </div>
  )
}

export default SummaryTable
