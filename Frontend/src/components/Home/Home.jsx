import React,{useEffect} from 'react';
import Hero from '../Hero/Hero';
import GuestHouseCharges from '../Charges/GuestHouseCharges';
import Guidelines from '../Guidelines/Guidelines';
import GuestHouseGallery from '../GuestHouseGallery/GuestHouseGallery';
// import GuestHouseGallerySwiper from '../GuestHouseGallery/GuestHouseGallerySwiper';
// import ScrollToTop from '../ScrollToTop/ScrollToTop';
import {useLocation} from 'react-router-dom';

const Home = () => {
  const {hash}=useLocation();

  useEffect(()=>{
    if(hash){
      const section=document.querySelector(hash);
      section?.scrollIntoView({behavior:'smooth'});
      
    }

  },[hash]);


  return (
     <>
     <Hero/>
     <section id="charges" className='scroll-mt-28'>
        <GuestHouseCharges />
     </section>
  
    <section id="guidelines" className='scroll-mt-28'>
      <Guidelines />
      </section>
      <GuestHouseGallery/>
      {/* <ScrollToTop/> */}
      {/* <GuestHouseGallerySwiper/> */}
    </>
  )
}

export default Home