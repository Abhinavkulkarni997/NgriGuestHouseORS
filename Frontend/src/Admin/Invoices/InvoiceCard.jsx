// import {useNavigate} from "react-router-dom";

// const InvoiceCard=({invoice})=>{
//     const navigate=useNavigate();

//     return(
//         <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col justify-between">
//             <div>
//                 <div className="flex justify-between items-center">
//                     <h2 className="font-semibold text-sm">
//                         Invoice #{invoice.invoiceNumber}
//                     </h2>
//                     <span className={`text-xs px-2 py-1 rounded-full text-gray-600 bg-gray-100`}>
//                            GENERATED   
//                     </span>
//                     </div>
                
//                 <p className="mt-2 text-sm text-gray-700">{invoice.booking.applicantName}</p>
//                 <p className="mt-2 text-sm text-gray-700">{invoice.guestCategory}</p>
//                 <p className="text-xs text-gray-500">Room {invoice.roomNumber} {" "} {invoice.roomType}</p>
//             </div>

//             <div className="mt-4 flex justify-between items-center">
//                 <p className="font-semibold text-cyan-600">
//                     ₹{invoice.totalAmount}
//                 </p>

//                 <button onClick={()=>navigate(`/admin/invoices/${invoice._id}`)} className="text-sm text-cyan-600 font-medium hover:underline">View</button>
//             </div>

//         </div>
//     )
// }

// export default InvoiceCard;


// code developed on 16-02-2026 and changes are done as per new GH rules some fields are modified and removed 
import {useNavigate} from "react-router-dom";

const InvoiceCard=({invoice})=>{
    const navigate=useNavigate();

    return(
        <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-sm">
                        Invoice #{invoice.invoiceNumber}
                    </h2>
                    <span className={`text-xs px-2 py-1 rounded-full text-gray-600 bg-gray-100`}>
                           GENERATED   
                    </span>
                    </div>
                
                <p className="mt-2 text-sm text-gray-700">{invoice.booking.applicantName}</p>
                <p className="mt-2 text-sm text-gray-700">{invoice.guestCategory}</p>
                <p className="text-xs text-gray-500">Room {invoice.roomNumbers.join(", ")} </p>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <p className="font-semibold text-cyan-600">
                    ₹{invoice.total}
                </p>

                <button onClick={()=>navigate(`/admin/invoices/${invoice._id}`)} className="text-sm text-cyan-600 font-medium hover:underline">View</button>
            </div>

        </div>
    )
}

export default InvoiceCard;