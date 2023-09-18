import React from 'react'
import Logo from './assets/Logo.png'
import { RButton } from './Button';

function Navbar () {
  return (
    <nav className='container w-auto flex justify-between py-6 px-12'>
      <div className=''>
        <img className='h-8 cursor-pointer' src={Logo} alt="Ambiance Interior Design Studio" />
      </div>
      <div className='flex items-center'>
        <ul className='font-sans flex items-center gap-10 text-xs font-normal tracking-wide transition-all'>
          <li className='hover:text-orange-400 transition-all cursor-pointer'>ABOUT US</li>
          <li className='hover:text-orange-400 transition-all cursor-pointer'>WHAT WE DO</li>
          <li className='hover:text-orange-400 transition-all cursor-pointer'>PROJECTS</li>
          <li className='hover:text-orange-400 transition-all cursor-pointer'>CAREERS</li>
          <RButton displayText='CONTACT US'/>   
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;