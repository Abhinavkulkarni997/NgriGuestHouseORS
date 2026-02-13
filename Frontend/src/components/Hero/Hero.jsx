// // import React from 'react'
// // import HeroImg from '../../assets/Hero/hero.jpg'
// // const Hero = () => {
// //   return (
// //     <section className='mb-4   w-full bg-cover bg-center bg-no-repeat py-16 '>
// //     <div className='max-w-7xl w-full mx-auto'>
// //         <div className='relative'>
// //         <img src={HeroImg} alt='Hero' className='w-full h-full object-cover rounded-xl opacity-90 absolute'/>
// //         <h1 className='absolute -translate-y-[300px] text-white font-extrabold text-3xl md:text-4xl  '>CSIR-NGRI <span>Guesthouse</span> Online Reservation System</h1>
// //         <p className='absolute -translate-y-[250px] text-white font-medium text-lg text-center'>CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE</p>
// //         <p className='absolute -translate-y-[220px] text-white font-medium'>Telangana,Hyderabad-500007</p>
// //         <p className='absolute -translate-y-[200px] text-white font-medium'>guesthouse@ngri.res.in</p>
// //             <button className='absolute -translate-y-[180px]  text-white bg-cyan-400/80 hover:bg-cyan-400/60 rounded-lg border p-2 m-2'>Book Online</button>
// //         </div>
// //     </div>
// //     </section>
// //   )
// // }

// // export default Hero

// import React from 'react';
// import HeroImg from '../../assets/Hero/hero.jpg';
// import {Link} from 'react-router-dom';
// const Hero = () => {
//   return (
//     <section className='h-screen w-full relative '>
//       {/* code for background Image */}
//         <img src={HeroImg}  alt='Hero' className='w-full h-full object-cover absolute inset-0 z-10 rounded-2xl  '/>
//         {/* Dark Overlay */}
//         <div className='absolute inset-0 bg-black/40'></div>

//         {/* Center Content */}
//         <div className='relative left-0 z-10  h-full w-full flex flex-col items-center justify-center text-center px-6'>
//            <h1 className='text-white font-extrabold text-3xl md:text-5xl  leading-tight max-w-3xl bg-black/50 p-4 rounded-lg'>
//             CSIR-NGRI Guesthouse <br/>Online Reservation System</h1>
//         <p className='text-white mt-4 font-medium text-lg md:text-xl bg-black/50 p-2 rounded-lg'>CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE</p>
//         <p className='text-white text-base md:text-lg bg-black/50 p-2 rounded-lg'>Telangana,Hyderabad-500007</p>
//         <p className='text-white text-base md:text-lg bg-black/50 p-2 rounded-lg'>guesthouse@ngri.res.in</p>
//           <Link to="/onlinebooking"><button className='mt-6 px-6 py-3  text-white bg-cyan-500/80 hover:bg-cyan-400/80  rounded-lg border shadow-lg'>Book Online</button></Link>
//         </div>
       
//     </section>
//   )
// }

// export default Hero;



// import React from 'react'
// import HeroImg from '../../assets/Hero/hero.jpg'
// const Hero = () => {
//   return (
//     <section className='mb-4   w-full bg-cover bg-center bg-no-repeat py-16 '>
//     <div className='max-w-7xl w-full mx-auto'>
//         <div className='relative'>
//         <img src={HeroImg} alt='Hero' className='w-full h-full object-cover rounded-xl opacity-90 absolute'/>
//         <h1 className='absolute -translate-y-[300px] text-white font-extrabold text-3xl md:text-4xl  '>CSIR-NGRI <span>Guesthouse</span> Online Reservation System</h1>
//         <p className='absolute -translate-y-[250px] text-white font-medium text-lg text-center'>CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE</p>
//         <p className='absolute -translate-y-[220px] text-white font-medium'>Telangana,Hyderabad-500007</p>
//         <p className='absolute -translate-y-[200px] text-white font-medium'>guesthouse@ngri.res.in</p>
//             <button className='absolute -translate-y-[180px]  text-white bg-cyan-400/80 hover:bg-cyan-400/60 rounded-lg border p-2 m-2'>Book Online</button>
//         </div>
//     </div>
//     </section>
//   )
// }

// export default Hero


// import React from 'react';
// import HeroImg from '../../assets/Hero/hero.jpg';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className='relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen overflow-hidden'>
      
