import React, { useContext } from 'react'
import { AppContext } from '../ContextProvider/ContextProvider'
const SummaryGrades = () => {
   const {
      CGPA,
      totalCGPA
    } = useContext(AppContext)
  return (
    <>
        <table className='my-[9em] max-h-[100vh] min-h-[100vh] '>
                <thead>
               <tr className="bg-[#0b0b32] text-center">
                     <th
                           className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           "
                           rowSpan={2}
                           >
                          TUMST GRADING SYSTEM   <span className=' block'> (System De Note D’TUMST)</span> 

                        <tr>
                            <th  className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           ">
                               GRADE / 100
                            </th>
                            <th className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           ">
                                LETTER GRADE
                            </th>
                            <th className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           ">
                                GRADE POINT
                            </th>
                        </tr>
                        </th>
                        <th
                           className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           "
                           >
                         GPA  <span className=' block'> (Moyenne Ponderee )</span> 
                        </th>
                        <th
                           className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           "
                           >
                         CGPA=1/3EGPA
                        </th>
                        <th
                           className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                           px-3
                           border-[4px] border-[#909090] 
                           "
                           >
                       CLASSIFICATION OF DEGREE Classification de Diplome CLASS OF DEGREE  <span className=' block'> (Apprecciation)</span>
                        </th>
                        <th
                           className="
                           w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-white
                           py-4
                           lg:py-3
                            px-3
                           border-[4px] border-[#909090] 
                           "
                           >
                         LETTER GRADE 
                        </th>
                       
                     </tr>
                  </thead>
                  <tbody className='text-center'>
                    
                       <tr  >

                         <td
                           className="
                            w-6/12
                             h-1/3
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                          p-0
                           border-[4px] border-[#909090] 
                           "
                           rowSpan={6}   >
                           
                            <tr>
                                
                                <td className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>76-100</td>
                           
                                <td className='  w-3/6
                          
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>A</td>
                                <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>5.00</td>
                            </tr>
                            <tr>
                                <td className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>65-75</td>
                                <td className='  w-3/6
                       
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>B</td>
                                <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>4.00</td>
                            </tr>
                            <tr>
                                <td className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>55-65</td>
                                <td className='  w-3/6
                           
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>C</td>
                                <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>3.00</td>
                            </tr>
                            <tr>
                                <td className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>46-54</td>
                                <td className='  w-3/6
                           
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>D</td>
                                <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>2.00</td>
                            </tr>
                            <tr>
                                <td className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>40-45</td>
                                <td className='  w-3/6
                           
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>E</td>
                                <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>1.00</td>
                            </tr>
                            <tr>
                                <td className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>0-39</td>
                                <td className='  w-3/6
                           
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '> F</td>
                                <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>0.00</td>
                            </tr>
                           
                         </td>
                         <td  className='  w-3/6
                             min-w-[100px]
                           text-[1em]
                         font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] ' rowSpan={7}>
                            {totalCGPA.toPrecision(3)}  ({CGPA.toPrecision(3)})
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           4.50-5.00
                         </td>
                         
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           FIRST CLASS (Excellent)
                         </td>
                         <td  className='  w-1/6
                          
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           A
                         </td>
                        
                    </tr>

                       <tr >
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                         3.5-4.49
                           
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           SECOND CLASS 
                          
                           <span className='block'> (Upper Division)</span> (Tres-bien)
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           B
                         </td>
                        
                         
                         
                         
                    </tr>
                       <tr >
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                         2.40-3.49
                           
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           SECOND CLASS 
                           <span className='block'>(Lower Division)  (Bien)</span>
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            C
                         </td>
                        
                         
                         
                         
                    </tr>
                       <tr >
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                          1.50-2.39
                           
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            THIRD CLASS 
                            <span className="block">(Assez-bien)</span>
                            
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            D
                         </td>
                        
                         
                         
                         
                    </tr>
                       <tr >
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           1.00-1.49
                           
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            PASS 
                            <span className="block"> (Passable)</span>
                            
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            E
                         </td>
                        
                         
                         
                         
                    </tr>
                       <tr >
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                           0.00-0.99
                           
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            FAIL 
                            <span className="block"> (Ajourne)</span>
                            
                         </td>
                         <td  className='  w-1/6
                             min-w-[100px]
                           text-[1em]
                        font-sans
                            font-bold
                           text-[#080808]
                           py-4
                           lg:py-3
                            
                           border-[4px] border-[#909090] '>
                            F
                         </td>
                        
                         
                         
                         
                    </tr>
                       
                  
                  </tbody>
               </table>
    </>
  )
}

export default SummaryGrades
