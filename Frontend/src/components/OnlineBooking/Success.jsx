import React from 'react';

const  Success= () => {
  return (
    <div className='min-h-screen items-center justify-between'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='font-extrabold text-base sm:text-sm text-green-600'>Thank You</h1>
        <p className='font-medium text-gray-800 t'>Your Booking information has been recorded successfully.
          This is not a booking confirmation, your booking status will be updated and intimated 7-15 days before 
          the arrival date based on the availability of rooms.
        </p>
        <p>Acknowledgement sent to your Registered Email.</p>
      </div>

        
    </div>
  )
}

export default Success;
