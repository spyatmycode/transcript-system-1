import React from 'react'
import logo from "../Assets/logo.jpg"
import { Outlet, useNavigate, redirect } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig';
import { signOut } from "firebase/auth";


const Header = ({ setIsLogged, isLogged }) => {



  const navigate = useNavigate()
  const logOut = () => {


    //Below is the signout function firebase auth
    signOut(auth).then(() => {

      setIsLogged(false)
      localStorage.setItem("isLogged", false)
      navigate("/login") // Here after log out we navigate to the log in page.
      localStorage.removeItem("isLogged") //Here we remove the isLogged Item so that it cannot be toggled to sign in
    }).catch((error) => {
      console.log(error);
    });


  }
  return (
    <>
      {
        isLogged && <div>  {/* Here the header is only rendered when log is true */}
          {/* HEADER  */}
          <div className=' flex items-center flex-col text-center gap-6'>
            <div className='w-full flex items-center justify-end py-2 mr-4 text-red-600 cursor-pointer'>
              <button onClick={logOut}>Log out</button>
            </div>
            <div >
              <img src={logo} width="140" alt="" />
            </div>

            <div className='text-xl md:leading-10 md:text-[3em] font-serif text-[#0d0d6c]'>
              <h1>INSTITUT UNIVERSITAIRE TRIUMPHANT</h1>
            </div>

          </div>

        </div>
      }

      <Outlet />
    </>
  )
}

export default Header
