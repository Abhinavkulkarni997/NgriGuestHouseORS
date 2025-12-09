import {useState} from 'react'
// import FAQ from '../../assets/Faq.png';
import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    const[openItems,setOpenItems]=useState([]);
    const faqItems=[{
        id:1,
        question:'Who are eligible to apply for booking the Guest House?',
        answer:'An Employee / Retired Staff of CSIR Labs including HQ / Employee of Other Govt. Organizations or Institutions or Universities with a valid employee / pensioner ID Card to apply for CSIR-NGRI guest house.'

    },{
        id:2,
        question:'I am a student from a CSIR lab. Can I apply for booking the Guest House?',
        answer:'Yes. PA/JRF/SRF/PhD scholars can apply who holds a valid CSIR ID Card.'
    },{
        id:3,
        question:'What is Check-in and Check-out time?',
        answer:'Check-in & Check-out time will be on 24 hours basis.'
    },{
        id:4,
        question:'What is the nature of booking?',
        answer:['a. The booking is per head/per bed basis and will be confirmed based on the availability.',
"b. Each guest's name should be entered in the application (including children).",
'c. Each guest will be charged based on his/her category for the number of days stayed.',
'd. The rooms will also be allotted on a shared basis based on the availability.',
'e. The management at its own discretion can allot, change, cancel or provide alternate accommodation as it may deem fit.'
        ]},{
        id:5,
        question:'Can I cancel my confirmed booking? if yes,what should I do?',
        answer:"Yes, an email has to be sent from the applicant's registered email ID (given at the time of application) to guesthouse@ngri.res.in requesting for cancellation."
    },{
        id:6,
        question:"I am a participant in a conference/workshop/seminar/meeting at CSIR-NGRI can I book the guest house?",
        answer:"Please contact the convener/organizer of the conference/workshop/seminar/meeting for the arrangements.",
    },{
        id:7,
        question:"One of the guests on the confirmed booking will not be coming. What should I do?",
        answer:"The applicant/the guest should intimate the same during check-in so that the person will not be billed."
    }]

    const toggleItem=(id)=>{
        if(openItems.includes(id)){
            setOpenItems(openItems.filter(itemId=>itemId!==id));
        }else{
            setOpenItems([...openItems,id])
        }
    }
  return (
    
    <section className='py-16 sm:py-18 md:py-20 max-w-screen-xl mx-auto px-4 bg-cyan-400/10 backdrop-blur-md rounded-lg mb-4  '>
        <h1 className='font-extrabold text-3xl md:text-4xl mb-6 text-gray-800 text-center '>Any questions? Check out the FAQ</h1>
        {faqItems.map((item,index)=>{
            const isOpen=openItems.includes(item.id);
            return(
                
                <div key={index} className='text-start bg-white/80 backdrop-blur-md p-6 my-4 rounded-lg shadow-md  '>
                    <div className='flex justify-between items-start'>
                    <button onClick={()=>toggleItem(item.id)}>

                    <div className='font-semibold text-lg flex justify-between items-end  hover:text-indigo-600 cursor-pointer flex-1'>{item.question}
                        <IoIosArrowDown className={`w-4 h-4 cursor-pointer text-gray-800 hover:text-indigo-800 transition-transform duration-300 ${isOpen? 'rotate-180' : ''}`} />
                    </div>
                    </button>
                    </div>

                {isOpen && (
                    <div className='font-medium mt-3 ml-1'>
                        {Array.isArray(item.answer)? (
                            item.answer.map((point,index)=>(
                                <div key={index} className='mb-1'>{point}</div>
                            ))

                        ):(
                            item.answer
                        )}
                    
                    </div>
            
                

                            

                )}
            
        
                </div>
            )
        })}
    </section>
  )
}

export default Faq