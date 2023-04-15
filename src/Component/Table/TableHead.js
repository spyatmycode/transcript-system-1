import React from 'react'

const TableHead = () => {
  return (
    <thead>
                <tr className='text-center'>
                    <th
                        className=" px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        S/N
                    </th>
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        COURSE CODE
                    </th>
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        COURSE TITLE
                    </th>
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        CREDIT TITLE
                    </th>
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        GRADE (100)
                    </th>
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        LETTER GRADE
                    </th>
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                        GP
                    </th>
                 
                    <th
                        className="px-4 py-3 border-b-2 border-gray-200 bg-[#0e0e42] text-white text-center text-xs font-semibold  uppercase tracking-wider">
                       TOTAL GRADE POINT 
                    </th>

        
                </tr>
            </thead>
  )
}

export default TableHead
