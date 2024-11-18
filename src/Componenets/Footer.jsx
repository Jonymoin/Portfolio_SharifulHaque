import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div id='Footer' className='relative w-full h-full bg-cover bg-center' style={{
        backgroundImage: "url('/images/footer.jpg')"
    }}>  
      
      <div className="absolute inset-0 bg-black opacity-50">
        
      </div>
       
   
    <div className='text-white mt-[100px] flex flex-col items-center justify-center pt-[150px] pb-[100px]'>
      <ul class="flex gap-6 text-2xl z-50">
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://www.facebook.com/sharifulhaque786/"><FaFacebookF/></a></li>
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://twitter.com/m_sharifulhaque"><FaTwitter/></a></li>
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://www.linkedin.com/in/md-shariful-haque-168bab54/"><FaLinkedin/></a></li>
								<li className='hover:scale-125 hover:text-blue-600'><a href="https://www.instagram.com/_shariful_haque_/"><FaInstagram/></a></li>
								
							</ul>

              <h2 className='text-center mt-[50px]'>All rights reserved © 2024 Shariful Haque</h2>
      </div>
    
    </div>

   
        
     
  )
}

export default Footer