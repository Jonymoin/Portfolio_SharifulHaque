import React from 'react'

const Portfolio = () => {
  return (
    <main id='Portfolio' className='mt-[100px]'>

     <div className='flex items-center justify-center gap-3'>
     <div className='flex items-center justify-center w-0 h-0 border-r-[20px]  border-b-[20px] border-r-transparent border-b-cyan-500'>

     </div>
     <div>
         <h2 className='text-[28px] uppercase text-black font-semibold'>Portfolio
         </h2>
      </div>
     <div className='flex items-center justify-center w-0 h-0 border-l-[20px]  border-b-[20px] border-l-transparent border-b-cyan-500'>

     </div>
 </div>

         <p className='text-center w-1/2 md:w-[40%] mx-auto mt-[15px] mb-[15px] text-[18px]'>
         Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est.
             
         </p>

         <div className='flex items-center justify-center '>
         <div className='flex gap-2'>
          <button className='border-[1px] px-[12px] py-[6px] border-[#e0e0e0] rounded-[4px] bg-transparent hover:bg-[#007aff]'>All</button>
          <button className='border-[1px] px-[12px] py-[6px] border-[#e0e0e0] rounded-[4px] bg-transparent hover:bg-[#007aff]'>Programming</button>
          <button className='border-[1px] px-[12px] py-[6px] border-[#e0e0e0] rounded-[4px] bg-transparent hover:bg-[#007aff]'>Development</button>
          <button className='border-[1px] px-[12px] py-[6px] border-[#e0e0e0] rounded-[4px] bg-transparent hover:bg-[#007aff]'>Design</button>
          <button className='border-[1px] px-[12px] py-[6px] border-[#e0e0e0] rounded-[4px] bg-transparent hover:bg-[#007aff]'>Application</button>
         </div>
         </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto  gap-4'>
        <div className='relative  group overflow-hidden rounded-lg'>
             <img src="images/bc.jpg" alt=""  className='w-full h-full object-cover' />

             <div className='absolute inset-0'>

              <div className='absolute top-[30%] p-2 opacity-0 group group-hover:opacity-100 group-hover:top-[70%] duration-1000 z-10'>
                <h3 className='text-center text-white font-semibold text-[22px] '>Application</h3>
                <h2 className='text-[25px] font-bold text-center text-white leading-[20px]'>She's got a smile that seems to me</h2>
              </div>

              <div className='size-14 bg-slate-200 rounded-full flex items-center justify-center absolute top-[80%] left-[44%] opacity-0 group group-hover:opacity-100 group-hover:top-[46%] duration-1000 z-10 cursor-pointer'>
                  <p className='font-bold text-[22px] text-center'>+</p>
              </div>
               
               <div className='absolute top-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:top-0 duration-1000'>
                  
               </div>

               <div className='absolute bottom-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:bottom-0 duration-1000'>
                  
               </div>
             </div>
        </div>

        <div className='relative  group overflow-hidden rounded-lg'>
             <img src="images/bicker.jpg" alt=""  className='w-full h-full object-cover' />

             <div className='absolute inset-0'>

              <div className='absolute top-[30%] p-2 opacity-0 group group-hover:opacity-100 group-hover:top-[70%] duration-1000 z-10'>
                <h3 className='text-center text-white font-semibold text-[22px]'>Application</h3>
                <h2 className='text-[30px] text-center text-white'>She's got a smile that seems to me</h2>
              </div>

              <div className='size-14 bg-slate-200 rounded-full flex items-center justify-center absolute top-[80%] left-[44%] opacity-0 group group-hover:opacity-100 group-hover:top-[46%] duration-1000 z-10 cursor-pointer'>
                  <p className='font-bold text-[22px] text-center'>+</p>
              </div>
               
               <div className='absolute top-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:top-0 duration-1000'>
                  
               </div>

               <div className='absolute bottom-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:bottom-0 duration-1000'>
                  
               </div>
             </div>
        </div>

        <div className='relative  group overflow-hidden rounded-lg'>
             <img src="images/box.jpg" alt=""  className='w-full h-full object-cover' />

             <div className='absolute inset-0'>

              <div className='absolute top-[30%] p-2 opacity-0 group group-hover:opacity-100 group-hover:top-[70%] duration-1000 z-10'>
                <h3 className='text-center text-white font-semibold text-[22px]'>Application</h3>
                <h2 className='text-[30px] text-center text-white'>She's got a smile that seems to me</h2>
              </div>

              <div className='size-14 bg-slate-200 rounded-full flex items-center justify-center absolute top-[80%] left-[44%] opacity-0 group group-hover:opacity-100 group-hover:top-[46%] duration-1000 z-10 cursor-pointer'>
                  <p className='font-bold text-[22px] text-center'>+</p>
              </div>
               
               <div className='absolute top-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:top-0 duration-1000'>
                  
               </div>

               <div className='absolute bottom-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:bottom-0 duration-1000'>
                  
               </div>
             </div>
        </div>

        <div className='relative  group overflow-hidden rounded-lg'>
             <img src="images/chair.jpg" alt=""  className='w-full h-full object-cover' />

             <div className='absolute inset-0'>

              <div className='absolute top-[30%] p-2 opacity-0 group group-hover:opacity-100 group-hover:top-[70%] duration-1000 z-10'>
                <h3 className='text-center text-white font-semibold text-[22px]'>Application</h3>
                <h2 className='text-[30px] text-center text-white'>She's got a smile that seems to me</h2>
              </div>

              <div className='size-14 bg-slate-200 rounded-full flex items-center justify-center absolute top-[80%] left-[44%] opacity-0 group group-hover:opacity-100 group-hover:top-[46%] duration-1000 z-10 cursor-pointer'>
                  <p className='font-bold text-[22px] text-center'>+</p>
              </div>
               
               <div className='absolute top-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:top-0 duration-1000'>
                  
               </div>

               <div className='absolute bottom-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:bottom-0 duration-1000'>
                  
               </div>
             </div>
        </div>

        <div className='relative  group overflow-hidden rounded-lg'>
             <img src="images/table.jpg" alt=""  className='w-full h-full object-cover' />

             <div className='absolute inset-0'>

              <div className='absolute top-[30%] p-2 opacity-0 group group-hover:opacity-100 group-hover:top-[70%] duration-1000 z-10'>
                <h3 className='text-center text-white font-semibold text-[22px]'>Application</h3>
                <h2 className='text-[30px] text-center text-white'>She's got a smile that seems to me</h2>
              </div>

              <div className='size-14 bg-slate-200 rounded-full flex items-center justify-center absolute top-[80%] left-[44%] opacity-0 group group-hover:opacity-100 group-hover:top-[46%] duration-1000 z-10 cursor-pointer'>
                  <p className='font-bold text-[22px] text-center'>+</p>
              </div>
               
               <div className='absolute top-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:top-0 duration-1000'>
                  
               </div>

               <div className='absolute bottom-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:bottom-0 duration-1000'>
                  
               </div>
             </div>
        </div>

        <div className='relative  group overflow-hidden rounded-lg'>
             <img src="images/tree.jpg" alt=""  className='w-full h-full object-cover' />

             <div className='absolute inset-0'>

              <div className='absolute top-[30%] p-2 opacity-0 group group-hover:opacity-100 group-hover:top-[70%] duration-1000 z-10'>
                <h3 className='text-center text-white font-semibold text-[22px]'>Application</h3>
                <h2 className='text-[30px] text-center text-white'>She's got a smile that seems to me</h2>
              </div>

              <div className='size-14 bg-slate-200 rounded-full flex items-center justify-center absolute top-[80%] left-[44%] opacity-0 group group-hover:opacity-100 group-hover:top-[46%] duration-1000 z-10 cursor-pointer'>
                  <p className='font-bold text-[22px] text-center'>+</p>
              </div>
               
               <div className='absolute top-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:top-0 duration-1000'>
                  
               </div>

               <div className='absolute bottom-[-100%] left-0 h-1/2 w-full bg-[#007aff] opacity-80 group group-hover:bottom-0 duration-1000'>
                  
               </div>
             </div>
        </div>

      
        </div>
    </main>
  )
}

export default Portfolio