import React from 'react'

const About = () => {
  return (
    <main id='About' className='mt-[100px] mb-[100px]   bg-[#f2f5fb] py-[100px]'>
       <section className='flex flex-col md:flex-row gap-7 w-[80%] md:h-[600px] mx-auto'>
        
        <div className='relative md:w-1/2 mx-auto'>
            <img src="images/about-image-1.png" alt=""/>
            <img src="images/about-image-2.png" alt="" className='absolute left-[250px] top-[200px]'/>
            <div className='size-12 bg-[#007aff] rounded-xl absolute left-[100px] top-[480px]'>
                

            </div>
            <div className='size-16 border-[6px] border-[#007aff] rounded-2xl absolute left-[440px] top-[80px]
                '>

                </div>
        </div> 
        <div className='mt-[120px] md:mt-0  md:w-1/2 '>
           <h2 className='uppercase text-[#007aff] font-bold'>About me</h2>
           <h2 className='text-[48px] mb-[30px] font-bold leading-[58px]'>I develop Websites & Business</h2>
           <p className='text-[#615978] text-[18px] mb-[10px]'>I have been developing Websites and Businesses for over 7 years. I have a lot of experience in this field, and I am very good at what I do. I am always up for a new challenge, and I am always looking for new ways to improve my skills. I am very passionate about my work, and I am always striving to be the best that I can be.</p>

           <p className='text-[#615978] text-[18px] mb-[10px]'>I am confident in my abilities, and I know that I am capable of achieving great things. I am excited to see what the future holds, and I am looking forward to continuing to work hard and make a positive impact in the world.</p>

           <div className='flex flex-col md:flex-row md:gap-10 gap-3'>
            <div className='space-y-3'>
                <div className='space-y-1'>
                <h2 className='font-bold'>NAME</h2>
                <p className='text-[#615978] text-[18px]'>Md Shariful Haque</p>
                </div>
                <div className='space-y-1'>
                <h2 className='font-bold'>EMAIL</h2>
                <p className='text-[#615978] text-[18px]'>sharifulhaque786@gmail.com</p>
                </div>
                <div className='space-y-1'>
                <h2 className='font-bold'>PHONE</h2>
                <p className='text-[#615978] text-[18px]'>+971586890550</p>
                </div>
            </div>
            <div className='space-y-3'>
                <div className='space-y-1'>
                <h2 className='font-bold'>AGE</h2>
                <p className='text-[#615978] text-[18px]'>33 Years</p>
                </div>
                <div className='space-y-1'>
                <h2 className='font-bold uppercase'>Education</h2>
                <p className='text-[#615978] text-[18px]'>Bachelor of Business Studies</p>
                </div>
                <div className='space-y-1'>
                <h2 className='font-bold uppercase'>Freelance</h2>
                <p className='text-[#615978] text-[18px]'>Available</p>
                </div>
            </div>
             
           </div>

           <button className='bg-[#1da1f3] text-white px-[30px] py-[12px] rounded-[5px] text-[18px] font-semibold mt-[10px]'>Download CV</button>
        </div>
       </section>
    </main>
  )
}

export default About