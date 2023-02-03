import React, { useState, useEffect } from 'react'
import { FaPhone, FaBars, FaLaptop } from 'react-icons/fa'
import Logo from '../Assets/logo.jpeg'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './Auth/AuthContext';


const Login = () => {



    const navigate = useNavigate()
    const init = { email: "", password: "" }


    const [user, setUser] = useState(init)



    const handleSubmit = (e) => {

        e.preventDefault() //Prevent default action of refreshing

        signInWithEmailAndPassword(auth, user.email, user.password) //This is the function to sign user in
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential.user);
                console.log(user);
                navigate("/") //After successful login the user is taken to the admin dashboard

                alert("Sign In successful !")

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/user-not-found") {
                    alert("Wrong Email... Please try again !")
                }
                else if (errorCode === "auth/wrong-password") {
                    alert("Wrong Password...Please try again !")
                }
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }


    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value }) //This sets new user input just before the enter submit button is pressed
    }
    return (
        <div>
            <nav className=' text-gray-200 bg-slate-900 w-full py-2 flex justify-between'>
                <div className='ml-3 flex items-center'>
                    Login Page
                    <div className='ml-3'>
                        <FaBars />
                    </div>

                </div>

                <div className='flex justify-between items-center mr-4'>
                    <a href='tel:+22961517976'>
                        <p className='mr-3'>
                            Contact Us
                        </p>
                    </a>
                    <FaPhone />
                </div>
            </nav>

            <div className='mt-7 ml-7 flex items-center' id='logo'>
                <img src={Logo} alt="" width={'140px'} />

                <h2 className='text-3xl w-4 font-serif text-[#0d0d6c] font-semibold'>
                    Institut Universitaire Triumphant
                </h2>

            </div>

            <form className='w-[350px] mx-auto mt-7' onSubmit={handleSubmit}>
                <div>
                    <div className='bg-sky-600 py-2 text-white text-left flex items-center justify-between'>
                        <h2 className='ml-4'>Admin Login</h2>
                        <div className='mr-5'>
                            <FaLaptop />
                        </div>
                    </div>

                    <div className='h-[300px] border border-sky-600 flex items-center justify-center'>

                        <div className='w-[320px] h-[275px] border border-stone-200'>
                            <div className='flex flex-col items-start ml-4 mt-5'>
                                <label htmlFor="email">Email</label>
                                <input type="email" className='border border-neutral-400 w-11/12 py-2 bg-sky-100 pl-3'
                                    name='email'
                                    onChange={handleChange}

                                />
                            </div>

                            <div className='flex flex-col items-start ml-4 mt-5'>
                                <label htmlFor="email">Password</label>
                                <input type="password" className='border border-neutral-400 w-11/12 py-2 bg-sky-100 pl-3'
                                    name='password'
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='w-full flex justify-end mt-7'>
                                <button className='px-4 bg-orange-400 text-white py-2 self-end rounded-sm mr-6'>
                                    Sign In
                                </button>
                            </div>

                        </div>





                    </div>
                </div>
            </form>

            <p className='mt-4 text-center'><span className='text-red-600 cursor-pointer underline'>Click here</span> if you have forgotten password</p>
        </div>
    )
}

export default Login