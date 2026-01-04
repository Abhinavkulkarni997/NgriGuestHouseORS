import React,{useState} from 'react'
import AllocateRoomModal from './AllocateRoomModal';
import VacateRoomModal from './VacateRoomModal';


const BookingCard = ({booking,onApprove,onReject,onAllocate,onVacate}) => {
    const [open,setOpen]=useState(false);
    const [remarks,setRemarks]=useState('');
    const [showAllocateModal,setShowAllocateModal]=useState(false);
    const [showVacateModal,setShowVacateModal]=useState(false);

    // const hasRooms=availableRooms?.length>0;
   
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
        <span className={`px-3 py-1 text-sm rounded-full
        ${booking.status==='APPROVED'?'bg-green-100 text-green-700'
        :booking.status==='ALLOCATED'?'bg-indigo-100 text-indigo-700'
        :booking.status==='REJECTED'?'bg-red-100 text-red-700':'bg-yellow-100 text-yellow-700'}`}>
            {booking.status}
            {booking.roomNumber &&  `: Room ${booking.roomNumber}`}
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

             {/* Actions */}
             {booking.status==='PENDING' &&(
                 <div className='flex flex-wrap gap-3 pt-3 border-t'>
            <button className='px-4 py-2 text-sm border rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white '>
                <a href={`http://localhost:5000/api/admin/bookings/${booking._id}/idCard`} target="_blank" rel="noreferrer" className='text-white'>View ID Card</a>
            </button>
            <input type='text' value={remarks} onChange={(e)=>setRemarks(e.target.value)} placeholder='Add Remarks' className='flex-1 px-3 py-2 border rounded text-sm'/>
            <button onClick={()=>onApprove(booking._id,remarks)} className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'>
                Approve
            </button>
            <button onClick={()=>onReject(booking._id,remarks)} className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'>
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

             {/* Allocated for vacate */}
            {booking.status==="ALLOCATED" &&(
                <div className='pt-3 flex flex-wrap gap-3 border-t'>
                    <button onClick={()=>setShowVacateModal(true)} className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'>Vacate Room</button>
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
            
            </div>
            )}
        </div>
        
    
  )
}

export default BookingCard;