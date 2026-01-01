import React,{useState} from 'react';

const BookingsTab=({bookings,onApprove,onReject,onAllocate})=>{

    const [activeTab, setActiveTab] = useState(0);

    const tabMenu=[{id:0,name:'PENDING',title:'PENDING'},
        {id:1,name:'APPROVED',title:'APPROVED'},
        {id:2,name:'ALLOCATED',title:'ALLOCATED'},
        {id:3,name:'VACATED',title:'VACATED'},
        {id:4,name:'REJECTED',title:'REJECTED'}];

    const handleTabClick=(id)=>{
        setActiveTab(id);
    }
    return(
        <div className=''>
            {<ul className="flex border-b mb-4">
               {tabMenu.map((tab)=>{
                <li key={tab.id} className="cursor-pointer px-4 py-2 border-b-2 border-transparent hover:border-blue-500" onClick={()=>handleTabClick(tab.id)}>{tab.title}</li>
               })} 
                
                </ul> }
           

        </div>
    )
}

export default BookingsTab;