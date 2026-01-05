import React,{useState,useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import api from '../../api/bookingapi';

const BookingsCalendar = () => {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        api.get('/admin/bookings/calendar')
        .then(res=>setEvents(res.data.events))
        .catch(error=>console.error(error));
    },[]);

  return (
    <div className='bg-white rounded-xl shadow p-4'>
        <h1 className="text-2xl font-bold mb-4">Room Occupancy Calendar</h1>
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
            left:"prev,next today",
            center:"title",
            right:"dayGridMonth,timeGridWeek,timeGridDay"
        }}
        events={events}
        height="auto"
        eventClassNames={(arg)=>{
            if(arg.event.extendedProps.status==="ALLOCATED")
                return ["bg-indigo-600","text-white"];
            if(arg.event.extendedProps.status==="VACATED")
                return ["bg-gray-400","text-white"];
            return [];
        }}
        
        />
        </div>
  )
}

export default BookingsCalendar;