import React, { useState } from 'react'
import TableData from './TableData'

const Table = ({level,session,tableType}) => {

//  HEADER INFORMATION
const [name, setName] = useState('')
const [matric, setMatric] = useState('')
const [college, setCollege] = useState('')
const [department, setDepartment] = useState('')
const [gender, setGender] = useState('')
const [data, setData] = useState([])
const [Userinfo, setUserinfo] = useState([])
const [students, setStudents] = useState([])





// TABLE INFORMATION
const [table,setTable] = useState([])

const [courseCode, setCourseCode] = useState('')
const [tableId, setTableId] = useState(1)
const [courseTitle, setCourseTitle] = useState('')
const [creditTitle, setCreditTitle] = useState('')
const [grade, setGrade] = useState('')
const [letterGrade, setLetterGrade] = useState('')
const [gp, setGp] = useState('')
const [cp, setCp] = useState('')
const [gpa, setGpa] = useState('')
const [save, setsave] = useState(false)
const [addNewCourse, setAddNewCourse] = useState(false)
// const [level, setLevel] = useState('')
const handleSave=(e)=>{
    e.preventDefault()
    setsave(true)
    }
    const handleNewCourse=(e)=>{
        e.preventDefault()
        const tabledata={
            id: tableId,
            courseCode,
            courseTitle,
            grade,
            letterGrade,
            gp,
            cp,
            gpa,
            level,
            session,
    
          }
    
    
    setTableId(tableId+1)
    setAddNewCourse(false)
    setTable([...table,tabledata])
    

    }
    // handleNewCourse


  return (
    <>
         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                   
                   
                    <div className="inline-block min-w-full shadow rounded-lg ">
                        <table className="min-w-full leading-normal">
                        
                            <thead>
                                <tr className='text-center'>
                                    <th
                                        className=" px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        S/N
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        COURSE CODE
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        COURSE TITLE
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        CREDIT TITLE
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        GRADE (100)
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        LETTER GRADE
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        GP
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        CP
                                    </th>
                                    <th
                                        className="px-4 py-3 border-b-2 border-gray-200 bg-[black] text-white text-left text-xs font-semibold  uppercase tracking-wider">
                                        GRADE POINT AVERAGE
                                    </th>


                                </tr>
                            </thead>
                            <tbody className=' '>
                                

                                {table.map((tabledata)=>{
                                    console.log(tabledata);
                                    return(
                                  <TableData 
                                  tableType
                                  tabledata={tabledata}
                                  courseCode={courseCode}
                                  setCourseCode={setCourseCode}
                                  courseTitle={courseTitle}
                                  setCourseTitle={setCourseTitle}
                                  creditTitle={creditTitle}
                                  setCreditTitle={setCreditTitle}
                                  grade={grade}
                                  setGrade={setGrade}
                                  letterGrade={letterGrade}
                                  setLetterGrade={setLetterGrade}
                                  gp={gp}
                                  setGp={setGp}
                                  cp={cp}
                                  setCp={setCp}
                                  gpa={gpa}
                                  setGpa={setGpa}
                                  level={level}
                                  session={session}
                                  />
                                        
                                    // {/* <li >{props.taskName}</li>
                                    // <button  style={{background: props.completed ? 'green':'rgb(230, 230, 230)',color:  props.completed? "white":'black'}} className='complete' onClick={()=>props.completedTask(props.id)}  >✔</button>
                                    // <button className='delete' onClick={()=>props.deleteTask(props.id)}>x</button> */}
                                 
                                )})
                                }


                            </tbody>
                        </table>

                    </div>

                </div>
                <div className=' flex justify-center my-4'>
                    {/* {
                        save ? 
                        <button onClick={handleNewCourse} className=' border  bg-[#2d85bb] text-[#f9f9f9] p-3 hover:bg-[#1a71a4]  rounded-md'> Add new course</button>
    //            :*/}
      <button onClick={handleNewCourse} className=' border  bg-[#2d85bb] text-[#f9f9f9] p-3 hover:bg-[#1a71a4]  rounded-md'> Add new course</button>
     <button onClick={handleSave} className=' border  bg-[#330720] text-[#f9f9f9] p-3 hover:bg-[#9c1e57]  rounded-md'> save</button>
                </div>
    </>
  )
}

export default Table



// import React from 'react'

// const Table = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Table
