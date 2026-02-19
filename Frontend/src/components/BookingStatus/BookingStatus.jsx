// import React,{useState,useEffect} from 'react';
// import { useFormContext } from 'react-hook-form';
// import Captcha from '../Captcha/Captcha';
// import api from '../../api/bookingapi';
// const BookingStatus= () => {
//   // const {register}=useFormContext();
//   const [status, setStatus] = useState();
//   // useEffect(()=>{
//   //   api.get('/admin/bookings')
//   //   .then(response=>{setStatus(response.data)})
//   //   .catch(error=>console.error(error));
//   // },[]);
//   return (
//     <div className='min-h-screen flex  items-center justify-center py-[150px] px-4 bg-cyan-50/20 mb-4 rounded-lg dark:bg-gray-800'>
//         <div className='w-full max-w-4xl bg-white shadow-lg rounded-2xl   flex flex-col items-center dark:bg-gray-900 '>
//             <h3 className='font-semibold text-center text-lg xl:text-2xl md:text-3xl sm:text-sm bg-cyan-600 w-full rounded-t-md text-white p-4 dark:bg-gray-700'>Booking Status</h3>
        

//             {/* <div className='flex  items-center justify-center gap-4'> */}
//               <div className='mt-4 px-4 py-2 '>
//                 <label htmlFor='email' className='text-sm block mb-1 dark:text-white'>Email Address</label>
//                 <input type="email" name="email" className='border-2 border-black rounded pl-2 hover:border-cyan-600 px-4 py-2 dark:bg-gray-900 dark:border-white' placeholder='Email Address'/>
//             </div>
//             <div className='m-4 px-4 py-2'>
//                 <label htmlFor='booking' className='text-sm block mb-1'>Mobile Number</label>
//                 <input type="text" name="mobilenumber" className='border-2 border-black rounded pl-2 hover:border-cyan-600 px-4 py-2 dark:bg-gray-900 dark:border-white' placeholder='Booking Id'/>
//             </div>
//             <div className='mt-2'>
//               {/* <Captcha/> */}
//             </div>
//             <div className='m-4 px-4 py-2'>
//             <button className='border bg-cyan-600 text-white rounded-lg px-4 py-2 hover:opacity-70'>GET STATUS</button>

//             </div>


//             </div>
             

            
//         {/* </div> */}


//     </div>
//   )
// }

// export default BookingStatus;

// code developed on 17-02-2026
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BookingStatus = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate=useNavigate();

  const handleGetStatus = async () => {
      if(!email || !mobile) {
        alert("Please enter Email and Mobile Number");
        return;
      }
    
       navigate(
      `/booking-status-result?email=${encodeURIComponent(email)}&mobile=${encodeURIComponent(mobile)}`
    );
    
  };

  return (
    <div className='min-h-screen flex items-center justify-center py-[150px] px-4 bg-cyan-50/20 mb-4 rounded-lg dark:bg-gray-800'>
      <div className='w-full max-w-4xl bg-white shadow-lg rounded-2xl flex flex-col items-center dark:bg-gray-900'>
        
        <h3 className='font-semibold text-center text-lg xl:text-2xl md:text-3xl sm:text-sm bg-cyan-600 w-full rounded-t-md text-white p-4 dark:bg-gray-700'>
          Booking Status
        </h3>

        <div className='mt-4 px-4 py-2 w-full max-w-md'>
          <label className='text-sm block mb-1 dark:text-white'>
            Email Address
          </label>
          <input
            type="email"
            className='w-full border-2 border-black rounded px-4 py-2 hover:border-cyan-600 dark:bg-gray-900 dark:border-white dark:text-white'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='m-4 px-4 py-2 w-full max-w-md'>
          <label className='text-sm block mb-1 dark:text-white'>
            Mobile Number
          </label>
          <input
            type="text"
            className='w-full border-2 border-black rounded px-4 py-2 hover:border-cyan-600 dark:bg-gray-900 dark:border-white dark:text-white'
            placeholder='Enter Mobile Number'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className='m-4 px-4 py-2'>
          <button
            onClick={handleGetStatus}
            className='bg-cyan-600 text-white rounded-lg px-6 py-2 hover:opacity-80'
          >
            GET STATUS
          </button>
        </div>

        {/* Result Section */}
        {/* {statusData && statusData.length > 0 && (
  <div className='mb-6 p-4 bg-green-100 rounded-lg text-center'>
    {statusData.map((booking) => (
      <div key={booking._id} className="mb-4 border-b pb-2">
        <p><strong>Booking ID:</strong> {booking.bookingId}</p>
        <p><strong>Applicant Name:</strong> {booking.applicantName}</p>
        <p><strong>Status:</strong> {booking.status}</p>
        <p><strong>Arrival Date:</strong> {new Date(booking.arrivalDateTime).toLocaleString()}</p>
        <p><strong>Departure Date:</strong> {new Date(booking.departureDateTime).toLocaleString()}</p>
      </div>
    ))}
  </div>
)} */}


        

      </div>
    </div>
  );
};

export default BookingStatus;
