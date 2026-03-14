import React,{useState} from 'react';
import BookingCard from './BookingCard';

const tabMenu=["PENDING","APPROVED","ALLOCATED","VACATED","FINALIZED","REJECTED"];
const BookingsTab=({bookings,onApprove,onReject,onAllocate,onVacate})=>{

    const [activeTab, setActiveTab] = useState("PENDING");

    // added line 9 and line 10 for pagination and line 11 for items per page and line 13 for filtered bookings based on active tab
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const filteredBookings=bookings.filter(
        (b)=>b.status===activeTab
    );

    // added 
    const indexOfLast=currentPage*itemsPerPage;
    const indexOfFirst=indexOfLast-itemsPerPage;
    const currentBookings=filteredBookings.slice(indexOfFirst,indexOfLast);
    const totalPages=Math.ceil(filteredBookings.length/itemsPerPage);
    if(currentPage > totalPages && totalPages > 0){
    setCurrentPage(totalPages);
}

const getPageNumbers=()=>{
    const pages=[];
    const maxVisible=5; 
    if(totalPages<=maxVisible){
        for(let i=1;i<=totalPages;i++){
            pages.push(i);
        }
    }else{
        pages.push(1);

        if(currentPage>3){
            pages.push("...");
        }

        const start=Math.max(2,currentPage-1);
        const end=Math.min(totalPages-1,currentPage+1);

        for(let i=start;i<=end;i++){
            pages.push(i);
        }
        if(currentPage<totalPages-2){
            pages.push("...");
        }
        pages.push(totalPages);
    }
    return pages;
    };


   

    return(
        <div className='mb-4  border-default'>
            {/* Tabs */}
            {<ul className="flex gap-4 flex-wrap  border-b mb-6 overflow-x-auto ">
               {tabMenu.map((tab)=>{
                const count=bookings.filter(b=>b.status===tab).length;
                return (
                <li key={tab}
                 className={`cursor-pointer font-medium px-4 py-2  flex items-center 
                    gap-2  ${activeTab===tab ?"border-b-2 border-cyan-600 text-cyan-600":"text-gray-500 hover:text-cyan-600"}`}
                 onClick={()=>{setActiveTab(tab); setCurrentPage(1);}}
                 >{tab}
                 <span className='text-xs bg-gray-200 px-2  rounded-full'>
                    {count}
                 </span>
                 </li>
                )
               })} 
                
                </ul> }

            {/* Booking Cards */}

            <div className='grid  gap-6 '>
                {filteredBookings.length===0 ?(
                    <p className='text-gray-500 text-center'>
                        NO {activeTab} BOOKINGS FOUND.
                    </p>

                ):(
                    // the below filteredBookings is commented out and currentBookings is used to show the bookings based on pagination and active tab. the pagination controls are added below the booking cards to navigate through different pages of bookings.
            // filteredBookings.map((booking)=>(
            //     <BookingCard
            //     key={booking._id}
            //     booking={booking}
            //     // availableRooms={availableRooms}
            //     onApprove={onApprove}
            //     onReject={onReject}
            //     onAllocate={onAllocate}
            //     onVacate={onVacate}
            // />))

              currentBookings.map((booking)=>(
                <BookingCard
                key={booking._id}
                booking={booking}
                // availableRooms={availableRooms}
                onApprove={onApprove}
                onReject={onReject}
                onAllocate={onAllocate}
                onVacate={onVacate}
            />
       
        
        
        ))
        
            )}

            </div>

            {/* Pagination Controls */}
            {filteredBookings.length>0 &&(
                 <div className="flex justify-center gap-2 mt-6 items-center flex-wrap ">
            
            <button className='px-3 py-1 border rounded disabled:opacity-50' 
            disabled={currentPage===1}
            onClick={()=>{setCurrentPage(currentPage-1); window.scrollTo({top: 0, behavior: 'smooth'});}}
            >
                Prev
            </button>

            {/* <span className="px-3 py-1">Page {currentPage}/{totalPages}</span> */}

            {getPageNumbers().map((page,index)=>
            page==="..."?(
                <span key={index} className='px-2 text-gray-500'></span>
            ):(
                <button key={page} 
                onClick={()=>{setCurrentPage(page); window.scrollTo({top: 0, behavior: 'smooth'});}}  
                className={`px-3 py-1 border rounded 
                ${currentPage===page ? 'bg-cyan-600 text-white' : 'bg-white'}`}>
                {page}
                </button>
            ))}

                
            <button className='px-3 py-1 border rounded disabled:opacity-50' 
            disabled={currentPage===totalPages}
            onClick={()=>{setCurrentPage(currentPage+1); window.scrollTo({top: 0, behavior: 'smooth'});}}
            >
                Next
            </button>
            
            </div>

            )}
           
           
           </div>
    )
}

export default BookingsTab;