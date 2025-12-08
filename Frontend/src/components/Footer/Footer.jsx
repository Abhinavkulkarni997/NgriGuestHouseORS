import React from 'react';

const Footer = () => {
    const currentYear=new Date().getFullYear();
    const footerItems=[{
        id:1,
        title:'Address',
        info:'CSIR-NGRI Guest House, Uppal Road, Hyderabad - 500007, Telangana, India.'
    },
{
    id:2,
    title:'Contact',
    info:'Reception: 040 2343 4667'
},{
    id:3,
    title:'Email',
    info:'guesthouse@ngri.res.in'
},{
    id:4,
    title:'Follow Us',
    info:'Facebook | Twitter | Instagram | LinkedIn'
}]
  return (
    <footer className='bottom-0 left-0 relative bg-indigo-500/10 backdrop-blur-md  rounded-lg w-full pt-10 py-12 '>
    <div className='max-w-[1280px] mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 '>
        {footerItems.map((item,index)=>{
            return(
                <div key={index} className=''>
                    <h3 className='font-semibold text-white text-lg mb-2 text-start'>{item.title}</h3>
                    <p className='font-medium text-white text-start'>{item.info}</p>
                </div>
            )
        })}
    </div>
    
        

        
      {/* Bottom section: All rights reserved*/}
      <div className="border-t border-white/20 text-center  text-white py-6 px-4 text-sm  ">
          © {currentYear} Crafted and maintained by CSIR-NGRI's IT Division, Hyderabad.
          All rights reserved.
      </div>
        
    </footer>
  )
}

export default Footer