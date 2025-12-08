import React from 'react'

const GuestHouseCharges = () => {
    const guestHouseCharges = [{
        id:'1',
        sl:"1",
        category:'CSIR Employee, Pensioners and their dependant Family members',
        ac:'INR 100',
        nonAc:'INR 80'

    },{
        id:'2',
        sl:'2',
        category:'Project Fellows, JRF/ SRF/ RA, Research Students, Scholars working in CSIR Labs/Hqrs',
        ac:'INR 100',
        nonAc:'INR 80'
        
    },{
        id:'3',
        sl:'3',
        category:'Non-dependant family members of CSIR employees/pensioners',
        ac:'INR 200',
        nonAc:'INR 160'

    
        
    },{
        id:'4',
        sl:'3',
        category:'Non official/ expert members invited for CSIR work',
        ac:'INR 200',
        nonAc:'INR 160'

    },{
        id:'5',
        sl:'4',
        category:"Serving employees of AcSIR/ PSU's of DSIR (Official Purpose)",
        ac:'INR 300',
        nonAc:'INR 240'

    },{
        id:'6',
        sl:'5',
        category:'Non CSIR/Other Guests',
        ac:'INR 600',
        nonAc:'INR 500'

    },{
        id:'7',
        sl:'6',
        category:'NRI/Foreign Guests',
        ac:'INR 2500',
        nonAc:'INR 2000'


    }];
  return (
    <section className='py-10 sm:py-14 lg:py-20 bg-white '>
      <div className='max-w-6xl mx-auto px-4 '>
        <h1 className='text-center text-gray-800 font-extrabold text-3xl md:text-4xl mb-3'>Guesthouse Charges</h1>
        <p className='text-center  text-gray-700   mb-10 leading-relaxed'>The accommodation can be requested/booked for a maximum period of 7 days, subject to availability.<br/>
Beyond 7 days the rates will be doubled for that category in which the guest belongs and billed accordingly.</p>
</div>


        <div className='overflow-x-auto mt-6 shadow-xl  border border-b-2 rounded-lg'>
        <table  className='w-full text-sm text-left' >
            <thead className=' backdrop-blur-md bg-gradient-to-r from-cyan-400/10  to-cyan-400/10 text-gray-800'>
            <tr>
           <th className='px-4 py-3 '> Sl No.</th>
            <th className='px-4 py-3 '>Category Of Guests </th>
           <th className='px-4 py-3'>Rates Per Bed(A/C)</th>
           <th className='px-4 py-3 ' >Rates Per Bed(NON A/C)</th>
            </tr>
            </thead>
            <tbody className=' divide-y divide-gray-200 '>
                {guestHouseCharges.map((row,index)=>(
                <tr key={index} className={`${index%2==0? "border-gray-50":"bg-white"} hover:bg-indigo-50 transition`}>
                    <td  className='px-4 py-3 text-gray-700'>{row.sl}</td>
                    <td className='px-4 py-3 text-gray-700'>{row.category}</td>
                    <td className='px-4 py-3 font-medium text-gray-900'>{row.ac}</td>
                    <td className='px-4 py-3 font-medium text-gray-900'>{row.nonAc}</td>
                </tr>
                ))}


            </tbody>
        </table>
        </div>    
    </section>
  )
}

export default GuestHouseCharges