// import React, { useState } from 'react'
// import thg1 from '../../assets/Gallery/thg1.jpeg';
// import thg2 from '../../assets/Gallery/thg2.jpeg';
// import thg3 from '../../assets/Gallery/thg3.png';
// import thg4 from '../../assets/Gallery/thg4.jpeg';
// import thg6 from '../../assets/Gallery/thg6.jpg';
// import thg7 from '../../assets/Gallery/thg7.jpg';
// import { FaCircleChevronRight } from "react-icons/fa6";
// import { FaCircleChevronLeft } from "react-icons/fa6";


// const GuestHouseGallery = () => {
//     const gallery=[{
//         id:1,
//         img:thg1
//     },{
//         id:2,
//         img:thg2
        
//     },{
//         id:3,
//         img:thg3
//     },{
//         id:4,
//         img:thg4
//     },{
//         id:5,
//         img:thg6
//     },{
//         id:6,
//         img:thg7
//     }]

//     const [galleryNext,setGalleryNext]=useState();
//     const toggleRight=()=>{
//         setGalleryNext(galleryNext=>galleryNext+1);
//     }

//     const  toggleLeft=()=>{
//         setGalleryNext(galleryNext=>galleryNext-1);
//     }

//   return (
//     <section className='w-full py-16 sm:py-14 lg:py-20  '>
//         <div className='max-w-6xl mx-auto bg- px-4 '>
//             <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center'>Gallery</h1>

//             <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//             {gallery.map((galleryItem, index) => (
//                 <div key={index}> 
//                 <div className='relative overflow-hidden rounded-lg shadow-lg group'>{<img src={galleryItem.img} 
//                 className='w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110' alt='GuestHouse'/>}</div>

//                 </div>
//             ))}
               
//             </div>
//             <div className='flex justify-center items-center gap-4'>
//             <FaCircleChevronLeft  onClick={toggleLeft} size={24} className='bg-white rounded-full text-indigo-500'/>
//             <FaCircleChevronRight onClick={toggleRight} size={24} className='bg-white rounded-full text-indigo-500'/>
//             </div>
           
//         </div>
//     </section>
//   )
// }

// export default GuestHouseGallery


import React, { useState } from 'react'
import thg1 from '../../assets/Gallery/thg1.jpeg';
import thg2 from '../../assets/Gallery/thg2.jpeg';
import thg3 from '../../assets/Gallery/thg3.png';
import thg4 from '../../assets/Gallery/thg4.jpeg';
import thg6 from '../../assets/Gallery/thg6.jpg';
import thg7 from '../../assets/Gallery/thg7.jpg';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
const GuestHouseGallery = () => {
    const gallery=[{
        id:1,
        img:thg1
    },{
        id:2,
        img:thg2
        
    },{
        id:3,
        img:thg3
    },{
        id:4,
        img:thg4
    },{
        id:5,
        img:thg6
    },{
        id:6,
        img:thg7
    }]
  return (
    <section className='w-full py-16 sm:py-14 lg:py-20  '>
        <div className='max-w-6xl mx-auto bg- px-4 '>
            <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center'>Gallery</h1>
            <Swiper modules={[Navigation,Autoplay]}
            navigation autoplay={{delay:2200}}
            spaceBetween={20}
            loop={true}
 breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}            className='pb-10'>

            {gallery.map((galleryItem, index) => (
                <SwiperSlide key={index}>
            
                <div className=' overflow-hidden rounded-lg shadow-lg group cursor-pointer'>
                {<img src={galleryItem.img} 
                className='w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110' alt='GuestHouse'/>}
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            
            </div>
    </section>
  )
}

export default GuestHouseGallery