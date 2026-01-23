import {useState,useEffect} from "react";
import api from "../../api/bookingapi";
import InvoiceCard from "./InvoiceCard";
const InvoiceList=()=>{
    const [invoices,setInvoices]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        api.get('/admin/invoices')
        .then(response=>{setInvoices(response.data),
            console.log("invoiceList response data")
        })
        .finally(()=>setLoading(false));
    },[]);

    if(loading){return <p className="p-4">Loading invoices....</p>};

    if(!invoices.length)
        return(
    <div className="p-6 text-center text-gray-500">
        No invoices generated yet
    </div>
        );

    return(
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Invoices</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {invoices.map(inv=>(
                    <InvoiceCard key={inv._id} invoice={inv}/>
                ))}
            </div>
        </div>

    )
}

export default InvoiceList;