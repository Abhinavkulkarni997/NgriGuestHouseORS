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


// import React, { useState } from 'react'
// import thg1 from '../../assets/Gallery/thg1.jpeg';
// import thg2 from '../../assets/Gallery/thg2.jpeg';
// import thg3 from '../../assets/Gallery/thg3.png';
// import thg4 from '../../assets/Gallery/thg4.jpeg';
// import thg6 from '../../assets/Gallery/thg6.jpg';
// import thg7 from '../../assets/Gallery/thg7.jpg';
// import { FaCircleChevronRight } from "react-icons/fa6";
// import { FaCircleChevronLeft } from "react-icons/fa6";
// import {Swiper,SwiperSlide} from "swiper/react";
// import {Navigation,Autoplay} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation"
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
//   return (
//     <section className='w-full py-16 sm:py-14 lg:py-20  '>
//         <div className='max-w-6xl mx-auto bg- px-4 '>
//             <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center'>Gallery</h1>
//             <Swiper modules={[Navigation,Autoplay]}
//             navigation autoplay={{delay:2200}}
//             spaceBetween={20}
//             loop={true}
//  breakpoints={{
//             320: { slidesPerView: 1.2 },
//             480: { slidesPerView: 1.5 },
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}            className='pb-10'>

//             {gallery.map((galleryItem, index) => (
//                 <SwiperSlide key={index}>
            
//                 <div className=' overflow-hidden rounded-lg shadow-lg group cursor-pointer'>
//                 {<img src={galleryItem.img} 
//                 className='w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110' alt='GuestHouse'/>}
//                 </div>
//                 </SwiperSlide>
//             ))}
//             </Swiper>
            
//             </div>
//     </section>
//   )
// }

// export default GuestHouseGallery

// import { useRef ,useState} from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import thg1 from '../../assets/Gallery/thg1.jpeg';
// import thg2 from '../../assets/Gallery/thg2.jpeg';
// import thg3 from '../../assets/Gallery/thg3.png';
// import thg4 from '../../assets/Gallery/thg4.jpeg';
// import thg6 from '../../assets/Gallery/thg6.jpg';
// import thg7 from '../../assets/Gallery/thg7.jpg';
    
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


//     const GuestHouseGallery = () => {
//   const [index, setIndex] = useState(2);

//   const next = () => {
//     setIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
//   };

//   const prev = () => {
//     setIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
//   };

//   return (
//     <div className="w-full py-12">
//       <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
//         Gallery
//       </h1>

//       <div className="relative flex justify-center items-center">
//         {/* Left Button */}
//         <button
//           onClick={prev}
//           className="absolute left-0 md:left-10 p-2 rounded-full bg-white shadow-md z-10"
//         >
//           <FaChevronLeft className="text-purple-600" />
//         </button>

//         {/* Carousel */}
//         <div className="flex gap-6 overflow-hidden px-4">
//           {gallery.map((galleryItem, i) => {
//             const isCenter = i === index;

//             return (
//               <div
//                 key={galleryItem.id}
//                 className={`
//                   relative rounded-2xl overflow-hidden transition-all duration-500
//                   ${isCenter ? "w-[350px] h-[420px]" : "w-[220px] h-[380px] opacity-80"}
//                 `}
//                 style={{
//                   transform: isCenter ? "scale(1)" : "scale(0.85)",
//                 }}
//               >
//                 {/* Image */}
//                 <img
//                   src={galleryItem.img}
//                   alt='GuestHouse'
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                 />

//                 {/* Gradient Bottom Overlay */}
//                 <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/80 to-transparent"></div>

//                 {/* Side Vertical Name */}
//                 {!isCenter && (
//                   <p className="absolute left-4 bottom-4 text-white text-lg font-semibold rotate-90 origin-left">
//                     {/* {hotel.name} */}
//                   </p>
//                 )}

//                 {/* Center Card Content */}
//                 {isCenter && (
//                   <div className="absolute bottom-6 w-full text-center text-white">
//                     <h2 className="text-2xl font-bold"></h2>
//                     {/* <button className="mt-3 px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg text-white border border-white hover:bg-white hover:text-black transition">
//                       Know More
//                     </button> */}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Right Button */}
//         <button
//           onClick={next}
//           className="absolute right-0 md:right-10 p-2 rounded-full bg-white shadow-md z-10"
//         >
//           <FaChevronRight className="text-purple-600" />
//         </button>
//       </div>

//       {/* Bottom Purple Dots */}
//       <div className="flex justify-center mt-6 gap-3">
//         {gallery.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-4 h-4 rounded-full cursor-pointer transition ${
//               i === index ? "bg-purple-600" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GuestHouseGallery;


// GuestHouseCenteredCarousel.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow"; 

// replace these imports with your images
import thg1 from "../../assets/Gallery/thg1.jpeg";
import thg2 from "../../assets/Gallery/thg2.jpeg";
import thg3 from "../../assets/Gallery/thg3.png";
import thg4 from "../../assets/Gallery/thg4.jpeg";
import thg6 from "../../assets/Gallery/thg6.jpg";
import thg7 from "../../assets/Gallery/thg7.jpg";

const images = [
  { id: 1,  src: thg1 },
  { id: 2, src: thg2 },
  { id: 3, src: thg3 },
  { id: 4,  src: thg4 },
  { id: 5,  src: thg6 },
  { id: 6,  src: thg7 },
];

export default function GuestHouseCenteredCarousel() {
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-12 bg-white section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
          Guest House Gallery
        </h2>
        {/* <div className="w-24 h-1 bg-purple-500 mx-auto mb-8 rounded"></div> */}

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".gh-next",
              prevEl: ".gh-prev",
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={"auto"}
            // breakpoints={{
            //   320: { slidesPerView: 1.05, spaceBetween: 12 },
            //   640: { slidesPerView: 1.3, spaceBetween: 16 },
            //   768: { slidesPerView: 2.1, spaceBetween: 20 },
            //   1024: { slidesPerView: 3.2, spaceBetween: 24 },
            //   1280: { slidesPerView: 4.2, spaceBetween: 28 },
            // }}

            // slides per view is removed to achieve responsiveness in below from above code
        breakpoints={{
              320: {  spaceBetween: 12 },
              640: {  spaceBetween: 16 },
              768: {  spaceBetween: 20 },
              1024: {  spaceBetween: 24 },
              1280: { spaceBetween: 28 },
            }}
            className="py-6"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="!w-[220px] md:!w-[260px] lg:!w-[300px] xl:!w-[340px] 2xl:!w-[380px] flex justify-center"
              >
                {/** Slide card */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group ">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/** gradient overlay to darken lower portion */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div> */}
                 
                </div>
              </SwiperSlide>
            ))}

            {/** custom navigation buttons (we style them below) */}
          </Swiper>

          {/* Prev / Next buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="gh-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="gh-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Purple indicators (customized) */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="w-3 h-3 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
