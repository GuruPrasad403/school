import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-20 bg-opacity-50 text-white p-4'>
      <div className='flex flex-row justify-around items-center'>
        <div>
          <img src={logo} alt="Logo" className='w-[15vw] p-3 ml-5' />
        </div>
        <ul className='flex flex-row justify-center items-center space-x-6 text-xl'>
          <li className='cursor-pointer hover:text-gray-300'>Home</li>
          <li className='cursor-pointer hover:text-gray-300'>Program</li>
          <li className='cursor-pointer hover:text-gray-300'>About Us</li>
          <li className='cursor-pointer hover:text-gray-300'>Campus</li>
          <li className='cursor-pointer hover:text-gray-300'>Testimonials</li>
          <li>
            <button className='bg-white text-black rounded-full py-2 px-6 m-2 hover:bg-gray-200'>
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
