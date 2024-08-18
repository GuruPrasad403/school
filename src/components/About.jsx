// import React from 'react';
// import { Title } from './Image';
// import about from '../assets/about.png'


// export default function About(){
//     return(
//         <div className='flex flex-row justify-center gap-[50px] items-ceneter mt-10 pt-20 '>
//             <div className='w-[600px]  '>
//                 <img src={about} className='w-[600px] h-[600px] rounded-2xl'    />
                
//             </div>
//             <div className='w-[700px] flex flex-col justify-around h-[50vh]  items-start basis-[45%] p-10'>
//                 <div className=' flex flex-col justify-start  mx-5'>
//                 <Title titile={'ABOUT UNIVERSITY'} subtitle={'Nurturing Tomorrows Leaders Today '}  />
//                 </div>
//                 <div className='basis-[60%]  text-lg flex justify-evenly flex-col items-center text-justify'>
//                 <p className='my-2 text-lg '>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
//                 <p className='my-2 text-lg '>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
//                 <p className='my-2 text-lg '>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
//                 </div>
//                 </div>
//         </div>
//     )
// }


import React from 'react';
import { Title } from './Image';
import about from '../assets/about.png'

export default function About() {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-[50px] items-center mt-10 pt-20'>
            <div className='w-[90%] lg:w-[600px]'>
                <img src={about} className='w-full h-auto lg:w-[600px] lg:h-[600px] rounded-2xl' />
            </div>
            <div className='w-[90%] lg:w-[700px] flex flex-col justify-around h-auto lg:h-[50vh] items-start basis-[45%] p-5 lg:p-10'>
                <div className='flex flex-col justify-start'>
                    <Title titile={'ABOUT UNIVERSITY'} subtitle={'Nurturing Tomorrows Leaders Today'} />
                </div>
                <div className='text-base lg:text-lg flex justify-evenly flex-col items-start text-justify'>
                    <p className='my-2'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                    <p className='my-2'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                    <p className='my-2'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
                </div>
            </div>
        </div>
    )
}
