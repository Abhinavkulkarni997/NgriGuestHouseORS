import React from 'react';
import Hero from '../Hero/Hero';
import GuestHouseCharges from '../Charges/GuestHouseCharges';
import Guidelines from '../Guidelines/Guidelines';
import GuestHouseGallery from '../GuestHouseGallery/GuestHouseGallery';
import GuestHouseGallerySwiper from '../GuestHouseGallery/GuestHouseGallerySwiper';

const Home = () => {
  return (
     <>
     <Hero/>
      <GuestHouseCharges />
      <Guidelines />
      <GuestHouseGallery/>
      {/* <GuestHouseGallerySwiper/> */}
    </>
  )
}

export default Home