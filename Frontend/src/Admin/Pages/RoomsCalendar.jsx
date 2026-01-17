import React, { useEffect, useState } from 'react'
import api from '../../api/bookingapi';
const RoomsCalendar = () => {
    const today=new Date();
    const startDate=new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );
    const endDate=new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);

    const [rooms,setRooms]=useState([]);
    const [bookings,setBookings]=useState([]);
    const [dateRange,setDateRange]=useState({start:startDate,end:endDate});

    useEffect(()=>{
        api.get("/admin/rooms/calendar",{
            params:
            {
            start: dateRange.start.toDateString(),
            end:dateRange.end.toDateString(),
            }
        })
        .then((res)=>{
            setRooms(res.data.rooms);
            setBookings(res.data.bookings);
        }).catch(console.error);
    },[dateRange]);

    // Date (7-14 DAYS VIEW)
    const days=[];
    for(let i=0;i<7;i++){
        const d=new Date(dateRange.start);
        d.setDate(d.getDate()+i);
        days.push(d);
    }

    const isOccupied=(roomId,day)=>{
        return bookings.find((b)=>{
            return(
               b.allocatedRoom && b.allocatedRoom?._id.toString()===roomId.toString() && 
                new Date(b.arrivalDateTime)<=day &&
                new Date(b.departureDateTime)>=day
            );
        });
    }
  return (
    <div className='overflow-x-auto'>
        <div className="min-w-[1080px]">
            {/* header code */}
            <div className="grid grid-cols-[120px_repeat(7,1fr)] font-semibold">
                <div>Room</div>
                {days.map((d)=>(
                    <div key={d.toDateString()} className="text-center">
                        {d.getDate()}
                    </div>
                ))}
            </div>

            {/* Rows */}
            {rooms.map((room)=>(
                <div key={room._id} className="grid grid-cols-[120px_repeat(7,1fr)] border-t">
                    <div className='font-medium'>Room {room.roomNumber}</div>
                    {days.map((day)=>{
                        const booking=isOccupied(room._id,day);
                        return(
                            <div key={day.toDateString()} 
                            className={`h-10 border-l 
                            ${booking ? "bg-red-400":"bg-green-200"}`} 
                            title={booking ? "booking.applicantName":"Available"}>
                            </div>
                        )
                    })}
                </div>

            ))}
        </div>
    </div>
  )
}

export default RoomsCalendar;