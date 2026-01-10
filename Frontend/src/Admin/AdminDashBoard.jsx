import React,{useState,useEffect} from 'react'
import { useAdminAuth } from './Context/AdminAuthContext';
import {useNavigate} from 'react-router-dom';
import api from '../api/bookingapi';

const AdminDashBoard = ({booking}) => {
  const [status,setStatus]=useState('');
  const {admin,logout}=useAdminAuth();
  const navigate=useNavigate();

  // useEffect(()=>{
  //   api.get('/')
  // })
  const bookings=booking.filter(b=>b.id=booking._id);
  const handleLogout=()=>{
    logout();
    navigate("/admin/login");
  }
  return (
    <div className="p-6">
      <div className='flex justify-between items-center mb-6'>
      <h1 className="text-2xl font-bold">
        Welcome,{admin?.email}
      </h1>
      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <p className='text-gray-500'>Total Bookings</p>

          

          <h2 className='text-3xl font-bold mt-2'>-</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className='text-gray-500'>Pending Bookings</p>
          <h2 className='text-3xl font-bold mt-2'>-</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className='text-gray-500'>Today's Check-ins</p>
          <h2 className='text-3xl font-bold mt-2'>-</h2>
        </div>
      </div>
   
    </div>
  )
}

export default AdminDashBoard