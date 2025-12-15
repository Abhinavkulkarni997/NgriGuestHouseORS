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
        <section>
        
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
        
        </section>

        <section>
      
          <strong>Visit:</strong>
          <pre className='bg-gray-50 p-3 rounded'>
            {JSON.stringify({
              purpose:data.purpose,
              numberOfRooms:data.numberOfRooms,
              arrival:`${data.arrivalDate} ${data.arrivalTime}`,
              departure:`${data.departureDate} ${data.departureTime}`
            },null,2)}
          </pre>
        
          </section>

          

          <section>
            <strong>Guests:</strong>
            <pre className="bg-gray-50 p-3 rounded">
              {JSON.stringify(data.guests,null,2)}
            </pre>
            </section>

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