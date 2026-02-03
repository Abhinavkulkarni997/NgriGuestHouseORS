import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import api from "../../api/bookingapi";

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
            <div className="bg-white rounded-xl border shadow p-6 space-y-6">
                <h1 className="text-xl font-semibold">
                    Invoice #{invoice.invoiceNumber}
                </h1>

                <span className="mt-2 sm:mt-0 text-sm text-gray-500">
                    {new Date(invoice.createdAt).toDateString()}
                </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="mt-2 pt-4">
                    <p className="font-medium">Guest</p>
                    <p>{invoice.booking.applicantName}</p>
                    <p className="text-gray-500">{invoice.guestCategory}</p>
                </div>

                <div className="mt-2 pt-4">
                    <p className="font-medium">Room</p>
                    <p className="mt-2">Room {invoice.roomNumber}</p>
                    <p className="mt-2">{invoice.roomType}</p>
                </div>
            </div>

            <div className="border-t pt-4">
                <div className="flex justify-between text-sm">
                    <span>Rate per day</span>
                     <span>₹{invoice.ratePerDay}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span>No. of days</span>
                    <span>{invoice.numberOfDays}</span>
                </div>
                <div className="flex justify-between font-semibold text-base mt-2">
                    <span>Total</span>
                    <span>₹{invoice.totalAmount}</span>
                </div>

            </div>


            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-2">
                <button className="border rounded-lg px-4 py-2 text-sm bg-white hover:bg-gray-100">
                    Print
                </button>
                <button disabled className="bg-cyan-600 text-white rounded-lg px-4 py-2 text-sm opacity-60 cursor-not-allowed ">
                    Download PDF
                </button>
            </div>
        </div>
    )
}

export default InvoiceView;