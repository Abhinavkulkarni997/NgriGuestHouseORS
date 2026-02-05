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
      
    }

  },[hash])


  return (
     <>
     <Hero/>
     <section id="charges" className=''>
        <GuestHouseCharges />
     </section>
  
    <section id="guidelines" className=''>
      <Guidelines />
      </section>
      <GuestHouseGallery/>
      {/* <ScrollToTop/> */}
      {/* <GuestHouseGallerySwiper/> */}
    </>
  )
}

export default Home