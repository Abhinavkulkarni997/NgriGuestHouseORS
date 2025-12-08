import React from 'react'
import HeroImg from '../../assets/Hero/hero.jpg'
const Hero = () => {
  return (
    <section className='mb-4  w-full '>
    <div className='w-full mx-auto'>
        <div className='relative'>
        <img src={HeroImg} alt='Hero' className='w-full h-full object-cover rounded-xl'/>
        
            <button className='absolute bottom-0  text-black bg-white rounded border p-2 m-2'>Hello</button>
        </div>
    </div>
    </section>
  )
}

export default Hero