import React,{useState} from 'react';
import BookingCard from './BookingCard';

const tabMenu=["PENDING","APPROVED","ALLOCATED","REJECTED"];
const BookingsTab=({bookings,onApprove,onReject,onAllocate})=>{

    const [activeTab, setActiveTab] = useState("PENDING");

    const filteredBookings=bookings.filter(
        (b)=>b.status===activeTab
    )
    return(
        <div className='mb-4 border-b border-default'>
            {/* Tabs */}
            {<ul className="flex  border-b mb-6">
               {tabMenu.map((tab)=>(
                <li key={tab}
                 className={`cursor-pointer font-medium px-4 py-2   ${activeTab===tab ?"border-b-2 border-cyan-600 text-cyan-600":"text-gray-500 hover:tet-cyan-600"}`}
                 onClick={()=>setActiveTab(tab)}>{tab}</li>
               ))} 
                
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
                onApprove={onApprove}
                onReject={onReject}
                onAllocate={onAllocate}
            />)))}

            </div>
           
           </div>
    )
}

export default BookingsTab;