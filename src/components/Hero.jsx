// import React from 'react';
// import whiteArrow from '../assets/dark-arrow.png'

// function Hero() {
//   return (
//     <div className='relative flex justify-center items-center w-full h-[100vh] bg-cover bg-center'>
//       {/* Overlay */}
//       <div className='absolute inset-0 bg-[#252562] opacity-60'></div>

//       {/* Content */}
//       <div className='relative z-10 text-center text-white w-5/12 flex flex-col'>
//         <h1 className='text-6xl font-bold mb-4'>We Ensure better education for a better world</h1>
//         <div>
//         <p className='text-xl text-center mb-8'>Our cuttinf-edge curriculu₼is designed to empower student with the knowledge, skill, and experiences needed to excel the dynamic field of education.</p>
//         <button className='bg-white inline-flex flex-row justify-center items-center text-black rounded-full p-3 m-2 hover:bg-gray-200'>
//               <span className='p-2'>Explore more </span>
//               <img className="w-[25px]" src={whiteArrow} />
//             </button>
//             </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from 'react';
import whiteArrow from '../assets/dark-arrow.png';

function Hero() {
  return (
    <div className='relative flex justify-center items-center w-full h-[100vh] bg-cover bg-center px-4'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-[#252562] opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 text-center text-white w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-8'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>
          We Ensure Better Education for a Better World
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl mb-8'>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <button className='bg-white inline-flex flex-row justify-center items-center text-black rounded-full p-3 m-2 hover:bg-gray-200'>
          <span className='p-2'>Explore More</span>
          <img className="w-6 sm:w-8 md:w-10" src={whiteArrow} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
