import React, { useState } from 'react'
import { createContext } from 'react'

 const AppContext = createContext()
const ContextProvider = (props) => { // pass 'props' as an argument


  const [GPA, setGPA] = useState([])
  const [level,setLevel]=useState(100)
  const[semester,SetSemester]=useState(1)
    
  return (
    <div>
      <AppContext.Provider value={{ GPA, setGPA,level,setLevel,semester,SetSemester }}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export {ContextProvider,AppContext}




