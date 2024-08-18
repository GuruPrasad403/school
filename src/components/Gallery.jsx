// import gallery1 from '../assets/gallery-1.png'
// import gallery2 from '../assets/gallery-2.png'
// import gallery3 from '../assets/gallery-3.png'
// import gallery4 from '../assets/gallery-4.png'
// import arrow from '../assets/white-arrow.png'
// import { Title } from './Image'

// const arr = [gallery1, gallery2,gallery3,gallery4]

// function Gallery(){
//     return (
//         <>
//             <div className='flex flex-col justify-center items-center w-full'>
//                 <div>
//                     <Title titile={'Gallery'} subtitle={'Campus Photos'}/>
//                 </div>
//                 <div className='flex flex-row justify-evenly mt-10 items-center p-10 w-[85vw]   '>
//                     {
//                         arr.map(ele=>{
//                             return (  
//                                   <img src={ele} className='rounded-xl w-96 h-96 basis-[21%] ' />
//                         )})
//                     }
//                 </div>

//                 <div className='p-5'>
//                         <button className='flex felx-col w-52 border-none justify-center items-center  py-3 px-8 bg-blue-900 text-white rounded-full'>
//                             <span>See More here</span><img src={arrow} className='w-10 p-2 text-sm' />
//                         </button>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default Gallery;



import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import arrow from '../assets/white-arrow.png'
import { Title } from './Image'

const arr = [gallery1, gallery2, gallery3, gallery4]

function Gallery() {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full'>
                <div>
                    <Title titile={'Gallery'} subtitle={'Campus Photos'} />
                </div>
                <div className='flex flex-wrap justify-evenly mt-10 items-center p-10 w-full lg:w-[85vw] gap-5'>
                    {
                        arr.map(ele => {
                            return (
                                <img src={ele} className='rounded-xl w-full sm:w-[48%] md:w-[31%] lg:w-96 h-auto lg:h-96 basis-[21%]' />
                            )
                        })
                    }
                </div>

                <div className='p-5'>
                    <button className='flex flex-col w-40 lg:w-52 border-none justify-center items-center py-3 px-6 lg:px-8 bg-blue-900 text-white rounded-full'>
                        <span>See More here</span>
                        <img src={arrow} className='w-6 lg:w-10 p-1 lg:p-2 text-sm' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Gallery;
