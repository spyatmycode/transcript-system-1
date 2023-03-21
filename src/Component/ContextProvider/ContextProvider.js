import React, { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()
const ContextProvider = (props) => { // pass 'props' as an argument
  const [GPA, setGPA] = useState([])
  const [level,setlevel]=useState("100")
    
  return (
    <div>
      <AppContext.Provider value={{ GPA, setGPA,level,setlevel }}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export default ContextProvider