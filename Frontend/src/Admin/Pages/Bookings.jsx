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
    })
  return (
    <div className=''>
        <h1 className="text-2xl font-bold">Bookings Page</h1>

    </div>
  )
}

export default Bookings;