//       {/* Background Image */}
//       <img
//         src={HeroImg}
//         alt='CSIR-NGRI Guesthouse'
//         className='absolute inset-0 w-full h-full object-cover'
//       />

//       {/* Dark Overlay */}
//       <div className='absolute inset-0 bg-black/40'></div>

//       {/* Center Content */}
//       <div className='relative z-10 flex items-center justify-center h-full px-6'>
//         <div className='text-center max-w-3xl'>
          
//           <h1 className='text-white font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-tight'>
//             CSIR-NGRI Guest House <br />
//             Online Reservation System
//           </h1>

//           <p className='text-white mt-4 text-base sm:text-lg md:text-xl xl:text-2xl'>
//             CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE
//           </p>

//           <p className='text-white mt-1 text-sm sm:text-base xl:text-lg'>
//             Telangana, Hyderabad-500007
//           </p>

//           <p className='text-white mt-1 sm:text-base xl:text-lg'>
//             guesthouse@ngri.res.in
//           </p>

//           <Link to="/onlinebooking">
//             <button className='mt-6 px-6 py-3 text-white bg-cyan-400/80 border hover:bg-cyan-400/60 rounded-lg font-semibold shadow-lg transition'>
//               Book Online
//             </button>
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// code developed and changed on 06-02-2026 latest layout code is below and the above code is old code which is commented for reference and backup
// import React from 'react';
// import HeroImg from '../../assets/Hero/hero.jpg';
// import {Link} from 'react-router-dom';
// const Hero = () => {
//   return (
//     <section className=' w-full relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]  '>
//       {/* code for background Image */}
//         <img src={HeroImg}  
//         alt='CSIR-NGRI Guesthouse' 
//         className='w-full h-full object-cover absolute inset-0 
//           '/>
//         {/* Dark Overlay */}
//         <div className='absolute inset-0 bg-black/40'></div>

//         {/* Center Content */}
//         <div className='relative  z-10  h-full flex  items-center justify-center '>
//           <div className='text-center  max-w-3xl px-6 pt-96 min-h-[80vh] relative '>
//            <h1 className=' text-white font-extrabold text-3xl md:text-5xl  lg:text-5xl leading-tight '>
//             CSIR-NGRI Guest House <br/>Online Reservation System</h1>
//         <p className=' text-white text-base mt-4 sm:text-lg md:text-xl'>CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE</p>
//         <p className='text-white mt-1 text-sm sm:text-base'>Telangana,Hyderabad-500007</p>
//         <p className=' text-white mt-1 text-sm sm:text-base '>guesthouse@ngri.res.in</p>
//           <Link to="/onlinebooking">
//           <button className='mt-6 px-6 py-3 text-white bg-cyan-400/80 border hover:bg-cyan-400/60  rounded-lg font-semibold shadow-lg transition'>Book Online</button></Link>
//        </div>
//         </div>
       
//     </section>
//   )
// }

// export default Hero;




// code developed on 12-02-2026 and use the below code when text for the resolution for 4k goes upside 

import React from 'react';
import HeroImg from '../../assets/Hero/hero.jpg';
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <section className='w-full relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]'>
      {/* Background Image */}
      <img 
        src={HeroImg}  
        alt='CSIR-NGRI Guesthouse' 
        className='w-full h-full object-cover absolute inset-0'
      />
      
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Center Content - Fixed for all resolutions */}
      <div className='relative z-10 h-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center pt-[200px]'>
        {/* pt-20 = 80px accounts for your fixed navbar */}
        <div className='text-center max-w-3xl px-6'>
          <h1 className='text-white font-extrabold text-3xl md:text-5xl lg:text-5xl leading-tight'>
            CSIR-NGRI Guest House <br/>Online Reservation System
          </h1>
          <p className='text-white text-base mt-4 sm:text-lg md:text-xl'>
            CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE
          </p>
          <p className='text-white mt-1 text-sm sm:text-base'>
            Telangana, Hyderabad-500007
          </p>
          <p className='text-white mt-1 text-sm sm:text-base'>
            guesthouse@ngri.res.in
          </p>
          <Link to="/onlinebooking">
            <button className='mt-6 px-6 py-3 text-white bg-cyan-400/80 border hover:bg-cyan-400/60 rounded-lg font-semibold shadow-lg transition'>
              Book Online
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;