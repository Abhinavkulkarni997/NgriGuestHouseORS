import React,{useState} from 'react'
import AllocateRoomModal from './AllocateRoomModal';
import VacateRoomModal from './VacateRoomModal';
import FinalizeBookingModal from './FinalizeBookingModal';


const BookingCard = ({booking,onApprove,onReject,onAllocate,onVacate}) => {
    const [open,setOpen]=useState(false);
    const [remarks,setRemarks]=useState('');
    const [showAllocateModal,setShowAllocateModal]=useState(false);
    const [showVacateModal,setShowVacateModal]=useState(false);
    const [showFinalizeModal,setShowFinalizeModal]=useState(false);

    // const hasRooms=availableRooms?.length>0;
    const [editMode,setEditMode]=useState(false);
    const [departureDateTime,setDepartureDateTime]=useState(booking.departureDateTime);
    const [acType,setAcType]=useState(booking.acType);
    const [guestCategory,setGuestCategory]=useState(booking.guests?.[0]?.category || "");
 
    const handleUpdate=async()=>{
        try{
            const res=await fetch(`/api/admin/bookings/${booking._id}/update`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${localStorage.getItem("adminToken")}`
                },
                body:JSON.stringify({
                    departureDateTime,
                    acType,
                    guestCategory
                })
            });
            if (!res) throw new Error("Update failed");
            alert("Booking updated successfully");
            setEditMode(false);
            window,location.reload();
        }catch(err){
            alert(err,"Update Failed");
        }
    }
   
   


  return (
    <div className='bg-white rounded-xl shadow-md border p-5 space-y-4 '>

        {/* header */}
        <div className='flex justify-between items-center'>
            <div>
               
            <h3 className='font-medium text-lg'>
            <p><b>Applicant Name:</b> {booking.applicantName} </p>
            <p><b>Booking ID:</b>{booking.bookingId}</p>
        </h3>
         <p className='text-sm mt-1'>
            <b>Organization:</b>{booking.organization}
            </p>
          <p className='text-sm mt-1'>
             <b>Arrival:</b>{new Date(booking.arrivalDateTime).toLocaleString()}{" "}<br/>
             <b>Departure:</b>{new Date(booking.departureDateTime).toLocaleString()}</p>
            </div>
       
        {/* Body */}
        <span className={`px-3 py-1 text-sm rounded-full font-medium
        ${booking.status==='PENDING'?'bg-yellow-100 text-yellow-700'
        : booking.status==='APPROVED'?'bg-green-100 text-green-700'
        :booking.status==='ALLOCATED'?'bg-indigo-100 text-indigo-700'
        : booking.status === "VACATED" ? "bg-orange-100 text-orange-700"
        : booking.status === "FINALIZED" ? "bg-gray-200 text-gray-700"
        :booking.status==='REJECTED'?'bg-red-100 text-red-700':'bg-yellow-100 text-yellow-700'}`}>
            {booking.status}
            {booking.roomNumber &&  `: Room ${booking.roomNumber} ${booking.roomType}`}
        </span>
        </div>

        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 ml-2'>
            <p><b>Booking ID:</b>{booking.bookingId}</p>
            <p><b>Designation:</b>{booking.designation}</p>
            <p><b>Organization:</b>{booking.organization}</p>
            <p><b>Email:</b>{booking.officialEmail}</p>
            <p><b>Mobile:</b>{booking.mobileNumber}</p>
            <p>
             <b>Arrival:</b>{new Date(booking.arrivalDateTime).toLocaleString()}{" "}
             <b>Departure:</b>{new Date(booking.departureDateTime).toLocaleString()}</p>
        </div>
 */}
        <div className='mt-3 flex gap-3'>
            <button onClick={()=>setOpen(!open)} className='rounded-lg px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white  text-sm'>
                {open?'Hide  Details':'View Details'}

            </button>

        </div>
        {/* guest details */}
         {open && (
            <div className='mt-4 border-t pt-4 space-y-3'>
             {/* <p><strong>Booking ID:</strong>{booking.bookingId}</p>
            <p><b>Designation:</b>{booking.designation}</p>
            <p><b>Organization:</b>{booking.organization}</p> */}
            {/* <p><strong>Booking ID:</strong>{booking.bookingId}</p> */}
            <p><b>Email:</b>{booking.officialEmail}</p>
            <p><b>Mobile:</b>{booking.mobileNumber}</p>

            {/* GUEST LIST */}
            <div>
                <h4 className='font-semibold mb-2'>Guest Details:</h4>
                {booking.guests.map((guest,index)=>(
                    <div key={index} className='border rounded p-2 mt-2 text-sm'>
                        <p><strong>Name:</strong> {guest.name}</p>
                        <p><strong>Organization:</strong> {guest.organization}</p>
                        <p><strong>Age:</strong> {guest.age}</p>
                        <p><strong>Gender:</strong> {guest.gender}</p>
                        <p><strong>Contact No:</strong> {guest.contact}</p>
                        <p><strong>ID Proof:</strong> {guest.idProof}</p>
                        <p><strong>Category:</strong> {guest.category}</p>
                        </div>
                ))}

            </div>


            {booking.status === "FINALIZED" && (
            <p className="text-sm text-gray-500 italic">
                Booking finalized. No further actions allowed.
            </p>
                )}

                
            {/* Edit Form */}
            {editMode &&(
                <div className='mt-4 p-4 border rounded bg-gray-50 space-y-3'>
                    <h4 className="font-semibold text-gray-700">Edit Stay Details</h4>

                    <div>
                        <label className='block text-sm font-medium'>Departure Date</label>
                        <input 
                        type="datetime-local"
                        value={new Date(departureDateTime).toISOString().slice(0,16)}
                        onChange={(e) =>setDepartureDateTime(e.target.value)}
                        className='w-full border px-3 py-3 rounded text-sm'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium'>AC Type</label>
                        <select value={acType}
                        onChange={(e)=>setAcType(e.target.value)}
                        className="w-full border px-3 py-3 rounded text-sm">
                             <option value="AC">AC</option>
                            <option value="NON_AC">NON AC</option>
                           
                        
                        </select>
                    </div>

                    <div>
                        <label className='block text-sm font-medium'>GUEST CATEGORY</label>
                        <select value={acType}
                        onChange={(e)=>setAcType(e.target.value)}
                        className="w-full border px-3 py-3 rounded text-sm">
                             <option value="CSIR_EMPLOYEE">CSIR Employee</option>
                            <option value="PROJECT_FELLOW">Project Fellow</option>
                            <option value="NON_DEPENDANT_FAMILY">Non Dependant Family</option>
                            <option value="OFFICIAL_EXPERT">Official Expert</option>
                            <option value="ASI_PSU_EMPLOYEE">ASI PSU Employee</option>
                            <option value="OTHER_GUEST">Other Guest</option>
                            <option value="NRI_FOREIGN">NRI/Foreign</option>
                        </select>
                    </div>

                    <button onClick={handleUpdate}
                    className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
                    >Save Changes
                    </button>
                        

                </div>
            )}




             {/* Actions */}
             {booking.status==='PENDING' &&(
                 <div className='flex flex-wrap gap-3 pt-3 border-t'>
            <button className='px-4 py-2 text-sm border rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white '>
                <a href={`/api/admin/bookings/${booking._id}/idCard`} target="_blank" rel="noreferrer" className='text-white'>View ID Card</a>
            </button>
            <input type='text' value={remarks} onChange={(e)=>setRemarks(e.target.value)} placeholder='Add Remarks' className='flex-1 px-3 py-2 border rounded text-sm'/>
            <button onClick={()=>{onApprove(booking._id,remarks);setRemarks("");}} className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'>
                Approve
            </button>
            <button onClick={()=>{onReject(booking._id,remarks);setRemarks("");}} className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'>
                Reject
            </button>
        </div>
            )}

            {/* Approved */}
            {booking.status==="APPROVED" &&(
                <div className="pt-3 flex flex-wrap gap-3 border-t">
                    <button onClick={()=>setShowAllocateModal(true)} className='px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 '>
                        Allocate Room
                    </button>

                  
                </div>
            )}

           
           

            {/* Allocate modal */}
            {showAllocateModal && (
                <AllocateRoomModal
                booking={booking}
                bookingId={booking._id}
                onClose={()=>setShowAllocateModal(false)}
                onSuccess={()=>onAllocate()}
                />
            )}

            {/* EDIT STAY BUTTON */}
            {["ALLOCATED","FINALIZED"].includes(booking.status) &&(
                <div className="pt-3 flex flex-wrap gap-3 border-t">
                    <button onClick={()=>setEditMode(!editMode)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                        {editMode ? "Cancel Edit":"Edit Stay"}
                    </button>
                    </div>
            )}

             {/* Allocated for vacate */}
            {booking.status==="ALLOCATED" &&(
                <div className='pt-3 flex flex-wrap gap-3 border-t'>
                    <button onClick={()=>setShowVacateModal(true)} 
                    className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'>Vacate Room</button>
                </div>
            )}

            {showVacateModal &&(
                <VacateRoomModal
                booking={booking}
                bookingId={booking._id}
                onClose={()=>setShowVacateModal(false)}
                onSuccess={()=>onVacate()}
                />
            )}

            {/* To Display Room Details */}
            {(booking.status==="ALLOCATED" || booking.status==="VACATED") &&(
                <div className='mt-3 p-3 rounded-lg bg-gray-50 border text-sm space-y-1'>
                    <p>
                        <strong>Room Number:{" "}</strong>{booking.roomNumber}
                    </p>
                    <p>
                        <strong>Room Type:{" "}</strong>{booking.roomType}
                    </p>
                    {booking.status==="VACATED" &&(
                        <p className='text-red-600'><strong>Vacated On:</strong>{" "}
                        {new Date(booking.vacatedAt).toLocaleString()}
                        </p>
                    )}
                </div>
            )}

            {/* in finalized tab detail appears  */}

            {
                booking.status==="FINALIZED" && (
                    <div className='mt-4 p-3 rounded-lg bg-green-50 border border-green-200 text-sm'>
                        <p className='font-semibold text-green-700'>
                            Booking Finalized
                        </p>

                        <p>
                            Invoice ID:{booking.invoice}
                        </p>
                        <p>
                            Finalized At:{" "}{new Date(booking.finalizedAt).toLocaleDateString()}
                        </p>

                    </div>
                )

            }
            {/* after room vacation to show and generate invoice  */}
            {booking.status === "VACATED" && (
                <div className='pt-3 flex flex-wrap gap-3 border-t'>
            <button
                onClick={() => setShowFinalizeModal(true)}
                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                Finalize Booking
            </button>
            </div>
            )}

            {showFinalizeModal && (
             <FinalizeBookingModal
             booking={booking}
            bookingId={booking._id}
            onClose={() => setShowFinalizeModal(false)}
            onSuccess={onAllocate} // refresh list
        />
        )}
            
            </div>
            )}
        </div>
        
    
  )
}

export default BookingCard;