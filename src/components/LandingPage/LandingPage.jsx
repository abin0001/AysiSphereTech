import Logo from "../../img/Brand-Logo.png"
import React from 'react'
import Footer from '../footer'

const LandingPage = () => {
  return (
    <div>
      <img className="absolute w-screen h-screen z-[-1]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2460316.jpg&f=1&nofb=1&ipt=8f910afe3d0160c99ccb6939be5925962d9bbfaf95f987df4907b022fdfa08b4&ipo=images" alt="" />
      <section className='w-screen h-screen bg-[#0F051D]/90'>
          <div className='md:flex md:justify-between w-[90%] h-[95%] md:ml-[5%] items-center'>
            <div className="w-1/2">
              <h1 className=" md:font-extrabold md:text-[50px] md:ml-20">Empower your small scale Business with us </h1>
                <p className="md:ml-20 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti tempora quis eligendi laudantium aperiam in voluptates vitae eaque vero.</p>

                <button className='shadow-lg shadow-[#0fffff]/50 transition delay-150 bg-[#0fffff] rounded-lg w-40 h-10 md:ml-20 mt-10 font-extrabold text-black hover:-translate-y-1 hover:scale-110 duration-300 '>Get Start</button>
            </div>
            <div className="flex w-1/2 items-end p-5" >
            <img className="w-96 rounded-2xl absolute right-10 z-[1]" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
            <img className="w-96 rounded-2xl absolute right-[520px] bottom-96" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
            <img className="w-96 rounded-2xl absolute right-24  bottom-52" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
            <img className="w-96 rounded-2xl absolute right-[582px] bottom-16" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbornrealist.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbusiness-discussion.jpg&f=1&nofb=1&ipt=09846ce05ce07c3eb1cbaec4a7facd0f21425c826c9f9d79a3aa1e51c0b9dea0&ipo=images'} alt=""/>
            </div>
          </div>     
      </section>
      
      <Footer></Footer>

    </div>
  )
}

export default LandingPage
