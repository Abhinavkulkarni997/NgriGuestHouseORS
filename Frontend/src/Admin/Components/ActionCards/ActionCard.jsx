import React from 'react';

const ActionCard = ({title,subtitle,onClick,accent="blue"}) => {
const colors={
    blue:"border-blue-500 bg-blue-50",
    yellow:"border-yellow-500 bg-yellow-50",
    green:"border-green-500 bg-green-50",
    red:"border-red-500 bg-red-50"

}
  return (
    <div onClick={onClick} className={`border-l-4 ${colors[accent]} p-4 rounded-xl cursor-pointer hover:shadow-md transition duration-300`}>
        <h2 className='text-lg font-semibold '>{title}</h2>
        <p className='text-sm text-gray-600 mt-1 '>{subtitle}</p>
        
    </div>
  )
}

export default ActionCard;