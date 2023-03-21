import React from 'react'

const TableSelect = ({
    setFaculty,
    faculty,
    level,
    setLevel,
    semester,
    SetSemester
}) => {
  return (
    <div>
       <label htmlFor="" className=' m-2 '>Select Level:</label>
                            <select onChange={(e)=>setLevel(Number(e.target.value))} value={Number(level)}  className=' m-2 border-[1.9px] p-[.9px] border-red-900' name="" id="">
                             {/* <option >none</option> */}
                                <option >100</option>
                                <option >200</option>
                                <option >300</option>
                                <option >400</option>
                                <option >500</option>
                            </select>


                            <label htmlFor="" className='m-2 '>Select Semester:</label>
                            <select onChange={(e)=>SetSemester(e.target.value)} value={semester}  className='m-2 border-[1.9px] p-[.9px] border-red-900' name="" id="">
                               <option >none</option>
                                <option >1 st Semester</option>
                                <option >2 nd Semester</option>
                            </select>
                       
    </div>
  )
}

export default TableSelect
