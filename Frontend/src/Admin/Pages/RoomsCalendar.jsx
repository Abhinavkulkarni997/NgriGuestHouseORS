// import React, { useEffect, useState } from 'react'
// import api from '../../api/bookingapi';
// const RoomsCalendar = () => {
//     const today=new Date();
//     const startDate=new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDate()
//     );
//     const endDate=new Date(startDate);
//     endDate.setDate(endDate.getDate() + 6);

//     const [rooms,setRooms]=useState([]);
//     const [bookings,setBookings]=useState([]);
//     const [dateRange,setDateRange]=useState({start:startDate,end:endDate});

//     useEffect(()=>{
//         api.get("/admin/rooms/calendar",{
//             params:
//             {
//             start: dateRange.start.toDateString(),
//             end:dateRange.end.toDateString(),
//             }
//         })
//         .then((res)=>{
//             setRooms(res.data.rooms);
//             setBookings(res.data.bookings);
//         }).catch(console.error);
//     },[dateRange]);

//     // Date (7-14 DAYS VIEW)
//     const days=[];
//     for(let i=0;i<7;i++){
//         const d=new Date(dateRange.start);
//         d.setDate(d.getDate()+i);
//         days.push(d);
//     }

//     const isOccupied=(roomId,day)=>{
//         return bookings.find((b)=>{
//             return(
//                b.allocatedRoom && b.allocatedRoom?._id.toString()===roomId.toString() && 
//                 new Date(b.arrivalDateTime)<=day &&
//                 new Date(b.departureDateTime)>=day
//             );
//         });
//     }
//   return (
//     <div className='overflow-x-auto ' >
//         <div className="max-w-7xl">
//             {/* header code */}
//             <div className="grid grid-cols-[120px_repeat(7,1fr)] font-semibold ">
//                 <div>Room</div>
//                 {days.map((d)=>(
//                     <div key={d.toDateString()} className="text-center">
//                         {d.getDate()}
//                     </div>
//                 ))}
//             </div>

//             {/* Rows */}
//             {rooms.map((room)=>(
//                 <div key={room._id} className="grid grid-cols-[120px_repeat(7,1fr)] border-t">
//                     <div className='font-medium'>Room {room.roomNumber}</div>
//                     {days.map((day)=>{
//                         const booking=isOccupied(room._id,day);
//                         return(
//                             <div key={day.toDateString()} 
//                             className={`h-10 border-l 
//                             ${booking ?"bg-red-400":"bg-green-200"}`} 
//                             title={booking ? `Guest:${booking.applicantName}
//                              From: ${new Date(booking.arrivalDateTime).toDateString()} 
//                              To: ${new Date(booking.departureDateTime).toDateString()}`
//                              :"Available"}>
//                             </div>
//                         )
//                     })}
//                 </div>

//             ))}
//         </div>
//     </div>
//   )
// }

// export default RoomsCalendar;

// code developed o 17-02-2026  as per new requirements 
import React, { useEffect, useState, useMemo } from "react";
import api from "../../api/bookingapi";

const RoomsCalendar = () => {
  const today = new Date();

  const [viewMode, setViewMode] = useState("month"); // week | month | year
  const [currentDate, setCurrentDate] = useState(today);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  /* ================= DATE RANGE ================= */

  const { start, end, days } = useMemo(() => {
    const startDate = new Date(currentDate);
    let generatedDays = [];

    if (viewMode === "week") {
      const dayOfWeek = startDate.getDay();
      startDate.setDate(startDate.getDate() - dayOfWeek); // start from Sunday
      for (let i = 0; i < 7; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        generatedDays.push(d);
      }
    } else if (viewMode === "month") {
      startDate.setDate(1);
      const totalDays = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        0
      ).getDate();
      for (let i = 0; i < totalDays; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        generatedDays.push(d);
      }
    } else if (viewMode === "year") {
      startDate.setMonth(0);
      startDate.setDate(1);
      for (let i = 0; i < 12; i++) {
        const d = new Date(startDate.getFullYear(), i, 1);
        generatedDays.push(d);
      }
    }

    const endDate = new Date(generatedDays[generatedDays.length - 1]);
    return { start: startDate, end: endDate, days: generatedDays };
  }, [viewMode, currentDate]);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    api
      .get("/admin/rooms/calendar", {
        params: {
          start,
          end,
        },
      })
      .then((res) => {
        setRooms(res.data.rooms);
        setBookings(res.data.bookings);
      })
      .catch(console.error);
  }, [start, end]);

  /* ================= OCCUPANCY CHECK ================= */

  // the below logic is working but it in this logic arrival date is not blocking the date and departure date is getting so in some cases 
  // const isOccupied = (roomId, day) => {
  //   return bookings.find((b) => {
  //     const roomMatch = b.allocatedRooms?.some(
  //       (r) => r._id.toString() === roomId.toString()
  //     );
      
  //     return (
  //       roomMatch &&
  //       new Date(b.arrivalDateTime) <= day &&
  //       new Date(b.departureDateTime) >= day
  //     );
  //   });
  // };

  // const isOccupiedMonth = (roomId, monthDate) => {
  //   return bookings.some((b) =>
  //     b.allocatedRooms?.some(r => r._id.toString() === roomId.toString()) &&
  //     new Date(b.arrivalDateTime).getMonth() <= monthDate.getMonth() &&
  //     new Date(b.departureDateTime).getMonth() >= monthDate.getMonth()
  //   );
  // };

  // below logic also works  here the departure date is not considered because user may leave on that day and it can be blocked as it can be allocated to  other people or user
  const isOccupied=(roomId,day)=>{
    return bookings.find((b)=>{
      const roomMatch=b.allocatedRooms?.some(
        (r)=>r._id.toString() === roomId.toString()
      );
      if(!roomMatch) return false;

      const arrival=new Date(b.arrivalDateTime);
      const departure=new Date(b.departureDateTime);

      // by setting setHours we are normalizing all the date times to zero
      arrival.setHours(0,0,0,0);
      departure.setHours(0,0,0,0);
      const currentDay = new Date(day);
    currentDay.setHours(0, 0, 0, 0);
    return currentDay >= arrival && currentDay < departure;
    })
  }

