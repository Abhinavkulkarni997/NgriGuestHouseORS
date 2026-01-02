import React,{useState,useEffect} from 'react';
import api from '../../api/bookingapi';

const AllocateRoomModal=({bookingId,onClose,onSuccess})=>{
    const [rooms,setRooms]=useState([]);
    const [selectedRoom,setSelectedRoom]=useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
         api.get('/admin/rooms/available')
         .then(response=>setRooms(response.data.availableRooms))
        .catch(error=>{console.error(error.message)})
    },[]);

    const handleAllocate=async()=>{
        if(!selectedRoom){
            return alert("Please select a room to allocate")
        }

        setLoading(true);
        try{
            await api.patch(`/admin/bookings/${bookingId}/allocate-room`,{roomId:selectedRoom});
            setLoading(false);
            alert("Room allocated successfully");
            // after successful allocation call the onSuccess callback to refresh the bookings list
            onSuccess();
            // onClose is used to close the modal
            onClose();
        }
        catch(error){
            console.log("Error in allocating room:",error);
            alert("Failed to allocate room. Please try again.");
            setLoading(false);
            return;
        }
    }

    return (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4'>
                <h2 className='text-xl font-semibold mb-4'>Allocate Room for Booking ID: {bookingId}</h2>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Select Room:</label>
                    <select value={selectedRoom} onChange={(e)=>setSelectedRoom(e.target.value)}>
                        {rooms.map((room)=>(
                            <option key={room.id} value={room.id}>
                                {room.name}
                            </option>
                        ))}
                    </select>
            </div>

            <div className='flex justify-end mb-4'>
                <button onClick={onClose} className=''>
                    Cancel
                </button>
                {loading?:}
            </div>
        </div>
        </div>
)
}


export default AllocateRoomModal;