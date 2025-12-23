import React,{useState} from "react";
import home from '../assets/AdminDashboard/Home/home.svg';
import booking from '../assets/AdminDashboard/Home/booking.svg';
import invoices from '../assets/AdminDashboard/Home/invoices.svg';
import profile from '../assets/AdminDashboard/Home/profile.svg';
import settings from '../assets/AdminDashboard/Home/settings.svg'
import menu from '../assets/AdminDashboard/Home/menu.svg';
// import close from '../assets/AdminDashboard/Home/close';
import Nlogo from '../assets/AdminDashboard/Home/ngri-logo.png';
const SideBar=()=>{
    const [menuOpen,setMenuOpen]=useState(false);
    const menu=[
        {
            id:0,name:'Home',url:'/',icon:<img src={home} alt="home" size={25}/>,title:"Home",
        },
        {
            id:1,name:'Bookings',url:'/bookings',icon:<img src={booking} alt="bookings" size={25}/>,title:"Bookings",
        },
        {
            id:2,name:"Invoices",url:'/invoices',icon:<img src={invoices} alt="Invoices" size={25}/>,title:"Invoices",
        },{
            id:3,name:'Admin Profile', url:'/adminprofile',icon:<img src={profile} alt="AdminProfile" size={25}/>,title:"Admin Profile",

        },{
            id:4,name:'Settings', url:'/settings',icon:<img src={settings} alt="settings" size={25}/>,title:'Settings'
        }
    ]
    return(
        <div className="min-h-screen top-0 left-0 absolutemx-auto flex justify-between items-center ">
            <div className="max-w-7xl mx-auto bg-[#faf7e5]">
                <Link to='/' className="flex items-center justify-center gap-2">
                    <img src={Nlogo} size={25} alt="ngri-logo" />
                    <span className="text-gray-800 font-medium  ">NGRI-GUEST HOUSE </span>
                </Link>
                <aside className="left-0 ">
                    <ul className="flex items-center justify-items-center space-y-4">
                    {menu.map((item,index)=>(
                    <li key={index}>
                       {item.icon} {item.title}{item.url}
                    </li>
                ))}
                </ul>
                </aside>
            
                
            </div>
        </div>
    )
}

export default SideBar;
