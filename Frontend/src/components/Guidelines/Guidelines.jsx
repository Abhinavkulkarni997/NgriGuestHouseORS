import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const Guidelines = () => {
    const guideLines=[
        'Requests for booking accommodation at CSIR-NGRI Guest House should be invariably submitted through email : guesthouse@ngri.res.in, well in advance with complete details.',
'The accommodation can be requested/booked for a maximum period of 7 days, subject to availability. Beyond 7 days the rates will be doubled for that category in which the guest belongs and billed accordingly.',
'The applicant is responsible for the correctness/genuineness of each of the guest’s details.',
'The management may at its discretion, cancel a booking, offer a shared accommodation or offer an alternate accommodation as per availability, without citing any reason.',
'Any change in the arrival/departure of guests needs to be brought to the notice of Guest House staff immediately by email.',
'Research Scholar/Project Assistant/Student requiring accommodation for themselves and/or their parents/guests is required to apply online through their Guides/Project Leaders/Supervisors/HOD/mentors who are permanent employees from CSIR.',
'Booking is not permitted for guests undergoing medical treatment for communicable disease or are bed ridden or who are seriously ill.',
'Accommodation and food charges are billed separately and are to be separately settled as per rules]'
        ]
  return (
    <section id="guidelines" className='w-full py-16 bg-gradient-to-br from-cyan-50 via-cyan-400/10 to-cyan-400/10 rounded-lg '>
        <div className='max-w-6xl bg-white mx-auto shadow-md rounded-2xl p-10 px-4 '>
            <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 text-center'>Guidelines</h1>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {guideLines.map((item,index)=>(
                <div  key={index} className=' flex  items-start gap-4 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300'>
                  <FaCheckCircle className='w-6 h-6 md:w-7 md:h-7 text-cyan-600 flex-shrink-0'/>
                  <p className='text-start md:text-base text-gray-700 leading-relaxed break-words  min-w-0  font-medium text-xs sm:text-sm w-full'>
                    {item}
                    </p>
                    </div>
            )
            
            )}
            </div>

        </div>
        
        
    </section>
  )
}

export default Guidelines


