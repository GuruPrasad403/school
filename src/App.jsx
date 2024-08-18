// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Image from './components/Image';
// import About from './components/About';
// import Gallery from './components/Gallery'
// import Testimonials from './components/Testimonials'
// import Contact from './components/Contact';
// function App() {
//   return (
//     <>
//     <div 
//       className="relative w-full h-screen bg-cover bg-center "
//       style={{ 
//         backgroundImage: "url('./src/assets/hero.png'), linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7))" 
//       }}
//     >
//       <Navbar />
//       <Hero />
//       <Image />
//       <About />
//       <Gallery />
//       <Testimonials/>
//       <Contact /> 
//       <div className='flex justify-between items-baseline  mx-16 p-5 h-20 ' style={{borderTop:"solid gray 2px"}}>
//           <div className='text-xl'>© 2024 Edusity. All rights reserved.</div>
//           <div className='flex text-xl flex-row justify-between w-72'> 
//               <p> Terms of Services </p>
//               <p>Privacy Policy</p> 
//           </div>
//     </div>
//     </div>
    
//     </>
//   );
// }

// export default App;


import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Image from './components/Image';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import hero from './src/assets/hero.png'

function App() {
  return (
    <>
      <div 
        className="relative w-full h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${hero}), linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7))`
        }}
      >
        <Navbar />
        <Hero />
        <Image />
        <About />
        <Gallery />
        <Testimonials/>
        <Contact /> 

        <div className='flex flex-col sm:flex-row justify-between items-baseline mx-4 sm:mx-16 p-5 h-20 border-t-2 border-gray-400'>
          <div className='text-base sm:text-xl'>
            © 2024 Edusity. All rights reserved.
          </div>
          <div className='flex flex-col sm:flex-row text-sm sm:text-xl mt-2 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-6'>
            <p className='cursor-pointer hover:text-gray-300'>Terms of Services</p>
            <p className='cursor-pointer hover:text-gray-300'>Privacy Policy</p> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
