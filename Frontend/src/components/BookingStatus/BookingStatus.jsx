import React from 'react';
import { useFormContext } from 'react-hook-form';
const BookingStatus= () => {
  return (
    <div className='min-h-screen flex items-start justify-center py-[150px] px-4'>
        <div className='w-full max-w-4xl bg-white shadow-lg rounded-2xl  p-6  '>
            <h3 className='font-semibold text-center '>BookingStatus</h3>

            <div className='flex  items-center justify-center '>
              <div className='mt-2 '>
                <label htmlFor='email' className='text-sm '>Email Address</label>
                <input type="email" name="email" className='border border-black rounded'/>
            </div>

            <div className='mt-2'>
                <label htmlFor='booking' className='text-sm '>Application/Request No.</label>
                <input type="text" name="bookingid" className='border border-black rounded'/>
            </div>

            <button className='border bg-cyan-600 text-white rounded-lg px-4 py-2 mt-4'>GET STATUS</button>

            </div>

            
        </div>


    </div>
  )
}

export default BookingStatus;

