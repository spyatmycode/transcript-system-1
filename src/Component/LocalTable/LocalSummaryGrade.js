import React, { useContext, useEffect } from 'react'
import { AppContext } from '../ContextProvider/ContextProvider'
const SummaryGrades = ({idMatric}) => {
      
const localTables=localStorage.getItem("localStorageDb")

const ParsedLocalTables=JSON.parse(localTables)
useEffect(()=>{
  console.log(ParsedLocalTables[1]);
  console.log(ParsedLocalTables.findIndex((num)=>num.matric=='ko'))
  
},[localTables])

const a=[8,1,1,1,1]
const summation=()=>{
    let num=0
     ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>
    num+=(result.CGP)
  
    )
    
    return num.toPrecision(4)
}


  return (
    <>
    <div className=' flex justify-center items-center mx-auto'>

        <table className=' mx-auto w-[50vw]  text-[.8em]  '>
           
               <tr className=' bg-[#0e0e42]    text-white '>
                  <th className='  border-[.2em]     border-[#4f4f4fe5]   relative    '>
                     <tr className=' text-center inline-block p-1  '>
                       <th > IUT GRADING SYSTEM (System De Note D’IUT)</th>
                       </tr>
                     <tr className='text-center   inline-block p-1 ' >
                     <th className=' border-[.2em] p-3    border-[#4f4f4fe5] '>GRADE /100</th>
                     <th className=' border-[.2em]  p-3   border-[#4f4f4fe5] '>LETTER GRADE</th>
                     <th className=' border-[.2em] p-3    border-[#4f4f4fe5] '>GRADE POINT</th>
                    </tr>
                  </th>
                  <th className=' border-[.2em]    border-[#4f4f4fe5] '>
                     <tr className=' text-center  inline-block p-5 '>GPA</tr>
                  </th>
                  <th className=' border-[.2em]    border-[#4f4f4fe5] '>
                     <tr className=' text-center  inline-block p-5 '>CGPA=1/3EGPA</tr>
                  </th>
                  <th className=' border-[.2em]    border-[#4f4f4fe5] '>
                     <tr className=' text-center  inline-block p-2 '>CLASSIFICATION OF DEGREE Classification de Diplome</tr>
                     <tr className=' text-center  inline-block p-1 '>CLASS OF DEGREE (Apprecciation)</tr>
                  </th>
                  <th className=' border-[.2em]    border-[#4f4f4fe5] '>
                     <tr className=' text-center  inline-block p-5 '>LETTER GRADE</tr>
                     </th>
               </tr>

               <tr>
               <td className='border-[.2em] border-[black] items-center w-full  p-1 '>
    <tr className='w-full flex text-center mx-auto  '>
      <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>76-100</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>A</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>5.0</td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>65-75</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>B</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>4.0</td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>55-65</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>C</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>3.0</td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>46-54</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>D</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>2.0</td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>40-45</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>E</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>1.0</td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>0-39</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>F</td>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>0.0</td>
      </tr>
    </td>


    <td className='border-[.2em] border-[black] items-center w-full  p-1 '>
    <tr className='w-full flex text-center mx-auto '>
     
    <td className=' min-w-[7em] flex justify-center  text-center p-1 item-center w-full   border-[black]'> {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results[ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.length-1].CGPA.toPrecision(3)}  ({summation()})</td>
      
      </tr>
     
    </td>


    <td className='border-[.2em] border-[black] items-center w-full  p-1 '>
    <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>4.50-5.00</td>
     
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>3.5-4.49</td>
       
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>2.40-3.49</td>
       
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>1.50-2.39</td>
       
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>1.00-1.49</td>
       
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>0.00-0.99</td>
       
      </tr>
    </td>

    <td className='border-[.2em] border-[black] items-center w-full  p-1 '>
    <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[25em] w-full   border-[black]'>FIRST CLASS (Excellent)</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>SECOND CLASS (Upper Division)  (Tres-bien)</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>SECOND CLASS (Lower Division)  (Bien)</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>THIRD CLASS  (Assez-bien)</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>PASS  (Passable)</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>FAIL  (Ajourne)</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
    </td>



    <td className='border-[.2em] border-[black] items-center w-full  p-1 '>
    <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>A</td>
      <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>B</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>C</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>D</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>E</td>
       <td className=''></td>
        <td className=''></td>
      </tr>
      <tr className='w-full flex text-center mx-auto '>
       <td className=' border-[.2em]  text-center p-2 inline-block min-w-[4em] w-full   border-[black]'>F</td>
        <td className=''></td>
        <td className=''></td>
      </tr>
    </td>

                  
                  
               </tr>
               
               

               </table>
               </div>
    </>
  )
}

export default SummaryGrades
