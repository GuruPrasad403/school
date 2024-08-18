// import program1 from '../assets/program-1.png'
// import program2 from '../assets/program-2.png'
// import program3 from '../assets/program-3.png'
// import img1 from '../assets/program-icon-1.png'
// import img2 from '../assets/program-icon-2.png'
// import img3 from '../assets/program-icon-3.png'

// const data= [
//     {
//         src:program1,
//         icon:img1,
//         title:"Graduation Degree",
//     },
//     {
//         src:program2,
//         icon:img2,
//         title:"Master Degree",
//     },
//     {
//         src:program3,
//         icon:img3,
//         title:"Post Graduation",
//     },
// ]

// function Image(){
//     return(
//         <div className='flex flex-col justify-center items-center w-[98vw] overflow-hidden'>

//             <Title titile={'OUR PROGRAM'} subtitle={'What We Offer'} />
//             <div className='flex flex-row justify-center items-center basis-[45%] w-[100vw]'>    
//                 {data.map(ele=>{
//                     return(
//                          <div className="flex justify-around relative m-10 cursor-pointer rounded-xl items-center w-[22%] h-[22%]">
//                             <div>
//                                 <img src={ele.src} className='rounded-xl '  /> 
//                              </div>
//                             <div className='absolute rounded-xl t-0 l-0 b-0 r-0  h-[100%] w-[100%] flex flex-col justify-center items-center text-white pt-[500px]  opacity-0 hover:opacity-80 hover:pt-[0]  transition-[1s] bg-gradient-to-r from-[#afaffa8c] to-[#afaffa8c]'>
//                                 <img src={ele.icon} className='w-[50px]' />
//                                 <caption className='text-xl font-bold '>{ele.title}</caption>
//                             </div>
//                         </div>
//                     )
//                  })}
//             </div>
//         </div>
//     )

// }

// export const Title =({titile,subtitle})=>{
//     return(
//         <div className='h-28 pt-10 flex flex-col justify-center items-center'>
//                 <p className='text-blue-800 text-xl font-bold'>{titile}</p>
//                 <h1 className='text-4xl font-bold '>{subtitle}  </h1>
//             </div>
//     )
// }
// export default Image;

import program1 from '../assets/program-1.png';
import program2 from '../assets/program-2.png';
import program3 from '../assets/program-3.png';
import img1 from '../assets/program-icon-1.png';
import img2 from '../assets/program-icon-2.png';
import img3 from '../assets/program-icon-3.png';

const data = [
    {
        src: program1,
        icon: img1,
        title: "Graduation Degree",
    },
    {
        src: program2,
        icon: img2,
        title: "Master Degree",
    },
    {
        src: program3,
        icon: img3,
        title: "Post Graduation",
    },
];

function Image() {
    return (
        <div className='flex flex-col justify-center items-center w-full overflow-hidden px-4 mt-20'>
            <Title titile={'OUR PROGRAM'} subtitle={'What We Offer'} />
            <div className='flex flex-wrap justify-center items-center w-full gap-6'>
                {data.map((ele, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer rounded-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden"
                    >
                        <img src={ele.src} className='rounded-xl w-full h-auto object-cover' alt={ele.title} />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#afaffa8c] to-[#afaffa8c] opacity-0 hover:opacity-80 transition-opacity duration-1000'>
                            <img src={ele.icon} className='w-12 md:w-16 lg:w-20' alt={ele.title} />
                            <caption className='text-lg md:text-xl lg:text-2xl font-bold'>{ele.title}</caption>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const Title = ({ titile, subtitle }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center pt-10'>
            <p className='text-blue-800 text-xl font-bold'>{titile}</p>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>{subtitle}</h1>
        </div>
    );
};

export default Image;
