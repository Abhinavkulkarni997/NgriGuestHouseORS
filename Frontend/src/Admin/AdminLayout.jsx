import React,{useState} from 'react';
import SideBar from './SideBar';
 import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
const AdminLayout=()=>{
    const [collapsed,setCollapsed] = useState(false);
    const [mobileOpen,setMobileOpen]=useState(false);
return(

<div className=' h-screen flex overflow-hidden '>
    {/* sidebar */}
    <SideBar collapsed={collapsed} mobileOpen={mobileOpen} onClose={()=>setMobileOpen(false)}/>
        {/* Overlay for mobile */}
        {
            mobileOpen &&(
                <div className='fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden' onClick={()=>setMobileOpen(false)}/>
            )
        }

        {/* main content */}
    <div className='flex flex-col flex-1'>
          <TopBar onToggleDesktop={()=>setCollapsed(!collapsed)} onToggleMobile={()=>setMobileOpen(true)}/>
             <main className='flex-1 overflow-y-auto p-4 bg-gray-50'>
        <Outlet/>
    </main>
    </div>
   
   
</div>

)
}

export default AdminLayout;