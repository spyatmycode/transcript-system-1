import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
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
import LocalSumarry from './LocalTable/LocalSumarry';
import LocalSumarryGrade from './LocalTable/LocalSummaryGrade';
import 'jspdf-autotable';

const Transcript = () => {
  const {...idMatric}=useParams()
  if(idMatric){
    idMatric.id.replace('-','--')
  }




  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(()=>{
 if(isOnline){
  toast.success("Online Mode!");
 
 }if(isOnline==false){
  toast.warning("offline Mode!");
  
 }

  },[])

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);



  
   const navigate=useNavigate()
    const {department,showLocalTables,setSummaryLevel,summaryLevel,summarySemester,setSummarySemester,gradePointArray,setDepartment,tableNo,setTableNo,setSummaryRow,CGPA,summaryRow,showOption,localStorageDb,setLocalStorageDb,setShowOption}=useContext(AppContext)
    const [level,setLevel]=useState(100)
    const[semester,SetSemester]=useState('')
    const[saveBtnState,setSaveBtnState]=useState(true)
    const [buttonColorState, setButtonColorState] = useState(true)
    const [bgColor, setBgColor] = useState('bg-gray-500');
    const [dbData, setDbData] = useState(null);



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
  const transcriptTableCollectionRef = doc(collection(db, 'Transcript-tables'), 'Tables');
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
  
