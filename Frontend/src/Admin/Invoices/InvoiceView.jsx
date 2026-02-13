// import {useParams} from "react-router-dom";
// import {useState,useEffect} from "react";
// import api from "../../api/bookingapi";
// import ngrilogo from '../../assets/ngri-logo.png';

// const InvoiceView=()=>{
//     const {invoiceId}= useParams();
//     console.log("Invoice id from URL:",invoiceId);
//     console.log("Parameters",useParams());
//     const [invoice,setInvoice]=useState(null);

//     useEffect(()=>{
//         if(!invoiceId) return;
//         api.get(`/admin/invoices/${invoiceId}`)
//         .then((response)=>{setInvoice(response.data),
//             console.log("Invoice Data ",response.data),
//         console.log("Name",response.data.applicantName,response.data.booking.applicantName);
//         }
//     ).catch((error)=>console.log(error));
//     },[invoiceId]);
   

//     if(!invoice) return <p className="p-4">Loading Invoice...</p>;

 

//     return(
//         <div className="p-4 max-w-4xl mx-auto">
//             <div className="bg-white rounded-xl border shadow p-6 space-y-6   ">
//                 <div className="flex flex-row gap-2 items-center  ">

//                     <div className="">
//                 <img src={ngrilogo} className="w-14 h-14 " alt="NGRI Logo" />
//                 </div>
              
//                 <div>
//                 <h1 className="text-base sm:text-sm font-bold ">
//                     CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE
//                 </h1>
//               <div className="-mt-4 "> 
//                 <p className="text-base sm:text-sm text-start"><br/>Council of Scientific & Industrial Research</p>
//                 <p className="text-base sm:text-sm">Hyderabad, Telangana - 500007, India.</p>
//                 </div>
                
//                 </div>
//                   </div>

                 
//                 <h1 className="text-xl font-semibold">
//                     Invoice No: #{invoice.invoiceNumber}
//                 </h1>

//                 <span className="mt-2 sm:mt-0 text-sm text-gray-500">
//                     {new Date(invoice.period?.to).toDateString()}
//                 </span>
//             </div>

//             <div className="grid sm:grid-cols-4 gap-4 text-sm">
//                 <div className="mt-2 pt-4">
//                     <p className="font-medium">Guest Name</p>
//                     <p>{invoice.booking.applicantName}</p>
//                     {/* <p className="text-gray-500">{invoice.guestCategory}</p> */}
//                     <p className="">{invoice.booking.organization}</p>
//                     <p>{invoice.booking.designation}</p>
//                 </div>

//                 <div className="mt-2 pt-4">
//                     <p className="font-medium">Room Details</p>
//                     <p className="mt-2">Room {invoice.roomNumber}</p>
//                     <p className="mt-2">{invoice.roomType}</p>
//                 </div>
//                 <div className="mt-2 pt-4">
//                     <p className="font-medium">Arrival Date</p>
//                     <p className="mt-2">{new Date(invoice.period?.from).toDateString()}</p>
                    
//                 </div>
//                 <div className="mt-2 pt-4">
//                     <p className="font-medium">Departure Date</p>
//                     <p className="mt-2">{new Date(invoice.period?.to).toDateString()}</p>
                    
//                 </div>
//             </div>

//             {/* charges Section */}
//             <div className="border-t pt-4">
//                 <div className="flex justify-between text-sm">
//                     <span>Rate per day</span>
//                      <span>₹{invoice.ratePerDay}</span>
//                 </div>

//                 <div className="flex justify-between text-sm">
//                     <span>No. of days</span>
//                     <span>{invoice.numberOfDays}</span>
//                 </div>
//                 <div className="flex justify-between font-semibold text-base mt-2">
//                     <span>Total Price(in INR)</span>
//                     <span>₹{invoice.total}</span>
//                 </div>

//             </div>

//             <div className="mt-6 border-t pt-4">
//                 <h3 className="text-lg font-semibold mb-2">Payment Details</h3>

//                 <div className="flex justify-between">
//                     <span>Payment Mode:</span>
//                     <span>{invoice.payment?.mode}</span>
//                 </div>

//                 <div className="flex justify-between">
//                     <span>Status:</span>
//                     <span className={`font-semibold ${invoice.payment?.status==="PAID" ?"text-green-600":"text-red-600"}`}>
//                         {invoice.payment?.status}
//                     </span>
//                 </div>

//                 {invoice.payment?.paidAt &&(
//                     <div className="flex justify-between">
//                         <span>Paid On:</span>
//                         <span>
//                             {new Date(invoice.payment.paidAt).toLocaleDateString()} 
//                             </span>
//                         </div>
//                 )}

//             </div>

//               <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-4 py-4 ">
//                 <p className="font-semibold mt-4">SIGNATURE & DATE</p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-2">
//                 <button className="border rounded-lg px-4 py-2 text-sm bg-white hover:bg-gray-100">
//                     Print
//                 </button>
//                 <button disabled className="bg-cyan-600 text-white rounded-lg px-4 py-2 text-sm opacity-60 cursor-not-allowed ">
//                     Download PDF
//                 </button>
//             </div>

          
//         </div>
//     )
// }

// export default InvoiceView;



