
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig'
import { uid } from 'uid'
import { useContext } from 'react'
import { AppContext } from './ContextProvider/ContextProvider'

const Form = () => {
  const [name, setName] = useState('')
  const [matric, setMatric] = useState('')
  const [college, setCollege] = useState('')
  const{department,setDepartment}=useContext(AppContext)
  const [gender, setGender] = useState('')
  const [session, setSession] = useState('')
  const [level, setLevel] = useState('')

  const navigate = useNavigate()

  const id = uid()

  const usedId = uid()
  const transcriptHeaderCollectionRef = collection(db, "Transcript-header-info")
  const handleSubmit = async (e) => {

    e.preventDefault()

    if (window.confirm("Are you sure of this User Information")) {
      const docref = await addDoc(transcriptHeaderCollectionRef, {
        name,
        matric,
        college,
        department,
        gender,
        session,
        level,
        id,
      })
      console.log(docref.id);

      console.log(transcriptHeaderCollectionRef.id);
      //  updateDoc()
      setName("")
      setMatric("")
      setCollege("")
      setDepartment("")
      setGender("")
      setSession("")
      setLevel("")
      navigate(`/transcript/${docref.id}`)

    }

  }









  return (

    <div className='w-[100vw]'>

      <input type="text" />
      <div className='my-4 flex justify-center items-center'>

        <form action="" className='w-[50vw]' onSubmit={handleSubmit} >

          <div>
            <h1 className='text-center text-[2.3em] font-bold font-sans '>STUDENT FORM</h1>
          </div>
          <div className=' flex gap-3 flex-col  '>
            <div className='flex flex-col'>
              <label className="form-label">Name (Nom)</label>

              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className=' border border-[#7e7d7d] rounded-sm p-4 '  placeholder="e.g Adewale Philips" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Matric No (No Matricule): </label>
              <input type="text" value={matric} onChange={(e) => setMatric(e.target.value)} className=' border border-[#7e7d7d] rounded-sm p-4' required placeholder="e.g TUMST-18-00015-ECN-COLSMAS" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Faculty</label>
              <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g SOCIAL & MANAGEMENT SCIENCE" />
            </div>
           
            <div className='flex flex-col'>
              <label className="form-label">Gender</label>
              <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g FEMALE" />
            </div>
            <div className='flex flex-col'>
              <label className="form-label">Session</label>
              <input value={session} onChange={(e) => setSession(e.target.value)} type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g 2020/2021" />

            </div>
            <div className='flex flex-col'>
              <label className="form-label"></label>
              <ul>

                    <label className="form-label"  >select your Department: </label>
                            <select onChange={(e)=>setDepartment(Number(e.target.value))} value={Number(department)}  className='border-[1.9px] p-[.9px] border-red-900' name="" id="">
                           
                                <option  value={0}>Health Information Management</option>
                                <option  value={1}>Accounting</option>
                                <option value={2} >CONFLICT RESOLUTION AND HOSPITALITY MANAGEMENT</option>
                            </select>

                    </ul>
            </div>
            {/* <div className='flex flex-col'>
              <label className="form-label">Level</label>
              <input value={level} onChange={(e) => setLevel(e.target.value)} type="text" className="form-control  border border-[#7e7d7d] rounded-sm p-4" required id="exampleFormControlInput1" placeholder="e.g 300 level" />

            </div> */}

          </div>
          <div className='flex justify-center my-6 '>

            <input type="submit" required className=' border border-[#7e7d7d] py-3  px-6 hover:bg-[#168b7e] bg-[#1b6b6b] text-white rounded-md' value={"submit"} />

          </div>

        </form>



      </div>
    </div>



  )
}

export default Form
