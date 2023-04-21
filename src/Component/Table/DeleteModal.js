import React from 'react'

const DeleteModal = ({ message, each, onCancel, onYes , target}) => {
    return (
        <div className="fixed inset-0 bg-opacity-20 bg-gray-100 flex items-center justify-center backdrop-blur-[2px] ">
            <div className="bg-white rounded-lg p-8 shadow-lg border-0 border-gray-200 ">
                <p className="text-lg text-red-700 mb-4">{message}</p>
                <div className="flex justify-center">


                    <button
                        className="mr-2 bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded"
                        onClick={()=>onYes(target)}

                    >
                        Delete
                    </button>
                    <button className='mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded' onClick={() => onCancel(false)}>

                        Cancel

                    </button>


                </div>
            </div>
        </div>
    )
}

export default DeleteModal