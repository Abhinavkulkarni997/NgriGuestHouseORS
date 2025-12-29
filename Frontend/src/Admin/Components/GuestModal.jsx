import React from 'react'

const GuestModal = ({guests,onClose}) => {
  return (
   <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
    <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
                <h4 className='font-semibold mb-2'>Guest Details:</h4>
                {guests.guests.map((guest,index)=>(
                    <div key={index} className='border rounded p-2 mt-2 text-sm'>
                        <p><strong>Name:</strong> {guest.name}</p>
                        <p><strong>Organization:</strong> {guest.organization}</p>
                        <p><strong>Age:</strong> {guest.age}</p>
                        <p><strong>Gender:</strong> {guest.gender}</p>
                        <p><strong>Contact No:</strong> {guest.contact}</p>
                        <p><strong>ID Proof:</strong> {guest.idProof}</p>
                        <p><strong>Category:</strong> {guest.category}</p>
                        </div>
                ))}

                <button onClick={()=>onClose()} className='mt-2 rounded-lg px-4 py-1  text-white bg-gray-700'>close</button>

            </div>
            </div>
  )
}

export default GuestModal;