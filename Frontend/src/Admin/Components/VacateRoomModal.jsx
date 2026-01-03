import React from 'react'
import { useState,useEffect } from 'react';
import api from '../../api/bookingapi';
const VacateRoomModal = ({booking,bookingId,onClose,onSuccess}) => {
    const [remarks,setRemarks]=useState("");
    const [loading,setLoading]=useState(false);

    const handleVacate=async()=>{
        setLoading(true);
        try{
            await api.patch(`/admin/bookings/${bookingId}/vacate-room`,{remarks});
            onSuccess();
            onClose();
        }catch(err){
            alert("Failed to vacate room",err);

        }finally{
            setLoading(false)
        }
    }

     useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 ' style={{margin:0}}>
        <div className='bg-white p-6 rounded-lg w-full max-w-md'>
            <h2 className="text-lg font-semibold mb-4">Vacate Room</h2>
            <h2 className='text-lg font-semibold mb-4'>Applicant Name:{booking.applicantName}</h2>
            <h2 className='text-lg font-semibold mb-4'>Booking Id:{booking.bookingId}</h2>
            <textarea placeholder='Vacate remarks (optional)'
            value={remarks}
            onChange={(e)=>setRemarks(e.target.value)}
            className='w-full border rounded p-2 mb-4'
            />

            <div className='flex justify-end gap-3'>
                <button onClick={onClose} className='px-4 py-2 rounded'>
                    Cancel
                </button>
                <button onClick={handleVacate} disabled={loading} className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>{loading?"Vacating...":"Confirm Vacate"}</button>
            </div>
        </div>
        
       </div>
  )
}

export default VacateRoomModal;