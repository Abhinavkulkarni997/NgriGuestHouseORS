import React from 'react'

const OnlineBooking = () => {
    const organizationsList=[{
            id:'0',
            name:'select'
    },
        {id:1,
        name:'AMPRI (Advanced Materials and Processes Research Institute), Bhopal'
    },{
        id:2,
        name:'CBRI (Central Building Research Institute), ROORKEE'
    },{
        id:3,
        name:'CCMB (Center for Cellular & Molecular Biology), HYEDRABAD'
    },{
        id:4,
        name:'CDRI (Center Drug Research Institute), LUCKNOW'
    },{
        id:5,
        name:'CECRI (Central Electrochemical Research Institute), KARAIKUDI'
    },{
        id:6,
        name:'CEERI (Central Electronics Engineering Research Institute), PILANI'
    },{
        id:7,
        name:'CFTRI (Central Food Technological Research Institute), MYSORE'
    },{
        id:8,
        name:'CGCRI (Central Glass & Ceramic Research Institute), KOLKATA'
    },{
        id:9,
        name:'CIMAP ( Central Institue of Medicinal & Aromatic Plants), LUCKNOW'
    },{
        id:10,
        name:'CIMFR (Central Institute of Mining and Fuel Research), DHANBAD'
    },{
        id:11,
        name:'CLRI (Central Leather Research Institute), CHENNAI'
    },{
        id:12,
        name:'CMERI (Central mechanical Engineering Research Institute), DURGAPUR'
    },{
        id:13,
        name:'C-MMACS (Center for Mathematical Modelling & Computer Simulation), BANGALORE'
    },{
        id:14,
        name:'CRRI (Central Road Research Institute), NEW DELHI'
    },{
        id:15,
        name:'CSIO (Central Scientific Instruments Organisation), CHANDIGARH'
    },{
        id:16,
        name:'CSIR (Council of Scientific and Industrial Research), NEW DELHI'
    },{
        id:17,
        name:'CSIR-HRDC (Human Resource Development Centre), Ghaziabad'
    },{
        id:18,
        name:'CSIR-HRDG (Human Resource Development Group), NEW DELHI'
    },{
        id:19,
        name:'CSMCRI (Central Salt & Marine Chemicals Research Institute), BHAVNAGAR'
    },{
        id:20,
        name:'IGIB (Institute of Genomics and Integrative Biology), DELHI'
    },{
        id:21,
        name:'IHBT (Institute of Himalayan Bioresource Technology), PALAMPUR'
    },{
        id:22,
        name:'IICB (Indian Institute of Chemical Biology), KOLKATA'
    },{
        id:23,
        name:'IICT (Indian Institute of Chemical Technology), HYDERABAD'
    },{
        id:24,
        name:'IIIM (Indian Institute of Integrative Medicine),Jammu'
    },{
        id:25,
        name:'IIP (Indian Institute of Petroleum), DEHRADUN'
    },{
        id:26,
        name:'IITR (Indian Institute of Toxicology Research), LUCKNOW'
    },{
        id:27,
        name:'IMMT (Institute of Minerals and Materials Technology), BHUBANESWAR'
    },{
        id:28,
        name:'IMT (Institute of Microbial Technology), CHANDIGARH'
    },{
        id:29,
        name:'NAL (National Aerospace Laboratory), BANGALORE'
    },{
        id:30,
        name:'NBRI (National Botanical Research Institute), LUCKNOW'
    },{
        id:31,
        name:'NCL (National Chemical Laboratory), PUNE'
    },{
        id:32,
        name:'NEERI (National Environmental Engineering Research Institute), NAGPUR'
    },{
        id:33,
        name:'NEIST (North - East Institute of Science and Technology), JORHAT'
    },{
        id:34,
        name:'NGRI (National Geophysical Research Institute), HYDERABAD'
    },{
        id:35,
        name:'NIO (National Institute of Oceanography), GOA'
    },{
        id:36,
        name:'NISCAIR (National Institute of Science Communication & Information Resources), NEW DELHI'
    },{
        id:37,
        name:'NIST (National Institute for Interdisciplinary Science & Technology), Thiruvananthapuram'
    },{
        id:38,
        name:'NISTADS (National Institute Of Science,Technology & Development Studies), NEW DELHI'
    },{
        id:39,
        name:'NML (National Metallurgical Laboratory), JAMSHEDPUR'
    },{
        id:40,
        name:'NPL (National Physical Laboratory), NEW DELHI'
    },{
        id:41,
        name:'SERC (Structural Engineering Research Center), CHENNAI'
    },{
        id:42,
        name:'UPDIP (Unit for Research and Development of Information Products), PUNE'
    },{
        id:43,
        name:'PSUs of DSIR i.e CEL, NRDC'
    },{
        id:44,
        name:'AcSIR'
    }]

    const PurposeOfVisit=[
        {
            id:0,
            name:'select'
        },
        {
        id:1,
        name:'Personal'
    },{
        id:2,
        name:'Official'
    },{
        id:3,
        name:'LTC'
    }]
    const Rooms=[
    {
        id:0,
        name:''
    },
    {
        id:1,
        name:'(01) One'
    },{
        id:2,
        name:'(02) Two'
    },{
        id:3,
        name:'(03) Three'
    },{
        id:4,
        name:'(04) Four'
    },{
        id:5,
        name:'(05) Five'
    },{
        id:6,
        name:'(06) Six'
    }]
    const Payment=[{
        id:0,
        name:'select'
    },

        {
            id:1,
            name:'Guest'
        },{
            id:2,
            name:'Applicant'
        },{
            id:3,
            name:'NGRI A/C'
        }
    ]

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

    const handleChange=(e)=>{
        console.log(e.target.value);
    }
  return (
    <form className='max-w-7xl mx-auto p-6 bg-white shadow-md py-[130px] mt-10 py-10  '>
    <div>
        <h1 className='text-gray-900 font-extrabold text-3xl md:text-4xl text-center '>Accommodation Request</h1>
        <p className='text-gray-800 font-medium text-base sm:text-sm  mt-1 text-center '>The Accomodation request has be made by a CSIR Official only, otherwise the request will be summarily rejected. 
            Kindly provide your offical email address and upload a scanned copy of the Office ID for verification.</p>
    </div>

    {/* Applicant Details */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className=''>
            <h1>Applicant Details</h1>
        </div>
     
      <input type="text" id="name" name="name" required placeholder='Applicant Name' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>

  
    <input type="text" id="designation" name='designation' required placeholder='Designation' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'/>
    <input type="file" id="OfficeId" name='officeId' placeholder='Scanned Copy of Office ID(less than 2MB)' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring  focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'/>
    <select id="organizationlist" type="option" required placeholder="Organization List" className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2' onChange={(e)=>handleChange(e)}>
    {organizationsList.map((org,index)=>(
        <option key={index} value={org.value} >
            {org.name}
        </option>
    ))}
    </select>

    <select id="purpose" type="option" required placeholder="Purpose Of Visit" className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'>
    {PurposeOfVisit.map((purpose,index)=>(
        <option key={index} value={purpose}> {purpose.name} </option>
        
    ))}
    </select>

    <select id="rooms" type='select' placeholder='No Of Rooms' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'>
        {Rooms.map((room,index)=>(
            <option key={index} >{room.name}</option>
        ))}
    </select>
    

    <input type="number" id="EmployeeID" name='EmployeeID' required placeholder='EmployeeID' 
    className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'/>
    <input type="number" id="MobileNumber" name='MobileNumber' required placeholder='Contact/Mobile Number' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'/>
    <input type="email" id="email" name='EmailAddress' required placeholder='Official Email Address' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'/>

    <input
  type="date"
  id="start"
  name="trip-start"
  value="2025-12-11"
  min="2025-12-01"
  max="2050-12-31" 
  placeholder='Date Of Arrival'
  className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'

  onChange={(e)=>handleChange(e)}
  />
<input
  type="time"
  id="timeofarrival"
  name="timeofarrival"
  min="00:00"
  max="23:00"
  placeholder='time of arrival'
      className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'
  required />

    <input
  type="date"
  id="start"
  name="trip-start"
  value="2025-12-11"
  min="2025-12-01"
  max="2050-12-31" 
  placeholder='Date Of Departure'
     className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'
  onChange={(e)=>handleChange(e)}
  />

  <input
  type="time"
  id="timeofdeparture"
  name="timeofdeparture"
  min="00:00"
  max="23:00"
  placeholder='time of departure'
      className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'

  required />

  </div>



  {/* Guest Details */}

  <div className='flex items-center'>
    <h1>Guest Details</h1>
    <label className='p-2'> <input type="checkbox" id="guest" name='guest'/>Are you One of the guest</label>
  </div>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
  <div className='relative'>
    <label>Name of Guest No.1</label>
    <input type="text" id="name" name="name" required placeholder='Name of Guest No.1' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>

  </div>
  <div className='relative'>
    <label>Organization</label>
    <input type="text" id="organization" name="organization" required placeholder='Organization' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>
  </div>
  <div className='relative'>
    <label>Age</label>
    <input type="number" id="age" name="age" required placeholder='age' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>
  </div>

  <div className='relative'>
    <label>Gender</label>
 <select id="Gender" type='select' placeholder='Gender' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'>
        {Gender.map((gender,index)=>(
            <option key={index} >{gender.name}</option>
        ))}
    </select>
    </div>  

  <div className='relative'>
    <label>Contact No.</label>
    <input type="number" id="contact" name="contact" required placeholder='age' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>
  </div>
    <div className='relative'>
    <label>Id Proof No.</label>
    <input type="number" id="idproof" name="idproof" required placeholder='age' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>
  </div>
    
  <div className='relative'>
    <label>Category</label>
 <select id="Category" type='select' placeholder='Category' className='mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus-ring-opacity-50 border-2'>
        {category.map((category,index)=>(
            <option key={index} >{category.name}</option>
        ))}
    </select>
    </div>  


</div>

<div className='relative'>
    <label>Room allotment preference/additional information (if any)</label>
        <input type="text" id="preference" name="preference" required placeholder='Room allotment preference/additional information (if any)' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>
        <p>Eg. Guest 1 - Room 1;Guest 2 - Room 1;Guest 3 - Room 2; etc..</p>
</div>

<div className='relative flex items-center'>
    {/* <label>Enter Verification Code</label> */}
    {/* captcha image */}
    <img></img>
        <input type="text" id="verificationcode" name="verificationcode" required placeholder='Enter Verification Code' class="mt-2 block p-4 rounded-xl border-gray-300 shadow-sm focus:border-cyan-400/10 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50 border-2"/>
        <p>Can't read image? <span  className='text-blue-500'>click here to refresh</span> </p>
</div>


    <label className='p-2'> <input type="checkbox" id="terms" name='terms'/>I Agree to the Terms & Conditions</label>
   

    <div>
        <button className='p-4 bg-[#1A1A1A] text-white rounded-lg'>Submit Request</button>
    </div>
    </form>
  )
}

export default OnlineBooking