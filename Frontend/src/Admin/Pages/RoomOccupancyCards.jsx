import React,{useState,useEffect} from 'react'
import api from '../../api/bookingapi';
const RoomOccupancyCards = () => {
    const [rooms,setRooms]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        api.get("/admin/rooms/occupancy")
        .then(res=>setRooms(res.data))
        .finally(()=>setLoading(false));
    },[]);

    if(loading){
        return <div className='text-center py-10'>Loading rooms...</div>;
    }
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {rooms.map((room)=>(
            <div key={room.roomId} className={`rounded-xl p-4 shadow-md border ${room.occupied ? "bg-red-50 border-red-300":"bg-green-50 border-green-300"}`}>
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold'>
                        Room {room.roomNumber}
                    </h3>
                    <span className={`text-sm font-medium ${room.occupied ? "text-red-600":"text-green-600"}`}>
                        {room.occupied ? "Occupied":"Available"}
                    </span>
                </div>
                <p className='text-sm  text-gray-600'>
                    {room.roomType}
                </p>
                {room.occupied && room.currentBooking && (
                    <div className='mt-3 text-sm'>
                        <p className='font-medium'>
                            {room.currentBooking.applicantName}
                        </p>
                        <p className='text-gray-500'>
                            {"From:"}{" "}
                            {new Date(room.currentBooking.arrivalDateTime).toLocaleDateString()}
                            {" "}{"To:"}{" "}
                            {new Date(room.currentBooking.departureDateTime).toLocaleDateString()}

                        </p>

                    </div>
                )}
            </div>

        ))}
        
    </div>
  )
}

export default RoomOccupancyCards;