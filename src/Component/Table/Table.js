import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../ContextProvider/ContextProvider';
import data from '../Data/Data'; // assuming the data is stored in a file named data.js
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableSelect from './TableSelect';

function Table({key,department,setDepartment}) {
 
  const [level, setLevel] = useState(100);
  const [semester, setSemester] = useState('1st Semester');
// console.log(department);


   
      const [gpa, setGpa] = useState(0);

      const [scores, setScores] = useState({
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        score5: 0,
        score6: 0,
        score7: 0,
        score8: 0,
        score9: 0,
        score10: 0,
      });
      
   
      
     {/* ====================== FUNCTION FOR THE LETTER GRADE  [ e.g A,B,C  ]===============================  */}

      const calculateLetterGrade = (score) => {
        if (score >= 70) {
          return 'A';
        } else if (score >= 60) {
          return 'B';
        } else if (score >= 50) {
          return 'C';
        } else if (score >= 45) {
          return 'D';
        } else if (score >= 40) {
          return 'f';
        } else {
          return 'F';
        }
       
      };

    {/* ====================== FUNCTION TO CALCULATE THE GRADE POINT ===============================  */}
      
      const calculateGP = (score) => {
        if (score >= 70) {
        return 5.0;
        } else if (score >= 60) {
           return 4.0;
        } else if (score >= 50) {
          return 3.0;
        } else if (score >= 45) {
          return 2.0;
        } else if (score >= 0) {
          return 0.0;
        } else {
          return 0.0;
        }
      };

      const calculateAndUpdateGPA = () => {
        const calculatedGPA = calculateGP(
          scores.score1,
          scores.score2,
          scores.score3,
          scores.score4,
          scores.score5,
          scores.score6,
          scores.score7,
          scores.score8,
          scores.score9
        );
        setGpa(calculatedGPA);
      };
    
        


        //GRADE POINT FIGURES
      const [GPs, setGps] = useState([]);
     

      const handleChange = (event,index) => {

        //THE CALCULATION FOR THE GRADE POINT OF ALL COURSES
        
        const { name, value } = event.target;
        setScores({ ...scores, [name]: value });
       
        const newNumbers = [...GPs];
        newNumbers[index] = Number(event.target.value);
        setGps(newNumbers);
        // console.log(scores);
  
      
        calculateAndUpdateGPA();
      };




      const bd = (gradePointArray) => {
        let total = 0;
        for (let i = 0; i < gradePointArray.length; i++) {
          total += gradePointArray[i];
        }
        const average=  total/ gradePointArray.length
        return average;
      };



   
    
  return (
    <>
    <div  className="  sm:mx-8 px-4 sm:px-8  overflow-x-auto">
              
         
               <div className="inline-block min-w-full  rounded-lg ">
                {/* TABLE SELECTION TO CHOOSE YOUR LEVEL AND SEMESTER  PERTAINING TO YOUR DEPARTMENT OF YOUR CHOICE   */}
               <TableSelect level={level} setLevel={setLevel} semester={semester} department={department} setDepartment={setDepartment} setSemester={setSemester} />

    <table className="min-w-full   leading-normal ">
 
      <TableHead/>
      <TableBody 


      

      department={department}
      setDepartment={setDepartment}
      key={key}
      semester={semester}
      level={level}
      setLevel={setLevel}
      setSemester={setSemester}
      scores={scores}
      handleChange={handleChange}
      calculateGP={calculateGP}
      calculateLetterGrade={calculateLetterGrade}
      />

    </table>
 
    </div>
    </div>
    </>
  );
}

export default Table;