import React from 'react'

const DeleteModal = ({ message, each, onCancel, onYes , target}) => {
    return (
        <div className="fixed inset-0 bg-[#1b0d0d46] bg-opacity-60 flex items-center justify-center backdrop-blur-[2px] ">
            <div className="bg-[white] rounded-lg p-8 shadow-lg border-0 border-gray-200">
                <p className="text-lg text-red-900 mb-4">{message}</p>
                <div className="flex justify-center">


                    <button
                        className="mr-2 bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded"
                        onClick={()=>onYes(target)}

                    >
                        Delete
                    </button>
                    <button className='mr-2 bg-[#595959] hover:bg-[#8f8f8f]  text-white px-4 py-2 rounded' onClick={() => onCancel(false)}>

                        Cancel

                    </button>


                </div>
            </div>
        </div>
    )
}

export default DeleteModal