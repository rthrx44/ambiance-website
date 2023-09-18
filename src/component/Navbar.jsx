import React from 'react'
import Logo from './assets/Logo.png'
import { RButton } from './Button';

function Navbar () {
  return (
    <header id='home'>
      <nav className='container w-auto sticky top-0 flex justify-between bg-white py-8 px-12 z-10 shadow-md shadow-slate-200'>
        <div>
          <a href="#home"><img className='h-8 cursor-pointer' src={Logo} alt="Ambiance Interior Design Studio" /></a>
        </div>
        <div className='flex items-center'>
          <ul className='font-sans flex items-center gap-10 text-xs font-normal tracking-wide transition-all'>
            <li className='hover:text-orange-400 transition-all cursor-pointer'><a href="#about">ABOUT US</a></li>
            <li className='hover:text-orange-400 transition-all cursor-pointer'><a href="#what">WHAT WE DO</a></li>
            <li className='hover:text-orange-400 transition-all cursor-pointer'><a href="#project">PROJECTS</a></li>
            <li className='hover:text-orange-400 transition-all cursor-pointer'><a href="#career">CAREERS</a></li>
            <RButton displayText='CONTACT US'/>   
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;