import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import api from "../../api/bookingapi";
import ngrilogo from '../../assets/ngri-logo.png';

const InvoiceView=()=>{
    const {invoiceId}= useParams();
    console.log("Invoice id from URL:",invoiceId);
    console.log("Parameters",useParams());
    const [invoice,setInvoice]=useState(null);

    useEffect(()=>{
        if(!invoiceId) return;
        api.get(`/admin/invoices/${invoiceId}`)
        .then((response)=>{setInvoice(response.data),
            console.log("Invoice Data ",response.data),
        console.log("Name",response.data.applicantName,response.data.booking.applicantName);
        }
    ).catch((error)=>console.log(error));
    },[invoiceId]);
   

    if(!invoice) return <p className="p-4">Loading Invoice...</p>;

 

    return(
        <div className="p-4 max-w-4xl mx-auto">
            <div id="invoice-print-area">
            <div className="bg-white rounded-xl border shadow p-6 space-y-6   ">
                <div className="flex flex-row gap-2 items-center  ">

                    <div className="">
                <img src={ngrilogo} className="w-14 h-14 " alt="NGRI Logo" />
                </div>
              
                <div>
                <h1 className="text-base sm:text-sm font-bold ">
                    CSIR-NATIONAL GEOPHYSICAL RESEARCH INSTITUTE
                </h1>
              <div className="-mt-4 "> 
                <p className="text-base sm:text-sm text-start"><br/>Council of Scientific & Industrial Research</p>
                <p className="text-base sm:text-sm">Hyderabad, Telangana - 500007, India.</p>
                </div>
                
                </div>
                  </div>

                  <div>
                    <h1 className="text-base font-semibold">
                    Guest House Bill
                    </h1>
                    <h1 className="text-base font-semibold mt-0">
                    Invoice No: #{invoice.invoiceNumber}
                </h1>
                </div>
                

                <span className="mt-2 sm:mt-0 text-sm text-gray-500">
                    Bill Date:{new Date(invoice.period?.to).toDateString()}
                </span>
            </div>

            <div className="grid sm:grid-cols-4 gap-4 text-sm">
                <div className="mt-2 pt-4">
                    <p className="font-medium">Guest Name</p>
                    <p className="font-bold">{invoice.booking.applicantName}</p>
                    {/* <p className="text-gray-500">{invoice.guestCategory}</p> */}
                    <p className="">{invoice.booking.organization}</p>
                    <p>{invoice.booking.designation}</p>
                </div>

                <div className="mt-2 pt-4">
                    <p className="font-medium">Room Details</p>
                    <p className="mt-2">Room {invoice.roomNumber}</p>
                    <p className="mt-2">{invoice.roomType}</p>
                </div>
                <div className="mt-2 pt-4">
                    <p className="font-medium">Arrival Date</p>
                    <p className="mt-2">{new Date(invoice.period?.from).toDateString()}</p>
                    
                </div>
                <div className="mt-2 pt-4">
                    <p className="font-medium">Departure Date</p>
                    <p className="mt-2">{new Date(invoice.period?.to).toDateString()}</p>
                    
                </div>
            </div>

            {/* charges Section */}
            <div className="mt-6 border rounded-lg overflow-hidden">
                <table className="w-full text-sm border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-3 py-2 text-left">Description</th>
                            <th className="border px-3 py-2">Rate</th>
                            <th className="border px-3 py-2">No of Days</th>
                            <th className="border px-3 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-3 py-2">
                                Room {invoice.roomNumber} ({invoice.acType})
                            </td>
                            <td className="border px-3 py-2 text-center"> 
                                ₹{invoice.ratePerDay}
                            </td>
                            <td className="border px-3 py-2 text-center">
                                {invoice.numberOfDays}
                            </td>
                            <td className="border px-3 py-3 text-center">
                                ₹{invoice.total}
                            </td>
                        </tr>
                    </tbody>
                </table>
                

            </div>

            <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Payment Details</h3>

                <div className="flex justify-between">
                    <span>Payment Mode:</span>
                    <span>{invoice.payment?.mode}</span>
                </div>

                <div className="flex justify-between">
                    <span>Status:</span>
                    <span className={`font-semibold ${invoice.payment?.status==="PAID" ?"text-green-600":"text-red-600"}`}>
                        {invoice.payment?.status}
                    </span>
                </div>

                {invoice.payment?.paidAt &&(
                    <div className="flex justify-between">
                        <span>Paid On:</span>
                        <span>
                            {new Date(invoice.payment.paidAt).toLocaleDateString()} 
                            </span>
                        </div>
                )}

            </div>

            <div className="flex justify-end mt-4 text-base font-semibold">
             Total Price (in INR): ₹{invoice.total}
            </div>


              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-4 py-4 ">
                <p className="font-semibold mt-4">SIGNATURE & DATE</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-2">
                <button onClick={()=>window.print()} className="border rounded-lg px-4 py-2 text-sm bg-white hover:bg-gray-100">
                    Print
                </button>
                <button disabled className="bg-cyan-600 text-white rounded-lg px-4 py-2 text-sm opacity-60 cursor-not-allowed ">
                    Download PDF
                </button>
            </div>

          </div>
        </div>
    )
}

export default InvoiceView;