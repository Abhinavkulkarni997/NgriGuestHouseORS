import React,{useState} from "react";
import home from '../assets/AdminDashboard/Home/home.svg';
import booking from '../assets/AdminDashboard/Home/booking.svg';
import invoices from '../assets/AdminDashboard/Home/invoices.svg';
import profile from '../assets/AdminDashboard/Home/profile.svg';
import settings from '../assets/AdminDashboard/Home/settings.svg'
import menu from '../assets/AdminDashboard/Home/menu.svg';
// import close from '../assets/AdminDashboard/Home/close';
import Nlogo from '../assets/AdminDashboard/Home/ngri-logo.png';
import { Link } from "react-router-dom";
const SideBar=()=>{
    const [menuOpen,setMenuOpen]=useState(false);
    const menu=[
        {
            id:0,name:'Home',url:'/',icon:<img src={home} alt="home" className="w-6 h-6"/>,title:"Home",
        },
        {
            id:1,name:'Bookings',url:'/bookings',icon:<img src={booking} alt="bookings" className="w-6 h-6"/>,title:"Bookings",
        },
        {
            id:2,name:"Invoices",url:'/invoices',icon:<img src={invoices} alt="Invoices" className="w-6 h-6"/>,title:"Invoices",
        },{
            id:3,name:'Admin Profile', url:'/adminprofile',icon:<img src={profile} alt="AdminProfile" className="w-6 h-6" />,title:"Admin Profile",

        },{
            id:4,name:'Settings', url:'/settings',icon:<img src={settings} alt="settings" className="w-6 h-6" />,title:'Settings'
        }
    ]
    return(
        <div className="min-h-screen  mx-auto">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#faf7e5]  via-slate-100 backdrop-blur-md bg-opacity-60 transition-all">
                <div>
                    <Link to='/admin' className="flex items-center justify-center gap-2">
                    <img src={Nlogo} className="w-20 h-20" alt="ngri-logo" />
                    <span className="text-gray-800 font-extrabold  ">NGRI-GUEST HOUSE </span>
                </Link>

                </div>
                
            
                    <ul className="w-6 h-6 space-y-4 cursor-pointer flex  flex-wrap items-center ">
                    {menu.map((item,index)=>(
                    <li key={index} className="flex items-center gap-3 p-2">
                       <Link to={`/admin${item.url}`} >{item.icon}
                       <span>{item.title}</span></Link>
                       
                    </li>
                ))}
                </ul>
            
            
                
            </div>
        </div>
    )
}

export default SideBar;
