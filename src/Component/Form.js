
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {addDoc,collection, getDocs, updateDoc} from "firebase/firestore"
import Header from './Header'
import { db } from '../firebase/firebaseConfig'
import { useEffect } from 'react'

const Form = () => {
   const [name,setName]=useState('')
   const [matric,setMatric]=useState('')
   const [college,setCollege]=useState('')
   const [department,setDepartment]=useState('')
   const [gender,setGender]=useState('')
   const [session,setSession]=useState('')
   
  const navigate =useNavigate()
  const {id}=useParams()
   console.log(id);

  const transcriptHeaderCollectionRef=collection(db,"Transcript-header-info")
    const handleSubmit = async (e) => {
      
      e.preventDefault()
     
       if(window.confirm("Are you sure of this User Information")){
        await addDoc(transcriptHeaderCollectionRef,{
          name,
          matric,
          college,
          department,
          gender,
          session,
  
         })


        //  updateDoc()
         setName("")
         setMatric("")
         setCollege("")
         setDepartment("")
         setGender("")
         setSession("")
        navigate("/transcript/:id")
       }

    }
  




  
  
  
  
  
  return (

    <div className='w-[100vw]'>

      <input type="text"  />
      <div className='my-4 flex justify-center items-center'>
        <form action="" className='w-[50vw]' onSubmit={handleSubmit} >
          <div>
            <h1 className='text-center text-[2.3em] font-bold font-sans '>STUDENT FORM</h1>
          </div>
          <div className=' flex gap-3 flex-col  '>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className=' border border-[#7e7d7d] rounded-sm p-4 ' placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Matric No (No Matricule): </label>
              <input type="text" value={matric} onChange={(e)=>setMatric(e.target.value)} className=' border border-[#7e7d7d] rounded-sm p-4' required placeholder="e.g TUMST/18/00015/ECN/COLSMAS" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">College</label>
              <input type="text" value={college} onChange={(e)=>setCollege(e.target.value)} className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g SOCIAL & MANAGEMENT SCIENCE" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Department (Departement)</label>
              <input type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" required value={department}  onChange={(e)=>setDepartment(e.target.value)} id="exampleFormControlInput1" placeholder="e.g ECONOMICS" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Gender</label>
              <input value={gender} onChange={(e)=>setGender(e.target.value)} type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g FEMALE" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Session</label>
              <input value={session} onChange={(e)=>setSession(e.target.value)} type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g 2020/2021" />
            </div>

          </div>
          <div className='flex justify-center my-6 '>
            <input type="submit"   className=' border border-[#7e7d7d] py-3  px-6 hover:bg-[#168b7e] bg-[#1b6b6b] text-white rounded-md' value={"submit"}/>
          </div>

        </form>



      </div>
    </div>



  )
}

export default Form
