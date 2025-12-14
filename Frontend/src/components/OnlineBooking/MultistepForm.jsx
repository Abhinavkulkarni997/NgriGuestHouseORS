import React,{useState} from 'react';
import { useForm,FormProvider} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {bookingSchema,defaultValues} from './formSchema';
import ProgressBar  from './ProgressBar';
import Applicant from './Applicant';
import Visit from './Visit';
import Review from './Review';
import { submitBooking } from './api';
import Guests from './Guests';

const MultistepForm = () => {
  const methods=useForm({
    defaultValues,
    resolver:zodResolver(bookingSchema),
    mode:"onTouched"
  });

  const {handleSubmit,trigger,getValues}=methods;

  const [step,setStep]=useState(1);
  const [submitting,setSubmitting]=useState(false);
  const steps=4;

  const next=async()=>{
    let valid=false;
    if(step===1){
      valid=await trigger([
        "applicantName","designation","organization","mobileNumber","officialEmail","officeIdFile","agreeTerms"
      ]);
    }else if(step===2){
      valid=await trigger(["purpose","numberOfRooms","arrivalDate","arrivalTime","departureDate","departureTime"]);
    }else if(step===3){
      valid =await trigger(["guests"]);
    }else valid=true;
    if(valid) setStep((s)=>Math.min(steps,s+1));
  };

  const prev=()=>setStep((s)=>Math.max(1,s-1));

  const onSubmit=async(data)=>{
    try{
      setSubmitting(true);
      const fd=new  FormData();
      Object.keys(data).forEach((k)=>{
        if(k==='guests'){
          fd.append("guests",JSON.stringify(data.guests));
          return;
        }
        if(k==="OfficeIdFile" && data.officeIdFile && data.officeIdFile[0]){
          fd.append("officeIdFile",data.officeIdFile[0]);
          return;
        }
        fd.append(k,data[k]??"");
      });
      const res=await submitBooking(fd);
      alert("Booking submitted. Booking ID: "+ (res.bookingId || "N/A"));
    }catch(err){
      alert("SUbmit error: "+err.message)
    }finally{
      setSubmitting(false);
    }
  }

  return (
    <div className='min-h-screen flex items-start justify-center bg-gray-50 py-10 px-4'>
      <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <ProgressBar step={step} steps={steps}/>

            {step===1 && <Applicant/>}
            {step===2 && <Visit/>}
            {step===3 && <Guests/>}
            {step===4 && <Review getValues={getValues}/>}

            <div className='mt-6 flex-items-center justify-between'>
              <div>
                {step >1 && <button type="button" onClick={prev} className='px-4 py-2 rounded-md bg-gray-200'>Back</button>}
              </div>
              <div>
                {step < steps && (
                  <button type="button" onClick={next} className='px-6 py-2 bg-cyan-600 text-white rounded-md'>Next</button>
                )}
                {step===steps && (
                  <button type="submit" disabled={submitting} className='px-6 py-2 bg-cyan-700 text-white rounded-md'>{submitting?"Submitting...":"Submit Request"}</button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
        </div>

    </div>
  )
}

export default MultistepForm