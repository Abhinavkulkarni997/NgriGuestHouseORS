import React from 'react'
 import sidemenu from '../assets/AdminDashboard/Home/menu.svg';
const TopBar = ({onToggleDesktop,onToggleMobile}) => {
  return (
 
        <header className='h-14 flex items-center  px-4 border-b bg-white sticky top-0 z-20'>
                  <button onClick={onToggleMobile} className='p-2 md:hidden'>
                    <img src={sidemenu} className="w-6 h-6"/></button>

                     <button onClick={onToggleDesktop} className='p-2 hidden md:block'>
                    <img src={sidemenu} className="w-6 h-6"/></button>
                <h1 className='ml-4 font-semibold'>Admin Dashboard</h1>

                <div className='ml-auto'> Profile</div>
         
        </header>
        

  )
}

export default TopBar