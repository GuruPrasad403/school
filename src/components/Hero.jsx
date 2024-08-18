import React from 'react';
import whiteArrow from '../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='relative flex justify-center items-center w-full h-[100vh] bg-cover bg-center'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-[#252562] opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 text-center text-white w-5/12 flex flex-col'>
        <h1 className='text-6xl font-bold mb-4'>We Ensure better education for a better world</h1>
        <div>
        <p className='text-xl text-center mb-8'>Our cuttinf-edge curriculu₼is designed to empower student with the knowledge, skill, and experiences needed to excel the dynamic field of education.</p>
        <button className='bg-white inline-flex flex-row justify-center items-center text-black rounded-full p-3 m-2 hover:bg-gray-200'>
              <span className='p-2'>Explore more </span>
              <img className="w-[25px]" src={whiteArrow} />
            </button>
            </div>
      </div>
    </div>
  );
}

export default Hero;
