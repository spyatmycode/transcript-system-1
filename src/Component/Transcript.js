import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import Table from './Table/Table'
import { useContext } from 'react'
import { AppContext } from './ContextProvider/ContextProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryTable from './Table/SummaryTable'
import SummaryRow from './Table/SummaryRow'
import SaveBtn from './SaveBtn'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import ConfirmationModal from "./ConfirmationModal";
import SummaryGrades from './Table/SummaryGrades';
import LetterHead from './LetterHead';
import LocalTable from './LocalTable/LocalTable';
import TableSelect from './Table/TableSelect';

const Transcript = () => {
  const {...idMatric}=useParams()
   const navigate=useNavigate()
    const {department,showLocalTables,setSummaryLevel,summaryLevel,summarySemester,setSummarySemester,gradePointArray,setDepartment,tableNo,setTableNo,setSummaryRow,CGPA,summaryRow,showOption,localStorageDb,setLocalStorageDb,setShowOption}=useContext(AppContext)
    const [level,setLevel]=useState(100)
    const[semester,SetSemester]=useState('')
    const[saveBtnState,setSaveBtnState]=useState(true)
    const [buttonColorState, setButtonColorState] = useState(true)
    const [bgColor, setBgColor] = useState('bg-gray-500');



    



  const mainPageRef = useRef(null);
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
  const [count, setCount] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const handleYes = () => {
    // Perform action when "Yes" is clicked
    setShowModal(false);
    // ...do something
  };




  const handleSave = (e) => {
    e.preventDefault()
    setsave(true)
  }


  const { id } = useParams()
  const transcriptHeaderCollectionRef = collection(db, "Transcript-header-info")
  // console.log(transcriptHeaderCollectionRef);

  useEffect(() => {
    const HeaderTranscriptInfo = async () => {


      const UserData = await getDocs(transcriptHeaderCollectionRef)

      // console.log(UserData);

      setStudents(UserData)


       
      getDocs(transcriptHeaderCollectionRef).then((res) => {
        setData(res.docs)
      })


      const docRef = doc(db, "Transcript-header-info", id);
      // console.log(docRef);

      const docSnap = await getDoc(docRef);
      console.log("Document data:", docSnap.data());
      if (docSnap.exists()) {
        //testing if document exist
        console.log("Document data:", docSnap.data());
        console.log(name);
        setName(docSnap.data().name)
        setMatric(docSnap.data().matric)
        setCollege(docSnap.data().college)
        setDepartment(docSnap.data().department)
        setGender(docSnap.data().gender)
        setSession(docSnap.data().session)
        setLevel(docSnap.data().level)
        setData(docSnap.data())
        // alert(docSnap.data().name)
      } else {
        // console.log("Document data:", docSnap.data());
      }
    }

    HeaderTranscriptInfo()
  }, [id])

  const calculateTableSummary = (gradePointArray) => {
    let total = 0;
    for (let i = 0; i < gradePointArray.length; i++) {
      total += gradePointArray[i];
    }
    const average = total / gradePointArray.length
    return average;
  };

  const [Tables, setTables] = useState([])



  const createNewTable = () => {
    const newTableNo = Tables.length > 0 ? tableNo + 1 : 1;
    setTableNo(newTableNo);

    //RESTRICTIONS FOR USERS
    if (saveBtnState === false) {
      setShowModal(true)
      // const result = window.confirm('You cant proceed !! save the previous table')
    }
    else {

      //changing the state
      setSaveBtnState(true)
      toast.success("Table created successfully!");
      setButtonColorState(!buttonColorState);
      setCount(count + 1);
      setSaveBtnState(false)

      //adding to the table
      setTables((prevTables) => [
        ...prevTables,
        {
          tableNo: newTableNo,
          table: (
            <>
              <Table tableNo={newTableNo} />
            </>
          ),
        },
      ]);

    }
  };



  

  


    // console.log(Tables);
    const deleteTable = (tableNo) => {

    setCount(count - 1);

    setTables((prevTables) =>
      prevTables.filter((table) => table.tableNo !== tableNo)
    );
    setSummaryRow((summaryrow) => summaryrow.filter((row) => (
      row.year !== tableNo)))

      deleteFromLocalStorage(localStorageDb,matric, tableNo)

    

    if (saveBtnState === false) {
      setSummaryRow((summaryrow) => summaryrow.filter((row) => (
        row.year !== tableNo)))

      setSaveBtnState(true)
    }
    else {
      setSaveBtnState(true)
    }


    toast.warning('Table deleted successfully!');

  };

  // SAVE TO LOCAL STORAGE DATABASE

  const saveToLocalStorage = (database, studentMatric, currentResult, tableNo, saveState) =>{
    if(database){
      const updatedDb = [...database]
    const currentStudentIndex = database.findIndex((student)=> student.matric === idMatric.id)
    if (saveState !== false){
      // console.log("thisnis the current student index",currentStudentIndex);

      updatedDb[currentStudentIndex].results = [...updatedDb[currentStudentIndex].results, {...currentResult, id: tableNo,saveState}]

      setLocalStorageDb(updatedDb)
    }
    else{
      updatedDb[currentStudentIndex].results = updatedDb[currentStudentIndex].results.filter((result) => (result.id !== tableNo))

      setLocalStorageDb(updatedDb)
    }
    }
  }


  //DELETE FROM LOCAL STORAGE

  const deleteFromLocalStorage = (database, studentMatric, tableNo) =>{
    if(database){
      const updatedDb = [...database]
      const currentStudentIndex = database.findIndex((student)=> student.matric ===idMatric.id)

      updatedDb[currentStudentIndex].results = updatedDb[currentStudentIndex].results.filter((result) => (result.id !== tableNo))

      setLocalStorageDb(updatedDb)


    }
  }


  //  SAVE BTN 
      const saveBtn = (num) => {
        
         setSaveBtnState(false)
         
       if(saveBtnState===false){
        setSummaryRow((prev) => [
          ...prev,
          {
            year: num,
            gpa: 2.43,
            cgpa: 5.0,
            grade: "A",
            classDegree: "First Class",
            Row: (
              <SummaryRow
                count={`${count}`}
                cgp={
                  gradePointArray[gradePointArray.length - 2]
                    ? gradePointArray[gradePointArray.length - 2]
                    : 0
                }
                level={summaryLevel}
                semester={summarySemester}
                year={num }
                tableNo={num}
              />
            ),
          
          },
        ]);
        toast.info('Saved successfully!');
        //reset
        setSaveBtnState(true)
       } 
       else{
      
          setSummaryRow((summaryrow)=>summaryrow.filter((row)=>(
         row.year!==num)))
         toast.warning('UnSaved successfully!');
     
       }
      
        
      };





      useEffect(() => {
        const interval = setInterval(() => {
          if (bgColor === 'bg-gray-500') {
            setBgColor('bg-gray-700');
          } else if (bgColor === 'bg-gray-700') {
            setBgColor('bg-gray-900');
          } else {
            setBgColor('bg-gray-500');
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        }
      }, [bgColor]);
    


    
// Define the print function
const handlePrint = () => {
  // RESTRICTIONS FOR USERS
  if (saveBtnState === true) {
    setShowOption(false);
    setTimeout(() => {
      // Capture HTML content of main component using html2canvas
      html2canvas(document.body, { scale: window.devicePixelRatio }) // Capture the whole body of the webpage
        .then((canvas) => {
          setShowOption(false);
          // Convert captured content to image data URL
          const imgData = canvas.toDataURL('image/png', 1.0); // Use quality option to set image quality to 100%

          // Create new jsPDF instance
          const pdf = new jsPDF('l', 'mm', 'a4'); // Set page orientation to portrait, measurement unit to millimeters, and page size to A4

          // Set the page height of the PDF to match the height of the captured image
          const imgHeight = (canvas.height * pdf.internal.pageSize.getWidth()) / canvas.width;
          pdf.internal.pageSize.setHeight(imgHeight);

          // Add the captured image to the PDF as a single page
          pdf.addImage(
            imgData,
            'PNG',
            0,
            0,
            pdf.internal.pageSize.getWidth(),
            pdf.internal.pageSize.getHeight()
          );

          setShowOption(false);
          // Save PDF with specified file name
          pdf.save(`${name} ${matric} IUT BENIN`);
          setTimeout(() => {
            setShowOption(true);
          }, 1000);
        })
        .catch((error) => {
          console.error('Error generating PDF:', error);
          setShowOption(true);
        });
    }, 1000);
  } else {
    setShowModal(true);
  }
};


const localTables=localStorage.getItem("localStorageDb")

const ParsedLocalTables=JSON.parse(localTables)
useEffect(()=>{
  console.log(ParsedLocalTables[1]);
  console.log(ParsedLocalTables.findIndex((num)=>num.matric=='ko'))
  
},[localTables])



    return (
     

             <div className=' p-[6em]  mt-3 mb-8 md:mx-[3em] ' ref={mainPageRef} id="main-page">
              <div>
              {showOption ?
                <button onClick={()=>{
                  navigate("/")
                  //   to refresh the page after deleting
                  window.location.reload();
                  }} className=' bg-[#3e3e3e] text-white p-3 absolute top-4 left-4 rounded-md'> ⇐ Back to Home Page</button>:null}
              </div>
          <LetterHead/>
            {showOption ? (
       <button
       className={`fixed right-[4%] bottom-8 text-[#ffffff] font-bold px-4 py-3 rounded-md transition duration-500 ${bgColor} bg-gradient-to-bottom-right`}
       onClick={handlePrint}
     > Print</button>
      ) : null}
 
              {showOption? <ToastContainer  />:null}
             
            <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>

        <div>

          <ul>
          {showLocalTables===true?
            <>
              <li><span className=' font-bold '>Name (Nom): </span>{name ? name: ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].name }</li>
              <li> <span className='font-bold'>Faculty: </span>{college ? college:ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].department }</li>
              <li><span className='font-bold'>Matric No (No Matricule): </span>{matric ? matric:
              ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].matric
              }</li> 
               </>
                 : 
              <>
                <li><span className=' font-bold '>Name (Nom):</span>{name}</li>
               <li> <span className='font-bold'>Faculty:</span>{college}</li>
               <li><span className='font-bold'>Matric No (No Matricule):</span>{matric}</li>

                </>
             }

           

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

                    {!showLocalTables ? 

                    <>
                      {showOption  ? <button className='bg-[#7323be] text-white  py-2 px-4 rounded-md' onClick={createNewTable}>Create New Table</button> : null}

                    </>
                    :null

                    }
                           


  
    {/* 

   HINT: THIS IS FOR THE ADMOIN PAGE 

    ----------localTables --------
     */}

    {/* {ParsedLocalTables.map((ltable)=>( */}
    {showLocalTables===true?
      <>
      { ParsedLocalTables.length > 0 ?

<>
   {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>(
 
    <>

     <TableSelect level={result.level} setLevel={setLevel} semester={result.semester} />
     <LocalTable saveBtnState={saveBtnState} saveToLocalStorage={saveToLocalStorage} saveBtn={saveBtn} setSaveBtnState={setSaveBtnState} deleteTable={deleteTable} result={result}/> 
    </>
   ))}</>
   :null
}
      </>
      :null
    }
 
   
    {/* ))} */}

      





        {/* Table */}

        {Tables.map((table) => (

          <div key={table.tableNo} className='my-[-2vh]'>
            {table.table}

            {showOption ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTable(table.tableNo)}>
              Delete table
            </button> : null}

            {showOption ? <SaveBtn saveBtnState={saveBtnState} setSaveBtnState={setSaveBtnState} saveBtnColor={table.saveBtnColor} tableNo={table.tableNo} saveBtn={saveBtn} saveToLocalStorage={saveToLocalStorage} matric={matric}/>
              : null}

          </div>
        ))}

                        {/* THIS DISPLAY THE SUMMARY OF THE DATA WHEN THERE IS A TABLE PRESENT FOR CALCULATION */}
                                   {Tables.length >0 && <><SummaryTable className=""  />  <SummaryGrades/>  </>}
                     
                  <div className=''>
                        <button
                          className="bg-blue-500 hidden hover:bg-blue-600 text-white px-4 py-2 rounded"
                          onClick={() => setShowModal(true)}
                        >
                          Open Confirmation Modal
                        </button>
                        {showModal && (
                          <ConfirmationModal
                          message="Warning: You can't proceed without saving the previous table!."
         
                            onYes={handleYes}
                           
                          />
                        )}
                   </div>
                  

      </section>




    </div>
  )
}

export default Transcript
