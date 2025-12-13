import React from 'react'
import { useFormContext,useFieldArray } from 'react-hook-form' 
const Guests = () => {
    const {register,control,formState:{errors}}=useFormContext();
    const  {fields,append,remove}=useFieldArray({control,name:"guests"});
  return (
    <div>
        <h1 className='text-lg font-semibold mb-4'>Guests Details</h1>

        <div className='space-y-4'>
            {fields.map((field,index)=>{
                <div key={field.id} className='border rounded-lg p-4 bg-white'>
                    <div className='flex justify-between items-center mb-3'>
                        <strong>Guest #{index+1} </strong>
                        <div className='flex gap-2'>
                            {fields.length>1 &&<button type="button" onClick={()=>remove(index)} className='text-red-600'>Remove</button>}
                            </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <label className='block text-sm'>Name</label>
                            <input {...register(`guests.${index}.name`)} className='mt-1 block w-full rounded-lg border p-3'/>
                            </div>

                        <div>
                            <label className='block text-sm'>Organization </label>
                            <input {...register(`guests.${index}.organization`)} className='mt-1 block w-full rounded-lg p-3'/>
                        </div>

                        <div>
                            <label className=''>Age</label>
                            <input type="number" {...register(`guests.${index}.age`,{valueAsNumber:true})} className='mt-1 block w-full rounded-lg p-3'/>
                        </div>

                        <div>
                        <select {...register(`guests.${index}.gender`)} className='mt-1 block w-full rounded-lg p-3'>
                            <option value="">Select</option> 
                            <option value="male">MALE</option> 
                            <option value="female">FEMALE</option> 

                        </select>
                        </div>

                        <div>
                            <label className="block text-sm">Contact No.</label>
                            <input {...register(`guests.${index}.contact`)} className="mt-1 block w-full rounded-lg border p-3" />
                        </div>

                        <div>
                            <label className="block text-sm">ID Proof No.</label>
                            <input {...register(`guests.${index}.idProof`)} className="mt-1 block w-full rounded-lg border p-3" />
                        </div>


                    </div>
                </div>
            })}
        </div>
        
        </div>
  )
}

export default Guests