import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
    const contactItems=[{
        id:1,
        name:'Email',
        info:'guesthouse@immt.res.in'
    },{
        id:2,
        name:"Reception",
        info:"0674-2379418"
    }]
  return (
    <section className='py-10 sm:py-14 lg:py-20 bg-white shadow-md '>
      <div className='max-w-7xl mx-auto p-10 px-4 divide-x-2'>
        <h1 className='text-center font-extrabold text-3xl md:text-4xl'>Contact Us</h1>
      <div className='mt-12 bg-cyan-400/10 p-4 m-2 rounded-xl'>
      {contactItems.map((item)=>(
        <div key={contactItems.id}>
            <div className='bg-white border mb-2 text-center '>
                 <IoIosMail size={24} className='rounded-full border-dashed text-indigo-500'/><h1 className='font-medium '>{item.name}{':'}{item.info}</h1>
                 <BsFillTelephoneFill size={24} className='rounded-full border-dashed text-indigo-500'/>
            </div>
        </div>
      ))}
      </div>

      {/* {google map ngri} */}
      <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg p-6 mt-4 ">
      <iframe
        // src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL" format to show google map
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.926466963049!2d78.551246!3d17.413552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99468558a88d%3A0xf859b391a2260979!2sNGRI%20GUEST%20HOUSE%2C%20NGRI%2C%20Habsiguda%2C%20Hyderabad%2C%20Telangana%20500007!5e0!3m2!1sen!2sin!4v1765256939740!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    {/* ngri src url below */}
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.926466963049!2d78.551246!3d17.413552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99468558a88d%3A0xf859b391a2260979!2sNGRI%20GUEST%20HOUSE%2C%20NGRI%2C%20Habsiguda%2C%20Hyderabad%2C%20Telangana%20500007!5e0!3m2!1sen!2sin!4v1765256939740!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>

     </section>
  )
}

export default Contact