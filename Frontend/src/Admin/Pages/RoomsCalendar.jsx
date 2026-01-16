import React, { useEffect, useState } from 'react'
import api from '../../api/bookingapi';
const RoomsCalendar = () => {
    const [rooms,setRooms]=useState([]);
    const [bookings,setBookings]=useState([]);
    const [dateRange,setDateRange]=useState({start,end});

    useEffect(()=>{
        api.get("/admin/rooms/calendar",{
            params:dateRange,
        })
        .then((res)=>{
            setRooms(res.data.rooms);
            setBookings(res.data.Bookings);
        });
    },[dateRange]);

    // Date (7-14 DAYS VIEW)
    const days=[];
    for(let i=0;i<7;i++){
        const d=new Date(start);
        d.setDate(d.getDate()+i);
        days.push(d);
    }
  return (
    <div>RoomsCalendar</div>
  )
}

export default RoomsCalendar