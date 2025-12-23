import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
const AdminLayout=()=>{

return(

<div className='flex min-h-screen'>
    <SideBar/>
    <div className='flex-1 p-6 bg-gray-50'>
    <Outlet/>
    </div>
   
</div>

)
}

export default AdminLayout;