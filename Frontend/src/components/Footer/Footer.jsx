import { FiMapPin } from "react-icons/fi";
import {FaSquareFacebook,FaSquareTwitter} from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
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
}]

const socialIcons=[{
    id:1,
    icon:<FaSquareFacebook size={26}/>,
    url:'https://www.facebook.com/csirngrihyd/'
},{
    id:2,
    icon:<FaSquareTwitter size={26}/>,
    url:'https://x.com/csirngri'
},{
    id:3,
    icon:<FaYoutubeSquare size={26}/>,
    url:'https://www.youtube.com/@csir-ngri'
}]
  return (
    <footer className=' bg-[#111111] text-[#1A1A1A] backdrop-blur-md  rounded-lg w-full py-10 pt-4 pb-10  '>
    <div className=' max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 '>
        {footerItems.map((item,index)=>{
            return(
                <div key={index}>
                    <h3 className='font-semibold text-white text-lg mb-2 text-start'>{item.title}</h3>
                    <p className='font-medium text-white text-start'>{item.info}</p>
                </div>
            )
        })}

        {/* Follow Us division */}
        <div>
            <h3 className='font-semibold text-white text-lg mb-2 text-start'>Follow Us</h3>
            <div className='flex items-center gap-4'>
                 {socialIcons.map((item,index)=>(
                <div key={index}>
                    <a href={item.url}
                    alt={item.icon}
                    rel="noopener noreferrer"
                    target="_blank"
                    className='text-white '
                    >{item.icon}</a>
                    </div>
            ))}

            </div>
           
        </div>
        {/* Get directions button */}
        <div className='border border-white rounded-lg  hover:bg-white/10 w-[180px] m-2'>
            <a href="https://www.google.com/maps/dir//NGRI+GUEST+HOUSE+CSIR+NATIONAL+GEOPHYSICAL+RESEARCH+INSTITUTE+NGRI,+Habsiguda+Hyderabad,+Telangana+500007/@17.413552,78.5512455,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb99468558a88d:0xf859b391a2260979!2m2!1d78.5512455!2d17.413552?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            rel="noopener noreferrer"
            target="_blank"
            >
              <button className='text-white gap-2 p-2 flex justify-center items-center '><FiMapPin size={24} className='text-white '></FiMapPin>Get Directions</button>
            </a>
        </div>
       
    </div>
    
        

        
      {/* Bottom section: All rights reserved*/}
      <div className="border-t border-white/20 text-center  text-white  px-4 text-sm  mt-10 pt-5">
          © {currentYear} Crafted and maintained by CSIR-NGRI's IT Division, Hyderabad.
          All rights reserved.
      </div>
        
    </footer>
  )
}

export default Footer