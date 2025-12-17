import React from 'react'
import { FcOrganization } from 'react-icons/fc';
import { useFormContext } from 'react-hook-form';
const Review = ({getValues}) => {
  const {register,formState:{errors}}=useFormContext();
  const  data=getValues();
  return (
    <div>
      <h2 className='text-lg font-semibold mb-4'>Review & Submit</h2>
      <div className='space-y-4 text-sm'>
        {/* <section>
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
        </section> */}
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>Applicant Details</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
          <p><strong>Name:</strong>&nbsp;{data.applicantName}</p>
          <p><strong>Designation:</strong>&nbsp;{data.designation}</p>
          <p><strong>Organization:</strong>&nbsp;{data.organization}</p>
          <p><strong>EmployeeId:</strong>&nbsp;{data.employeeId}</p>
          <p><strong>Contact No:</strong>&nbsp;{data.mobileNumber}</p>
          <p><strong>OfficialEmail:</strong>&nbsp;{data.officialEmail}</p>
          {data.paymentBy && <p><strong>PaymentBy:</strong>&nbsp;{data.paymentBy}</p>}
          </div>
        </div>

        {/* <section>
      
          <strong>Visit:</strong>
          <pre className='bg-gray-50 p-3 rounded'>
            {JSON.stringify({
              purpose:data.purpose,
              numberOfRooms:data.numberOfRooms,
              arrival:`${data.arrivalDate} ${data.arrivalTime}`,
              departure:`${data.departureDate} ${data.departureTime}`
            },null,2)}
          </pre>
        
          </section> */}

          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Visitor Details</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
              <p><strong>Purpose:</strong>&nbsp;{data.purpose}</p>
              <p><strong>No. Of Rooms:</strong>&nbsp;{data.numberOfRooms}</p>
              <p><strong>Arrival Date:</strong>&nbsp;{data.arrivalDate}</p>
              <p><strong>Arrival Time:</strong>&nbsp;{data.arrivalTime}</p>
              <p><strong>Departure Date:</strong>&nbsp;{data.departureDate}</p>
              <p><strong>Departure Time:</strong>&nbsp;{data.departureTime}</p>
            </div>
          </div>
          

          {/* <section>
            <strong>Guests:</strong>
            <pre className="bg-gray-50 p-3 rounded">
              {JSON.stringify(data.guests,null,2)}
            </pre>
            </section> */}

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-2'>Guests Details</h3>
              {data.guests.map((g,i)=>(
                <div key={i} className='border rounded-md p-3 mb-3'>
                  <p><strong>Name:</strong>&nbsp;{g.name}</p>
                  <p><strong>Organization:</strong>&nbsp;{g.organization||"-"}</p>
                  <p><strong>Contact:</strong>&nbsp;{g.contact||"-"}</p>
                  <p><strong>Gender:</strong>&nbsp;{g.gender || "-"}</p>
                  <p><strong>Category:</strong>&nbsp;{g.category || "-"}</p>

                  </div>
              ))}

              
            
            </div>

         {/* TERMS */}
        <div className="mt-4">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" {...register("agreeTerms")} />
            <span>I agree to the Terms & Conditions</span>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-600 text-sm">
              {errors.agreeTerms.message}
            </p>
          )}
        </div>

        {/* CAPTCHA (Mock now, replace later) */}
        <div>
          <label className="block text-sm font-medium">
            Enter Captcha
          </label>
          <input
            {...register("captcha")}
            placeholder="Enter captcha"
            className="mt-1 block w-full rounded-lg border p-3"
          />
          {errors.captcha && (
            <p className="text-red-600 text-sm">
              {errors.captcha.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;