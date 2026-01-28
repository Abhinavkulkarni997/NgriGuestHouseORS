import React ,{useState} from 'react';
import api from '../../api/bookingapi';

const FinalizeBookingModal=({booking,bookingId, onSuccess,onClose})=>{
    const [guestCategory,setGuestCategory]=useState(booking.guests?.[0]?.category||"");
    const [acType,setAcType]=useState(booking.acType||"");
    const [ratePerDay,setRatePerDay]=useState("");
    const [gstPercent,setGstPercent]=useState(0);
    const [remarks,setRemarks]=useState("");
    const [loading,setLoading]=useState(false);

    const handleFinalize=async()=>{
        if(!guestCategory || !ratePerDay){
            alert("Category and Rate are required");
            return;
        }
        setLoading(true);
        try{
            const response=await api.patch(`/admin/bookings/${bookingId}/finalize`,{
                guestCategory,
                acType,
                ratePerDay:Number(ratePerDay),
                gstPercent:Number(gstPercent),
                remarks
            });
            alert(response.data?.message||"Booking finalized successfully & invoice generated");
           
            onSuccess();
            onClose();
        }catch(error){
            console.error("Error finalizing booking:", error);
            alert("Failed to finalize booking. Please try again.");
        }finally{
            setLoading(false);
        }
    }

    return(
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <div className='bg-white rounded-lg p-6 w-full max-w-md'>
                <h2 className='text-lg font-bold mb-4'>Finalize Booking</h2>


                <p><b>Booking ID:</b> {booking.bookingId}</p>
                <p><b>Guest Category:</b> {booking.guestCategory}</p>
                <p><b>Room:</b> {booking.roomNumber}({booking.roomType})</p>
                <p><b>Remarks:</b> {remarks}</p>


                <select value={guestCategory}
                onChange={(e)=>setGuestCategory(e.target.value)}
                className='w-full border p-2 mt-3'
                >
                    <option value="">Select Category</option>


                    </select>
            </div>

        </div>
        
    )
}

export default FinalizeBookingModal;