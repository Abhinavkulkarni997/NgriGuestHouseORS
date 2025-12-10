import React from 'react';
import Hero from '../Hero/Hero';
import GuestHouseCharges from '../Charges/GuestHouseCharges';
import Guidelines from '../Guidelines/Guidelines';
import GuestHouseGallery from '../GuestHouseGallery/GuestHouseGallery';
import GuestHouseGallerySwiper from '../GuestHouseGallery/GuestHouseGallerySwiper';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Home = () => {
  return (
     <>
     <Hero/>
      <GuestHouseCharges />
      <Guidelines />
      <GuestHouseGallery/>
      <ScrollToTop/>
      {/* <GuestHouseGallerySwiper/> */}
    </>
  )
}

export default Home