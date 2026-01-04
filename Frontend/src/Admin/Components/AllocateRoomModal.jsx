import React,{useState,useEffect} from 'react';
import api from '../../api/bookingapi';

const AllocateRoomModal=({booking,bookingId,onClose,onSuccess})=>{
    const [rooms,setRooms]=useState([]);
    const [selectedRoom,setSelectedRoom]=useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
         api.get('/admin/rooms/available')
         .then(response=>
            {console.log("Available rooms:",response.data.availableRooms);
                setRooms(response.data.availableRooms)})
        .catch(error=>{console.error(error.message)})
    },[]);
    useEffect(() => {
  document.body.style.overflow = 'hidden';
  return () => {
    document.body.style.overflow = 'auto';
  };
}, []);


    const handleAllocate=async()=>{
        if(!selectedRoom){
             alert("Please select a room to allocate");
            return;
        }

        setLoading(true);
        try{
            const response=await api.patch(`/admin/bookings/${bookingId}/allocate-room`,{roomId:selectedRoom});
            if(response.status===200 || response.status===201){
                 alert(response.data?.message||"Room allocated successfully");
            // after successful allocation call the onSuccess callback to refresh the bookings list
            onSuccess();
            // onClose is used to close the modal
            onClose();
            }else{
                throw new Error("Unexpected response");
            }
           
        }
        catch(error){
            console.error("Error in allocating room:",error?.response||error);
            alert("Failed to allocate room. Please try again.UI update failed");
            // onSuccess();
            // onClose();
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0  bg-black/50  flex items-center justify-center z-50 " style={{margin:0,padding:0}}>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4'>
                <div className='relative overflow-hidden'>
                <h1 className='text-lg font-extrabold mb-4 '>Allocate Room</h1>
                <h2 className='text-lg font-semibold mb-4'>Applicant Name: {booking?.applicantName}</h2>
                <h2 className='text-lg font-semibold mb-4'>Allocate Room for Booking ID: {booking.bookingId}</h2>
               
               <div>
                    <label className=' text-sm font-medium text-gray-700 mb-2'>Select Room:</label>
                    <select value={selectedRoom} onChange={(e)=>setSelectedRoom(e.target.value)} className='mt-1 w-full border rounded px-3 py-2 max-w-full truncate'>
                        <option value="">Select Room</option>
                        {rooms.map((room)=>(
                            <option key={room._id} value={room._id} >
                                {`Room ${room.roomNumber} : ${room.roomType}`}
                            </option>
                        ))}
                    </select>
                    {selectedRoom &&(
                        <p className='text-sm text-gray-600 mt-2'>
                            selected Room:{
                                rooms.find(r=>r._id===selectedRoom)?.roomNumber
                            }
                        </p>
                    )}

                    {
                        rooms.length===0 &&(
                            <p className='text-red-600 mt-2'>No rooms available for allocation.</p>
                        )
                    }
                    </div>
                    </div>

            <div className='flex justify-end gap-3 pt-4'>
                <button onClick={onClose} className='px-4 py-2 border rounded'>
                    Cancel
                </button>
                <button onClick={handleAllocate} 
                className='px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg' 
                disabled={loading}>
                         {loading?'Allocating...':'Confirm Allocation'}
                </button>
           
            </div>
        </div>
        </div>
)
}
export default AllocateRoomModal;