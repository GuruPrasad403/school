// import React from 'react';
// import logo from '../assets/logo.png';

// function Navbar() {
//   return (
//     <nav className='fixed top-0 left-0 right-0 z-20 bg-opacity-50 text-white p-4'>
//       <div className='flex flex-row justify-around items-center'>
//         <div>
//           <img src={logo} alt="Logo" className='w-[15vw] p-3 ml-5' />
//         </div>
//         <ul className='flex flex-row justify-center items-center space-x-6 text-xl'>
//           <li className='cursor-pointer hover:text-gray-300'>Home</li>
//           <li className='cursor-pointer hover:text-gray-300'>Program</li>
//           <li className='cursor-pointer hover:text-gray-300'>About Us</li>
//           <li className='cursor-pointer hover:text-gray-300'>Campus</li>
//           <li className='cursor-pointer hover:text-gray-300'>Testimonials</li>
//           <li>
//             <button className='bg-white text-black rounded-full py-2 px-6 m-2 hover:bg-gray-200'>
//               Contact us
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-opacity-50');
  const [mobileBgColor, setMobileBgColor] = useState('bg-[#252562]');

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100 && window.innerWidth >= 768) { // Adjust value and ensure it's only for desktop
      setBgColor('bg-[#252562]'); // Change this to your desired background color
    } else {
      setBgColor('bg-opacity-50');
    }

    // For mobile view
    if (window.scrollY > 100 && window.innerWidth < 768) { // Adjust value and ensure it's only for mobile
      setMobileBgColor('bg-[#252562]');
    } else {
      setMobileBgColor('bg-[#252562]'); // Ensure the mobile menu background is always visible
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the mobile menu
  const closeMenu = () => setIsOpen(false);

  // Function to handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 text-white p-4 transition-colors duration-300 ${bgColor}`}>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className='w-[40vw] lg:w-[15vw] ml-5' />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:flex-row md:space-x-6 text-xl'>
          <li className='cursor-pointer hover:text-gray-300'>Home</li>
          <li className='cursor-pointer hover:text-gray-300'>Program</li>
          <li className='cursor-pointer hover:text-gray-300'>About Us</li>
          <li className='cursor-pointer hover:text-gray-300'>Campus</li>
          <li className='cursor-pointer hover:text-gray-300'>Testimonials</li>
          <li className='flex items-center'>
            <button className='bg-white text-black rounded-full py-2 px-6 hover:bg-gray-200'>
              Contact us
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='md:hidden text-white focus:outline-none'>
          <svg className={`w-6 h-6 transform ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 ${mobileBgColor} text-white transition-transform duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className='flex justify-end p-4'>
          <button onClick={closeMenu} className='text-white'>
            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className='flex flex-col items-center mt-16 space-y-4 text-xl'>
          <li className='cursor-pointer hover:text-gray-300 py-2 px-4' onClick={closeMenu}>Home</li>
          <li className='cursor-pointer hover:text-gray-300 py-2 px-4' onClick={closeMenu}>Program</li>
          <li className='cursor-pointer hover:text-gray-300 py-2 px-4' onClick={closeMenu}>About Us</li>
          <li className='cursor-pointer hover:text-gray-300 py-2 px-4' onClick={closeMenu}>Campus</li>
          <li className='cursor-pointer hover:text-gray-300 py-2 px-4' onClick={closeMenu}>Testimonials</li>
          <li>
            <button className='bg-white text-black rounded-full py-2 px-6 hover:bg-gray-200' onClick={closeMenu}>
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