//  alert(saveBtnState +" " + tableNo)
    //RESTRICTIONS FOR USERS
    if (saveBtnState === false  && tableNo > 1) {
      setShowModal(true)
      // const result = window.confirm('You cant proceed !! save the previous table')
    }

    // if (saveBtnState === true   ) {
      // setShowModal(true)
      const newTableNo = Tables.length > 0 ? tableNo + 1 : 1;
      setTableNo(newTableNo);
      alert()
         alert(tableNo)
      setShowModal(false)
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
  
      // const result = window.confirm('You cant proceed !! save the previous table')
    // }
    
    // if (saveBtnState === false || tableNo===0  ) {
    //   // setShowModal(true)
    //   const newTableNo = Tables.length > 0 ? tableNo + 1 : 1;
    //   setTableNo(newTableNo);
    //   alert()
    //      alert(tableNo)
    //   setShowModal(false)
    //     //changing the state
    //     setSaveBtnState(true)
    //     toast.success("Table created successfully!");
    //     setButtonColorState(!buttonColorState);
    //     setCount(count + 1);
    //     setSaveBtnState(false)
  
    //     //adding to the table
    //     setTables((prevTables) => [
    //       ...prevTables,
    //       {
    //         tableNo: newTableNo,
    //         table: (
    //           <>
    //             <Table tableNo={newTableNo} />
    //           </>
    //         ),
    //       },
    //     ]);
  
    //   // const result = window.confirm('You cant proceed !! save the previous table')
    // }
    
  };



  

  


    // console.log(Tables);
    const deleteTable = (tableNo) => {
 //RESTRICTIONS FOR USERS
      if(tableNo ===1){
       alert("oiooo")
       setShowModal(false)
      }
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



  const saveToLocalStorage = async(database, studentMatric, currentResult, tableNo, saveState) =>{
    if(database){
      const updatedDb = [...database]
      let studId=studentMatric
      if(showLocalTables===true){
          studId=idMatric.id
      }
      else{
        studId=studentMatric
      }

      
    const currentStudentIndex = database.findIndex((student)=> student.matric ===  studId)
    if (saveState !== false){
      // console.log("thisnis the current student index",currentStudentIndex);

      updatedDb[currentStudentIndex].results = [...updatedDb[currentStudentIndex].results, {...currentResult, id: tableNo,saveState}]

      setLocalStorageDb(updatedDb)
    }
    else{
      updatedDb[currentStudentIndex].results = updatedDb[currentStudentIndex].results.filter((result) => (result.id !== tableNo))

      setLocalStorageDb(updatedDb)
    }
    const currentFirebaseStudentIndex = database.findIndex((student)=> student.matric ===  studId)
    updatedDb[currentStudentIndex].results = [...updatedDb[currentStudentIndex].results, {...currentResult, id: tableNo,saveState}]
    const newData=[...dbData]
    await updateDoc(transcriptTableCollectionRef,{updatedDb})
  .then(() => {
    console.log('Data added successfully!');
    console.log(newData);
    console.log(localStorageDb);
  })
  .catch((error) => {
    console.error('Error adding data: ', error);
  });
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
      const saveBtn =async (num) => {
        
        
         
       if(saveBtnState===false ){

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

        // const collectionRef = db.collection('Transcript-tables');
// const documentRef = transcriptTableCollectionRef.doc('Tables');


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
        const fetchData = async () => {
          try {
          
          
            const documentSnapshot = await getDoc(transcriptTableCollectionRef);
    
            if (documentSnapshot.exists()) {
              setDbData(documentSnapshot.data().updatedDb);
              console.log(dbData);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);





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
    
      const handlePrint = () => {
        // RESTRICTIONS FOR USERS
        if (saveBtnState === true) {
          setShowOption(false);
          setTimeout(() => {
            // Capture HTML content of main component using html2canvas
            html2canvas(mainPageRef.current, { scale: window.devicePixelRatio }) // Use window.devicePixelRatio to capture the correct size based on the device's pixel density
              .then((canvas) => {
                setShowOption(false);
                // Convert captured content to image data URL
                const imgData = canvas.toDataURL('image/png', 1.0); // Use quality option to set image quality to 100%
      
                // Create new jsPDF instance
                const pdf = new jsPDF('p', 'mm', 'a4'); // Set page orientation to portrait, measurement unit to millimeters, and page size to A4
      
                const maxPages = 15; // Maximum number of pages allowed in PDF
                const imgHeight = (canvas.height * pdf.internal.pageSize.getWidth()) / canvas.width; // Calculate image height based on aspect ratio
      
                let totalPages = Math.ceil(imgHeight / pdf.internal.pageSize.getHeight()); // Calculate total number of pages based on image height and page height
      
                // Limit total pages to maximum allowed pages and minimum of 1 page
                totalPages = Math.max(Math.min(totalPages, maxPages), 1);
      
                // Loop through each page and add image to PDF
                for (let i = 0; i < totalPages; i++) {
                  if (i > 0) {
                    pdf.addPage(); // Add new page for remaining content
                  }
                  pdf.addImage(
                    imgData,
                    'PNG',
                    0,
                    -(i * pdf.internal.pageSize.getHeight()) + 42 * pdf.internal.pageSize.getWidth() / 172, // Add margin of 20em at every page break
                    pdf.internal.pageSize.getWidth(),
                    0
                  ); // Use internal.pageSize to get current page size and adjust y position for each page
                }
                setShowOption(false);
                // Save PDF with specified file name
                pdf.save(
                  `${
                    name
                      ? name
                      : ParsedLocalTables[ParsedLocalTables.findIndex((num) => num.matric == `${idMatric.id}`)].name
                  } ${
                    matric
                      ? matric
                      : ParsedLocalTables[ParsedLocalTables.findIndex((num) => num.matric == `${idMatric.id}`)].matric
                  } IUT BENIN`
                );
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
          // const result = window.confirm('You cant proceed !! save the previous table')
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
              <li><span className={` font-bold `}>Name (Nom): </span>
              {
                isOnline ?
                name ? name: ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].name 
             
                 : 
                 
                 name ? name: ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].name 
             
              }
              {name ? name: ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].name }
              
              </li>
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
          <h1 className='font-bold  border-b-[.1em]  p-2 border-[black] font-sans '> <span className='  mx-1'> OFFICIAL</span> <span className='  mx-1'> TRANSCRIPT </span> <span className='  mx-3'> OF</span> <span className='  mx-1'>ACADEMIC</span> <span className='  mx-1'>RECORDS</span>  </h1>
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

{/* {console.log(dbData.map(e=>e))} */}
    {showLocalTables===true?
      <>
      { ParsedLocalTables.length > 0 ?

<>
   {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>(
    <> 

<div className=' flex mb-[4em] mt-[2em] flex-col'>
{/* {console.log(result)} */}

     <TableSelect level={result.level} setLevel={setLevel} semester={result.semester} />
     <LocalTable saveBtnState={saveBtnState} saveToLocalStorage={saveToLocalStorage} saveBtn={saveBtn} setSaveBtnState={setSaveBtnState} deleteTable={deleteTable} result={result}/> 
</div>
    </>
   ))}
        <LocalSumarry idMatric={idMatric}/>
        <LocalSumarryGrade idMatric={idMatric}/>

   </>
   : null
}
      </>
      :null
    }


   


        {/* Table */}

        {Tables.map((table) => (

          <div key={table.tableNo} className=''>
            {table.table}
       <div className=' ml-[4em] mt-[2em] '>
        {showOption ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTable(table.tableNo)}>
              Delete table
            </button> : null}

           <SaveBtn showOption={showOption} saveBtnState={saveBtnState} setSaveBtnState={setSaveBtnState} saveBtnColor={table.saveBtnColor} tableNo={table.tableNo} saveBtn={saveBtn} saveToLocalStorage={saveToLocalStorage} matric={matric}/>
              
       </div>
            

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
