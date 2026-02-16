// import React,{useState,useEffect} from 'react';
// import api from '../../api/bookingapi';

// const AllocateRoomModal=({booking,bookingId,onClose,onSuccess})=>{
//     const [rooms,setRooms]=useState([]);
//     const [selectedRoom,setSelectedRoom]=useState('');
//     const [loading,setLoading]=useState(false);

//     useEffect(()=>{
//          api.get('/admin/rooms/available')
//          .then(response=>
//             {console.log("Available rooms:",response.data.availableRooms);
//                 setRooms(response.data.availableRooms)})
//         .catch(error=>{console.error(error.message)})
//     },[]);
//     useEffect(() => {
//   document.body.style.overflow = 'hidden';
//   return () => {
//     document.body.style.overflow = 'auto';
//   };
// }, []);


//     const handleAllocate=async()=>{
//         if(!selectedRoom){
//              alert("Please select a room to allocate");
//             return;
//         }

//         setLoading(true);
//         try{
//             const response=await api.patch(`/admin/bookings/${bookingId}/allocate-room`,{roomId:selectedRoom});
//             if(response.status===200 || response.status===201){
//                  alert(response.data?.message||"Room allocated successfully");
//             // after successful allocation call the onSuccess callback to refresh the bookings list
//             onSuccess();
//             // onClose is used to close the modal
//             onClose();
//             }else{
//                 throw new Error("Unexpected response");
//             }
           
//         }
//         catch(error){
//             console.error("Error in allocating room:",error?.response||error);
//             alert("Failed to allocate room. Please try again.UI update failed");
//             // onSuccess();
//             // onClose();
//         }finally{
//             setLoading(false);
//         }
//     }

//     return (
//         <div className="fixed inset-0  bg-black/50  flex items-center justify-center z-50 " style={{margin:0,padding:0}}>
//             <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4'>
//                 <div className='relative overflow-hidden'>
//                 <h1 className='text-lg font-extrabold mb-4 '>Allocate Room</h1>
//                 <h2 className='text-lg font-semibold mb-4'>Applicant Name: {booking?.applicantName}</h2>
//                 <h2 className='text-lg font-semibold mb-4'>Allocate Room for Booking ID: {booking.bookingId}</h2>
               
//                <div>
//                     <label className=' text-sm font-medium text-gray-700 mb-2'>Select Room:</label>
//                     <select value={selectedRoom} onChange={(e)=>setSelectedRoom(e.target.value)} className='mt-1 w-full border rounded px-3 py-2 max-w-full truncate'>
//                         <option value="">Select Room</option>
//                         {rooms.map((room)=>(
//                             <option key={room._id} value={room._id} >
//                                 {`Room ${room.roomNumber} : ${room.roomType}`}
//                             </option>
//                         ))}
//                     </select>
//                     {selectedRoom &&(
//                         <p className='text-sm text-gray-600 mt-2'>
//                             selected Room:{
//                                 rooms.find(r=>r._id===selectedRoom)?.roomNumber
//                             }
//                         </p>
//                     )}

//                     {
//                         rooms.length===0 &&(
//                             <p className='text-red-600 mt-2'>No rooms available for allocation.</p>
//                         )
//                     }
//                     </div>
//                     </div>

//             <div className='flex justify-end gap-3 pt-4'>
//                 <button onClick={onClose} className='px-4 py-2 border rounded'>
//                     Cancel
//                 </button>
//                 <button onClick={handleAllocate} 
//                 className='px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg' 
//                 disabled={loading}>
//                          {loading?'Allocating...':'Confirm Allocation'}
//                 </button>
           
//             </div>
//         </div>
//         </div>
// )
// }
// export default AllocateRoomModal;


// code developed on 16-02-2026 and changes are done as per new GH rules some fields are modified and removed 
// import React,{useState,useEffect} from 'react';
// import api from '../../api/bookingapi';

// const AllocateRoomModal=({booking,bookingId,onClose,onSuccess})=>{
//     const [rooms,setRooms]=useState([]);
//     // const [selectedRoom,setSelectedRoom]=useState('');
//     const [selectedRooms,setSelectedRooms]=useState([]);
//     const [loading,setLoading]=useState(false);
//     const [fetching,setFetching]=useState(false);

//     useEffect(()=>{
//          api.get('/admin/rooms/available')
//          .then(response=>
//             {console.log("Available rooms:",response.data.availableRooms);
//                 setRooms(response.data.availableRooms)})
//         .catch(error=>{console.error(error.message)})
//     },[]);
//     useEffect(() => {
//   document.body.style.overflow = 'hidden';
//   return () => {
//     document.body.style.overflow = 'auto';
//   };
// }, []);


//     const handleAllocate=async()=>{
//        if (selectedRooms.length !== booking.numberOfRooms) {
//         alert(`Please select exactly ${booking.numberOfRooms} rooms`);
//         return;
//         }
//         setLoading(true);
//         try{
//             const response=await api.patch(`/admin/bookings/${bookingId}/allocate-room`,{roomIds:selectedRooms});
//             if(response.status===200 || response.status===201){
//                  alert(response.data?.message||"Room allocated successfully");
//             // after successful allocation call the onSuccess callback to refresh the bookings list
//             onSuccess();
//             // onClose is used to close the modal
//             onClose();
//             }else{
//                 throw new Error("Unexpected response");
//             }
           
//         }
//         catch(error){
//             console.error("Error in allocating room:",error?.response||error);
//             alert("Failed to allocate room. Please try again.UI update failed");
//             // onSuccess();
//             // onClose();
//         }finally{
//             setLoading(false);
//         }
//     }

