import React,{useState,useEffect} from 'react'
import { useAdminAuth } from './Context/AdminAuthContext';
import {useNavigate} from 'react-router-dom';
import api from '../api/bookingapi';
import DashBoardCard from './Components/DashBoardCard/DashBoardCard';
import ActionCard from './Components/ActionCards/ActionCard'; 
import RoomOccupancyCards from './Pages/RoomOccupancyCards';

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
   const [today,setToday] = useState({checkIns:[],checkOuts:[]});
   const [loading,setLoading]=useState(true);
  const {admin,logout}=useAdminAuth();
  const navigate=useNavigate();

  useEffect(()=>{
    api.get('/admin/dashboard/overview')
    .then(res=>{
      // console.log("API RESPONSE DATA:",res.data),
      setStats(res.data)})
    .catch(err=>console.error(err))
    .finally(()=>setLoading(false));
  },[]);

// useEffect hook for todays activities
  useEffect(()=>{
    api.get('/admin/dashboard/today')
    .then(res=>{
      // console.log("TODAY API RESPONSE DATA:",res.data),
      setToday({checkIns:res.data.todaysCheckIns,
        checkOuts:res.data.todaysCheckOuts,
      })
    }).catch(err=>console.error(err))
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
    <div className="p-2 space-y-10">
      <div className='flex justify-between items-center mb-6 gap-3'>
      <h1 className="text-xl font-semibold">
        Welcome,{admin?.email}
      </h1>
      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
      </div>

      {/* Stats */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard title="Total Bookings" value={stats.totalBookings} color="#2563eb" />
      <StatsCard title="Pending" value={stats.pendingBookings} color="#f59e0b"/>
      <StatsCard title="Approved" value={stats.approvedBookings} color="#16a34a"/>
      <StatsCard title="Allocated" value={stats.allocatedBookings} color="#6b7280"/>
      <StatsCard title="Rejected" value={stats.rejectedBookings} color="#22c55e"/>
      <StatsCard title="Vacated" value={stats.vacatedBookings} color="#0ea5e9"/>
      <StatsCard title="Today Check-ins" value={stats.todaysCheckIns}/>
      <StatsCard title="Today Check-outs" value={stats.todaysCheckOuts}/>
    </div> */}


     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <DashBoardCard title="Total Bookings" value={stats.totalBookings} color="#2563eb" />
      <DashBoardCard title="Pending" value={stats.pendingBookings} color="#f59e0b"/>
      <DashBoardCard title="Approved" value={stats.approvedBookings} color="#16a34a"/>
      <DashBoardCard title="Allocated" value={stats.allocatedBookings} color="#206491"/>
      <DashBoardCard title="Rejected" value={stats.rejectedBookings} color="#ff0000"/>
      <DashBoardCard title="Vacated" value={stats.vacatedBookings} color="#0ea5e9"/>
      <DashBoardCard title="Today Check-ins" value={stats.todaysCheckIns} color="#f05695"/>
      <DashBoardCard title="Today Check-outs" value={stats.todaysCheckOuts} color="#17b55b"/>
    </div>

    {/* <div className="mt-8">
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
    </div> */}

    {/* <div className='mt-8'>
      <h2 className='text-xl font-semibold mb-3'>Today's Checkouts</h2>
      <div className='overflow-x-auto'>
        <table className='w-full border'>
          <thead className='bg-gray-100'>
          <tr>
            <th>Booking ID</th>
            <th>Name</th>
            <th>Departure</th>
            <th>status</th>
          </tr>
          </thead>
          <tbody>
            {today.checkOuts.map(b=>(
              <tr key={b._id} className='border-t'>
              <td>{b._id}</td>
              <td>{b.applicantName}</td>
              <td>{new Date(b.departureDateTime).toLocaleDateString()}</td>
              <td>{b.status}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div> */}

    {/* Action Card for showing quick actions */}
    <div className='mt-8'>
      <h2 className='text-lg font-semibold mb-4'>Quick Actions</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <ActionCard title={`${stats.todaysCheckIns} Arrivals Today`} subtitle="View bookings arriving today" accent="green" onClick={()=>navigate("/admin/bookings?filter=today-checkin")}/>
          <ActionCard title={`${stats.pendingBookings} Pending Approvals`} subtitle="Review pending bookings requests" accent="yellow" onClick={()=>navigate("/admin/bookings?status=PENDING")}/>
          <ActionCard title={`${stats.allocatedBookings} Active Stays`} subtitle="View currently occupied rooms"   accent="blue" onClick={()=>navigate("/admin/active-stays")}/>

      </div>
    
    </div>

      {/* // Room Occupancy */}
    <div>
      <h2 className='text-xl font-semibold mb-4'>
        Live Room Occupancy
      </h2>
      <RoomOccupancyCards/>
    </div>
    </div>

    )};

  

    // const StatsCard=({title,value,color})=>(
    //   <div className="bg-white shadow rounded-xl p-4 cursor-pointer border-l-4" style={{borderColor:color}}>
    //       <p className='text-sm text-gray-500'>{title}</p>
    //       <h2 className='text-2xl font-bold mt-2'>{value}</h2>
    //     </div>
    // );
  


export default AdminDashBoard;