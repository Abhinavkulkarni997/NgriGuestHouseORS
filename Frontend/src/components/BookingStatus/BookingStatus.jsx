import React from 'react';
import { useFormContext } from 'react-hook-form';
const BookingStatus= () => {
  return (
    <div className='min-h-screen flex items-center justify-center py-[120px] px-4'>
        <div className='w-full max-w-4xl bg-white shadow-lg rounded-2xl  p-6 '>
            <h3 className='font-semibold '>BookingStatus</h3>

            <div>
                <label>Email Address</label>
                <input type="text"/>
            </div>

            <div className=''>
                <label>Application/Request No.</label>
                <input type="text"/>
            </div>

            <button className='border bg-cyan-600 text-white rounded-lg'>GET STATUS</button>
        </div>


    </div>
  )
}

export default BookingStatus

