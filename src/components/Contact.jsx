// import { Title } from "./Image";
// import message from '../assets/msg-icon.png';
// import mailIcon from '../assets/mail-icon.png';
// import phoneIcon from '../assets/phone-icon.png';
// import locationIcon from '../assets/location-icon.png';
// import EmailSender from './Email';

// function Contact() {
//     const links = [
//         {
//             src: mailIcon,
//             link: "contact@gmail.com"
//         },
//         {
//             src: phoneIcon,
//             link: "+12 8951657957"
//         },
//         {
//             src: locationIcon,
//             link: "77 Massachusetts Ave, Cambridge MA 02139, United States"
//         },
//     ];

//     return (
//         <>
//             <Title titile={'Contact Us'} subtitle={'Get in Touch'} />

//             <div className="flex flex-row justify-center gap-[10%] items-start w-full h-[60vh] mt-10">
//                 <div className="flex flex-col justify-between basis-[40%] items-start w-[30vw] h-auto">
//                     <div className="flex flex-row justify-start items-center mb-4">
//                         <h1 className="text-4xl font-bold">Send us a message</h1>
//                         <span><img src={message} className="w-8 h-8 ml-2" /></span>
//                     </div>
//                     <p className="text-justify text-2xl w-[25vw  ] text-zinc-600 mb-6">
//                         Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
//                     </p>
//                     <div className="flex flex-col space-y-3">
//                         {links.map((ele, index) => <Line key={index} src={ele.src} link={ele.link} />)}
//                     </div>
//                 </div>
//                 <div className=" felx justify-center items-center basis-[30%] bottom-10 px-10">
//                         <div className="w-[25vw] px-10">
//                             <EmailSender />
//                         </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// const Line = ({ src, link }) => {
//     return (
//         <div className="flex flex-row items-center my-1">
//             <img src={src} className="w-6 h-6 mr-2" />
//             <p className="text-lg">{link}</p>
//         </div>
//     );
// };

// export default Contact;


import React from 'react';
import { Title } from './Image';
import message from '../assets/msg-icon.png';
import mailIcon from '../assets/mail-icon.png';
import phoneIcon from '../assets/phone-icon.png';
import locationIcon from '../assets/location-icon.png';
import EmailSender from './Email';

function Contact() {
    const links = [
        {
            src: mailIcon,
            link: "contact@gmail.com"
        },
        {
            src: phoneIcon,
            link: "+12 8951657957"
        },
        {
            src: locationIcon,
            link: "77 Massachusetts Ave, Cambridge MA 02139, United States"
        },
    ];

    return (
        <>
            <Title title={'Contact Us'} subtitle={'Get in Touch'} />
            <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 items-start w-full h-auto lg:h-[60vh] mt-8 lg:mt-12">
                <div className="flex flex-col justify-between basis-full lg:basis-[40%] items-start w-full lg:w-[30vw] h-auto px-4 lg:px-8">
                    <div className="flex flex-row justify-start items-center mb-4">
                        <h1 className="text-2xl lg:text-4xl font-bold">Send us a message</h1>
                        <span><img src={message} className="w-6 lg:w-8 h-6 lg:h-8 ml-2" alt="Message Icon" /></span>
                    </div>
                    <p className="text-base lg:text-lg text-zinc-600 mb-6">
                        Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                    </p>
                    <div className="flex flex-col space-y-3">
                        {links.map((ele, index) => <Line key={index} src={ele.src} link={ele.link} />)}
                    </div>
                </div>
                <div className="flex justify-center items-center basis-full lg:basis-[30%] w-full px-4 lg:px-8">
                    <div className="w-full lg:w-[25vw]">
                        <EmailSender />
                    </div>
                </div>
            </div>
        </>
    );
}

const Line = ({ src, link }) => {
    return (
        <div className="flex flex-row items-center my-1">
            <img src={src} className="w-5 h-5 mr-2 lg:w-6 lg:h-6" alt="Contact Icon" />
            <p className="text-base lg:text-lg">{link}</p>
        </div>
    );
};

export default Contact;
