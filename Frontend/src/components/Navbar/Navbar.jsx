import React, { Children, useState } from 'react'
import logo from '../../assets/ngri-logo.png';
import '../../index.css';
import { Link } from 'react-router-dom';
import sun from '../../assets/sun.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
    // const [hoverOpen,setHoverOpen]=useState(false);
    const [hoverOpen,setHoverOpen]=useState(false);
const navItems=[
    // {id:0,title:"Logo",url:logo},
    // {id:1,title:'CSIR-NGRI GUEST HOUSE',url:'/'},
    {id:1, title:"Home",url:"/"},
    {id:2, title:"Booking",
    children:[
        {id:3,title:"Online Booking",url:"/onlinebooking"},
        {id:4, title:"Booking Status",url:"/bookingstatus"},
    ],
    },
    
    {id:5,title:"Guidelines",url:"/guidelines"},
    {id:6, title:"Charges",url:"/charges"},
    {id:7, title:"FAQ",url:"/faq"},
    {id:8, title:"Contact",url:"/contact"}
    // {id:10,title:"Book Online",url:"/bookonline"}
]


const toggleOpen=()=>{
    setHoverOpen(!hoverOpen);
}


  return (
    
    <nav className='w-full fixed z-20 left-0 top-0 shadow-md bg-white/90 backdrop-blur bg-gradient-to-r from-white via-gray-50 to-indigo-50 rounded-lg'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap justify-between items-center '>
            <Link to="/" className='flex items-center gap-2 '>
            <img src={logo} alt="Logo" className='w-16 h-16'/>         
            <span className='font-semibold text-gray-800 hover:text-indigo-600'>CSIR-NGRI GUEST HOUSE</span>
            </Link>
            <ul className='hidden md:flex gap-6 '>
            {navItems.map((item,index)=>(
                    <li key={index} className='cursor-pointer relative group ' >                    
                        {!item.children && (
                        <Link to={item.url} className='text-gray-800 hover:text-indigo-600 font-medium px-1'>{item.title}</Link>
                        )}
                       {item.children &&(
                        <button className='text-gray-800 hover:text-indigo-600 flex items-center justify-center font-medium '>{item.title}
                        {/* <span className=''> */}
                        <svg className='w-4 h-4  group-hover:rotate-180 transition-transform duration-300 ' fill="indigo" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" /> 
                        </svg>
                        {/* </span> */}
                        </button>
                       )}
                       {item.children && ( 
                        <ul className='absolute hidden group-hover:block top-10 transition-all delay-100 group  min-w-[150px] left-0 bg-white/80  shadow-lg rounded-lg border-b-4 border-indigo-600  p-2 '>
                            {item.children.map((child,index)=>(
                                <li key={index}><Link to={child.url} className='block px-2 py-2 text-gray-800 hover:text-indigo-600'>{child.title}</Link></li>
                            ))}
                        </ul>
                       )}
                    </li>
            ))}
            </ul>
            {/*Book Online Button*/}
            <Link to="/onlinebooking">
            <button className='text-gray-800 font-semibold hover:text-indigo-600 border-2 border-indigo-600 rounded-md px-3 py-1 shadow-lg mr-1 border-b-4'>Book Online</button>
            </Link>
            <button onClick={()=>null}><img src={sun} className='w-10 h-10 rounded-full' /></button>
        </div>


            <button onClick={toggleOpen} className='lg:hidden'>
                {hoverOpen?<GiHamburgerMenu size={20} />:<FaXmark size={20}/>}
                </button>

    </nav>

  )
}

export default Navbar