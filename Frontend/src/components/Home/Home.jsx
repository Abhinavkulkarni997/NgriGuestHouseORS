import React from 'react'
import GuestHouseCharges from '../Charges/GuestHouseCharges';
import Guidelines from '../Guidelines/Guidelines';
import GuestHouseGallery from '../GuestHouseGallery/GuestHouseGallery';

const Home = () => {
  return (
     <>
      <GuestHouseCharges />
      <Guidelines />
      <GuestHouseGallery/>
    </>
  )
}

export default Home