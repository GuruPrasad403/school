// import { Title } from "./Image";
// import leftArrow from '../assets/back-icon.png';
// import rightArrow from '../assets/next-icon.png';
// import user1 from '../assets/user-1.png';
// import user2 from '../assets/user-2.png';
// import user3 from '../assets/user-3.png';
// import user4 from '../assets/user-4.png';
// import { useState } from "react";

// function Testimonials() {
//     const cardData = [
//         {
//             src: user1,
//             name: "Emily Williams",
//             place: "Edusity, USA",
//             review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
//         },
//         {
//             src: user2,
//             name: "William Jackson",
//             place: "Edusity, USA",
//             review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
//         },
//         {
//             src: user3,
//             name: "Emily Williams",
//             place: "Edusity, USA",
//             review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
//         },
//         {
//             src: user4,
//             name: "William Jackson",
//             place: "Edusity, USA",
//             review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
//         }
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
//     };

//     return (
//         <>
//             <Title titile={'TESTIMONIALS'} subtitle={'What Student Says'}></Title>

//             <div className="relative my-[50px] mx-[100px] flex justify-center items-center p-5 ">
//                 <img 
//                     onClick={prevSlide}
//                     className="cursor-pointer w-[50px] z-10 rounded-full p-[15px] bg-blue-900 absolute left-[10%] top-1/2 transform -translate-y-1/2" 
//                     src={leftArrow} 
//                     alt="Previous Slide" 
//                 />
//                 <div className="flex justify-center items-center overflow-hidden w-full">
//                     <div 
//                         className="flex transition-transform duration-500 ease-in-out"
//                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                     >
//                         {cardData.map((ele, index) => (
//                             <div key={index} className="min-w-full flex justify-center h-full">
//                                 <Card src={ele.src} name={ele.name} place={ele.place} review={ele.review} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <img 
//                     onClick={nextSlide}
//                     className="cursor-pointer w-[50px] rounded-full p-[15px] bg-blue-900 absolute right-[10%] top-1/2 transform -translate-y-1/2" 
//                     src={rightArrow} 
//                     alt="Next Slide" 
//                 />
//             </div>
//         </>
//     );
// }

// export default Testimonials;

// const Card = ({ src, name, place, review }) => {
//     return (
//         <div className="flex flex-col justify-center items-start p-8 w-[50vw] h-[30vh] shadow-2xl bg-white rounded-lg">
//             <div className="flex flex-row justify-start items-center mb-4">
//                 <div className="bg-blue-900 flex justify-center items-center rounded-full w-16 h-16">
//                     <img src={src} className="rounded-full w-14 h-14" />
//                 </div>
//                 <div className="pl-5">
//                     <p className="text-blue-900 text-2xl"> {name}</p>
//                     <p className="text-zinc-600 text-lg"> {place}</p>
//                 </div>
//             </div> 
//             <div className="text-justify text-xl text-gray-700 w-[40vw]">
//                 <p>{review}</p>
//             </div>
//         </div>
//     );
// };



import { Title } from "./Image";
import leftArrow from '../assets/back-icon.png';
import rightArrow from '../assets/next-icon.png';
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
import user4 from '../assets/user-4.png';
import { useState } from "react";

function Testimonials() {
    const cardData = [
        {
            src: user1,
            name: "Emily Williams",
            place: "Edusity, USA",
            review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
        {
            src: user2,
            name: "William Jackson",
            place: "Edusity, USA",
            review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
        {
            src: user3,
            name: "Emily Williams",
            place: "Edusity, USA",
            review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
        {
            src: user4,
            name: "William Jackson",
            place: "Edusity, USA",
            review: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    };

    return (
        <>
            <Title title={'TESTIMONIALS'} subtitle={'What Students Say'} />

            <div className="relative my-8 mx-4 md:mx-8 lg:mx-16 flex items-center">
                <img 
                    onClick={prevSlide}
                    className="cursor-pointer w-8 md:w-10 lg:w-12 z-10 rounded-full p-2 md:p-3 lg:p-4 bg-blue-900 absolute left-2 md:left-4 lg:left-8 top-1/2 transform -translate-y-1/2"
                    src={leftArrow} 
                    alt="Previous Slide" 
                />
                <div className="flex overflow-hidden w-full">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {cardData.map((ele, index) => (
                            <div key={index} className="flex-shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 px-2">
                                <Card src={ele.src} name={ele.name} place={ele.place} review={ele.review} />
                            </div>
                        ))}
                    </div>
                </div>
                <img 
                    onClick={nextSlide}
                    className="cursor-pointer w-8 md:w-10 lg:w-12 rounded-full p-2 md:p-3 lg:p-4 bg-blue-900 absolute right-2 md:right-4 lg:right-8 top-1/2 transform -translate-y-1/2"
                    src={rightArrow} 
                    alt="Next Slide" 
                />
            </div>
        </>
    );
}

export default Testimonials;

const Card = ({ src, name, place, review }) => {
    return (
        <div className="flex flex-col justify-center items-start p-4 md:p-6 lg:p-8 bg-white shadow-xl rounded-lg">
            <div className="flex items-center mb-4">
                <div className="bg-blue-900 flex justify-center items-center rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <img src={src} className="rounded-full w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                </div>
                <div className="pl-4">
                    <p className="text-blue-900 text-lg md:text-xl lg:text-2xl"> {name}</p>
                    <p className="text-zinc-600 text-sm md:text-base lg:text-lg"> {place}</p>
                </div>
            </div> 
            <div className="text-justify w-80 lg:w-96 text-sm md:text-base lg:text-lg text-gray-700">
                <p>{review}</p>
            </div>
        </div>
    );
};

