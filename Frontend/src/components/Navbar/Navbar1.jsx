// import React, { Children, useEffect, useState } from 'react'
// import logo from '../../assets/ngri-logo.png';
// import '../../index.css';
// import { Link } from 'react-router-dom';
// import sun from '../../assets/sun.svg';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaXmark } from "react-icons/fa6";
// import { IoMoonOutline } from "react-icons/io5";


// const Navbar1 = ({hasHero}) => {
//     const [hoverOpen,setHoverOpen]=useState(false);
//     const [navBg,setNavBg]=useState(false);
    

//     useEffect(()=>{
//         if(!hasHero){
//             setNavBg(true);
//             return;
//         }
//         const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setNavBg(true);
//     } else {
//       setNavBg(false);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [hasHero]);

// const navItems=[
//     // {id:0,title:"Logo",url:logo},
//     // {id:1,title:'CSIR-NGRI GUEST HOUSE',url:'/'},
//     {id:1, title:"Home",url:"/"},
//     {id:2, title:"Booking",
//     children:[
//         {id:3,title:"Online Booking",url:"/onlinebooking"},
//         {id:4, title:"Booking Status",url:"/bookingstatus"},
//     ],
//     },
    
//     {id:5,title:"Guidelines",url:"/#guidelines"},
//     {id:6, title:"Charges",url:"/#charges"},
//     {id:7, title:"FAQ",url:"/faq"},
//     {id:8, title:"Contact",url:"/contact"}
//     // {id:10,title:"Book Online",url:"/bookonline"}
// ]


//   return (
    
//     <nav className={`w-full fixed z-50 left-0 top-0  transition-all duration-300 rounded-b-lg ${navBg?'bg-white shadow-md':hasHero?'bg-transparent':'bg-white'}`}>
//         <div className='max-w-7xl mx-auto flex  items-center justify-between px-6 py-4'>

//             {/* Logo content on the left */}
//             <Link to="/" className='flex items-center gap-2 '>
//             <img src={logo} alt="Logo" className='w-16 h-16'/>         
//             <span className={`font-semibold text-lg transition-all ${navBg?'text-gray-900 ':'text-white'}`}>
//                 CSIR-NGRI GUEST HOUSE</span>
//             </Link>


//             {/* Center division nav menu desktop version */}
//             <ul className='hidden md:flex gap-6 text-lg bg-white p-2 rounded-full border border-[#1A1A1A] animate-in'>
//             {navItems.map((item,index)=>(
//                     <li key={index} className='cursor-pointer relative group ' >                    
//                         {!item.children && (
//                         <Link to={item.url} 
//                         className={`${navBg
//                             ? 'text-gray-900':''}  
//                             hover:text-indigo-500 transition font-medium '`}
//                         >
//                         {item.title}
//                         </Link>
//                         )}

//                         {/* Drop down if the array has children */}
//                        {item.children && (
//                         <div className='relative'>
//                         <button className={`flex items-center gap-1 
//                         ${navBg ? 'text-gray-800':'text-gray-800'} hover:text-indigo-600 flex items-center justify-center font-medium
//                          `}>
//                             {item.title}
                       
//                         <svg className='w-4 h-4  group-hover:rotate-180 transition-transform duration-300 '
//                          fill="indigo" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" /> 
//                         </svg>
//                         </button>
//                         <div className="absolute top-full left-0 right-0 h-4 bg-transparent"></div>

//                         <ul className='absolute top-full left-0 mt-2 hidden group-hover:block
                           
//                          min-w-[180px]  bg-white backdrop-blur-sm bg-white/95 
//                           shadow-xl rounded-lg border-b-4 border-indigo-600  p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
//                             {item.children.map((child,index)=>(
//                                 <li key={index}><Link to={child.url} 
//                                 className='block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-150'
//                                 >{child.title}</Link>
//                                 </li>
//                             ))}
//                         </ul>
                       
//                        </div>
//                        )}
//                     </li>
//             ))}
//             </ul>



//             {/*Book Online Button*/}
//             <div className='hidden md:flex items-center gap-4'>
//                   <Link to="/onlinebooking">
//             <button className={`${navBg?'hover:text-indigo-500':'border border-white text-white '} border border-[#1A1A1A]  px-4 py-2 rounded-lg font-semibold    transition` }>
//               Book Online
//             </button>            
//             </Link>
//             </div>
          
//           <button><IoMoonOutline size={24} className={`${navBg ?'text-gray-800':'text-white border '}`}/></button>
//             {/* <button onClick={()=>null}><img src={sun} className='w-10 h-10 rounded-full' /></button> */}
            
//         </div>

//         {/* mobile view button */}
//         <button onClick={()=>setHoverOpen(!hoverOpen)} className='md:hidden  text-white text-2xl'>
//             {hoverOpen? <FaXmark size={30} className={`${navBg?'text-[#1A1A1A]':''} ` } />
//             :<GiHamburgerMenu size={30} className={`${navBg ? 'text-[#1A1A1A]':''}`}/>
//         }
//         </button>

//         {/* MOBILE NAV */}
//       {hoverOpen && (
//         <div className="md:hidden bg-white shadow-lg py-3 px-4 space-y-3">
//           {navItems.map((item) => (
//             <div key={item.id}>
//               {!item.children && (
//                 <Link to={item.url} className="block py-2 text-gray-900">
//                   {item.title}
//                 </Link>
//               )}

