import React,{useState} from 'react'

const BookingCard = ({booking,onApprove,onReject,onView}) => {
    const [open,setOpen]=useState(false);
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
        ${booking.status==='Approved'?'bg-green-100 text-green-700':booking.status==='Rejected'?'bg-red-100 text-red-700':'bg-yellow-100 text-yellow-700'}`}>
            {booking.status}
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
                View ID Card
            </button>
            <input type='text' placeholder='Add Remarks' className='flex-1 px-3 py-2 border rounded text-sm'/>
            <button onClick={()=>onApprove(booking._id)} className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'>
                Approve
            </button>
            <button onClick={()=>onReject(booking._id)} className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'>
                Reject
            </button>
        </div>
            )}
       
            </div>

            )}

   
      


       
        </div>
        
    
  )
}

export default BookingCard;