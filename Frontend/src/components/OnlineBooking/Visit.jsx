import React from 'react'
import { useFormContext } from 'react-hook-form';

const Visit = () => {
    const {register,formState:{errors}}=useFormContext();
    const purposes=["select","Personal","Office","LTC"]
  return (
    <div>
        <h2 className='text-lg font-semibold mb-4'>Visit Details</h2> 

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
             <label className="block text-sm font-medium text-gray-700">Purpose of Visit</label>
            <select {...register("purpose")} className="mt-1 block w-full rounded-lg border p-3">
            {purposes.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.purpose && <p className="text-red-600">{errors.purpose.message}</p>}
           <div>
          <label className="block text-sm font-medium text-gray-700">Number of Rooms</label>
          <input {...register("numberOfRooms", { valueAsNumber: true })} type="number" min="1" className="mt-1 block w-full rounded-lg border p-3" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Arrival Date</label>
          <input {...register("arrivalDate")} type="date" className="mt-1 block w-full rounded-lg border p-3" />
          {errors.arrivalDate && <p className="text-red-600">{errors.arrivalDate.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Arrival Time</label>
          <input {...register("arrivalTime")} type="time" className="mt-1 block w-full rounded-lg border p-3" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Departure Date</label>
          <input {...register("departureDate")} type="date" className="mt-1 block w-full rounded-lg border p-3" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Departure Time</label>
          <input {...register("departureTime")} type="time" className="mt-1 block w-full rounded-lg border p-3" />
        </div>
      </div>
        </div>
    
  )
}

export default Visit