// import React,{useState} from "react";
import home from '../assets/AdminDashboard/Home/home.svg';
import booking from '../assets/AdminDashboard/Home/booking.svg';
import calendar from '../assets/AdminDashboard/Home/calendar.svg';
import room from '../assets/AdminDashboard/Home/rooms.svg'
import roomCalendar from '../assets/AdminDashboard/Home/room.svg';
import invoices from '../assets/AdminDashboard/Home/invoices.svg';
import profile from '../assets/AdminDashboard/Home/profile.svg';
import settings from '../assets/AdminDashboard/Home/settings.svg'
// import sidemenu from '../assets/AdminDashboard/Home/menu.svg';
// import close from '../assets/AdminDashboard/Home/close';
import Nlogo from '../assets/AdminDashboard/Home/ngri-logo.png';

import { Link } from "react-router-dom";
const SideBar=({collapsed,mobileOpen,onCloseMobile})=>{
    // const [menuOpen,setMenuOpen]=useState(false);
    const menu=[
        {
            id:0,name:'Home',url:'/',icon:<img src={home} alt="home" className="w-6 h-6"/>,title:"Home",
        },
        {
            id:1,name:'Bookings',url:'/bookings',icon:<img src={booking} alt="bookings" className="w-6 h-6"/>,title:"Bookings",
        },
        {
            id:2,name:"Invoices",url:'/invoices/:invoiceId',icon:<img src={invoices} alt="Invoices" className="w-6 h-6"/>,title:"Invoices",
        },
        {
            id:3,name:"Calendar",url:'/calendar',icon:<img src={calendar} alt="Calendar" className='w-6 h-6'/>,title:"Calendar",
        },
        {
            id:4,name:"Rooms",url:'/rooms',icon:<img src={room} alt="Rooms" className='w-6 h-6'/>,title:"Rooms",
        },
        {
            id:5,name:"Rooms Calendar",url:'/rooms-calendar',icon:<img src={roomCalendar} className='w-6 h-6'/>,title:"Rooms Calendar",
        },
        
        {
            id:6,name:'Admin Profile', url:'/adminprofile',icon:<img src={profile} alt="AdminProfile" className="w-6 h-6" />,title:"Admin Profile",

        },{
            id:7,name:'Settings', url:'/settings',icon:<img src={settings} alt="settings" className="w-6 h-6" />,title:'Settings'
        }
    ]
    return(
        // <div className="min-h-screen  mx-auto ">
        //     <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#faf7e5]  via-slate-100 backdrop-blur-md bg-opacity-60 transition-all border h-full ">
        //         {/* <div>
        //             <Link to='/admin' className="flex items-center justify-center gap-2">
        //             <img src={Nlogo} className="w-20 h-20" alt="ngri-logo" />
        //             <span className="text-gray-800 font-extrabold  ">NGRI-GUEST HOUSE </span>
        //         </Link>
        //         </div> */}
        //         <button onClick={()=>setMenuOpen(!menuOpen)}><img src={sidemenu} className="w-6 h-6"/>
        //             {menuOpen?
        //               <>
        //              <div className="flex items-center justify-center gap-2">
        //             <Link to='/admin' >
        //             <img src={Nlogo} className="w-20 h-20" alt="ngri-logo" />
        //             <span className="text-gray-800 font-extrabold  ">NGRI-GUEST HOUSE </span>
        //         </Link>
        //         </div>

               
        //             <ul className="w-6 h-6 space-y-4 cursor-pointer flex  flex-wrap items-center ">
        //             {menu.map((item,index)=>(
        //             <li key={index} className="flex items-center gap-3 p-2">
        //                <Link to={`/admin${item.url}`} >{item.icon}
        //                <span className="flex flex-1 ">{item.title}</span></Link>   
        //             </li>
        //         ))}
        //         </ul>
                
        //          </>
        //         :''}
                
        //         </button>
                
        //     </div>
        // </div>
        <aside className={`fixed md:static top-0 left-0 h-screen  z-40 
        transition-all duration-300
        ${collapsed?'md:w-24':'md:w-64'}
         w-64 bg-[#f8f7f0] border-r
          ${mobileOpen?'translate-x-0':'-translate-x-full md:translate-x-0'}`}>
           
            {/* logo */}
           <div className="p-2 border-b ">
            <Link to='/admin' className="flex items-center  gap-1 px-4 py-3">
            <img src={Nlogo} className="w-10 h-10" alt="ngri-logo" />
            {!collapsed && (
             <span className="text-gray-900 font-bold ">
                NGRI-GUEST HOUSE 
                </span>
            )}
            </Link>
            </div>

                {/* menu */}
            <ul className="p-4 space-y-4 cursor-pointer ">
                {menu.map((item,index)=>(
                    //   <li key={index} className="flex items-center gap-3 p-2  mt-4 hover:bg-gray-200 rounded-md" onClose={onCloseMobile}>
                    <li key={index}
                     className="mt-4 hover:bg-gray-200 rounded-md" 
                     onClose={onCloseMobile}>
                    <Link to={`/admin${item.url}`} 
                    className="flex items-center gap-3 p-2">
                    {item.icon}
                    {!collapsed &&(<span>{item.title}</span>)}
                    </Link>   
                    </li>
                ))}
                </ul>
        </aside>
    )
}

export default SideBar;
