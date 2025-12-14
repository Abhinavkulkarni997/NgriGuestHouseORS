import React from 'react'
import { useFormContext,useFieldArray } from 'react-hook-form' 
const Guests = () => {
       const category=[{
        id:0,
        name:'select'
    },{
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
const Gender=[{
    id:0,
    name:'select'
},{
    id:1,
    name:'MALE'
},{
    id:2,
    name:'FEMALE'
}]
    
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
                            <label className='block text-sm'>Age</label>
                            <input type="number" {...register(`guests.${index}.age`,{valueAsNumber:true})} className='mt-1 block w-full rounded-lg p-3'/>
                        </div>

                        <div>
                            <label className='block text-sm'>Gender</label>
                        <select {...register(`guests.${index}.gender`)} className='mt-1 block w-full rounded-lg p-3'>
                            {Gender.map((g)=><option key={g.id} value={g.name}>{g.name}</option>)}

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

                        <div>
                            <label className='block text-sm'>Category</label>
                            <select {...register(`guests.${index}.category`)} className='mt-1 block w-ful rounded-lg border p-3'>
                                {category.map((c)=><option key={c.id} value={c.name}>{c.name}</option>)}
                            </select>
                        </div>

                    </div>
                </div>
            })}

            <div className='flex gap-3'>
               <button type="button" onClick={() => append({ name: "", organization: "", age: "", gender: "", contact: "", idProof: "", category: "" })} className="px-4 py-2 bg-cyan-600 text-white rounded-md">
            Add Guest
          </button>
               <p className='text-m text-gray-800 self-center'>You can add upto 6 guests</p>
            </div>

              <div className="sm:col-span-2">
          <label className="inline-flex items-center gap-2">
            <input {...register("agreeTerms")} type="checkbox" />
            <span className="text-sm">I agree to Terms & Conditions</span>
          </label>
          {errors.agreeTerms && <p className="text-red-600">{errors.agreeTerms.message}</p>}
        </div>
        </div>
        
        </div>
  )
}

export default Guests