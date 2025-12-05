import React from 'react'

const GuestHouseCharges = () => {
    const guestHouseCharges = [{
        id:'1',
        title:'Sl No.',
        description:['1','2','3','3','4','5','6']

    },{
        id:'2',
        title:'Category of Guests',
        description:[
            'CSIR Employee, Pensioners and their dependant Family members',
            'Project Fellows, JRF/ SRF/ RA, Research Students, Scholars working in CSIR Labs/Hqrs',
            'Non-dependant family members of CSIR employees/pensioners',
            'Non official/ expert members invited for CSIR work',
            "Serving employees of AcSIR/ PSU's of DSIR (Official Purpose)",
            'Non CSIR/Other Guests',
            'NRI/Foreign Guests'
        ]
        
    },{
        id:'3',
        title:'Rates Per Bed (A/C)',
        description:[
            'INR 100',
            'INR 100',
            'INR 200',
            'INR 200',
            'INR 300',
            'INR 600',
            'INR 2500'
        ]
    },{
        id:'4',
        title:'Rates Per Bed (NON A/C)',
        description:[
            'INR 80',
            'INR 80',
            'INR 160',
            'INR 160',
            'INR 240',
            'INR 500',
            'INR 2000'
        ]

    }];
  return (
    <section>
      <div>
        <h1>Guesthouse Charges</h1>
        <p>The accommodation can be requested/booked for a maximum period of 7 days, subject to availability.
Beyond 7 days the rates will be doubled for that category in which the guest belongs and billed accordingly.</p>

{guestHouseCharges.map((item,index)=>{
    return(
        <table key={index} className='' >
           <tr>{item.title}</tr> 
            <td>{item.description}</td> 


        </table>
    )
})}
    </div>  
        
        
    </section>
  )
}

export default GuestHouseCharges