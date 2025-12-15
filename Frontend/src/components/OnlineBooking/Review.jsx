import React from 'react'
import { FcOrganization } from 'react-icons/fc';

const Review = ({getValues}) => {
  const  data=getValues();
  return (
    <div>
      <h2 className='text-lg font-semibold mb-4'>Review & Submit</h2>
      <div className='space-y-4 text-sm'>
        <div>
          <strong>Applicant:</strong>
          <pre className='bg-gray-50 p-3 rounded'>
            {JSON.stringify({
              applicantName:data.applicantName,
              designation:data.designation,
              organization:data.organization,
              employeeId:data.employeeId,
              mobileNumber:data.mobileNumber,
              officialEmail:data.officialEmail,
              paymentBy:data.paymentBy,
            },null,2)}
          </pre>
        </div>

        <div>
          <strong>Visit:</strong>
          <pre className='bg-gray-50 p-3 rounded'>
            {JSON.stringify({
              purpose:data.purpose,
              numberOfRooms:data.numberOfRooms,
              arrival:`${data.arrivalDate} ${data.arrivalTime}`,
              departure:`${data.departureDate} ${data.departureTime}`
            },null,2)}
          </pre>
          </div>

          <div>
            <strong>Guests:</strong>
            <pre className="bg-gray-50 p-3 rounded">
              {JSON.stringify(data.guests,null,2)}
            </pre>
            </div>
          </div>
      </div>
      
  )
}

export default Review