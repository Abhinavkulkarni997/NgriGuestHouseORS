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

import React from 'react'
import HeroImg from '../../assets/Hero/hero.jpg'
const Hero = () => {
  return (
    <section className='h-screen w-full relative '>
      {/* code for background Image */}
        <img src={HeroImg}  alt='Hero' className='w-full h-full object-cover absolute inset-0 '/>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* Center Content */}
        <div className='relative z-10  h-full w-full flex flex-col items-center justify-center text-center px-6'>
           <h1 className='text-white font-extrabold text-3xl md:text-5xl  leading-tight max-w-3xl'>
            CSIR-NGRI Guesthouse <br/>Online Reservation System</h1>
        <p className='text-white mt-4 font-medium text-lg md:text-xl'>CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE</p>
        <p className='text-white text-base md:text-lg '>Telangana,Hyderabad-500007</p>
        <p className='text-white text-base md:text-lg'>guesthouse@ngri.res.in</p>
          <button className='mt-6 px-6 py-3  text-white bg-cyan-500/80 hover:bg-cyan-400/80  rounded-lg border shadow-lg'>Book Online</button>
        </div>
       
    </section>
  )
}

export default Hero