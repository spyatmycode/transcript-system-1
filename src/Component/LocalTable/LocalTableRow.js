import React, { useContext } from 'react'
import { AppContext } from '../ContextProvider/ContextProvider'
import tableData from '../Data/Data';
const SummaryRow = () => {
  const {
    department,
    gradePointArray,
    setDepartment,
    tableNo,
    setTableNo,
    setSummaryRow,
    summaryRow,
    CGPA,
    totalCGPA,
    summaryLevel,
    summarySemester,

    
  } = useContext(AppContext)

//   function count() {
//     let result = '';
//     for (let i = 1; i <= 3; i++) {
//       for (let j = 1; j <= 2; j++) {
//         result += i + '.' + j + ',';
//       }
//     }
//     // remove the trailing comma
//     result = result.slice(0, -1);
//     return result;
//   }
  
  
  return (
    <>
      <tr>
        <td
          className="
            text-center text-dark
            font-medium
            text-[1em]
            py-5
            px-2
            bg-[#F3F6FF]
            border-b border-l border-[#E8E8E8]
          "
        >
      
           44
        </td>
        <td
          className="
            text-center text-dark
            font-medium
            text-[1em]
            py-5
            px-2
            bg-white
            border-b border-[#E8E8E8]
          "
        >
          55
         
        </td>
       
      </tr>
    </>
  )
}

export default SummaryRow
