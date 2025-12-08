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
                <div div key={index} className=' flex  items-start gap-4 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300'>
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


// const Guidelines = () => {
//   const guideLines = [
//     "Requests for booking accommodation at CSIR-NGRI Guest House should be emailed to guesthouse@ngri.res.in with complete details.",
//     "Accommodation can be booked for a maximum of 7 days. Beyond that, charges will be doubled for the respective category.",
//     "Applicants are responsible for the correctness of the details of all guests.",
//     "Management may cancel, shift, or modify accommodation based on availability without assigning any reason.",
//     "Any change in arrival/departure must be immediately informed through email.",
//     "Students/Scholars must apply through their CSIR-permanent employee Guide/PL/HOD.",
//     "Booking is not allowed for guests undergoing treatment for communicable diseases or who are bed-ridden.",
//     "Accommodation and food charges are billed separately."
//   ];

//   return (
//     <section className="w-full py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Heading */}
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
//           Guest House Guidelines
//         </h1>

//         <p className="text-gray-600 text-center mt-3 text-lg max-w-2xl mx-auto">
//           Please go through the guidelines carefully before booking your stay.
//         </p>

//         {/* Timeline Container */}
//         <div className="mt-12 relative">
//           {/* Vertical Line */}
//           <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>

//           <div className="space-y-12">
//             {guideLines.map((text, index) => (
//               <div
//                 key={index}
//                 className={`flex items-start gap-6 ${
//                   index % 2 === 0
//                     ? "md:flex-row"
//                     : "md:flex-row-reverse text-right md:text-left"
//                 }`}
//               >
//                 {/* Icon Marker */}
//                 <div className="flex-shrink-0">
//                   <CircleDot className="w-10 h-10 text-cyan-600 bg-white/70 backdrop-blur-lg rounded-full p-2 shadow-md" />
//                 </div>

//                 {/* Card */}
//                 <div className="flex-1 bg-white/60 backdrop-blur-xl shadow-lg p-6 rounded-2xl border border-white/40">
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };