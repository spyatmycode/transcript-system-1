// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {BsChevronLeft} from "react-icons/bs"
// import Header from './Header'
// const Form = () => {
//   return (
//     <div>
//          <div className="navigate  container my-4 py-3">
//                 <button  className='btn btn-dark '>
//                 <BsChevronLeft className='' size={30}/> back
//                 </button>



//         </div>
//         <Header/>





//        <form className=''>

//                 <div className="d-flex flex-column   container align-items-center justify-content-center">


//                         <div className="tilte h1 text-danger fw-semibold my-5">
//                         <h1>STUDENT FORM</h1> 
//                         </div>


//                     <div className='gird  gap-2'>

//                     <div class="mb-3 g-col-6 g-col-md-4">
//                             <label class="form-label">Name (Nom)</label>
//                             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g Adewale Philips"/>
//                     </div>
//                     <div class="mb-3 g-col-6 g-col-md-4">
//                             <label class="form-label">Matric No (No Matricule): </label>
//                             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g TUMST/**/*****/***/*****"/>
//                     </div>

//                     <div class="mb-3 g-col-6 g-col-md-4">
//                             <label  class="form-label">College</label>
//                             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g SOCIAL & MANAGEMENT SCIENCE"/>
//                     </div>

//                     <div class="mb-3 g-col-6 g-col-md-4">
//                             <label  class="form-label">Department (Departement)</label>
//                             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g ECONOMICS"/>
//                     </div>

//                     <div class="mb-3 g-col-6 g-col-md-4">
//                             <label  class="form-label">Gender</label>
//                             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g FEMALE"/>
//                     </div>



//                     </div>
//                     <div className=" w-100"  >
//                     <button className='w-100 text-light btn btn-primary bg-opacity-75 fs-4 p-3'>Submit</button>
//                    </div>

//                 </div>


//        </form>

//     </div>
//   )
// }

// export default Form


import React from 'react'
import Header from './Header'

const Form = () => {
  return (
    <div>
      <Header />
      <input type="text" />
      <div className='my-4 flex justify-center items-center'>
        <form action="">
          <div>
            <h1>STUDENT FORM</h1>
          </div>
          <div>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Matric No (No Matricule): </label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm' placeholder="e.g Adewale Philips" />
            </div>

          </div>



        </form>

      </div>
    </div>



  )
}

export default Form
