import React,{useState} from 'react';
import BookingCard from './BookingCard';

const BookingsTab=({bookings,onApprove,onReject,onAllocate})=>{

    const [activeTab, setActiveTab] = useState("PENDING");

    const tabMenu=[{id:0,name:'PENDING',title:'PENDING'},
        {id:1,name:'APPROVED',title:'APPROVED'},
        {id:2,name:'ALLOCATED',title:'ALLOCATED'},
        {id:3,name:'VACATED',title:'VACATED'},
        {id:4,name:'REJECTED',title:'REJECTED'}];

    const handleTabClick=(id)=>{
        setActiveTab(id);
    }

    const filteredBookings=bookings.filter(
        (b)=>b.status===activeTab
    )
    return(
        <div className='mb-4 border-b border-default'>
            {<ul className="flex flex-wrap border-b mb-4">
               {tabMenu.map((tab)=>{
                <li key={tab.id} className="cursor-pointer px-4 py-2 border-b-2 border-transparent hover:border-blue-500" onClick={()=>handleTabClick(tab.id)}>{tab.title}</li>
               })} 
                
                </ul> }
           {
            filteredBookings.map((booking)=>{
                <BookingCard
                key={booking._id}
                booking={booking}
                onApprove={onApprove}
                onReject={onReject}
                onAllocate={onAllocate}
            />})}
           </div>
    )
}

export default BookingsTab;