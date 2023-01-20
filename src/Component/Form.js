
import React from 'react'
import Header from './Header'

const Form = () => {
  return (

    <div className='w-[100vw]'>
      <Header />
      <input type="text" />
      <div className='my-4 flex justify-center items-center'>
        <form action="" className='w-[50vw]'>
          <div>
            <h1 className='text-center text-[2.3em] font-bold font-sans '>STUDENT FORM</h1>
          </div>
          <div className=' flex gap-3 flex-col  '>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm p-4 ' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Matric No (No Matricule): </label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm p-4' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">College</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" id="exampleFormControlInput1" placeholder="e.g SOCIAL & MANAGEMENT SCIENCE" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Department (Departement)</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" id="exampleFormControlInput1" placeholder="e.g ECONOMICS" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Gender</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" id="exampleFormControlInput1" placeholder="e.g FEMALE" />
            </div>

          </div>
          <div className='flex justify-center my-6 '>
            <button className=' border border-[#7e7d7d] py-3  px-6 hover:bg-[#168b7e] bg-[#1b6b6b] text-white'>Submit</button>
          </div>

        </form>



      </div>
    </div>



  )
}

export default Form
