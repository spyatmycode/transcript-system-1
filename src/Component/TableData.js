// import React, { useState } from 'react'

// const TableData = ({tabledata,
//     courseCode,
//     setCourseCode,
//     courseTitle,
//     setCourseTitle,
//     creditTitle,
//     setCreditTitle,
//     grade,
//     setGrade,
//     letterGrade,
//     setLetterGrade,
//     gp,
//     setGp,
//     cp,
//     setCp,
//     gpa,
//     setGpa,
//     tableType
// }) => {
 
// const [tableChange,setTableChange]=useState([])

//   const TableHealth1=[
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//     {
//         courseCode:"STA 102",
//         courseTitle:"Information in Health Care"
//     },
//   ]

  
// console.log(tableChange);


//   return (
//     <>
//      {/* {tableType === "Health Information Management 1.1" ? setTableChange(TableHealth1):
//                             //  tableType === "Health Information Management 2" ? <Table/> :
//                             //  tableType === "Health Information Management 3" ? <Table/> :
                             
//                              null} */}

                           
//       <tr key={tabledata.id} className=' '>
//                                     <td className=" w-2  border-b border bg-white text-sm">
//                                         <div className="w-full flex items-center">

//                                             <div className="w-full text-center">
//                                             {tabledata.id}

//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=" w-9  border bg-white text-sm">
//                                         <div className=" flex items-center">

//                                             <div className="w-full]">
//                                                 <input value={courseCode} onChange={(e)=>setCourseCode(e.target.value)} className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g GNS112" />

//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="w-9  border-b border bg-white text-sm">
//                                         <div className="w-full flex items-center">

//                                             <div className="w-full">
//                                                 <input value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} className="text-gray-900 w-full whitespace-no-wrap  p-2" placeholder="e.g  Philosophy : Logic Reasoning" />

//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=" w-2  border-b border  bg-white text-sm">
//                                         <div className="w-full flex items-center">

//                                             <div className="w-full">
//                                                 <input value={creditTitle} onChange={(e)=>setCreditTitle(e.target.value)} className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g 2" />

//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="  border-b border w-14 bg-white text-sm">
//                                         <div className="w-full flex items-center">

//                                             <div className="">
//                                                 <input value={grade} onChange={(e)=>setGrade(e.target.value)} className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g 75" />


//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="  border-b border w-14 bg-white text-sm">
//                                         <div className="flex items-center">

//                                             <div className="">
//                                                 <input value={letterGrade} onChange={(e)=>setLetterGrade(e.target.value)} className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g B" />


//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="  border-b border w-14 bg-white text-sm">
//                                         <div className="flex items-center">

//                                             <div className="">
//                                                 <input value={gp} onChange={(e)=>setGp(e.target.value)} className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g  4" />


//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="  border-b border w-14 bg-white text-sm">
//                                         <div className="flex items-center">

//                                             <div className="">
//                                                 <input value={cp} onChange={(e)=>setCp(e.target.value)} className="text-gray-900 w-full whitespace-no-wrap p-2" placeholder="e.g  12" />


//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=" w-2 border-b border  bg-white text-sm">
//                                         <div className="flex items-center">

//                                             <div className="">
//                                                 <input value={gpa} onChange={(e)=>setGpa(e.target.value)}  disabled  className="text-gray-900  w-full cursor-no-drop whitespace-no-wrap  p-2" placeholder="e.g  3.96" />


//                                             </div>
//                                         </div>
//                                     </td>

//                                 </tr>
//                                 {/* <Table!/> */}
//     </>
//   )
// }

// export default TableData
