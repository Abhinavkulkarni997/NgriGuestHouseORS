import React,{useState,useEffect} from 'react';
import api from '../../api/bookingapi.js';

const AllocateRoomModal=({booking,onClose,onAllocate,availableRooms})=>{
    const [rooms,setRooms]=useState([]);
    const [selectedRoom,setSelectedRoom]=useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
         api.get('/admin/rooms/available')
         .then(response=>setRooms(response.data.availableRooms))
        .catch(error=>{console.error(error.message)})
    },[]);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
                <h2 className='text-xl font-semibold mb-4'>Allocate Room for Booking ID: {booking.bookingId}</h2>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Select Room:</label>

            </div>
        </div>
        </div>
)
}


export default AllocateRoomModal;