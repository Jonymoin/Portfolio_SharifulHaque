import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';


const Header = () => {

    const [open,setOpen] = useState(false);
    console.log(open)
  return (
    <>
     <div className='flex items-center justify-between w-[85%] mx-auto py-7'>
        <div className='font-bold text-[22px] hover:text-blue-700 cursor-pointer font-poppins'>
            Shariful Haque
        </div>
        <div className='md:hidden'>
           <ul className='gap-4 absolute left-0 mx-auto w-full bg-black font-semibold text-[19px] space-y-3 p-4 z-10' style={{
            top: open ? '60px' : '-400px'
           }}>
           <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out border-b'><Link  activeClass="text-red-500" 
      to="Home" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Home</Link></li>
            <li className='hover:text-yellow-500  cursor-pointer transition-all duration-300 ease-in-out border-b'><Link  activeClass="active" 
      to="About" 
      spy={true} 
      smooth={true} 
    
      duration={500} >About</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out border-b'><Link  activeClass="active" 
      to="Portfolio" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Portfolio</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out border-b'><Link  activeClass="active" 
      to="Service" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Service</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out border-b'><Link  activeClass="active" 
      to="Testimonials" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Testimonials</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out border-b'><Link  activeClass="active" 
      to="Contact" 
      spy={true} 
      smooth={true} 
     
      duration={500} >Contact</Link></li>
           </ul>
        </div>

        <div className='hidden lg:block lg:pr-[17px]'>
            <ul className='md:flex gap-9 font-extrabold text-[18px]'>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'><Link  activeClass="active" 
      to="Home" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Home</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'><Link  activeClass="active" 
      to="About" 
      spy={true} 
      smooth={true} 
     
      duration={500} >About</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'><Link  activeClass="active" 
      to="Portfolio" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Portfolio</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'><Link  activeClass="active" 
      to="Service" 
      spy={true} 
      smooth={true} 
  
      duration={500} >Service</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'><Link  activeClass="active" 
      to="Testimonials" 
      spy={true} 
      smooth={true} 
    
      duration={500} >Testimonials</Link></li>
            <li className='hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out'><Link  activeClass="active" 
      to="Contact" 
      spy={true} 
      smooth={true} 
  
      duration={500} >Contact</Link></li>
            </ul>
        </div>


        <div className='text-3xl cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
            <IoMdMenu  />
        </div>
     </div>
     

    </>

    
  )
 
}

export default Header