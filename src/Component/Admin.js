import React, { useEffect } from 'react'
import Header from './Header'
import { FaEdit } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext, ContextProvider } from './ContextProvider/ContextProvider'

const Admin = () => {
const navigate=useNavigate()
    const data = [
        {
            matric: "2020/9257",
            studentName: "Akeju Oluwanifemi Adeola",
            level: "300",
            status: "Incomplete",

        },
        {
            matric: "2020/9277",
            studentName: "Enaikele Omoh Kelvin",
            level: "300",
            status: "Incomplete",

        }
    ]

    const {level,setLevel,showLocalTables,setShowLocalTables} =useContext(AppContext)
    const {...idMatric}=useParams()

    const localTables=localStorage.getItem("localStorageDb")

    const ParsedLocalTables=JSON.parse(localTables)
    useEffect(() => {
        console.log(ParsedLocalTables[1]);
        console.log(
          ParsedLocalTables.map((e) => {
            if (e.results.length > 0) {
              return e.results[e.results.length - 1].level;
            } else {
              return "No Level";
            }
          })
        );
      }, [localTables]);

      const handlePrint=(each)=>{
       
        if(showLocalTables===false){
            setShowLocalTables(true)
             navigate(`/transcript/${each.matric}`)
        }
        
        
      }





  const deleteFunction= (each) =>{
    const parsedLocalTables = JSON.parse(localTables);
    const updatedData = parsedLocalTables.filter((item) => item.matric !== each.matric);

    //   const currentStudentIndex = ParsedLocalTables.findIndex((student)=> student.matric ===idMatric.id)
console.log(each.matric);
const deletedData= ParsedLocalTables.filter((b) => (b.matric !== each.matric ))
console.log(deletedData);
localStorage.setItem("localStorageDb",JSON.stringify(deletedData))

    //   to refresh the page after deleting
    window.location.reload();

  }

    return (
        <>

   
            <div className='w-full mt-12'>
                <div className='w-full text-center'>
                    <h1 className='font-bold text-4xl'>
                        Transcripts
                    </h1>
                </div>

                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div>
                            {/* <h2 className="text-2xl font-semibold leading-tight">Users</h2> */}
                        </div>
                        <div className="my-2 flex sm:flex-row flex-col justify-center sm:w-auto">
                            <div className="flex flex-row mb-1 sm:mb-0">
                                <div className="relative">
                                    <select
                                        className=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative">
                                    <select
                                        className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                        <option>All</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="block relative">
                                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Search"
                                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full h-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />


                            </div>

                            <Link to={'/fill-form'}>
                                <div className=''>
                                    <button className='px-3 py-2 bg-blue-700 text-white rounded-md ml-7'>
                                        New transcript
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto flex justify-center">
                            <div className="inline-block  shadow rounded-lg overflow-hidden">
                                <table className="  leading-normal sm:">

                                    {/* This is where the table starts */}


                                    {/* This is the table head */}
                                    <thead >
                                        <tr >
                                            <th
                                                className="px-5 py-3  text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Student name
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Matric number
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Level
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Faculty
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    {/* This is the table body */}
                                    <tbody>

                                        {/* This is a table row/ record */}

                                        {
                                            ParsedLocalTables.map((each) => {
                                                // const { level, studentName, status, matric } = each
                                                return (
                                                    <tr key={each.matric} className='text-center'>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-auto h-10">
                                                                    {/* <img className="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt="" /> */}
                                                                </div>
                                                                <div className="">
                                                                    <p className="text-gray-900 ">
                                                                        {each.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">{each.matric}</p>
                                                              
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                            { each.results.length > 0 ? Math.max(...each.results.map(result => result.level)) : "No Level"}
                          
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span
                                                                className="relative inline-block px-3 py-1  text-[back] leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 opacity-50 rounded-full"></span>
                                                                <span className="relative">{each.department}</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold text-[black] leading-tight">
                                                                <span aria-hidden
                                                                    className={`absolute inset-0 {
                                                                        ${Math.max(...each.results.map(result => result.level)) ===400? " bg-green-200":"bg-red-200"}
                                                                        opacity-50 rounded-full`}></span>
                                                                <span className="relative">{
                                                                 Math.max(...each.results.map(result => result.level)) ===400? "Complete":"Incomplete"
                                                                }</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b  border-gray-200 bg-white text-sm">
                                                            <div className='flex gap-3 '>
                                                                <div className=' text-blue-600'>
                                                                    <button onClick={()=>handlePrint(each)}>
                                                                        Print
                                                                    </button>
                                                                </div>


                                                                {/* <div>
                                                                    <button className='flex items-center justify-between gap-1'>
                                                                        Edit
                                                                        <FaEdit />

                                                                    </button>


                                                                </div> */}

                                                                <div>
                                                                    <button onClick={()=>deleteFunction(each)} className='flex items-center justify-between text-red-600'>
                                                                        Delete

                                                                    </button>


                                                                </div>


                                                            </div>

                                                        </td>

                                                    </tr>

                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                                {/* This is the end of the table */}

                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               {level}    
        </>
    )
   
}

export default Admin