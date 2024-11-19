import React from 'react'
import { AiOutlineDesktop } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdDeveloperBoard } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { RiSeoLine } from "react-icons/ri";






const Service = () => {
  return (
    <main id='Service' className='bg-[#303c46] mt-[100px] py-[100px]'>
          <h1 className='text-center text-3xl font-semibold text-white pb-10'>SERVICE</h1>

          <div className='w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
               <div className='max-w-[500px] max-h-[320px] border border-slate-500 rounded-lg p-6 group hover:bg-white transition-all'>
                  <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <div className='w-24 h-24 rounded-full bg-[#ffffff1a] flex items-center justify-center group group-hover:bg-[#1da1f3] transition-all'>
                       <AiOutlineDesktop className='text-[#1da1f3] font-extralight text-[36px] group-hover:text-white' /> 

                       
                  </div>

                  <h2 className='text-white mt-6 text-2xl font-bold mb-10 group-hover:text-black'>Android Mobile Apps</h2>
                  </div>
               </div>

               <div className='max-w-[500px] max-h-[320px] border border-slate-500 rounded-lg p-6 group hover:bg-white transition-all'>
                  <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <div className='w-24 h-24 rounded-full bg-[#ffffff1a] flex items-center justify-center group group-hover:bg-[#1da1f3] transition-all'>
                       <IoGameControllerOutline className='text-[#1da1f3] font-extralight text-[36px] group-hover:text-white' /> 

                       
                  </div>

                  <h2 className='text-white mt-6 text-2xl font-bold mb-10 group-hover:text-black'>Web Application</h2>
                  </div>
               </div>

               <div className='max-w-[500px] max-h-[320px] border border-slate-500 rounded-lg p-6 group hover:bg-white transition-all'>


                  <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <div className='w-24 h-24 rounded-full bg-[#ffffff1a] flex items-center justify-center group group-hover:bg-[#1da1f3] transition-all'>
                       <MdDeveloperBoard className='text-[#1da1f3] font-extralight text-[36px] group-hover:text-white' /> 

                       
                  </div>

                  <h2 className='text-white mt-6 text-2xl font-bold mb-10 group-hover:text-black'>Web Development</h2>
                  </div>
               </div>

               <div className='max-w-[500px] max-h-[320px] border border-slate-500 rounded-lg p-6 group hover:bg-white transition-all'>
                  <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <div className='w-24 h-24 rounded-full bg-[#ffffff1a] flex items-center justify-center group group-hover:bg-[#1da1f3] transition-all'>
                       <CgIfDesign className='text-[#1da1f3] font-extralight text-[36px] group-hover:text-white' /> 

                       
                  </div>

                  <h2 className='text-white mt-6 text-2xl font-bold mb-10 group-hover:text-black'>Web Design</h2>
                  </div>
               </div>

               <div className='max-w-[500px] max-h-[320px] border border-slate-500 rounded-lg p-6 group hover:bg-white transition-all'>
                  <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <div className='w-24 h-24 rounded-full bg-[#ffffff1a] flex items-center justify-center group group-hover:bg-[#1da1f3] transition-all'>
                       <RiSeoLine className='text-[#1da1f3] font-extralight text-[36px] group-hover:text-white' /> 

                       
                  </div>

                  <h2 className='text-white mt-6 text-2xl font-bold mb-10 group-hover:text-black'>Search Engine Optimization</h2>
                  </div>
               </div>

               <div className='max-w-[500px] max-h-[320px] border border-slate-500 rounded-lg p-6 group hover:bg-white transition-all'>
                  <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <div className='w-24 h-24 rounded-full bg-[#ffffff1a] flex items-center justify-center group group-hover:bg-[#1da1f3] transition-all'>
                       <AiOutlineDesktop className='text-[#1da1f3] font-extralight text-[36px] group-hover:text-white' /> 

                       
                  </div>

                  <h2 className='text-white mt-6 text-2xl font-bold mb-10 group-hover:text-black'>Android Mobile Apps</h2>
                  </div>
               </div>
          </div>
    </main>
  )
}

export default Service