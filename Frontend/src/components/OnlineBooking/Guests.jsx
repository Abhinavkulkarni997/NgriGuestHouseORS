import React, { useEffect } from 'react'
import { useFormContext,useFieldArray,useWatch } from 'react-hook-form' 
import Captcha from '../Captcha/Captcha';
const Guests = () => {
        const {register,control,formState:{errors}}=useFormContext();
    const  {fields,append,remove,update}=useFieldArray({control,name:"guests"});
    const isApplicantGuest=useWatch({
        control,
        name:'isApplicantGuest',
    });

    const applicantName=useWatch({control,name:"applicantName"});
    const organization=useWatch({control,name:"organization"});
    const mobileNumber=useWatch({control,name:"mobileNumber"});
    
    // const guests=useWatch({control,name:"guests"});

    // useEffect(()=>{
    //     if(isApplicantGuest){
    //         const alreadyAdded=fields.some((g)=>g.isApplicant===true);

    //     if(!alreadyAdded){
    //         append({
    //             name:applicantName||"",
    //             organization:organization||"",
    //             contact:mobileNumber||"",
    //             age:"",
    //             gender:"",
    //             idProof:"",
    //             category:"",
    //             isApplicant:true, 
    //         });
    //     }
    //     }else{
    //         // logic to remove auto-added guests
    //         const index=fields.findIndex((g)=>g.isApplicant===true);
    //         if(index!==-1){
    //             remove(index);
    //         }
    //     }
    // },[isApplicantGuest,
    //     applicantName,
    //     organization,
    //     mobileNumber,
    // fields,
    // append,
    // remove]);

   useEffect(() => {
  if (!fields.length) return;

  if (isApplicantGuest) {
    update(0, {
      ...fields[0],
      name: applicantName || "",
      organization: organization || "",
      contact: mobileNumber || "",
      isApplicant: true,
    });
  } else {
    update(0, {
      ...fields[0],
      name: "",
      organization: "",
      contact: "",
      isApplicant: false,
    });
  }
}, [isApplicantGuest, applicantName, organization, mobileNumber,]);




//     useEffect(() => {
//   const index =
//     guests?.findIndex(g => g?.isApplicant === true) ?? -1;

//   if (isApplicantGuest) {
//     if (index === -1) {
//       append({
//         name: applicantName || "",
//         organization: organization || "",
//         contact: mobileNumber || "",
//         age: "",
//         gender: "",
//         idProof: "",
//         category: "",
//         isApplicant: true,
//       });
//     } else {
//       setValue(`guests.${index}.name`, applicantName || "");
//       setValue(`guests.${index}.organization`, organization || "");
//       setValue(`guests.${index}.contact`, mobileNumber || "");
//     }
//   } else {
//     if (index !== -1) {
//       remove(index); // values will vanish if shouldUnregister:true
//     }
//   }
// }, [isApplicantGuest, applicantName, organization, mobileNumber]);

    

    // useEffect(()=>{
    //     const index=fields.findIndex((g)=>g.isApplicant);
    //     if(index!==-1){
    //         setValue(`guests${index}.name`,applicantName||'')
    //         setValue(`guests${index}.organization`,organization||'')
    //         setValue(`guests${index}.contact`,mobileNumber||'')
    //     }
    // },[applicantName,organization,mobileNumber,fields,setValue])



       const category=[
    //     {
    //     id:0,
    //     name:'select'
    // },
    {
        id:1,
        name:'(a) CSIR Employee'
    },{
        id:2,
        name:'(b) CSIR Pensioner'
    },{
        id:3,
        name:'(c) CSIR Student (PF/JRF/SRF/RA/Scholars)'
    },{
        id:4,
        name:'Dependant spouse/child/parent/sibling of (a)/(b)'
    },{
        id:5,
        name:'Non-Dependant spouse/child/parent/sibling of (a)/(b)'
    },{
        id:6,
        name:'Guests/Expert Members invited for CSIR/Institute Work'
    },{
        id:7,
        name:'Serving employees of ACSIR/PSUs of DSIR i.e. CEL, NRDC for Official Purpose'
    },{
        id:8,
        name:'Other Relative/Friend/Personal Guest of (a)/(b)/(c)'
    },{
        id:9,
        name:'NRI/Foreign Guests'
    }
]
const genders=[
//     {
//     id:0,
//     name:'select'
// }
{
    id:1,
    name:'MALE'
},{
    id:2,
    name:'FEMALE'
}]
    


  return (
    <div>
        <h1 className='text-lg font-semibold mb-4'>Guests Details</h1>

        <div className='space-y-4'>
            {/* checkbox for one of the guest */}
        <label className='flex items-center gap-2 mb-4'>
            <input {...register('isApplicantGuest')}type="checkbox"/>
            <span className="text-sm">Are you one of the guests?</span>
        </label>
        {/* guests list */}
            {fields.map((field,index)=>(
                <div key={field.id} className='border rounded-lg p-4 bg-white'>
                    <div className='flex justify-between items-center mb-3'>
                        <strong>Guest #{index+1} </strong>
                        {/* <div className='flex gap-2'> */}
                            {!field.isApplicant && fields.length>1 &&(<button type="button" onClick={()=>remove(index)} className='text-red-600 text-sm'>Remove</button>)}
                             {/* {index!==0 &&(<button type="button" onClick={()=>remove(index)} className='text-red-600 text-sm'>Remove</button>)} */}
                            {/* </div> */}
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <label className='font-medium text-sm text-gray-700'>Name</label>
                            <input {...register(`guests.${index}.name`)} className='mt-1  w-full rounded-lg border p-3' disabled={field.isApplicant}/>
                            {errors.guests?.[index]?.name &&(<p className='text-red-600 text-sm'>{errors.guests[index].name.message}</p>)}
                            </div>

                        <div>
                            <label className='font-medium text-sm text-gray-700'>Organization </label>
                            <input {...register(`guests.${index}.organization`)} className='mt-1 border w-full rounded-lg p-3' disabled={field.isApplicant}/>
                        </div>

                        <div>
                            <label className='font-medium text-sm text-gray-700'>Age</label>
                            <input type="number" {...register(`guests.${index}.age`,{valueAsNumber:true})} className='mt-1 border w-full rounded-lg p-3'/>
                        </div>

                        <div>
                            <label className='font-medium text-sm text-gray-700'>Gender</label>
                        <select {...register(`guests.${index}.gender`)} className='mt-1  border w-full rounded-lg p-3'>
                            <option value="">Select</option>
                            {genders.map((g)=>(<option key={g.id} value={g.name}>{g.name}</option>))}

                        </select>
                        </div>

                        <div>
                            <label className="font-medium text-sm text-gray-700">Contact No.</label>
                            <input {...register(`guests.${index}.contact`)} className="mt-1  w-full rounded-lg border p-3" disabled={field.isApplicant}/>
                            {errors.guests?.[index]?.contact &&(<p className='text-red-600 text-sm'>{errors.guests[index].contact.message}</p>)}

                        </div>

                        <div>
                            <label className="font-medium text-sm text-gray-700">ID Proof No.</label>
                            <input {...register(`guests.${index}.idProof`)} className="mt-1  w-full rounded-lg border p-3" />
                        </div>

                        <div>
                            <label className='font-medium text-sm text-gray-700'>Category</label>
                            <select {...register(`guests.${index}.category`)} className='mt-1  w-full rounded-lg border p-3'>
                                <option value="">Select</option>
                                {category.map((c)=>(<option key={c.id} value={c.name}>{c.name}</option>))}
                            </select>
                        </div>

                    </div>
                </div>
            ))}

            {/* <div className='flex gap-3'> */}
               <button type="button" disabled={fields.length>=6} onClick={() => append({ name: "", organization: "", age: "", gender: "", contact: "", idProof: "", category: "" })} className="px-4 py-2 bg-cyan-600 text-white rounded-md">
            Add Guest
          </button>
               <p className='text-sm text-gray-800 self-center'>You can add upto 6 guests</p>
            {/* </div> */}


            {/* Terms and conditions  */}
            <div className="sm:col-span-2 mt-4">
                <label className="inline-flex items-center gap-2">
                <input {...register("agreeTerms")} type="checkbox" />
                <span className="text-base">I agree to Terms & Conditions</span>
                </label>
                {errors.agreeTerms && <p className="text-red-600 text-sm">Please agree to Terms & Conditions</p>}
            </div> 


            <div className=' mt-2'>
                <Captcha/>
            </div>
         
        </div>
        
        </div>
  )
}

export default Guests;