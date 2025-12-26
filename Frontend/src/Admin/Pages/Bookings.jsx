import React, { useEffect,useState } from 'react'
import api from '../../api/bookingapi';
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
  return (
    <div className='h-screen sm:px-6 py-6 '>
        <h1 className="text-2xl font-bold">Bookings Page</h1>
        <table className=''>
            <thead>
                <tr>
                    <th className="border px-4 py-2">Guest Name</th>
                    <th className="border px-4 py-2">Check-in Date</th>
                    <th className="border px-4 py-2">Check-out Date</th>
                    <th className="border px-4 py-2">Room Type</th>
                    <th className="border px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map(booking => (
                    <tr key={booking._id}>
                        <td className="border px-4 py-2">{booking.guestName}</td>
                        <td className="border px-4 py-2">{new Date(booking.checkInDate).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{booking.roomType}</td>
                        <td className="border px-4 py-2">{booking.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Bookings;