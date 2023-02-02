import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { database } from '../firebase/firebaseConfig';
import { useParams } from 'react-router-dom';

const Transcript = () => {

    const { id } = useParams()

    console.log("This is ID:", id);

    const [data, setData] = useState([])

    const docRef = collection(database, "studentData")

    useEffect(() => {
        getDocs(docRef).then((res) => {
            console.log(res);
            setData(res.docs)
        })
    }, [])


    console.log(data);

    const student = data.find((student) => {
        const { uniqueId } = student._document.data.value.mapValue.fields
        return uniqueId.stringValue === id
    })






    const { matricNo, fullName, college, department, gender } = data || student._document.data.value.mapValue.fields











    return (
        <div className=' mx-[2em] mt-3 mb-8 md:mx-[3em] '>

            {<div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
                <div>
                    <ul>
                        <li><span className=' font-bold '>Name (Nom):</span>{fullName?.stringValue}</li>
                        <li> <span className='font-bold'>College:</span>{college?.stringValue}</li>
                        <li><span className='font-bold'>Matric No (No Matricule):</span>{matricNo?.stringValue}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><span className='font-bold'>Department (Departement):</span>{department?.stringValue}</li>
                        <li><span className='font-bold'>Gender:</span>{gender?.stringValue}</li>
                    </ul>
                </div>
            </div>}

            <section className=' my-3'>
                {/* TITLE  */}
                <div className=' text-center my-11 '>
                    <h1 className='font-bold underline'>OFFICIAL TRANSCRIPT OF ACADEMIC RECORDS</h1>
                    <p className=' font-[fantasy]'>(Transcript Des Note Academiques)</p>
                </div>


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
                                <tr className=' '>
                                    <td className=" w-2  border-b border bg-white text-sm">
                                        <div className="w-full flex items-center">

                                            <div className="w-full text-center">
                                                1

                                            </div>
                                        </div>
                                    </td>
                                    <td className=" w-9  border bg-white text-sm">
                                        <div className=" flex items-center">

                                            <div className="w-full]">
                                                <input className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g GNS112" />

                                            </div>
                                        </div>
                                    </td>
                                    <td className="w-9  border-b border bg-white text-sm">
                                        <div className="w-full flex items-center">

                                            <div className="w-full">
                                                <input className="text-gray-900 w-full whitespace-no-wrap  p-2" placeholder="e.g  Philosophy : Logic Reasoning" />

                                            </div>
                                        </div>
                                    </td>
                                    <td className=" w-2  border-b border  bg-white text-sm">
                                        <div className="w-full flex items-center">

                                            <div className="w-full">
                                                <input className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g 2" />

                                            </div>
                                        </div>
                                    </td>
                                    <td className="  border-b border w-14 bg-white text-sm">
                                        <div className="w-full flex items-center">

                                            <div className="">
                                                <input className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g 75" />


                                            </div>
                                        </div>
                                    </td>
                                    <td className="  border-b border w-14 bg-white text-sm">
                                        <div className="flex items-center">

                                            <div className="">
                                                <input className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g B" />


                                            </div>
                                        </div>
                                    </td>
                                    <td className="  border-b border w-14 bg-white text-sm">
                                        <div className="flex items-center">

                                            <div className="">
                                                <input className="text-gray-900 w-full  whitespace-no-wrap  p-2" placeholder="e.g  4" />


                                            </div>
                                        </div>
                                    </td>
                                    <td className="  border-b border w-14 bg-white text-sm">
                                        <div className="flex items-center">

                                            <div className="">
                                                <input className="text-gray-900 w-full whitespace-no-wrap p-2" placeholder="e.g  12" />


                                            </div>
                                        </div>
                                    </td>
                                    <td className=" w-2 border-b border  bg-white text-sm">
                                        <div className="flex items-center">

                                            <div className="">
                                                <input className="text-gray-900 w-full whitespace-no-wrap  p-2" placeholder="e.g  3.96" />


                                            </div>
                                        </div>
                                    </td>

                                </tr>


                            </tbody>
                        </table>

                    </div>

                </div>
                <div className=' flex justify-center my-4'>
                    <button className=' border  bg-[#2d85bb] text-[#f9f9f9] p-3 hover:bg-[#1a71a4]  rounded-md'> Add course</button>
                </div>

            </section>




        </div>
    )
}

export default Transcript
