import React from 'react'
 import sidemenu from '../assets/AdminDashboard/Home/menu.svg';
const TopBar = ({onToggle}) => {
  return (
 
        <header className='h-14 flex items-center  px-4 border-b '>
                  <button onClick={onToggle} className='p-2'>
                    <img src={sidemenu} className="w-6 h-6"/></button>
                <h1 className='ml-4 font-semibold'>Admin Dashboard</h1>

                <div className='ml-auto'> Profile</div>
         
        </header>
        

  )
}

export default TopBar