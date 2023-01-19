import React from 'react'
import { FaPhone, FaBars, FaLaptop } from 'react-icons/fa'
import Logo from '../assets/logo.jpeg'

const Login = () => {
    return (
        <>
            <nav className=' text-gray-200 bg-slate-900 w-full py-2 flex justify-between'>
                <div className='ml-3 flex items-center'>
                    Login Page
                    <div className='ml-3'>
                        <FaBars />
                    </div>

                </div>

                <div className='flex justify-between items-center mr-4'>
                    <p className='mr-3'>
                        Contact Us
                    </p>
                    <FaPhone />
                </div>
            </nav>

            <div className='mt-7 ml-7 flex items-center' id='logo'>
                <img src={Logo} alt="" width={'140px'} />

                <h2 className='text-3xl w-4 font-serif text-blue-700 font-semibold'>
                    Institut Universitaire Triumphant
                </h2>

            </div>

            <form className='w-[350px] mx-auto mt-7'>
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
                                <input type="email" className='border border-neutral-400 w-11/12 py-2 bg-sky-100 pl-3' />
                            </div>

                            <div className='flex flex-col items-start ml-4 mt-5'>
                                <label htmlFor="email">Password</label>
                                <input type="password" className='border border-neutral-400 w-11/12 py-2 bg-sky-100 pl-3' />
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

            <p className='mt-4'><span className='text-red-600 cursor-pointer underline'>Click here</span> if you have forgotten password</p>
        </>
    )
}

export default Login