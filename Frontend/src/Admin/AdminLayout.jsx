import React,{useState} from 'react';
import SideBar from './SideBar';
 import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
const AdminLayout=()=>{
    const [collapsed,setCollapsed] = useState(false);
return(

<div className=' h-screen flex '>
    <SideBar collapsed={collapsed}/>
    <div className='flex flex-col flex-1'>
          <TopBar onToggle={()=>setCollapsed(!collapsed)}/>
             <main className='flex-1 overflow-y-auto p-4 bg-gray-50'>
        <Outlet/>
    </main>
    </div>
   
   
</div>

)
}

export default AdminLayout;