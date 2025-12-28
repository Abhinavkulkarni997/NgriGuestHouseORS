import React, { useEffect,useState } from 'react'
import api from '../../api/bookingapi';
import BookingCard from '../Components/BookingCard';
const Bookings = () => {
   const [bookings, setBookings] = useState([]);
   useEffect(()=>{
        api.get('/admin/bookings')
        .then(response=>{
            console.log("Bookings Submitted data:", response.data);
            setBookings(response.data.bookings);
        })
        .catch(error=>{
            console.error(error);
        })
    },[]);

    const approveBooking = (id) => {
        // Implement approve booking logic here
        console.log("Approved booking with ID:", id);
    }
    const rejectBooking = (id) => {
        // Implement reject booking logic here
        console.log("Rejected booking with ID:",id);
    }
  return (
    // <div className='h-screen sm:px-6 py-6  rounded-lg shadow p-4'>
    //     <div><h1 className="text-2xl font-bold">Bookings Page</h1></div>
        
    //     <table className='bg-white mt-6 w-full border-collapse border'>
    //         <thead className='bg-[#8EC9BC]'>
    //             <tr className='text-white whitespace-nowrap'>
    //                 <th className="border px-4 py-2 ">Applicant Name</th>
    //                 <th className='border px-4 py-2'>Designation</th>
    //                 <th className='border px-4 py-2'>Organization</th>
    //                 <th className='border px-4 py-2'>Employee ID</th>
    //                 <th className='border px-4 py-2'>Mobile Number</th>
    //                 <th className='border px-4 py-2'>Official Email</th>
    //                 <th className="border px-4 py-2">Check-in Date</th>
    //                 <th className="border px-4 py-2">Check-out Date</th>
    //                 <th className="border px-4 py-2">Status</th>
    //             </tr>
    //         </thead>
    //         <tbody className='text-center divide-y divide-gray-200'>
    //             {bookings.map(booking => (
    //                 <tr key={booking._id}>
    //                     <td className="border px-4 py-2">{booking.applicantName}</td>
    //                      <td className="border px-4 py-2">{booking.designation}</td>
    //                      <td className="border px-4 py-2">{booking.organization}</td>
    //                       <td className="border px-4 py-2">{booking.employeeId}</td>
    //                        <td className="border px-4 py-2">{booking.mobileNumber}</td>
    //                         <td className="border px-4 py-2">{booking.officialEmail}</td>
    //                     <td className="border px-4 py-2">{new Date(booking.arrivalDateTime).toLocaleDateString()}</td>
    //                     <td className="border px-4 py-2">{new Date(booking.departureDateTime).toLocaleDateString()}</td>
                       
    //                     <td className="border px-4 py-2">{booking.status}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>

    // </div>
    <div className='p-6 space-y-6'>
        <h1 className='text-2xl font-bold'>Bookings</h1>
        <div className='grid gap-6'>
            {bookings.map(booking=>(
                <BookingCard
                key={booking._id}
                booking={booking}
                onApprove={approveBooking}
                onReject={rejectBooking}
                />
            ))}
        </div>
    </div>
  )
}

export default Bookings;