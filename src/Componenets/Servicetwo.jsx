import React from 'react'
import { IoUmbrellaOutline } from "react-icons/io5";
import { TbBox } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import { RiGuideLine } from "react-icons/ri";




const Servicetwo = () => {
  return (
    <main className='flex flex-col lg:flex-row gap-5 mt-[100px] w-[80%] mx-auto'>
        <div>
            <img src="images/service.jpg" alt="" />
            
        </div>

        <div>
             <h3 className='uppercase text-[18px] text-[#1da1fc] font-bold'>Why work with me</h3>
             <h2 className='text-[48px] font-bold leading-[48px]'>Best result with top <br /> user experience</h2>
             <p className='mt-8 text-[18px] text-[#615978]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eureh lit anim id est laborum.</p>

             <ul className='space-y-4 mt-6'>
                <li className='flex items-center gap-5'>
                    <div className='size-14 rounded-full bg-[#1da1f3] flex items-center justify-center text-white text-[25px]'>
                        <IoUmbrellaOutline />  
                    </div>

                    <h2 className='text-[22px] font-bold leading-relaxed  tracking-wide'>Lifetime Support</h2>
                </li>

                <li className='flex items-center gap-5'>
                    <div className='size-14 rounded-full bg-[#1da1f3] flex items-center justify-center text-white text-[25px]'>
                        <TbBox />  
                    </div>

                    <h2 className='text-[22px] font-bold leading-relaxed  tracking-wide'>No Coding Required</h2>
                </li>

                <li className='flex items-center gap-5'>
                    <div className='size-14 rounded-full bg-[#1da1f3] flex items-center justify-center text-white text-[25px]'>
                        <GrUpdate />  
                    </div>

                    <h2 className='text-[22px] font-bold leading-relaxed  tracking-wide'>Regular Update</h2>
                </li>

                <li className='flex items-center gap-5'>
                    <div className='size-14 rounded-full bg-[#1da1f3] flex items-center justify-center text-white text-[25px]'>
                        <RiGuideLine />  
                    </div>

                    <h2 className='text-[22px] font-bold leading-relaxed  tracking-wide'>Proper Guideline</h2>
                </li>
             </ul>
        </div>
    </main>
  )
}

export default Servicetwo