import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
const AdminLayout=()=>{

return(

<div className='flex'>
    <SideBar/>
    <div className='flex-1 p-4'>
    <Outlet/>
    </div>
   
</div>

)
}

export default AdminLayout;