//     return (
//         <div className="fixed inset-0  bg-black/50  flex items-center justify-center z-50 " style={{margin:0,padding:0}}>
//             <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4'>
//                 <div className='relative overflow-hidden'>
//                 <h1 className='text-lg font-extrabold mb-4 '>Allocate Room</h1>
//                 <h2 className='text-lg font-semibold mb-4'>Applicant Name: {booking?.applicantName}</h2>
//                 <h2 className='text-lg font-semibold mb-4'>Allocate Room for Booking ID: {booking.bookingId}</h2>
               
//                <div>
//                     <label className=' text-sm font-medium text-gray-700 mb-2'>Select Room:</label>
//                     <select multiple value={selectedRooms} onChange={(e)=>setSelectedRooms(Array.from(e.target.selectedOptions, option => option.value))} 
//                     className='mt-1 w-full border rounded px-3 py-2 max-w-full truncate'>
//                         <option value="">Select Room</option>
//                         {rooms.map((room)=>(
//                             <option key={room._id} value={room._id} >
//                                 {`Room ${room.roomNumber}`}
//                             </option>
//                         ))}
//                     </select>
//                     {selectedRooms &&(
//                         <p className='text-sm text-gray-600 mt-2'>
//                             selected Room:{
//                                 rooms.find(r=>r._id===selectedRooms)?.roomNumber
//                             }
//                         </p>
//                     )}

//                     {
//                         rooms.length===0 &&(
//                             <p className='text-red-600 mt-2'>No rooms available for allocation.</p>
//                         )
//                     }
//                     </div>
//                     </div>

//             <div className='flex justify-end gap-3 pt-4'>
//                 <button onClick={onClose} className='px-4 py-2 border rounded'>
//                     Cancel
//                 </button>
//                 <button onClick={handleAllocate} 
//                 className='px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg' 
//                 disabled={loading}>
//                          {loading?'Allocating...':'Confirm Allocation'}
//                 </button>
           
//             </div>
//         </div>
//         </div>
// )
// }
// export default AllocateRoomModal;
import React, { useState, useEffect } from "react";
import api from "../../api/bookingapi";

const AllocateRoomModal = ({ booking, bookingId, onClose, onSuccess }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch available rooms 
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const response = await api.get("/admin/rooms/available", {
          params: {
            arrivalDateTime: booking.arrivalDateTime,
            departureDateTime: booking.departureDateTime,
          },
        });

        setRooms(response.data.rooms || []);

      } catch (error) {
        console.error("Error fetching available rooms:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchAvailableRooms();
  }, [booking.arrivalDateTime, booking.departureDateTime]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleRoomSelection = (roomId) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId]
    );
  };

  const handleAllocate = async () => {
    if (selectedRooms.length !== booking.numberOfRooms) return;

    setLoading(true);
    try {
      const response = await api.patch(
        `/admin/bookings/${bookingId}/allocate-room`,
        { roomIds: selectedRooms }
      );

      alert(response.data?.message || "Room allocated successfully");
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Allocation failed:", error?.response || error);
      alert("Failed to allocate rooms.");
    } finally {
      setLoading(false);
    }
  };

  const exactMatch = selectedRooms.length === booking.numberOfRooms;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg mx-4">

        <h1 className="text-xl font-bold mb-2">Allocate Rooms</h1>

        <h2 className='text-lg font-semibold mb-4'> Booking ID: {booking.bookingId}</h2>

        <p className="text-sm text-gray-600 mb-1">
          Applicant: <b>{booking?.applicantName}</b>
        </p>

        <p className="text-sm text-gray-600 mb-4">
          Required Rooms:{" "}
          <b>{booking.numberOfRooms}</b>
        </p>

        {/* Rooms List */}
        {fetching ? (
          <p className="text-gray-500">Loading available rooms...</p>
        ) : rooms.length === 0 ? (
          <p className="text-red-600">
            No rooms available for selected dates.
          </p>
        ) : (
          <div className="max-h-60 overflow-y-auto border rounded-lg p-3 space-y-2">
            {rooms.map((room) => (
              <label
                key={room._id}
                className={`flex items-center justify-between p-2 rounded cursor-pointer border
                  ${
                    selectedRooms.includes(room._id)
                      ? "bg-cyan-100 border-cyan-400"
                      : "hover:bg-gray-100"
                  }`}
              >
                <span>Room {room.roomNumber}</span>

                <input
                  type="checkbox"
                  checked={selectedRooms.includes(room._id)}
                  onChange={() => toggleRoomSelection(room._id)}
                  disabled={
                    !selectedRooms.includes(room._id) &&
                    selectedRooms.length >= booking.numberOfRooms
                  }
                />
              </label>
            ))}
          </div>
        )}

        {/* Selection Status */}
        <div className="mt-3 text-sm">
          Selected:{" "}
          <b>
            {selectedRooms.length} / {booking.numberOfRooms}
          </b>
          {!exactMatch && (
            <span className="text-red-500 ml-2">
              (Select exactly {booking.numberOfRooms})
            </span>
          )}
        </div>

        {/* Buttons cancel & confirm allocation */}
        <div className="flex justify-end gap-3 pt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleAllocate}
            disabled={!exactMatch || loading}
            className={`px-4 py-2 rounded-lg text-white transition
              ${
                exactMatch
                  ? "bg-cyan-600 hover:bg-cyan-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            {loading ? "Allocating..." : "Confirm Allocation"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocateRoomModal;
