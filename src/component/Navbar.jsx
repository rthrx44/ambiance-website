import React from 'react'
import Logo from './assets/Logo.png'
import { RButton } from './Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar () {
  return (
    <>
    {

    }
    <header id='home' className='container'>
      <nav className='container w-auto fixed flex justify-between bg-white py-8 px-12 z-10 shadow-md shadow-slate-200'>
        <div>
          <a href="#home"><img className='h-8 cursor-pointer' src={Logo} alt="Ambiance Interior Design Studio" /></a>
        </div>
        <div className='flex items-center'>
          <ul className='font-sans flex items-center gap-10 text-xs font-normal tracking-wide transition-all'>
            <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#about">ABOUT US</a></li>
            <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#what">WHAT WE DO</a></li>
            <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#project">PROJECTS</a></li>
            <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#career">CAREERS</a></li>
            <RButton displayText='CONTACT US'/>   
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar;