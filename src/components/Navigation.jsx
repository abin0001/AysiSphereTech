import React, { useState } from 'react';
import Logo from '../img/Logo.png';


const Navigation = () => {
  let[open,setOpen]=useState(false);
  return (

    
    <div>

      <div className=" fixed flex mt-5 h-16 w-[95%] md:ml-[2.5%] z-[4] mx-auto rounded-xl 2xl:pr-20 2xl:pl-20 md:pr-10 md:pl-10 pr-5 pl-5 items-center justify-between bg-black">
        <div>
          <a href="/"><img src={Logo} className=' w-36 h-12' alt="Logo"/></a>
        </div>

        <div className={`xl:flex flex-col xl:justify-between md:w-1/3 xl:border-none xl:bg-transparent  p-1 font-bold xl:flex-row rounded-lg absolute xl:static xl:z-auto z-[-1] sm:w-1/2 w-1/3 m-10 border-2 text-center sm:m-10 mt-5 right-0 transition-all duration-500 ${open ? 'top-20':'top-[-490px]'}`}>
        <div className='xl:hover:scale-110 transition delay-75 rounded-lg p-2 mt-1 text-center xl:hover:text-[#0fff] xl:hover:bg-transparent hover:bg-slate-400 xl:hover:-translate-y-1'><a className=' bg-transparent' href="/">Home</a></div>
        <div className='xl:hover:scale-110 transition delay-75 rounded-lg p-2 mt-1 text-center xl:hover:text-[#0fff] xl:hover:bg-transparent hover:bg-slate-400 xl:hover:-translate-y-1'><a className=' bg-transparent' href="#about">About</a></div>
        <div className='xl:hover:scale-110 transition delay-75 rounded-lg p-2 mt-1 text-center xl:hover:text-[#0fff] xl:hover:bg-transparent hover:bg-slate-400 xl:hover:-translate-y-1'><a className=' bg-transparent' href="#services">Our Services</a></div>
        <div className='xl:hover:scale-110 transition delay-75 rounded-lg p-2 mt-1 text-center xl:hover:text-[#0fff] xl:hover:bg-transparent hover:bg-slate-400 xl:hover:-translate-y-1'><a className=' bg-transparent' href="#works">Our Works</a></div>
        <div className='xl:hover:scale-110 transition delay-75 rounded-lg p-2 mt-1 text-center xl:hover:text-[#0fff] xl:hover:bg-transparent hover:bg-slate-400 xl:hover:-translate-y-1'><a className=' bg-transparent' href="#contact">Contact Us</a></div>
          
        </div>
        
        
        <div className='xl:block hidden'>
          <button className='shadow-lg shadow-[#0fffff]/50 transition delay-150 bg-[#0fffff] rounded-lg w-20 h-8 font-extrabold text-black hover:-translate-y-1 hover:scale-110 duration-300 '>Join</button>
        </div>

        <div onClick={()=>setOpen(!open)} className='xl:hidden text-4xl'>
        <ion-icon name={open ? "close":"menu"}></ion-icon>
       </div>
      </div>
    </div> 
  )
}
export default Navigation
