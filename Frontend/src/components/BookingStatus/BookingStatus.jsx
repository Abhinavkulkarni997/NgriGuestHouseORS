import React,{useState,useEffect} from 'react';
import { useFormContext } from 'react-hook-form';
import Captcha from '../Captcha/Captcha';
import api from '../../api/bookingapi';
const BookingStatus= () => {
  // const {register}=useFormContext();
  const [status, setStatus] = useState();
  // useEffect(()=>{
  //   api.get('/admin/bookings')
  //   .then(response=>{setStatus(response.data)})
  //   .catch(error=>console.error(error));
  // },[]);
  return (
    <div className='min-h-screen flex  items-center justify-center py-[150px] px-4 bg-cyan-50/20 mb-4 rounded-lg dark:bg-gray-800'>
        <div className='w-full max-w-4xl bg-white shadow-lg rounded-2xl   flex flex-col items-center dark:bg-gray-900 '>
            <h3 className='font-semibold text-center text-lg xl:text-2xl md:text-3xl sm:text-sm bg-cyan-600 w-full rounded-t-md text-white p-4 dark:bg-gray-700'>Booking Status</h3>
        

            {/* <div className='flex  items-center justify-center gap-4'> */}
              <div className='mt-4 px-4 py-2 '>
                <label htmlFor='email' className='text-sm block mb-1 dark:text-white'>Email Address</label>
                <input type="email" name="email" className='border-2 border-black rounded pl-2 hover:border-cyan-600 px-4 py-2 dark:bg-gray-900 dark:border-white' placeholder='Email Address'/>
            </div>
            <div className='m-4 px-4 py-2'>
                <label htmlFor='booking' className='text-sm block mb-1'>Booking ID</label>
                <input type="text" name="bookingid" className='border-2 border-black rounded pl-2 hover:border-cyan-600 px-4 py-2 dark:bg-gray-900 dark:border-white' placeholder='Booking Id'/>
            </div>
            <div className='mt-2'>
              {/* <Captcha/> */}
            </div>
            <div className='m-4 px-4 py-2'>
            <button className='border bg-cyan-600 text-white rounded-lg px-4 py-2 hover:opacity-70'>GET STATUS</button>

            </div>


            </div>
             

            
        {/* </div> */}


    </div>
  )
}

export default BookingStatus;

