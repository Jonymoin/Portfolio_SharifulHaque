import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Header from './Header';
import Tiltcard from './Tiltcard'







const Hero = () => {
  return (
    <div id='Home' style={{backgroundImage: `url('/images/hero-bg.jpg')`}} className='h-full bg-cover text-white  pb-[100px] lg:pb-[200px]'>
       <Header />

      <div className='wrapper flex flex-col-reverse lg:flex-row w-[85%] mx-auto pt-[10px]'>
        <div className='flex flex-col items-center md:items-start lg:w-[60%] '>
            <p className='text-[26px] font-bold mb-[12px] mt-[50px]'><strong>Hello I'm</strong></p>
            <h2 className='text-[95px] font-bold leading-none font-poppins'>Shariful <br /> <span className='text-[#1da1f3]'>Haque</span></h2>
            <p className='mt-5 tracking-wider text-[22px]'>I develop website using ..</p>
            <div>
              <p>PHP</p>
            </div>
            <div className='flex items-center flex-col md:flex-row mt-10 gap-6'>
              <div>
              <button className='py-[15px] px-[42px] bg-[#1da1f3] rounded-[5px] uppercase font-semibold hover:bg-[#0967a1]'>CONTACT ME</button>

              </div>
              <div className=''>

              <ul class="flex gap-6 ">
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://www.facebook.com/sharifulhaque786/"><FaFacebookF/></a></li>
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://twitter.com/m_sharifulhaque"><FaTwitter/></a></li>
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://www.linkedin.com/in/md-shariful-haque-168bab54/"><FaLinkedin/></a></li>
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://www.instagram.com/_shariful_haque_/"><FaInstagram/></a></li>
								
							</ul>
              </div>
            </div>
        </div>

        <div className='flex items-center justify-center ml-auto lg:w-[40%] w-[80%] mb-[220px] md:mb-0'>
            <Tiltcard />
               
        </div>


      </div>
           
    </div>
  )
}

export default Hero