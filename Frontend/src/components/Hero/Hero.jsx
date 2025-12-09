import React from 'react'
import HeroImg from '../../assets/Hero/hero.jpg'
const Hero = () => {
  return (
    <section className='mb-4  w-full '>
    <div className='w-full mx-auto'>
        <div className='relative'>
        <img src={HeroImg} alt='Hero' className='w-full h-full object-cover rounded-xl'/>
        <h1 className='absolute bottom-0  text-white font-extrabold text-3xl md:text-4xl '>CSIR-NGRI Guesthouse Online Reservation System</h1>
            <button className='absolute bottom-0  text-white bg-cyan-400/10 rounded-xl border p-2 m-2'>Book Online</button>
        </div>
    </div>
    </section>
  )
}

export default Hero