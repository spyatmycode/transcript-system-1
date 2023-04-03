import React, { useState } from 'react'
import { createContext } from 'react'

 const AppContext = createContext()
const ContextProvider = (props) => { // pass 'props' as an argument


  const [GPA, setGPA] = useState([])
  const [CGP, SETCGP] = useState(0)

  


  // const [level, setLevel] = useState(100);
  const [department, setDepartment] = useState(0);
  // const [semester, setSemester] = useState('1 st Semester');
  return (
    <div>
      <AppContext.Provider value={{CGP,SETCGP, GPA, setGPA, department, setDepartment}}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export {ContextProvider,AppContext}




