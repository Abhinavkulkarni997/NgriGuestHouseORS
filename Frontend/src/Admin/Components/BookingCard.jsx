import React from 'react'

const BookingCard = ({booking,onApprove,onReject}) => {
  return (
    <div className='bg-white rounded-xl shadow-md border p-5 space-y-4 '>
        <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-lg'>
            {booking.applicantName} 
        </h3>
        <span className={`px-3 py-1 text-sm rounded-full
        ${booking.status==='Approved'?'bg-green-100 text-green-700':booking.status==='Rejected'?'bg-red-100 text-red-700':'bg-yellow-100 text-yellow-700'}`}>
            {booking.status}
        </span>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 ml-2'>
            <p><b>Booking ID:</b>{booking.bookingId}</p>
            <p><b>Designation:</b>{booking.designation}</p>
            <p><b>Organization:</b>{booking.organization}</p>
            <p><b>Email:</b>{booking.officialEmail}</p>
            <p><b>Mobile:</b>{booking.mobileNumber}</p>
            <p>
             <b>Arrival:</b>{new Date(booking.arrivalDateTime).toLocaleString()}{" "}
             <b>Departure:</b>{new Date(booking.departureDateTime).toLocaleString()}</p>
        </div>

        {/* Actions */}
        <div className='flex flex-wrap gap-3 pt-3 border-t'>
            <button className='px-4 py-2 text-sm border rounded hover:bg-gray-100'>
                View ID Card
            </button>
            <input type='text' placeholder='Add Remarks' className='flex-1 px-3 py-2 border rounded text-sm'/>
            <button onClick={()=>onApprove(booking._id)} className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'>
                Approve
            </button>
            <button onClick={()=>onReject(booking._id)} className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
                Reject
            </button>
        </div>
        </div>
        
    </div>
  )
}

export default BookingCard;