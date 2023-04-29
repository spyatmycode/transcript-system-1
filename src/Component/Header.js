import React, { useState } from 'react'
import logo from "../Assets/logo.jpg"
import { Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig';
import { signOut } from "firebase/auth";
import AuthContext from './Auth/AuthContext'
import { useContext } from 'react';
import { AppContext } from './ContextProvider/ContextProvider';

const Header = () => {


  const {showOption,}=useContext(AppContext)

  const isLogged = useContext(AuthContext)

  const [showHeader,setShowHeader]=useState(false)
  



  



  const navigate = useNavigate()
  const logOut = () => {

    //Below is the signout function firebase auth
    signOut(auth).then(() => {
      navigate("/login") // Here after log out we navigate to the log in page.
    }).catch((error) => {
      console.log(error);
    });


  }
  return (
    <>
    {showOption ?
    <>
      {
        isLogged && <div>  {/* Here the header is only rendered when log is true */}
          {/* HEADER  */}
          <div className='  flex items-center flex-col my-8  gap-6'>
            <div className='absolute flex right-0 top-4  p-1 font-serif  items-end justify-end  mr-4 text-[white] border-b-[.2em] rounded-sm  border-r-[.2em] border-[#f99f81] cursor-pointer bg-red-700'>
              <button onClick={logOut}>Log out</button>

            </div>
            <div >
              <img src={logo} width="140" alt="" />
            </div>

            <div className='text-xl md:leading-10 md:text-[3em] font-serif text-[#0d0d6c]'>
              <h1>INSTITUT UNIVERSITAIRE TRIUMPHANT </h1>
            </div>

          </div>

        </div>
      }
    </>
      :
      null
     }

      <Outlet />
    </>
  )
}

export default Header
