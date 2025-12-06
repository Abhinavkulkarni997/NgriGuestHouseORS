import React from 'react'

const Guidelines = () => {
    const guideLines=[{
        id:0,
        icon:"",
        info:['Requests for booking accommodation at CSIR-NGRI Guest House should be invariably submitted through email : guesthouse@ngri.res.in, well in advance with complete details.',
'The accommodation can be requested/booked for a maximum period of 7 days, subject to availability. Beyond 7 days the rates will be doubled for that category in which the guest belongs and billed accordingly.',
'The applicant is responsible for the correctness/genuineness of each of the guest’s details.',
'The management may at its discretion, cancel a booking, offer a shared accommodation or offer an alternate accommodation as per availability, without citing any reason.',
'Any change in the arrival/departure of guests needs to be brought to the notice of Guest House staff immediately by email.',
'Research Scholar/Project Assistant/Student requiring accommodation for themselves and/or their parents/guests is required to apply online through their Guides/Project Leaders/Supervisors/HOD/mentors who are permanent employees from CSIR.',
'Booking is not permitted for guests undergoing medical treatment for communicable disease or are bed ridden or who are seriously ill.',
'Accommodation and food charges are billed separately and are to be separately settled as per rules]'
        ]}]
  return (
    <section className='max-w-screen-xl py-16 '>
        <div className=''>
            <h1 className=''>Guidelines</h1>
            {guideLines.map(item,index)=>{
            return(
                <div div key={index}>
                    
                    </div>
            )
            }}

        </div>
        
        
    </section>
  )
}

export default Guidelines