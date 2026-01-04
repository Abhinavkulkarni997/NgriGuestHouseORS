import React,{useState} from 'react';
import BookingCard from './BookingCard';

const tabMenu=["PENDING","APPROVED","ALLOCATED","VACATED","REJECTED"];
const BookingsTab=({bookings,onApprove,onReject,onAllocate,onVacate,availableRooms})=>{

    const [activeTab, setActiveTab] = useState("PENDING");

    const filteredBookings=bookings.filter(
        (b)=>b.status===activeTab
    );
    return(
        <div className='mb-4  border-default'>
            {/* Tabs */}
            {<ul className="flex gap-4  border-b mb-6 overflow-x-auto ">
               {tabMenu.map((tab)=>{
                const count=bookings.filter(b=>b.status===tab).length;
                return (
                <li key={tab}
                 className={`cursor-pointer font-medium px-4 py-2  flex items-center 
                    gap-2  ${activeTab===tab ?"border-b-2 border-cyan-600 text-cyan-600":"text-gray-500 hover:text-cyan-600"}`}
                 onClick={()=>setActiveTab(tab)}>{tab}
                 <span className='text-xs bg-gray-200 px-2  rounded-full'>
                    {count}
                 </span>
                 </li>
                )
               })} 
                
                </ul> }

            {/* Booking Cards */}

            <div className='grid gap-6'>
                {filteredBookings.length===0 ?(
                    <p className='text-gray-500 text-center'>
                        NO {activeTab} BOOKINGS FOUND.
                    </p>

                ):(
            filteredBookings.map((booking)=>(
                <BookingCard
                key={booking._id}
                booking={booking}
                // availableRooms={availableRooms}
                onApprove={onApprove}
                onReject={onReject}
                onAllocate={onAllocate}
                onVacate={onVacate}
            />)))}

            </div>
           
           </div>
    )
}

export default BookingsTab;