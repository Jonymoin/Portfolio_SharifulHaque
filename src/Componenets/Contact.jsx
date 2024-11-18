import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



const Contact = () => {
  return (
    <main className='mt-[100px] w-[80%] mx-auto' id='Contact'>
        <h2 className='text-center text-[22px] font-semibold mb-3'>GET IN TOUCH</h2>
        <p className='text-center px-[15%] text-[19px] text-slate-400'>We would be happy to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

        <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex items-center gap-4'>
                <div className='size-16 bg-[#1da1f3] rounded-full flex items-center justify-center text-white text-[28px]'>
                   <FaMapMarkerAlt />
                </div>
                <div>
                    <h2 className='text-[22px] font-bold'>Address</h2>
                    <p className='text-[20px] text-slate-400'>Ajman, United Arab Emirates</p>
                </div>
                 
                 
            </div>
            <div className='flex items-center gap-4'>
                <div className='size-16 bg-[#1da1f3] rounded-full flex items-center justify-center text-white text-[28px]'>
                   <FaPhoneAlt />
                </div>
                <div>
                    <h2 className='text-[22px] font-bold'>Address</h2>
                    <p className='text-[20px] text-slate-400'>Ajman, United Arab Emirates</p>
                </div>
                 
                 
            </div>
            <div className='flex items-center gap-4'>
                <div className='size-16 bg-[#1da1f3] rounded-full flex items-center justify-center text-white text-[28px]'>
                   <MdOutlineEmail />
                </div>
                <div>
                    <h2 className='text-[22px] font-bold'>Address</h2>
                    <p className='text-[20px] text-slate-400'>Ajman, United Arab Emirates</p>
                </div>
                 
                 
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-5 mt-[50px]'>
            <div className='md:w-1/2'>
            <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115329.73968972088!2d55.44354760103535!3d25.402990738614267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5764dd8fbe79%3A0xcda090de6445a819!2sAjman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1730948221590!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='md:w-1/2'>

            <h2 className='font-bold text-[38px] mb-4'>Write me a message</h2>
                 <form>
                    <div className='flex flex-col md:flex-row gap-4'>
                    
                    <input type="text" placeholder='Name*' required className='border rounded-md w-full md:w-1/2 px-4 py-2'/>
                    <input type="email" placeholder='Email*' required className='border rounded-md w-full md:w-1/2 px-4 py-2'/>
                    </div>
                    <div className='mt-4'>
                        <textarea name="write" id="" placeholder='write a message' className='border w-full h-56 p-4'></textarea>
                    </div>

                    <button className='px-10 py-4 bg-[#1da1f3] rounded-md font-bold text-[20px] text-white hover:bg-black duration-300 mt-3'>Send Message</button>
                 </form>
            </div>
        </div>
    </main>
  )
}

export default Contact