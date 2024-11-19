import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { SlRocket } from "react-icons/sl";


const Intro = () => {
  return (
    <div className='pt-[100px]'>
        <div className='flex items-center justify-center gap-6'>
            <div className='flex items-center justify-center w-0 h-0 border-r-[20px]  border-b-[20px] border-r-transparent border-b-cyan-500'>

            </div>
            <div>
                <h2 className='text-[28px] uppercase text-black font-semibold '>Welcome to my World
                </h2>
                
            </div>
            <div className='flex items-center justify-center w-0 h-0 border-l-[20px]  border-b-[20px] border-l-transparent border-b-cyan-500'>

            </div>
        </div>

        <p className='text-center text-[22px]'>I'm a young tech enthasist and entrepreneur who love to take risk. I <br /> grew up in a tech family in Dhaka City.</p>


        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mt-[50px]'>
         <div className='w-[415px] h-[383px] relative group'>
         <div className='bg-[#1da1f3] absolute inset-0 rounded-lg transition-transform ease-in-out duration-500 transform cursor-pointer group group-hover:rotate-[-10deg]'>
            

          </div>
          <div className='absolute bg-white inset-0 border border-slate-500 rounded-lg p-[48px] '>
              <FaReact className='text-[#1da1f3] text-6xl'/>
              <h2 className='text-black text-[28px] font-semibold mt-5'>Creativity</h2>
              <p className='text-[18px] mt-4'>Creativity is the process of turning new and imaginative ideas into reality. It is characterized by the ability to come up with new and different ideas. It is a skill that can be learned and improved upon.</p>
            </div>
         </div>

         <div className='w-[415px] h-[383px] relative group'>
         <div className='bg-[#1da1f3] absolute inset-0 rounded-lg transition-transform ease-in-out duration-500 transform cursor-pointer group group-hover:rotate-[-10deg]'>
            

          </div>
          <div className='absolute bg-white inset-0 border border-slate-500 rounded-lg p-[48px] '>
              <IoDiamondOutline className='text-[#1da1f3] text-6xl'/>
              <h2 className='text-black text-[28px] font-semibold mt-5'>Dedication</h2>
              <p className='text-[18px] mt-4'>Dedication in work is the key to success. It is the commitment to do whatever it takes to achieve a goal. It means putting in the extra effort, working longer hours, and making sacrifices.

</p>
            </div>
         </div>


         <div className='w-[415px] h-[383px] relative group'>
         <div className='bg-[#1da1f3] absolute inset-0 rounded-lg transition-transform ease-in-out duration-500 transform cursor-pointer group group-hover:rotate-[-10deg]'>
            

          </div>
          <div className='absolute bg-white inset-0 border border-slate-500 rounded-lg p-[48px] '>
              <SlRocket className='text-[#1da1f3] text-6xl rotate-[-45deg]'/>
              <h2 className='text-black text-[28px] font-semibold mt-5'>Hard Work</h2>
              <p className='text-[18px] mt-4'>There is no substitute for hard work. It is the key to success in any field. Those who are successful have worked hard to achieve their goals. Hard work is not always easy, but it is worth the effort.

</p>
            </div>
         </div>

        </div>
    </div>
  )
}

export default Intro