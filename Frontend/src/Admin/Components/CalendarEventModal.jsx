import React from 'react';


const CalendarEventModal = ({event,onClose}) => {
    if(!event) return null;

    const {
        applicantName,
        roomNumber,
        roomType,
        status,

    }=event.extendedProps;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
        <div className='bg-white rounded-xl w-full max-w-md p-6 shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Booking Details</h2>

            <div className='space-y-2 text-sm'>
                <p><b>Applicant:</b>{applicantName}</p>
                <p><b>Room:</b>{roomNumber} ({roomType})</p>
                <p><b>Status:</b>{status}</p>
                <p><b>Check-in:</b>{new Date(event.start).toLocaleString()}</p>
                <p><b>Check-out:</b>{new Date(event.end).toLocaleString()}</p>
            </div>
        </div>
         
         
    </div>
  )
}

export default CalendarEventModal