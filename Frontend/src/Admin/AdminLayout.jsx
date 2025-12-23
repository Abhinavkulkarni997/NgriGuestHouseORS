import React from 'react';
import SideBar from './SideBar';
const AdminLayout=({children})=>{

return(
<>
<div>
    <SideBar/>
    {children}
</div>

</>
)
}

export default AdminLayout;