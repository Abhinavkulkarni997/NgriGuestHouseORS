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
    };

    return(
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <div className='bg-white rounded-lg p-6 w-full max-w-md'>
                <h2 className='text-lg font-bold mb-4'>Finalize Booking</h2>


                <p><b>Booking ID:</b> {booking.bookingId}</p>
                <p><b>Guest Category:</b> {guestCategory || "Not selected"}</p>
                <p><b>Room:</b> {booking.roomNumber}({booking.roomType})</p>
           


                <select value={guestCategory}
                onChange={(e)=>setGuestCategory(e.target.value)}
                className='w-full border p-2 mt-3'
                >
                    <option value="">Select Category</option>
                    <option value="CSIR_EMPLOYEE">CSIR Employee</option>
                    <option value="PROJECT_FELLOW">Project Fellow</option>
                    <option value="NON_DEPENDANT_FAMILY">Non Dependant Family</option>
                    <option value="OFFICIAL_EXPERT">Official Expert</option>
                    <option value="ASI_PSU_EMPLOYEE">ASI PSU Employee</option>
                    <option value="OTHER_GUEST">Other Guest</option>
                    <option value="NRI_FOREIGN">NRI/Foreign</option>

                    </select>

                    <label className='mt-3 block font-medium'>Rate Per Day:</label>
                    <input 
                    type="number" 
                    value={ratePerDay} 
                    onChange={(e)=>setRatePerDay(e.target.value)} 
                    className='w-full border p-2 mt-3'
                     placeholder="Rate Per Day"/>

                     <label className='mt-3 block font-medium'>gstPercent:</label>
                    <input
                     type="number"
                      value={gstPercent} 
                      onChange={(e)=>setGstPercent(e.target.value)} 
                      className='w-full border p-2 mt-3' 
                      placeholder="GST Percent"/>
                      
                    <textarea value={remarks}
                     onChange={(e)=>setRemarks(e.target.value)}
                     className='w-full border p-2 mt-3' placeholder="Remarks"/> 

                     <div className='flex justify-end gap-3 mt-4'>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleFinalize} 
                        disabled={loading} 
                        className='bg-green-600 text-white px-4 py-2 rounded'>
                            {loading ? "Finalizing...":"Finalize & Generate Invoice"}
                        </button>
                     </div>
            </div>
        </div>
    );
};

export default FinalizeBookingModal;