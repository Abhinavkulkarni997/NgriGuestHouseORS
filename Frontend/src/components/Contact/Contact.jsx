import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
    const contactItems=[{
        id:1,
        name:'Email',
        info:'guesthouse.ngri@csir.res.in',
        icon:<IoIosMail size={26} className='text-primary'/>
    },{
        id:2,
        name:"Reception",
        info:"040 2343 4667",
        icon:<BsFillTelephoneFill size={26} className="text-primary"/>
    }]
  return (
    // <section className='py-12 sm:py-14 lg:py-20 bg-white shadow-md mb-4  '>
       <section className='py-12 max-w-screen-xl mx-auto px-4 bg-white shadow-md mb-4 lg:py-20 dark:bg-gray-900 dark:shadow-none '>
      <div className='max-w-7xl mx-auto p-10 px-4 '>
        {/* Heading */}
        <h1 className='text-center font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white'>Contact Us</h1>

        
      <div className='mt-12 bg-cyan-400/10 p-4 rounded-xl grid md:grid-cols-2 gap-6 dark:bg-gray-800/60 '>
      {contactItems.map((item)=>(
        <div key={item.id} className='bg-white shadow-sm hover:shadow-md transition rounded-xl p-4 flex items-start gap-4 hover:scale-105 dark:bg-gray-800 ' >
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center dark:bg-white/10 border  ">
                {item.icon}
              </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                <p className="text-gray-700 text-base dark:text-white">{item.info}</p>
              </div>
        </div>
      ))}
      </div>

       {/* Address Section */}
       <div className='bg-cyan-400/10 p-4 rounded-xl mt-12 dark:bg-gray-800/60'>
        <div className=" bg-white p-6 rounded-xl border hover:shadow-md hover:scale-105 dark:bg-gray-800 dark:border-gray-700  transition">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border dark:bg-white/10 ">
              <FaMapMarkerAlt size={22} className="text-primary dark:text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
              <p className="text-gray-700 dark:text-white text-base">
                NGRI Guest House, CSIR-NGRI Campus, Uppal Road, Hyderabad,
                Telangana - 500007, India.
              </p>
            </div>
          </div>
        </div>
        </div>

      {/* {google map ngri} */}
     {/* Map */}
        <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.926466963049!2d78.551246!3d17.413552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99468558a88d%3A0xf859b391a2260979!2sNGRI%20GUEST%20HOUSE%2C%20NGRI%2C%20Habsiguda%2C%20Hyderabad%2C%20Telangana%20500007!5e0!3m2!1sen!2sin!4v1765256939740!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact