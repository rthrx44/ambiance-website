import React from 'react'
import Navbar from '../../component/Navbar'
import Logo from '../../component/assets/Logo.png'
import Base from '../../component/assets/Base.png'
import Hexa from '../../component/assets/Hexagon.png'
import Space from '../../component/assets/SpacePlanning.png'
import Layout from '../../component/assets/Layouting.png'
import Build from '../../component/assets/Built.png'
import Lightning from '../../component/assets/Lighting.png'
import Acoustic from '../../component/assets/Acoustics.png'
import Ceilling from '../../component/assets/Ceilling.png'
import BaseThree from '../../component/assets/Base 3.png'
import BaseTwo from '../../component/assets/Base 2.png'
import BaseOne from '../../component/assets/Base 1.png'
import Right from '../../component/assets/RightQuote.png'
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { RButton } from '../../component/Button'

function Landing() {
  return (
    <>
      <Navbar/>
      <section className='container pt-24'>
        <img className='w-auto -z-10' src={Base} alt="Hero Banner" />
        <div className='absolute top-64 pl-12'>
          <h1 id='about' className='font-serif text-2xl tracking-wide font-medium mb-6'>Simplified Complexity</h1>
          <p className='font-sans text-xs mb-6'>A raw idea is complex but by having collaboration with us, the experts. <br/>it can be refined or simplified.</p>
          <RButton displayText='ABOUT US'/>
        </div>
      </section>
      <section className='container relative text-center'>
        <img className='w-full opacity-10 -z-10' src={Hexa} alt="Hexagon" />
        <p className='absolute top-0 font-sans text-xs py-20 px-36'>We at Ambiance Interior Design have been passionate about creating spaces reflecting the individuality of our client. Imagination and knowledge are the core values that drive us. We strive to push our imagination for a fresh look injected with design savvy and an eye for detail in the modern and eclectic styles we predominantly design in.</p>
      </section>
      <section className='text-center mt-20'>
        <h1 id='what' className='font-serif text-2xl tracking-wide font-medium mb-6'>What We Do</h1>
        <p className='font-sans text-xs'>We strive to push our imagination for a fresh look injected with design savvy and an eye for <br/>detail in the modern and eclectic styles we predominantly design in.</p>
      </section>
      <section className='container gap-4 mt-12'>
        <div className='flex flec-col'>
          <div className='flex flex-col group transition-all'>
            <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Space} alt="Space Planning" />
            <h4 className='font-sans text-xs pl-2 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Space Planning</h4>
          </div>
          <div className='flex flex-col group transition-all'>
            <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Layout} alt="Layout" />
            <h4 className='font-sans text-xs pl-2 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Layouting</h4>
          </div>
          <div className='flex flex-col group transition-all'>
            <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Build} alt="Built-In/Custom Furniture" />
            <h4 className='font-sans text-xs pl-2 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Built-In/Custom Furniture</h4>
          </div>
          <div className='flex flex-col group transition-all'>
            <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Lightning} alt="Lightning" />
            <h4 className='font-sans text-xs pl-2 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Lightning</h4>
          </div>
          <div className='flex flex-col group transition-all'>
            <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Acoustic} alt="Acoustics" />
            <h4 className='font-sans text-xs pl-2 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Acoustics</h4>
          </div>
          <div className='flex flex-col group transition-all'>
            <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Ceilling} alt="Ceilling Designs" />
            <h4 className='font-sans text-xs pl-2 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Ceilling Designs</h4>
          </div>
        </div>
        <div className='flex justify-center gap-6 mt-6 transition-all'>
          <WestRoundedIcon className='hover:text-orange-500 transition-all'/>
          <EastRoundedIcon className='hover:text-orange-500 transition-all'/>
        </div>
      </section>
      <section className='container section grid grid-cols-2 gap-4'>
        <div id='project' >
          <img src={BaseThree} alt="Furniture" />
        </div>
        <div className='flex flex-col pl-12 justify-center'>
          <h1 className='font-serif text-2xl tracking-wide font-medium mb-6'>Projects</h1>
          <p className='font-sans text-xs mb-6'>We're what we do. We are a passionately driven team, specializing in residential interiors for both private and commercial clients throughout the world.</p>
          <div>
            <RButton displayText='VIEW MORE'/>
          </div>
        </div>
      </section>
      <section className='container section relative flex justify-around'>
        <img className='w-full opacity-10 -z-10' src={Hexa} alt="Hexagon" />
        <div className='absolute flex top-8 gap-24 items-center'>
          <WestRoundedIcon className='hover:text-orange-500 transition-all'/>
          <div className='flex flex-col items-center text-center px-4'>
            <img className='w-12 mb-8' src={Right} alt="Right Quote" />
            <p className='font-sans text-sm mb-6'>It is very satisfying when a decision we make turns out to have been the best one.</p>
            <p className='font-sans text-sm'>Jane Doe</p>
          </div>
          <EastRoundedIcon className='hover:text-orange-500 transition-all'/>
        </div>
      </section>
      <section className='container section grid grid-cols-2 gap-4'>
        <div className='flex flex-col pl-12 justify-center'>
          <h1 className='font-serif text-2xl tracking-wide font-medium mb-6'>Be Part Of Our Team</h1>
          <p className='font-sans text-xs mb-6'>Explore opportunities to take your career to the next level. Join our team of talented individuals and let us support your curiosity and creative talent.</p>
          <div>
            <RButton displayText='LEARN MORE'/>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='max-w-sm' src={BaseOne} alt="People Planning" />
        </div>
      </section>
      <section className='container section flex justify-center'>
        <img className='w-full h-80 mt-32' src={BaseTwo} alt="Wood Furniture" />
        <div id='career' className='absolute bg-white items-center py-16 px-32 shadow-md shadow-slate-200'>
          <h1 className='font-serif text-2xl text-center tracking-wide font-medium mb-6'>Be Part Of Our Team</h1>
          <p className='font-sans text-xs text-center mb-6'>Ready to get started? Let us know about your project!</p>
          <form className="flex flex-col gap-4 mb-8">
            <div className="border border-slate-400 rounded-md text-xs p-2">
              <input
                type="text"
                name="name"
                id="name"
                className="text-xs w-full bg-transparent outline-none"
                placeholder="Name"
                required />
            </div>
            <div className="border border-slate-400 rounded-md text-xs p-2">
              <input
                type="email"
                name="email"
                id="email"
                className="text-xs w-full bg-transparent outline-none"
                placeholder="Email Address"
                required />
            </div>
            <div className="border border-slate-400 rounded-md text-xs p-2">
              <textarea
                cols="30"
                rows="10"
                type="textarea"
                name="message"
                id="message"
                className="text-xs w-full bg-transparent outline-none"
                placeholder="Message"
                required>
              </textarea>
            </div>
          </form>
          <div className='flex justify-center'>
            <RButton displayText='SUBMIT'/>
          </div>
        </div>
      </section>
      <section className='container section flex flex-col items-center gap-16 '>
        <div>
          <a href="#home"><img className='h-8 cursor-pointer mt-36' src={Logo} alt="Ambiance Interior Design Studio" /></a>
        </div>
        <ul className='font-sans flex items-center gap-10 text-xs font-normal tracking-wide transition-all'>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#about">ABOUT US</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#what">WHAT WE DO</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#project">PROJECTS</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#career">CAREERS</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#contact">CONTACT US</a></li>
        </ul>
      </section>
      <footer className='mt-16 mb-8 text-center'>
        <p className='font-sans text-xs'>©2022 Ambiance Interior Design Studio</p>
      </footer>
    </>
  )
}

export default Landing