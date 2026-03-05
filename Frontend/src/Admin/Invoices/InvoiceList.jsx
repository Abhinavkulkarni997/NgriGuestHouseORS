import {useState,useEffect} from "react";
import api from "../../api/bookingapi";
import InvoiceCard from "./InvoiceCard";
import Pagination from "../Components/Pagination/Pagination";
const InvoiceList=()=>{
    const [invoices,setInvoices]=useState([]);
    const [loading,setLoading]=useState(true);
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPages,setTotalPages]=useState(1);




    // useEffect(()=>{
    //     api.get('/admin/invoices')
    //     .then(response=>{
    //         console.log("invoiceList response data",response.data);
    //         setInvoices(Array.isArray(response.data)? response.data:response.data.data||[]);
    //     })
    //     .catch(err=>console.error(err))
    //     .finally(()=>setLoading(false));
    // },[]);

    // new invoices useEffect with pagination is added and old one is commented out above
    useEffect(()=>{
        api.get(`/admin/invoices?page=${currentPage}`)
        .then(response=>{
            console.log("invoiceList response data",response.data);
            setInvoices(Array.isArray(response.data)? response.data:response.data.data||[]);
            setTotalPages(response.data.totalPages ||1);
        })
        .catch(err=>console.error(err))
        .finally(()=>setLoading(false));
    },[currentPage]);

    if(loading){return <p className="p-4">Loading invoices....</p>};

    if(!Array.isArray(invoices) || invoices.length===0)
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
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page)=>setCurrentPage(page)}
            
            
            />

        </div>

    )
}

export default InvoiceList;