import React from 'react'
import logo from "../Assets/logo.jpg"
const Header = () => {
  return (
    <div>
      {/* HEADER  */}
      <div className=' flex items-center flex-col text-center gap-6'>
        <div >
          <img src={logo} width="140" alt="" />
        </div>

        <div className='text-xl md:leading-10 md:text-[3em] font-serif text-[#0d0d6c]'>
          <h1>INSTITUT UNIVERSITAIRE TRIUMPHANT</h1>
        </div>

      </div>

    </div>
  )
}

export default Header
