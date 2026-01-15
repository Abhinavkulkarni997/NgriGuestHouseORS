import React from 'react';

const DashBoardCard = ({title,value,subtitle,color}) => {
  return(
    <div className='bg-white rounded-xl shadow p-4 border-l-4' style={{borderColor:color}}>
      <p className='text-sm text-gray-500'>{title}</p>
      <h2 className='text-2xl font-bold mt-2'>{value}</h2>
      {subtitle && (<p className='text-xs text-gra-400 mt-1'>{subtitle}</p>)}

    </div>
  )

}

export default DashBoardCard;