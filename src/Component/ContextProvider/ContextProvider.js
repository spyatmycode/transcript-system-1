import React, { useState } from 'react'
import { createContext } from 'react'

 const AppContext = createContext()
const ContextProvider = (props) => { // pass 'props' as an argument


  const [GPA, setGPA] = useState([])
  const [level,setLevel]=useState(100)
    
  return (
    <div>
      <AppContext.Provider value={{ GPA, setGPA,level,setLevel }}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export {ContextProvider,AppContext}





// export const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(null)

//   useEffect(() => {
//       onAuthStateChanged(auth, (user) => {
//           setUser(user)
//       })
//   }, [])


//   return (
   
//       <AuthContext.Provider value={user}>
//           {children}
//       </AuthContext.Provider>
//   )
// }