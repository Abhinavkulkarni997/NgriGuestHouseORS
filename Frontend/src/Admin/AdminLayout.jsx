import React,{useState} from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
const AdminLayout=()=>{
    const [collapsed,setCollapsed] = useState(false);
return(

<div className=' min-h-screen flex '>
    <SideBar collapsed={collapsed}/>
    <div className='flex flex-col flex-1'>
          <TopBar onToggle={()=>setCollapsed(!collapsed)}/>
    </div>
    <div className='overflow-y-auto p-4 bg-gray-50'>
    <Outlet/>
    </div>
   
</div>

)
}

export default AdminLayout;