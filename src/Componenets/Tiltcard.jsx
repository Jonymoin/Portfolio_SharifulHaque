import React from 'react'

import { Tilt } from 'react-tilt';
import { FaWordpress } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaJoomla } from "react-icons/fa";
import { TfiDrupal } from "react-icons/tfi";
const Tiltcard = () => {
  return (
    <Tilt
    className="Tilt"
    options={{ max: 25, speed: 400 }}
    style={{ height: 310, width: 425 }}
  >
   <div className='w-[100%] ml-auto   group group-hover:rotate-0 transition-all duration-1000 ease-in-out relative'>
                  <img src="/images/hero_main_image.png" alt="" className='w-[100%] md:w-[95%]'  />
                 <ul>
                 <li className='p-4 bg-[#21759b] inline-block rounded-lg absolute top-[80px] right-[370px] rotate-12 group group-hover:rotate-0 duration-700'><FaWordpress className='text-6xl'/></li>
                  <li className='p-4 bg-[#f55247] inline-block rounded-lg absolute top-[120px] right-[50px] rotate-[-20deg] group group-hover:rotate-0 duration-700'><FaLaravel className='text-6xl'/></li>
                  <li className='p-4 bg-[#7ac143] inline-block rounded-lg absolute right-[380px] top-[350px] rotate-[-10deg] group group-hover:rotate-0 duration-700'><FaJoomla className='text-6xl'/></li>
                  <li className='p-4 bg-[#0077c0] inline-block rounded-lg absolute top-[350px] right-[40px] rotate-12 group group-hover:rotate-0 duration-700'><TfiDrupal className='text-6xl'/></li>
                 </ul>
                  
             </div>
  </Tilt>
  )
}

export default Tiltcard