import { useState, useEffect } from 'react';
import Intro from './Intro';
import Service from './Service';
import Servicetwo from './Servicetwo';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import About from './About';


const Navbar = () => {
  const [showNewNavbar, setShowNewNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) { // 300px এর পরিবর্তে আপনার প্রয়োজনীয় scroll point ব্যবহার করতে পারেন।
        setShowNewNavbar(true);
      } else {
        setShowNewNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      
      {showNewNavbar && (
        <nav className="bg-black fixed top-0 w-full z-50 text-white transition duration-700 ease-in-out">
          <Header />
        </nav>
      )}

      {/* Content */}
      <div className="pt-16">
      <Intro />
     <About />
      <Service />
      <Servicetwo />
      <Portfolio />
      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default Navbar