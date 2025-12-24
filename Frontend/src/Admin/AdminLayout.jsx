import React,{useState} from 'react';
import SideBar from './SideBar';
// import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
const AdminLayout=({children})=>{
    const [collapsed,setCollapsed] = useState(false);
return(

<div className=' h-screen flex '>
    <SideBar collapsed={collapsed}/>
    <div className='flex flex-col flex-1'>
          <TopBar onToggle={()=>setCollapsed(!collapsed)}/>
    </div>
    <main className='overflow-y-auto p-4 bg-gray-50'>
        {children}
    </main>
   
</div>

)
}

export default AdminLayout;