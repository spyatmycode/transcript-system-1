import React from 'react'
import Header from './Header'

const Transcript = () => {
  return (
    <div className=' mx-[2em] mt-3 mb-8 md:mx-[3em] '>
       <Header/>
       <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
        <div>
           <ul>
            <li><span className=' font-bold '>Name (Nom):</span>MAKANJUOLA AMINAT OLOLADE</li>
            <li> <span className='font-bold'>College:</span>SOCIAL & MANAGEMENT SCIENCE</li>
            <li><span className='font-bold'>Matric No (No Matricule):</span>  TUMST/18/00005/ECN/COLSMAS</li>
           </ul>
        </div>
        <div>
           <ul>
            <li><span className='font-bold'>Department (Departement):</span>ECONOMICS</li>
            <li><span className='font-bold'>Gender:</span>FEMALE</li>
           </ul>
        </div>
       </div>

       <section className=' my-3'>
        {/* TITLE  */}
        <div className=' text-center my-11 '>
            <h1 className='font-bold underline'>OFFICIAL TRANSCRIPT OF ACADEMIC RECORDS</h1>
             <p className=' font-[fantasy]'>(Transcript Des Note Academiques)</p>
        </div>


        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg ">
                    <table class="min-w-full leading-normal">
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
                                        <input className="text-gray-900 w-full  whitespace-no-wrap  p-2"  placeholder="e.g GNS112" />
                                        
                                        </div>
                                    </div>
                                </td>
                                <td className="w-9  border-b border bg-white text-sm">
                                    <div className= "w-full flex items-center">
                                        
                                        <div className="w-full">
                                        <input className="text-gray-900 w-full whitespace-no-wrap  p-2"  placeholder="e.g  Philosophy : Logic Reasoning" />
                                        
                                        </div>
                                    </div>
                                </td>
                                <td className=" w-2  border-b border  bg-white text-sm">
                                    <div className="w-full flex items-center">
                                        
                                        <div className="w-full">
                                        <input className="text-gray-900 w-full  whitespace-no-wrap  p-2"  placeholder="e.g 2" />
                                        
                                        </div>
                                    </div>
                                </td>
                                <td className="  border-b border w-14 bg-white text-sm">
                                    <div className="w-full flex items-center">
                                        
                                        <div className="">
                                        <input className="text-gray-900 w-full  whitespace-no-wrap  p-2"  placeholder="e.g 75" />
                                        
            
                                        </div>
                                    </div>
                                </td>
                                <td className="  border-b border w-14 bg-white text-sm">
                                    <div className="flex items-center">
                                        
                                        <div className="">
                                        <input className="text-gray-900 w-full  whitespace-no-wrap  p-2"  placeholder="e.g B" />
                                        
                
                                        </div>
                                    </div>
                                </td>
                                <td className="  border-b border w-14 bg-white text-sm">
                                    <div className="flex items-center">
                                        
                                        <div className="">
                                        <input className="text-gray-900 w-full  whitespace-no-wrap  p-2"  placeholder="e.g  4" />
                                       
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="  border-b border w-14 bg-white text-sm">
                                    <div className="flex items-center">
                                        
                                        <div className="">
                                        <input className="text-gray-900 w-full whitespace-no-wrap p-2"  placeholder="e.g  12" />
                                       
                                        
                                        </div>
                                    </div>
                                </td>
                                <td className=" w-2 border-b border  bg-white text-sm">
                                    <div className="flex items-center">
                                        
                                        <div className="">
                                        <input className="text-gray-900 w-full whitespace-no-wrap  p-2"  placeholder="e.g  3.96" />
                                       
                                           
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
