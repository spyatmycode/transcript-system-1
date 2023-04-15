import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import {  useParams } from 'react-router-dom'

import Table from './Table/Table'
import { useContext } from 'react'
import { AppContext} from './ContextProvider/ContextProvider'
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

const Transcript = () => {
 
    const {department,setSummaryLevel,summaryLevel,summarySemester,setSummarySemester,gradePointArray,setDepartment,tableNo,setTableNo,setSummaryRow,CGPA,summaryRow,showOption,setShowOption}=useContext(AppContext)
    const [level,setLevel]=useState(100)
    const[semester,SetSemester]=useState('')
    const[saveBtnState,setSaveBtnState]=useState(true)
    const [buttonColorState, setButtonColorState] = useState(true)

    

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

    const calculateTableSummary = (gradePointArray) => {
        let total = 0;
        for (let i = 0; i < gradePointArray.length; i++) {
          total += gradePointArray[i];
        }
        const average=  total/ gradePointArray.length
        return average;
      };
   
    const [Tables,setTables]=useState([])
  
    const createNewTable = () => {
      const newTableNo = Tables.length > 0 ? tableNo + 1 : 1;
      setTableNo(newTableNo);

      //RESTRICTIONS FOR USERS
      if(saveBtnState===false){
        setShowModal(true)
        // const result = window.confirm('You cant proceed !! save the previous table')
      }
      else{

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
              <Table key={newTableNo} />
            </>
          ),
        },
      ]);
      
      }
     
      
       
     
  
      
     
    
      
    };
       

    console.log(Tables);
    const deleteTable = (tableNo) => {

      setCount(count - 1);
      
        setTables((prevTables) =>
          prevTables.filter((table) => table.tableNo !== tableNo)
        );
        setSummaryRow((summaryrow)=>summaryrow.filter((row)=>(
          row.year!==tableNo)))
       
        if(saveBtnState===false){
          setSummaryRow((summaryrow)=>summaryrow.filter((row)=>(
         row.year!==tableNo)))
         setSaveBtnState(true)
        }
        else{
          setSaveBtnState(true)
        }
         
        
        toast.warning('Table deleted successfully!');

      };
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

    

 // Define the print function
const handlePrint = () => {
  //RESTRICTIONS FOR USERS
  if(saveBtnState===true   ){
    setShowOption(false);
    setTimeout(() => {
     
      // Capture HTML content of main component using html2canvas
      html2canvas(mainPageRef.current, { scale: window.devicePixelRatio }) // Use window.devicePixelRatio to capture the correct size based on the device's pixel density
        .then((canvas) => {
          setShowOption(false);
          // Convert captured content to image data URL
          const imgData = canvas.toDataURL('image/png', 1.0); // Use quality option to set image quality to 100%
  
          // Create new jsPDF instance
          const pdf = new jsPDF('p', 'mm', 'a5'); // Set page orientation to portrait, measurement unit to millimeters, and page size to A4
  
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
              -(i * pdf.internal.pageSize.getHeight()),
              pdf.internal.pageSize.getWidth(),
              0
            ); // Use internal.pageSize to get current page size and adjust y position for each page
          }
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
  



    }
  else{
    setShowModal(true)
    // const result = window.confirm('You cant proceed !! save the previous table')
 
  }
};



    return (
        <div className=' p-[6em]  mt-3 mb-8 md:mx-[3em] ' ref={mainPageRef} id="main-page">
           {showOption ? <button className='bg-gray-400 text-black font-bold px-4 py-3 rounded-md' onClick={handlePrint}>Print</button>:null}
          
              {showOption? <ToastContainer  />:null}
             
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
                  
            {showOption?<button className='bg-[#7323be] text-white  py-2 px-4 rounded-md' onClick={createNewTable}>Create New Table</button> :null}
                
                        {/* Table */}
                 
                        {Tables.map((table) => (
                        
                                <div key={table.tableNo} className='my-[-2vh]'>
                                {table.table}
                                
                               {showOption?<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTable(table.tableNo)}>
                                    Delete table
                                  </button> : null} 
                                  

                           
                               {showOption ?  <SaveBtn saveBtnState={saveBtnState} setSaveBtnState={setSaveBtnState}  saveBtnColor={table.saveBtnColor} tableNo={table.tableNo} saveBtn={saveBtn}/>
                                :null }
                                

                           




      
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
