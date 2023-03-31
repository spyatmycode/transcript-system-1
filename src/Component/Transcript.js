import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import {  useParams } from 'react-router-dom'

import Table from './Table/Table'
import { useContext } from 'react'
import { AppContext} from './ContextProvider/ContextProvider'


const Transcript = () => {
 
    const {department,setDepartment}=useContext(AppContext)
    const [level,setLevel]=useState(100)
    const[semester,SetSemester]=useState('')


  const handleLevelChange = (e) => {
    setLevel(Number(e.target.value))
  }

  const handleSemesterChange = (e) => {
    SetSemester(e.target.value)
  }



//  HEADER INFORMATION
    const [name, setName] = useState('')
    const [matric, setMatric] = useState('')
    const [college, setCollege] = useState('')
    const [gender, setGender] = useState('')
    const [session, setSession] = useState('')
    const [data, setData] = useState([])
    const [students, setStudents] = useState([])
    const [save, setsave] = useState(false)


   

    const handleSave=(e)=>{
    e.preventDefault()
    setsave(true)
    }


    const { id } = useParams()
    const transcriptHeaderCollectionRef = collection(db, "Transcript-header-info")
    console.log(transcriptHeaderCollectionRef);

    useEffect(() => {
        const HeaderTranscriptInfo = async () => {


            const UserData = await getDocs(transcriptHeaderCollectionRef)

            console.log(UserData);

            setStudents(UserData)



            getDocs(transcriptHeaderCollectionRef).then((res) => {
                setData(res.docs)
            })


            const docRef = doc(db, "Transcript-header-info", id);
            console.log(docRef);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //testing if document exist
                console.log("Document data:", docSnap.data().college);

                setName(docSnap.data().name)
                setMatric(docSnap.data().matric)
                setCollege(docSnap.data().college)
                setDepartment(docSnap.data().department)
                setGender(docSnap.data().gender)
                setSession(docSnap.data().session)
                setLevel(docSnap.data().level)
                setData(docSnap.data())
            } else {
                console.log("Document data:", docSnap.data());
            }
        }

        HeaderTranscriptInfo()
    }, [id])


   
    const [Tables,setTables]=useState([])
  
    const createNewTable = () => {
          setTables([...Tables,
            <>
           <Table/>
            </>
          ])
          
    };


    
    const deleteTable=(i)=>{
       setTables(Tables.filter((table)=>table!==i))
    }







    

    return (
        <div className=' mx-[2em] mt-3 mb-8 md:mx-[3em] '>

            <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>

                <div>

                    <ul>

                        <>
                            <li><span className=' font-bold '>Name (Nom):</span>{name}</li>
                            <li> <span className='font-bold'>Faculty:</span>{college}</li>
                            <li><span className='font-bold'>Matric No (No Matricule):</span>{matric}</li>

                        </>

                    </ul>

                </div>
                <div>

                </div>

            </div>


            <section className=' my-3'>
                {/* TITLE  */}
                <div className=' text-center my-11 '>
                    <h1 className='font-bold underline'>OFFICIAL TRANSCRIPT OF ACADEMIC RECORDS</h1>
                    <p className=' font-[fantasy]'>(Transcript Des Note Acaddemiques)</p>
                </div>
                  
            
                <button className='bg-[#7323be] text-white  py-2 px-4 rounded-md' onClick={createNewTable}>Create New Table</button>
                        {/* Table */}
                    {Tables.map((table,i)=>(
                        <>
                        <div className='my-[5em]'>
                            {table}
                        <button className='bg-red-700 p-4 mx-7  rounded-md text-white' onClick={()=>(
                        deleteTable(table))}>Delete Table</button>
                    
                                        
                        </div>
                    
                        </>
                        
                    ))}
                    
                   <div>
                   </div>

            </section>




        </div>
    )
}

export default Transcript