//               {item.children && (
//                 <details className="group">
//                   <summary className="cursor-pointer py-2 text-gray-900">
//                     {item.title}
//                   </summary>
//                   <div className="ml-4 mt-2 space-y-2">
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.id}
//                         to={child.url}
//                         className="block text-gray-700"
//                       >
//                         {child.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </details>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar1;

// code developed and changed on 06-02-2026 latest layout code is below and the above code is old code which is commented for reference and backup
import React, { Children, useEffect, useState } from 'react'
import logo from '../../assets/ngri-logo.png';
import '../../index.css';
import { Link } from 'react-router-dom';
import sun from '../../assets/sun.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";


const Navbar1 = ({hasHero}) => {
    const [hoverOpen,setHoverOpen]=useState(false);
    const [navBg,setNavBg]=useState(false);
    

    useEffect(()=>{
        if(!hasHero){
            setNavBg(true);
            return;
        }
        const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [hasHero]);

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
    
    {id:5,title:"Guidelines",url:"/#guidelines"},
    {id:6, title:"Charges",url:"/#charges"},
    {id:7, title:"FAQ",url:"/faq"},
    {id:8, title:"Contact",url:"/contact"}
    // {id:10,title:"Book Online",url:"/bookonline"}
]


  return (
    
    <nav className={`w-full fixed z-50 left-0 top-0  bg-white transition-all duration-300 rounded-b-lg  `}>
        <div className='max-w-7xl mx-auto flex  items-center justify-between px-4 py-4 flex-nowrap'>

            {/* Logo content on the left */}
            <Link to="/" className='flex items-center gap-2 shrink-0 '>
            <img src={logo} alt="Logo" className='w-10 h-10 sm:w-12 sm:h-12'/>         
            <span className={` font-semibold text-base sm:block  transition-all `}>
                CSIR-NGRI GUEST HOUSE
              </span>
            </Link>


            {/* Center division nav menu desktop version */}
            <ul className='hidden md:flex gap-6 text-lg bg-white p-2 rounded-full border border-[#1A1A1A] animate-in'>
            {navItems.map((item,index)=>(
                    <li key={index} className='cursor-pointer relative group ' >                    
                        {!item.children && (
                        <Link to={item.url} 
                        className={`hover:text-indigo-500  font-medium text-gray-900`}
                        >
                        {item.title}
                        </Link>
                        )}

                        {/* Drop down if the array has children */}
                       {item.children && (
                        <div className='relative'>
                        <button className={`flex items-center gap-1 
                        ${navBg ? 'text-gray-800':'text-gray-800'} hover:text-indigo-600 flex items-center justify-center font-medium
                         `}>
                            {item.title}
                       
                        <svg className='w-4 h-4  group-hover:rotate-180 transition-transform duration-300 '
                         fill="indigo" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" /> 
                        </svg>
                        </button>
                        <div className="absolute top-full left-0 right-0 h-4 bg-transparent"></div>

                        <ul className='absolute top-full left-0 mt-2 hidden group-hover:block
                           
                         min-w-[180px]  bg-white backdrop-blur-sm bg-white/95 
                          shadow-xl rounded-lg border-b-4 border-indigo-600  p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
                            {item.children.map((child,index)=>(
                                <li key={index}><Link to={child.url} 
                                className='block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-150'
                                >{child.title}</Link>
                                </li>
                            ))}
                        </ul>
                       
                       </div>
                       )}
                    </li>
            ))}
            </ul>



            {/*Book Online Button*/}
            <div className='hidden md:flex items-center gap-4'>
                  <Link to="/onlinebooking">
            <button className={`${navBg?'hover:text-indigo-500':'hover:text-indigo-500'} border border-[#1A1A1A]  px-4 py-2 rounded-lg font-semibold    transition` }>
              Book Online
            </button>            
            </Link>
            </div>
          
          <div className='flex items-center gap-3 shrink-0'>
          <button><IoMoonOutline size={22} className={`text-gray-800`}/></button>
            {/* <button onClick={()=>null}><img src={sun} className='w-10 h-10 rounded-full' /></button> */}
            <button
              onClick={() => setHoverOpen(!hoverOpen)}
              className="md:hidden"
            >
            {hoverOpen ? (
                <FaXmark size={26} />
            ) : (
             <GiHamburgerMenu size={26} />
             )}
            </button>
            </div>  
        </div>

        {/* mobile view button */}
        {/* <button onClick={()=>setHoverOpen(!hoverOpen)} className='md:hidden   text-2xl'>
            {hoverOpen? <FaXmark size={30} className={`${navBg?'text-[#1A1A1A]':''} ` } />
            :<GiHamburgerMenu size={30} className={`${navBg ? 'text-[#1A1A1A]':''}`}/>
        }
        </button> */}

        {/* MOBILE NAV */}
      {hoverOpen && (
        <div className="md:hidden bg-white shadow-lg py-3 px-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.id}>
              {!item.children && (
                <Link to={item.url} className="block py-2 text-gray-900">
                  {item.title}
                </Link>
              )}

              {item.children && (
                <details className="group">
                  <summary className="cursor-pointer py-2 text-gray-900">
                    {item.title}
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        to={child.url}
                        className="block text-gray-700"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar1;