const isOccupiedMonth = (roomId, monthDate) => {
  return bookings.some((b) => {
    const roomMatch = b.allocatedRooms?.some(
      (r) => r._id.toString() === roomId.toString()
    );

    if (!roomMatch) return false;

    const arrival = new Date(b.arrivalDateTime);
    const departure = new Date(b.departureDateTime);

    return (
      monthDate >= new Date(arrival.getFullYear(), arrival.getMonth(), 1) &&
      monthDate < new Date(departure.getFullYear(), departure.getMonth(), 1)
    );
  });
};
  /* ================= NAVIGATION ================= */

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "month") newDate.setMonth(newDate.getMonth() - 1);
    else if (viewMode === "year") newDate.setFullYear(newDate.getFullYear() - 1);
    else newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "month") newDate.setMonth(newDate.getMonth() + 1);
    else if (viewMode === "year") newDate.setFullYear(newDate.getFullYear() + 1);
    else newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  /* ================= HEADER LABEL ================= */

  const formatDayLabel = (date) => {
    if (viewMode === "week") {
      return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
    } else if (viewMode === "month") {
      return date.getDate();
    } else if (viewMode === "year") {
      return date.toLocaleString("en-US", { month: "short" });
    }
  };

  const formatHeaderTitle = () => {
    if (viewMode === "week") {
      const startOfWeek = days[0];
      const endOfWeek = days[days.length - 1];
      return `Week: ${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
    } else if (viewMode === "month") {
      return currentDate.toLocaleString("en-US", { month: "long", year: "numeric" });
    } else if (viewMode === "year") {
      return currentDate.getFullYear();
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="p-4 overflow-x-auto">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <button onClick={handlePrev} className="px-2">◀</button>
          <span className="font-bold">{formatHeaderTitle()}</span>
          <button onClick={handleNext} className="px-2">▶</button>
        </div>
        <div className="space-x-2">
          <button onClick={() => setViewMode("week")}>Week</button>
          <button onClick={() => setViewMode("month")}>Month</button>
          <button onClick={() => setViewMode("year")}>Year</button>
        </div>
      </div>

      {/* Calendar Grid Header */}
      <div
        className="grid font-semibold border-b"
        style={{ gridTemplateColumns: `120px repeat(${days.length}, 1fr)` }}
      >
        <div>Room</div>
        {days.map((d) => (
          <div key={d.toDateString()} className="text-center text-xs">
            {formatDayLabel(d)}
          </div>
        ))}
      </div>

      {/* Room Rows */}
      {rooms.map((room) => (
        <div
          key={room._id}
          className="grid border-b"
          style={{ gridTemplateColumns: `120px repeat(${days.length}, 1fr)` }}
        >
          <div className="font-medium p-1">Room {room.roomNumber}</div>
          {days.map((day) => {
            const occupied =
              viewMode === "year"
                ? isOccupiedMonth(room._id, day)
                : isOccupied(room._id, day);

            return (
              <div
                key={day.toDateString()}
                className={`h-8 border-l cursor-pointer transition ${
                  occupied
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() =>
                  viewMode !== "year" && occupied && setSelectedBooking(occupied)
                }
              />
            );
          })}
        </div>
      ))}

      {/* Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="font-bold text-lg mb-2">Guest Details</h2>
            <p><strong>Name:</strong> {selectedBooking.applicantName}</p>
            <p>
              <strong>From:</strong>{" "}
              {new Date(selectedBooking.arrivalDateTime).toDateString()}
            </p>
            <p>
              <strong>To:</strong>{" "}
              {new Date(selectedBooking.departureDateTime).toDateString()}
            </p>
            <button
              className="mt-4 bg-gray-200 px-3 py-1 rounded"
              onClick={() => setSelectedBooking(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsCalendar;



