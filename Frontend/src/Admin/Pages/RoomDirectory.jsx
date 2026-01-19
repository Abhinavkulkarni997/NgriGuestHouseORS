import React,{useState,useEffect} from 'react';
import api from '../../api/bookingapi';
import {useNavigate} from "react-router-dom";

const RoomDirectory=()=>{
    const [rooms,setRooms]=useState([]);
    const [loading,setLoading]=useState(true);
    const navigate=useNavigate();

    useEffect(()=>{
        api.get("/admin/rooms/occupancy")
        .then(res=>setRooms(res.data))
        .catch(err=>console.error(err))
        .finally(()=>setLoading(false));
    },[]);

    if(loading){return <p>Loading rooms...</p>};
    return(
        <div className='p-4'>
            <h1 className='text-xl font-semibold mb-4'>Room Directory</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {rooms.map(room=>(
                    <div key={room.roomId}
                    className='bg-white rounded-xl shadow p-4 border cursor-pointer hover:shadow-md'
                    onClick={()=>navigate(`/admin/rooms/${room.roomId}`)}>
                    <h2 className="text-lg font-bold">Room {room.roomNumber}</h2>
                    <p className='text-sm text-gray-500'>{room.roomType}</p>

                        <div className='mt-3'>
                        <span className={`px-3 py-1 text-sm rounded-full
                             ${room.occupied 
                             ? "bg-red-100 text-red-600"
                             :"bg-green-100 text-green-600"
                             }`}>
                            {room.occupied ? "Occupied":"Vacant"}
                        </span>
                        </div>
                        <p className="mt-3 font-medium text-sm text-cyan-600 ">View History</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default RoomDirectory;