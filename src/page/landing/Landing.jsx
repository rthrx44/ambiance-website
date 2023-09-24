import React from 'react'
import Navbar from '../../component/Navbar'
import Logo from '../../component/assets/Logo.png'
import Base from '../../component/assets/Base.png'
import Hexa from '../../component/assets/Hexagon.png'
import Hexa2 from '../../component/assets/Hexa-phone.png'
import Space from '../../component/assets/SpacePlanning.png'
import Layout from '../../component/assets/Layouting.png'
import Build from '../../component/assets/Built.png'
import Lightning from '../../component/assets/Lighting.png'
import Acoustic from '../../component/assets/Acoustics.png'
import Ceilling from '../../component/assets/Ceilling.png'
import BaseThree from '../../component/assets/Base 3.png'
import BaseTwo from '../../component/assets/Base 2.png'
import BaseTwoSmall from '../../component/assets/Base2x.png'
import BaseOne from '../../component/assets/Base 1.png'
import Right from '../../component/assets/RightQuote.png'
import Phone from '../../component/assets/Phone.png'
import Tablet from '../../component/assets/Tablet.png'
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { RButton } from '../../component/Button'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"

function Landing() {
  return (
    <>
      <Navbar/>
      <section>
        <div id='about'>
          <div className='xs:hidden container mx-auto mt-20'>
            <img className='w-full' src={Phone} alt="Hero Banner"/>
            <div className='container absolute justify-center top-56 px-16 xxs:top-[17rem] xxs:px-28'>
              <h1 className='font-serif text-center text-3xl tracking-wide font-medium mb-6'>Simplified Complexity</h1>
              <p className='font-sans text-center text-xs mb-6'>A raw idea is complex but by having collaboration with us, the experts. <br/>it can be refined or simplified.</p>
              <div className='flex justify-center'>
                <RButton displayText='ABOUT US'/>
              </div>
            </div>
          </div>
          <div className='hidden xs:flex md:hidden container mx-auto mt-20 sm:mt-28'>
            <img className='w-full' src={Tablet} alt="Hero Banner"/>
            <div className='container absolute top-40 pl-4 sm:pl-6 sm:top-[14.5rem]'>
              <h1 className='font-serif text-2xl tracking-wide font-medium mb-6 sm:text-3xl'>Simplified Complexity</h1>
              <p className='font-sans text-start text-[0.6rem] mb-6 sm:text-xs'>A raw idea is complex but by having collaboration with us, the experts. <br/>it can be refined or simplified.</p>
              <div className='flex'>
                <RButton displayText='ABOUT US'/>
              </div>
            </div>
          </div>
          <div className='hidden md:flex container mx-auto mt-28 lg:mt-[7.5rem] xl:mt-32'>
            <img className='w-full' src={Base} alt="Hero Banner"/>
            <div className='container absolute pl-12 top-[13.5rem] lg:top-[17rem] lg:pl-20 xl:top-[22rem] xl:pl-36 2xl:top-[25rem]'>
              <h1 className='font-serif text-4xl tracking-wide font-medium mb-6 lg:text-5xl'>Simplified Complexity</h1>
              <p className='font-sans text-start text-xs mb-6 lg:text-sm xl:text-base'>A raw idea is complex but by having collaboration with us, the experts. <br/>it can be refined or simplified.</p>
              <div className='flex'>
                <RButton displayText='ABOUT US'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto relative xs:hidden'>
          <img className='bg-cover w-full opacity-30' src={Hexa2} alt="Hexagon" />
          <div className='absolute top-0 h-full flex items-center text-center'>
            <p className='font-serif text-base font-medium leading-9 px-[3.2rem] xxs:leading-10 xxs:px-24'>We at Ambiance Interior Design have been passionate about creating spaces reflecting the individuality of our client. Imagination and knowledge are the core values that drive us. We strive to push our imagination for a fresh look injected with design savvy and an eye for detail in the modern and eclectic styles we predominantly design in.</p>
          </div>
        </div>
        <div className='container mx-auto relative hidden xs:flex'>
          <img className='bg-cover w-full opacity-30' src={Hexa} alt="Hexagon" />
          <div className='absolute top-0 h-full flex items-center text-center'>
            <p className='font-serif text-[0.6rem] leading-4 tracking-wider px-4 sm:text-xs sm:leading-5 sm:px-5 md:px-12 lg:px-20 lg:text-base xl:px-36 xl:text-lg'>We at Ambiance Interior Design have been passionate about creating spaces reflecting the individuality of our client. Imagination and knowledge are the core values that drive us. We strive to push our imagination for a fresh look injected with design savvy and an eye for detail in the modern and eclectic styles we predominantly design in.</p>
          </div>
        </div>
      </section>
      <section id='what' className='mt-24 text-center container mx-auto'>
        <h1 className='font-serif text-2xl tracking-wide font-medium mb-6 lg:text-3xl 2xl:text-4xl'>What We Do</h1>
        <p className='font-sans text-xs px-8 xs:px-4 lg:text-sm xl:text-base'>We strive to push our imagination for a fresh look injected with design savvy and an eye for <br/>detail in the modern and eclectic styles we predominantly design in.</p>
      </section>
      <section className='mt-12 gap-4 container mx-auto'>
        <div className='flex flex-row justify-center'>
          <Swiper
            slidesPerView={1}
            modules={[ Navigation ]}
            navigation={{
              nextEl: '.button-next-slide',
              prevEl: '.button-prev-slide',
            }}
            breakpoints={{
              640: {slidesPerView: 2,
                    spaceBetween: -130},
              768: {slidesPerView: 2,
                    spaceBetween: -240},
              1024: {slidesPerView: 3,
                    spaceBetween: -200},
              1280: {slidesPerView: 3,
                    spaceBetween: -290},
              1536: {slidesPerView: 4,
                    spaceBetween: -190},
              }}
          >
            <SwiperSlide>
              <div className='flex flex-col items-center group transition-all'>
                <div>
                  <img className='h-72 group-hover:-translate-y-1 transition-all' src={Space} alt="Space Planning" />
                  <h4 className='font-sans text-sm font-medium pl-2 pt-4 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Space Planning</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center group transition-all'>
                <div>
                  <img className='h-72 group-hover:-translate-y-1 transition-all' src={Layout} alt="Layout" />
                  <h4 className='font-sans text-sm font-medium pl-2 pt-4 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Layouting</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center group transition-all'>
                <div>
                  <img className='h-72 group-hover:-translate-y-1 transition-all' src={Build} alt="Built-In/Custom Furniture" />
                  <h4 className='font-sans text-sm font-medium pl-2 pt-4 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Built-In/Custom Furniture</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center group transition-all'>
                <div>
                  <img className='h-72 group-hover:-translate-y-1 transition-all' src={Lightning} alt="Lightning" />
                  <h4 className='font-sans text-sm font-medium pl-2 pt-4 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Lightning</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center group transition-all'>
                <div>
                  <img className='h-72 group-hover:-translate-y-1 transition-all' src={Acoustic} alt="Acoustics" />
                  <h4 className='font-sans text-sm font-medium pl-2 pt-4 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Acoustics</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center group transition-all'>
                <div>
                  <img className='h-72 group-hover:-translate-y-1 transition-all' src={Ceilling} alt="Ceilling Designs" />
                  <h4 className='font-sans text-sm font-medium pl-2 pt-4 group-hover:-translate-y-1 group-hover:text-orange-500 transition-all'>Ceilling Designs</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='flex justify-center gap-12 mt-8'>
          <div className='button-prev-slide'><WestRoundedIcon className='hover:text-orange-500 transition-all' sx={{ fontSize: 30 }}/></div>
          <div className='button-next-slide'><EastRoundedIcon className='hover:text-orange-500 transition-all' sx={{ fontSize: 30 }}/></div>
        </div>
      </section>
      <section className='mt-24 container mx-auto xs:grid grid-cols-2'>
        <div id='project' >
          <img src={BaseThree} alt="Furniture" />
        </div>
        <div className='flex flex-col text-center mt-12 justify-center px-4 xs:text-left xs:mt-0 sm:px-8 lg:px-16 xl:px-28 2xl:px-36'>
          <h1 className='font-serif text-2xl tracking-wide font-medium mb-6 lg:text-3xl 2xl:text-4xl'>Projects</h1>
          <p className='font-sans text-xs mb-6 xs:mb-4 md:mb-6 lg:text-sm xl:text-base'>We're what we do. We are a passionately driven team, specializing in residential interiors for both private and commercial clients throughout the world.</p>
          <div className='flex justify-center xs:justify-start'>
            <RButton displayText='VIEW MORE'/>
          </div>
        </div>
      </section>
      <section className='mt-24 container mx-auto relative'>
        <div className='container mx-auto relative xs:hidden'>
          <img className='bg-cover w-full opacity-30' src={Hexa2} alt="Hexagon" />
          <div className='absolute top-0 h-full flex flex-col justify-center'>
            <div className='flex flex-col items-center text-center px-4'>
              <img className='w-16 mb-8' src={Right} alt="Right Quote" />
              <p className='font-serif text-base font-medium leading-9 mb-6 px-6 xxs:leading-10 xxs:px-24'>It is very satisfying when a decision we make turns out to have been the best one.</p>
              <p className='font-serif text-base font-medium leading-9 px-6 xxs:leading-10'>Jane Doe</p>
            </div>
            <div className='flex justify-center gap-12 mt-8'>
              <div className='button-prev-slide'><WestRoundedIcon className='hover:text-orange-500 transition-all' sx={{ fontSize: 30 }}/></div>
              <div className='button-next-slide'><EastRoundedIcon className='hover:text-orange-500 transition-all' sx={{ fontSize: 30 }}/></div>
            </div>
          </div>
        </div>
        <div className='container mx-auto relative hidden xs:flex xs:justify-center'>
          <img className='bg-cover w-full opacity-30' src={Hexa} alt="Hexagon" />
          <div className='absolute top-0 h-full flex flex-row items-center xs:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36'>
            <div className='button-prev-slide'><WestRoundedIcon className='hover:text-orange-500 transition-all' sx={{ fontSize: 30 }}/></div>
              <div className='flex flex-col items-center text-center'>
                <img className='w-8 mb-2 sm:w-10 md:w-12 lg:mb-4' src={Right} alt="Right Quote" />
                <p className='font-serif text-[0.6rem] leading-4 tracking-wider px-4 sm:text-xs sm:leading-5 sm:px-20 sm:mb-2 md:px-36 lg:px-44 lg:text-base lg:mb-4 xl:px-52 xl:text-lg'>It is very satisfying when a decision we make turns out to have been the best one.</p>
                <p className='font-serif text-[0.6rem] leading-4 tracking-wider px-4 sm:text-xs sm:leading-5 lg:text-base xl:text-lg'>Jane Doe</p>
              </div>
            <div className='button-next-slide'><EastRoundedIcon className='hover:text-orange-500 transition-all' sx={{ fontSize: 30 }}/></div>
          </div>
        </div>
      </section>
      <section className='mt-24 container mx-auto xs:grid grid-cols-2'>
        <div className='flex justify-center order-2'>
          <img className='px-4 sm:pr-8 md:pr-12 lg:pr-28 xl:pr-36' src={BaseOne} alt="People Planning" />
        </div>
        <div className='flex flex-col text-center mt-12 justify-center px-4 order-1 xs:text-left xs:mt-0 sm:px-8 md:px-12 lg:pl-28 xl:pl-36'>
          <h1 className='font-serif text-2xl tracking-wide font-medium mb-6 lg:text-3xl 2xl:text-4xl'>Be Part Of Our Team</h1>
          <p className='font-sans text-xs mb-6 xs:mb-4 md:mb-6 lg:text-sm xl:text-base'>Explore opportunities to take your career to the next level. Join our team of talented individuals and let us support your curiosity and creative talent.</p>
          <div className='flex justify-center xs:justify-start'>
            <RButton displayText='LEARN MORE'/>
          </div>
        </div>
      </section>
      <section className='container mx-auto relative'>
        <div className=''>
          <img className='w-full py-44 3xs:py-32 xxs:py-24 xs:hidden' src={BaseTwoSmall} alt="Wood Furniture" />
          <img className='w-full hidden py-[17.5rem] xs:flex xl:py-52 2xl:py-48' src={BaseTwo} alt="Wood Furniture" />
          <div id='career' className='absolute top-0 mt-24 mx-6 py-8 px-12 bg-white text-center shadow-md shadow-slate-200 xxs:py-12 xs:mx-12 sm:mx-16 md:mx-28 lg:mx-56 xl:mx-80 2xl:mx-[26rem]'>
            <h1 className='font-serif text-2xl tracking-wide font-medium mb-6 3xs:px-8 xxs:px-14 lg:text-3xl 2xl:text-4xl'>Your Space Should Reflect Who You Are</h1>
            <p className='font-sans text-xs mb-6 xs:mb-4 md:mb-6 lg:text-sm xl:text-base'>Ready to get started? Let us know about your project!</p>
            <form className="flex flex-col gap-4 mb-8 xxs:px-4 xs:px-8 sm:px-16 md:px-20 2xl:px-28">
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
              <RButton displayText='LEARN MORE'/>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-24 container mx-auto flex flex-col items-center gap-16 xs:mt-28 md:mt-20 lg:mt-12 xl:mt-24'>
        <div>
          <a href="#home"><img className='h-8 cursor-pointer' src={Logo} alt="Ambiance Interior Design Studio" /></a>
        </div>
        <ul className='font-sans flex flex-col items-center gap-10 text-xs font-normal tracking-wide transition-all container xs:flex-row xs:justify-center lg:text-sm lg:gap-8 xl:text-base xl:gap-10'>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#about">ABOUT US</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#what">WHAT WE DO</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#project">PROJECTS</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#career">CAREERS</a></li>
          <li className='hover:text-orange-500 transition-all cursor-pointer'><a href="#contact">CONTACT US</a></li>
        </ul>
      </section>
      <footer className='mt-16 pb-8 text-center'>
        <p className='font-sans text-xs'>©2022 Ambiance Interior Design Studio</p>
      </footer>
    </>
  )
}

export default Landing