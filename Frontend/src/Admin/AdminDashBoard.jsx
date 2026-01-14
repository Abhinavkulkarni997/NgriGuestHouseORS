import React,{useState,useEffect} from 'react'
import { useAdminAuth } from './Context/AdminAuthContext';
import {useNavigate} from 'react-router-dom';
import api from '../api/bookingapi';

const AdminDashBoard = () => {
   const [stats,setStats]=useState({
    totalBookings:0,
  pendingBookings:0,
  approvedBookings:0,
  allocatedBookings:0,
  rejectedBookings:0,
  vacatedBookings:0,
  todaysCheckIns:0,
  todaysCheckOuts:0,

   });
   const [today,setToday] = useState({checkIns:[],checkOuts:[]})
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

// useEffect hook for todays activities
  useEffect(()=>{
    api.get('/admin/dashboard/today')
    .then(res=>{
      console.log("TODAY API RESPONSE DATA:",res.data),
      setToday({checkIns:res.data.todaysCheckIns,
        checkOuts:res.data.todaysCheckOuts,
      })
    }).catch(err=>console.error(err))
    .finally(()=>setLoading(false));
  })

  if (loading){
    return <p>Loading Dashboard...</p>
  }

  const handleLogout=()=>{
    logout();
    navigate("/admin/login");
  }
  return (
    <div className="p-6">
      <div className='flex justify-between items-center mb-6 gap-2'>
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
      <StatsCard title="Today Check-ins" value={stats.todaysCheckIns}/>
      <StatsCard title="Today Check-outs" value={stats.todaysCheckOuts}/>
    </div>

    <div className="mt-8">
      <h2 className='text-xl font-semibold mb-3'>Today's CheckIns</h2>
      <div className='overflow-x-auto'>
        <table className='w-full border '>
          <thead className='bg-gray-100 '>
            <tr>
              <th>Booking ID</th>
              <th>Name</th>
              <th>Arrival</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {today.checkIns.map(b=>(
              <tr key={b._id} className='border-t'>
                <td>{b.bookingId}</td>
                <td>{b.applicantName}</td>
                <td>{new Date(b.arrivalDateTime).toLocaleDateString()}</td>
                <td>{b.status}</td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className='mt-8'>
      <h2 className='text-xl font-semibold mb-3'>Today's Checkouts</h2>
      <div className='overflow-x-auto'>
        <table className='w-full border'>
          <thead>
          <tr>
            <th>Booking ID</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {today.checkOuts.map(b=>(
              <tr>
              <td>{b.booking._id}</td>
              <td>{b.applicantName}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

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