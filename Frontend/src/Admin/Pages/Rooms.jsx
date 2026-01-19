import React,{useEffect,useState} from "react";
import api from "../../api/bookingapi";
const Rooms=()=>{
    const [rooms,setRooms]=useState([]);

    useEffect(()=>{
        api.get("/admin/rooms/occupancy").then((
            res=>setRooms(res.data)))
            .catch((error)=>console.error(error));
    },[]);
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rooms.map((room)=>(
                <div key={room.roomId} 
                className={`p-4 rounded-xl border ${room.occupied?"border-red-500 bg-red-50":"border-green-500 bg-green-50"}`}
                >
                    <h3 className="text-lg font-semibold">Room {room.roomNumber}</h3>
                    <p className="text-sm text-gray-600">{room.roomType}</p>
                    {room.occupied?(
                        <div className="mt-3">
                            <p className="text-sm">
                                {room.currentBooking.applicantName}
                            </p>
                            <p className="text-xs text-gray-500">From: {" "}
                                 {new Date(room.currentBooking.arrivalDateTime
                    ).toLocaleDateString()}
                    </p>
                        <p className="text-xs text-gray-500">To: {" "}
                                 {new Date(room.currentBooking.departureDateTime
                    ).toLocaleDateString()}
                    </p>
                </div>
                ):(
                    <p className="mt-3 text-sm font-medium text-green-700">
                        Available</p>
                )}
                </div>
            ))}
        </div>

    );
};

export default Rooms;