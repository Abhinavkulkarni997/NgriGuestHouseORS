import React, { useEffect } from 'react'
import {axios} from 'axios';
const Bookings = () => {
   const [bookings, setBookings] = useState([]);
   useEffect(()=>{
        axios.get('/')
        .then(response=>{
            console.log("Bookings Submitted data:", response.data);
            setBookings(response.data);
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