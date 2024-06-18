import React from 'react'
import Footer from '../footer'
import { FaArrowDown } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div>
      <img className="absolute w-screen h-screen z-[-1]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2460316.jpg&f=1&nofb=1&ipt=8f910afe3d0160c99ccb6939be5925962d9bbfaf95f987df4907b022fdfa08b4&ipo=images" alt="" />
      <section className='w-screen h-screen bg-[#0F051D]/90'>
          <div className='md:flex flex-wrap-reverse md:justify-between w-[90%] h-[94%] md:ml-[5%] items-center'>
            <div className="w-1/2">
              <h1 className=" md:font-extrabold lg:text-[50px] xl:text-[60px] md:ml-20">Empower your small scale Business with us</h1>
                <p className="md:ml-20 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti tempora quis eligendi laudantium aperiam in voluptates vitae eaque vero.</p>
                <button className='shadow-lg shadow-[#0fffff]/50 transition delay-150 bg-[#0fffff] rounded-lg w-40 h-10 md:ml-20 mt-10 font-extrabold text-black hover:-translate-y-1 hover:scale-110 duration-300 '>Get Start</button>
            </div>
            <div className="flex w-1/2 items-end p-5 relative h-[70vh]" >
              <img className="xl:w-80 rounded-2xl md:absolute md:right-12 md:top-12" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
              <img className="xl:w-80 rounded-2xl md:absolute md:left-24 md:top-28" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
              <img className="xl:w-80 rounded-2xl md:absolute md:right-24  md:bottom-28" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
              <img className="xl:w-80 rounded-2xl md:absolute md:left-12 md:bottom-12" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
            </div>
          </div>  
          <div className='w-full flex justify-center'>
             <a href="#about"> <div className='w-fit p-5 rounded-full border-2 border-[#0fffff] shadow-[#0fffff] animate-bounce'>  <FaArrowDown></FaArrowDown> </div>
             </a>          
          </div>   
      </section>
    
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
