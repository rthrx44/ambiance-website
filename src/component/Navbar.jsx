import React from 'react'
import Logo from './assets/Logo.png'
import { RButton } from './Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar () {
  return (
    <>
    <div className="drawer drawer-end w-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-auto">
        {/* Page content here */}
        <header id='home' className='w-full container mx-auto'>
          <nav className='container flex fixed z-10 justify-between bg-white shadow-md shadow-slate-200 p-4 sm:py-8 sm:px-6 md:py-10 md:px-12 lg:px-20 xl:px-36'>
            <div className='flex items-center'>
              <a href="#home"><img className='h-8 cursor-pointer lg:h-10 xl:h-12' src={Logo} alt="Ambiance Interior Design Studio" /></a>
            </div>
            <div className='flex items-center'>
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-transparent border-none text-zinc-950 px-2 hover:bg-transparent hover:text-orange-400 transition-all md:hidden"><MenuRoundedIcon/></label>
              <ul className='font-sans items-center gap-5 text-xs font-normal tracking-wide transition-all container hidden md:flex lg:text-sm lg:gap-8 xl:text-base xl:gap-10'>
                <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#about">ABOUT US</a></li>
                <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#what">WHAT WE DO</a></li>
                <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#project">PROJECTS</a></li>
                <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#career">CAREERS</a></li>
                <RButton displayText='CONTACT US'/>   
              </ul>
            </div>
          </nav>
        </header>
      </div> 
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu h-full w-1/2 bg-white text-xs gap-4 justify-center items-center">
          {/* Sidebar content here */}
          <div className='flex'>
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary absolute top-4 right-2 bg-transparent border-none text-zinc-950 hover:bg-transparent hover:text-orange-400 transition-all sm:top-8 sm:right-4"><CloseRoundedIcon/></label>
          </div>
          <li><a href="#about" className='hover:text-orange-500 hover:bg-transparent transition-all border-transparent cursor-pointer'>ABOUT US</a></li>
          <li><a href="#what" className='hover:text-orange-500 hover:bg-transparent transition-all border-transparent cursor-pointer'>WHAT WE DO</a></li>
          <li><a href="#project" className='hover:text-orange-500 hover:bg-transparent transition-all border-transparent cursor-pointer'>PROJECTS</a></li>
          <li><a href="#career" className='hover:text-orange-500 hover:bg-transparent transition-all border-transparent cursor-pointer'>CAREERS</a></li>
          <div>
            <RButton displayText='CONTACT US'/>
          </div>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar;