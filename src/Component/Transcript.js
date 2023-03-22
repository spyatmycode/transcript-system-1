import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { uid } from "uid"
import TableData from './TableData'
// import Table from './Table'
import Table1 from './Table1'
import { data } from './Data/Data'
import TableSelect from './Table/TableSelect'
import Table from './Table/Table'
import { useContext } from 'react'
import { AppContext, ContextProvider } from './ContextProvider/ContextProvider'


const Transcript = () => {
    const {level,setLevel,semester,SetSemester}=useContext(AppContext)
    console.log(1111111111111);
    console.log(level==undefined || level=="" ? 100: level );
    console.log(111111111111);

//  HEADER INFORMATION
    const [name, setName] = useState('')
    const [matric, setMatric] = useState('')
    const [college, setCollege] = useState('')
    const [department, setDepartment] = useState('')
    const [gender, setGender] = useState('')
    const [session, setSession] = useState('')
  
    const [data, setData] = useState([])
    // const [Userinfo, setUserinfo] = useState([])
    const [students, setStudents] = useState([])
  
const navigate=useNavigate()

   

   

    const [courseCode, setCourseCode] = useState('')
    const [tableId, setTableId] = useState(1)
    const [courseTitle, setCourseTitle] = useState('')
    const [creditTitle, setCreditTitle] = useState('')
    const [grade, setGrade] = useState('')
    const [letterGrade, setLetterGrade] = useState('')
    const [gp, setGp] = useState('')
    const [cp, setCp] = useState('')
    const [gpa, setGpa] = useState('')
    const [save, setsave] = useState(false)
    const [addNewCourse, setAddNewCourse] = useState(false)
    const[tableType,setTableType]=useState("")

    

   //Faculty states
   const [faculty,setFaculty]=useState("")

   //semester state
 




 console.log(faculty);
 console.log(semester);

   if(department==="Health Information Management" && semester==="1 st Semester" && level==="100" ){
//    setTableType("Health Information Management 1.1")
   console.log("Health Information Management 1.1")
   }
   if(department==="Health Information Management" && semester==="2 nd Semester" && level==="100" ){
//    setTableType("Health Information Management 1.2")
   console.log("Health Information Management 1.2")
   }


    const handleSave=(e)=>{
    e.preventDefault()
    setsave(true)
    }





    const usedId = uid()


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


    // data.map((e)=>(console.log(e[0].FACULTY)))


    const [tableNo, setTableNo] = useState(1);
    const [newtables, setNewTables] = useState([{ id: 1, name: "Table 1" }]);
  
    const createNewTable = () => {
        SetSemester("")
        setLevel("")
        const newTable = {
            id: tableId + 1,
            name: `Table ${tableId + 1}`
          };
          setNewTables([...newtables, newTable]);
          setTableNo(tableNo + 1);
         
          
    };
  
    const tables = [];
  
    for (let i = 1; i <= tableNo; i++) {
      tables.push(
        <table key={i} className='my-[4em]'>
         <TableSelect  />
          <Table />
        </table>
      );
   
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

                    <ul>

                    <label htmlFor="" >select your Department: </label>
                            <select onChange={(e)=>setDepartment(e.target.value)} value={department}  className='border-[1.9px] p-[.9px] border-red-900' name="" id="">
                                <option >none</option>
                                <option >Health Information Management</option>
                                <option >Accounting</option>
                                <option >ams</option>
                            </select>

                    </ul>

                </div>


            </div>


            <section className=' my-3'>
                {/* TITLE  */}
                <div className=' text-center my-11 '>
                    <h1 className='font-bold underline'>OFFICIAL TRANSCRIPT OF ACADEMIC RECORDS</h1>
                    <p className=' font-[fantasy]'>(Transcript Des Note Acaddemiques)</p>
                </div>
                  
                    <TableSelect
                    setFaculty={setFaculty}
                    faculty={faculty}
                    SetSemester={SetSemester}
                    semester={semester}
                    />
                            {/* {tableType === "Health Information Management 1" ? <Table level={level} tableType={tableType} /> :
                             tableType === "Health Information Management 2" ? <Table/> :
                             tableType === "Health Information Management 3" ? <Table/> :
                             
                             null} */}
                           
                                 
                            <Table department={department} setDepartment={setDepartment} semester={semester}  />
                      
                            <button onClick={createNewTable}>Create New Table</button>

                            {tables}
                            

                            

                                                             
                            
                   <div>
                
          
                   </div>

            </section>




        </div>
    )
}

export default Transcript
