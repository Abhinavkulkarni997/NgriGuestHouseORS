import React,{useState,useEffect} from 'react'
import { useAdminAuth } from './Context/AdminAuthContext';
import {useNavigate} from 'react-router-dom';
import api from '../api/bookingapi';

const AdminDashBoard = () => {
   const [stats,setStats]=useState(null);
   const [loading,setLoading]=useState(true);
  const {admin,logout}=useAdminAuth();
  const navigate=useNavigate();

  useEffect(()=>{
    api.get('/admin/dashboard/overview')
    .then(res=>{
      console.log("API RESPONSE DATA:",res.data),
      setStats(res.data)})
    .catch(err=>console.error(err))
    .finally(()=>setLoading(false));
  },[]);

  if (loading){
    return <p>Loading Dashboard...</p>
  }

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard title="Total Bookings" value={stats.totalBookings}/>
      <StatsCard title="Pending" value={stats.pendingBookings}/>
      <StatsCard title="Approved" value={stats.approvedBookings}/>
      <StatsCard title="Allocated" value={stats.allocatedBookings}/>
      <StatsCard title="Rejected" value={stats.rejectedBookings}/>
      <StatsCard title="Vacated" value={stats.vacatedBookings}/>
      <StatsCard title="Today Check-ins" value={stats.todayCheckIns}/>
      <StatsCard title="Today Check-outs" value={stats.todayCheckOuts}/>

        
      
   
    </div>
    </div>
    )
    };

    const StatsCard=({title,value})=>(
      <div className="bg-white shadow rounded-xl p-6">
          <p className='text-sm text-gray-500'>{title}</p>
          <h2 className='text-2xl font-bold mt-2'>{value}</h2>
        </div>
    );
  


export default AdminDashBoard