
import React from 'react'
import { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { database } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';


const Form = () => {
  const navigate = useNavigate()

  const init = { fullName: "", matricNo: "", college: "", department: "", gender: "" }

  const [student, setStudent] = useState(init)



  const handleChange = (e) => {

    const { name, value } = e.target;

    setStudent({ ...student, [name]: value })

    console.log(name, value);


  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(student);

    const collectionRef = collection(database, "studentData")

    const { fullName, matricNo, college, department, gender } = student

    let uniqueId = v4()



    await addDoc(collectionRef, {
      fullName: fullName,
      matricNo: matricNo,
      college: college,
      department: department,
      gender: gender,
      uniqueId: uniqueId


    });


    navigate(`/transcript/${uniqueId}`)

  }



  return (

    <div className='w-[100vw]'>

      <input type="text" />
      <div className='my-4 flex justify-center items-center'>
        <form className='w-[50vw]' onSubmit={handleSubmit}>
          <div>
            <h1 className='text-center text-[2.3em] font-bold font-sans '>STUDENT FORM</h1>
          </div>
          <div className=' flex gap-3 flex-col  '>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm p-4 ' placeholder="e.g Adewale Philips" onChange={handleChange} name="fullName" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Matric No (No Matricule): </label>
              <input type="text" className=' border border-[#7e7d7d] rounded-sm p-4' placeholder="e.g Adewale Philips" onChange={handleChange} name="matricNo" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">College</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" id="exampleFormControlInput1" placeholder="e.g SOCIAL & MANAGEMENT SCIENCE" onChange={handleChange} name="college" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Department (Departement)</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" id="exampleFormControlInput1" placeholder="e.g ECONOMICS" onChange={handleChange} name="department" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Gender</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" id="exampleFormControlInput1" placeholder="e.g FEMALE" onChange={handleChange} name="gender" />
            </div>

          </div>
          <div className='flex justify-center my-6 '>
            <button className=' border border-[#7e7d7d] py-3  px-6 hover:bg-[#168b7e] bg-[#1b6b6b] text-white rounded-md'>Submit</button>
          </div>

        </form>



      </div>
    </div>



  )
}

export default Form
