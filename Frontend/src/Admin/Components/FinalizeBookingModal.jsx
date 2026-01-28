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
        <div className=''>
            
        </div>
        
    )
}

export default FinalizeBookingModal;