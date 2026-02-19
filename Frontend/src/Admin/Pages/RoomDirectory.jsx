// import React,{useState,useEffect} from 'react';
// import api from '../../api/bookingapi';
// import {useNavigate} from "react-router-dom";

// const RoomDirectory=()=>{
//     const [rooms,setRooms]=useState([]);
//     const [loading,setLoading]=useState(true);
//     const navigate=useNavigate();

//     useEffect(()=>{
//         api.get("/admin/rooms/directory")
//         .then(res=>setRooms(res.data))
//         .catch(err=>console.error(err))
//         .finally(()=>setLoading(false));
//     },[]);

//     if(loading){return <p>Loading rooms...</p>};
//     return(
//         <div className='p-4'>
//             <h1 className='text-xl font-semibold mb-4'>Room Directory</h1>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
//                 {rooms.map((room,index)=>(
//                     <div key={index}
//                     className='bg-white rounded-xl shadow p-4 border cursor-pointer hover:shadow-md'
//                     onClick={()=>navigate(`/admin/rooms/${room.roomNumber}/history`)}>
//                     <h2 className="text-lg font-bold">Room {room.roomNumber}</h2>
//                     <p className='text-sm text-gray-500'>{room.roomType}</p>
                    
//                         <div className='mt-3'>
//                         {/* <span className={`px-3 py-1 text-sm rounded-full
//                              ${room.roomNumber
//                              ? "bg-red-100 text-red-600"
//                              :"bg-green-100 text-green-600"
//                              }`}>
//                             {room.occupied ? "Occupied":"Vacant"}
//                         </span> */}
//                           <span className="px-3 py-1 text-sm rounded-full text-gray-600 bg-gray-100">
//                             Room {room.roomNumber}
//                         </span>
//                         </div>
//                         <p className="mt-3 font-medium text-sm text-cyan-600 ">View History</p>
//                     </div>
//                 ))}
//             </div>
            
            
//         </div>
//     )
// }

// export default RoomDirectory;


// code developed on 17-02-2026 as per the new GH Rules 
import React, { useState, useEffect } from 'react';
import api from '../../api/bookingapi';
import { useNavigate} from "react-router-dom";

const RoomDirectory = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Fetch rooms
  useEffect(() => {
    api.get("/admin/rooms/directory")
      .then(res => setRooms(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Fetch current bookings to determine occupancy
  useEffect(() => {
    api.get("/admin/rooms/calendar", { params: { start: new Date(), end: new Date() } })
      .then(res => setBookings(res.data.bookings))
      .catch(err => console.error(err));
  }, []);

  const isOccupied = (roomId) => {
    const today = new Date();
    return bookings.some(b =>
      b.allocatedRooms?.some(r => r._id.toString() === roomId.toString()) &&
      new Date(b.arrivalDateTime) <= today &&
      new Date(b.departureDateTime) >= today
    );
  };

  if (loading) return <p>Loading rooms...</p>;

  return (
    <div className='p-4'>
      <h1 className='text-xl font-semibold mb-4'>Room Directory</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {rooms.map((room) => {
          const occupied = isOccupied(room._id);
          return (
            <div
              key={room._id}
              className='bg-white rounded-xl shadow p-4 border cursor-pointer hover:shadow-md'
              onClick={() => navigate(`/admin/rooms/${room._id}/history`,{ state: { roomNumber: room.roomNumber } })}
            >
              <h2 className="text-lg font-bold">Room {room.roomNumber}</h2>
              {/* <p className='text-sm text-gray-500'>{room.roomType}</p> */}

              <div className='mt-3'>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    occupied ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                  }`}
                >
                  {occupied ? "Occupied" : "Vacant"}
                </span>
              </div>

              <p className="mt-3 font-medium text-sm text-cyan-600">View History</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomDirectory;
