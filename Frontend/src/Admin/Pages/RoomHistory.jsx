// import React,{useState,useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import api from '../../api/bookingapi';

// const RoomHistory=()=>{
//     const {roomNumber}=useParams();
//     const [history,setHistory]=useState([]);
//     const [loading,setLoading]=useState(true);

//     useEffect(()=>{
//         api.get(`/admin/rooms/${roomNumber}/history`)
//         .then((res)=>setHistory(res.data))
//         .catch((error)=>console.error(error))
//         .finally(()=>setLoading(false));

//     },[roomNumber]);

//     if(loading){return <p>Loading Room History....</p>}

//     return(
//         <div className='p-4'>
//             <h1 className='text-xl font-semibold mb-4'>Rooms History</h1>

//             {history.length===0?(
//                 <div className='bg-gray-50 p-6 rounded-lg text-center text-gray-500'>
//                     No booking history found for this room
//                     </div>
//             ):(
//                 <div className='space-y-4'>
//                     {history.map(b=>(
//                         <div key={b._id} className='bg-white p-4 rounded-lg shadow border'>
//                             <div className='flex justify-between'>
//                                 <h2 className='font-semibold'>{b.applicantName}</h2>
//                                 <span className='text-sm text-gray-500'>
//                                     {b.status}
//                                 </span>
//                             </div>

//                             <p className="text-sm mt-1">
//                                From:{" "} {new Date(b.arrivalDateTime).toLocaleDateString()}
//                                 {" "}
//                                 To:{" "}{new Date(b.departureDateTime).toLocaleDateString()}
//                             </p>

//                             <p className='text-xs text-gray-400 mt-1'>
//                                Booking ID: {b.bookingId}
//                             </p>
//                         </div>
//                     ))}
//                     </div>

//             )}


//         </div>
//     )
// }
// export default RoomHistory;


// code developed on 17-02-2026 
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/bookingapi';

const RoomHistory = () => {
  const { roomId } = useParams();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/admin/rooms/${roomId}/history,{
        state:{roomId:roomNumber}}`
    )
      .then(res => setHistory(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [roomId]);

  if (loading) return <p>Loading Room History....</p>;

  return (
    <div className='p-4'>
      <h1 className='text-xl font-semibold mb-4'>Room {roomId} History</h1>

      {history.length === 0 ? (
        <div className='bg-gray-50 p-6 rounded-lg text-center text-gray-500'>
          No booking history found for this room
        </div>
      ) : (
        <div className='space-y-4'>
          {history.map((b) => {
            // Multiple rooms allocated per booking
            const roomsList = b.allocatedRooms?.length
            ? b.allocatedRooms.map(r => r.roomNumber).join(", ")
            : b.room?.roomNumber 
            return (
              <div key={b._id} className='bg-white p-4 rounded-lg shadow border'>
                <div className='flex justify-between'>
                  <h2 className='font-semibold'>{b.applicantName}</h2>
                  <span className='text-sm text-gray-500'>{b.status}</span>
                </div>

                <p className="text-sm mt-1">
                  From: {new Date(b.arrivalDateTime).toLocaleDateString()}{" "}
                  To: {new Date(b.departureDateTime).toLocaleDateString()}
                </p>

                <p className='text-xs text-gray-400 mt-1'>
                  Booking ID: {b.bookingId}
                </p>

                <p className='text-sm text-gray-600 mt-1'>
                  Rooms: {roomsList}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoomHistory;
