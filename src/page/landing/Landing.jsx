import React from 'react'
import Navbar from '../../component/Navbar'
import Base from '../../component/assets/Base.png'
import Hexa from '../../component/assets/Hexagon.png'
import Space from '../../component/assets/SpacePlanning.png'
import Layout from '../../component/assets/Layouting.png'
import Build from '../../component/assets/Built.png'
import Lightning from '../../component/assets/Lighting.png'
import Acoustic from '../../component/assets/Acoustics.png'
import Ceilling from '../../component/assets/Ceilling.png'
import { RButton } from '../../component/Button'

function Landing() {
  return (
    <>
      <Navbar/>
      <section className='container relative'>
        <img className='w-auto h-auto -z-10' src={Base} alt="Hero Banner" />
        <div id='about' className='absolute top-40 pl-12'>
          <h1 className='font-serif text-3xl tracking-wide font-medium mb-6'>Simplified Complexity</h1>
          <p className='font-sans text-sm mb-6'>A raw idea is complex but by having collaboration with us, the experts. <br/>it can be refined or simplified.</p>
          <RButton displayText='ABOUT US'/>
        </div>
      </section>
      <section className='container relative text-center'>
        <img className='w-full h-auto opacity-10 -z-10' src={Hexa} alt="Hexagon Box" />
        <p className='absolute top-0 font-sans text-sm py-20 px-36'>We at Ambiance Interior Design have been passionate about creating spaces reflecting the individuality of our client. Imagination and knowledge are the core values that drive us. We strive to push our imagination for a fresh look injected with design savvy and an eye for detail in the modern and eclectic styles we predominantly design in.</p>
      </section>
      <section className='text-center mt-20'>
      <h1 className='font-serif text-3xl tracking-wide font-medium mb-6'>What We Do</h1>
      <p className='font-sans text-sm'>We strive to push our imagination for a fresh look injected with design savvy and an eye for <br/>detail in the modern and eclectic styles we predominantly design in.</p>
      </section>
      <section className='container flex gap-4 mt-12'>
        <div className='flex flex-col group transition-all'>
          <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Space} alt="Space Planning" />
          <h4 className='font-sans text-sm pl-2 group-hover:-translate-y-1 group-hover:text-orange-400 transition-all'>Space Planning</h4>
        </div>
        <div className='flex flex-col group transition-all'>
          <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Layout} alt="Layout" />
          <h4 className='font-sans text-sm pl-2 group-hover:-translate-y-1 group-hover:text-orange-400 transition-all'>Layouting</h4>
        </div>
        <div className='flex flex-col group transition-all'>
          <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Build} alt="Built-In/Custom Furniture" />
          <h4 className='font-sans text-sm pl-2 group-hover:-translate-y-1 group-hover:text-orange-400 transition-all'>Built-In/Custom Furniture</h4>
        </div>
        <div className='flex flex-col group transition-all'>
          <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Lightning} alt="Lightning" />
          <h4 className='font-sans text-sm pl-2 group-hover:-translate-y-1 group-hover:text-orange-400 transition-all'>Lightning</h4>
        </div>
        <div className='flex flex-col group transition-all'>
          <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Acoustic} alt="Acoustics" />
          <h4 className='font-sans text-sm pl-2 group-hover:-translate-y-1 group-hover:text-orange-400 transition-all'>Acoustics</h4>
        </div>
        <div className='flex flex-col group transition-all'>
          <img className='h-72 rounded-lg group-hover:-translate-y-1 transition-all' src={Ceilling} alt="Ceilling Designs" />
          <h4 className='font-sans text-sm pl-2 group-hover:-translate-y-1 group-hover:text-orange-400 transition-all'>Ceilling Designs</h4>
        </div>
      </section>
    </>
  )
}

export default Landing