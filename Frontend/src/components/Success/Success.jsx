import React from 'react';
import SuccessImg from '../../assets/Success/success.png';
import {ueNavigate} from 'react-router-dom';
const  Success= () => {
  const navigate=useNavigate();
  return (
    <div className='min-h-screen flex items-center justify-between py-[200px] '>
      <div className='max-w-4xl mx-auto bg-white/40 p-4 '>
      <div className='flex items-center justify-center'>
         <img src={SuccessImg} alt="Success" className='w-14 h-14 mr-2'/>
        <h1 className='font-extrabold text-3xl md:text-4xl  text-green-400 text-center'>Thank You</h1>
      </div>
     
        <div className='bg-yellow-50 mt-4 rounded-lg shadow-md text-center p-6 ' >
           <p className='font-medium text-gray-800 leading-relaxed mb-4 p-4 text-lg'>Your Booking information has been recorded successfully.
          <br/>This is not a booking confirmation, your booking status will be updated and intimated 7-15 days before 
          the arrival date based on the availability of rooms.
        </p>
       
        </div>
        <div>
             <p className='text-red-600 text-center text-sm mt-10'>Acknowledgement has been sent to your Registered Email.</p>
        </div>
      
      <button className='rounded-lg text-center p-4 bg-cyan-600 text-white font-medium' onClick={()=>navigate('/')}>Go to Home</button>

       
      </div>

        
    </div>
  )
}

export default Success;
