import {useState,useEffect} from "react";
import api from "../../api/bookingapi";
import InvoiceCard from "./InvoiceCard";
import Pagination from "../Components/Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
const InvoiceList=()=>{
    const [invoices,setInvoices]=useState([]);
    const [loading,setLoading]=useState(true);

    // usePagination hook is used to manage the pagination state and logic, which includes the current page, total pages, total records, and a function to update the pagination state when new data is fetched from the API. 
    // This helps to keep the component clean and focused on rendering the UI, while the pagination logic is encapsulated in a reusable hook. and the pagination component is used to render the pagination controls and handle page changes, 
    // which updates the current page state in the usePagination hook and triggers a new API call to fetch the corresponding invoices for that page. it is created on 07-06-2026  
    const {page, setPage, limit,  totalPages,  totalRecords,  updatePagination} = usePagination();

    // the currentPage and totalPages state are moved to usePagination hook and the updatePagination function is used to update the totalPages state when the data is fetched from the API.
    //  The currentPage state is also updated when the page is changed using the Pagination component.
    // const [currentPage,setCurrentPage]=useState(1);
    // const [totalPages,setTotalPages]=useState(1);




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
        api.get(`/admin/invoices?page=${page}&limit={limit}`)
        .then(response=>{
            console.log("invoiceList response data",response.data);
            setInvoices(Array.isArray(response.data)? response.data:response.data.data||[]);
          updatePagination(response.data);
        })
        .catch(err=>console.error(err))
        .finally(()=>setLoading(false));
    },[page]);

    const startRecord=(page-1)*limit+1;
    const endRecord=Math.min(page*limit,totalRecords);


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

            {/* invoices list record information */}
          <div className="flex justify-between items-center mt-6 text-sm text-gray-600  ">
        <p>
          Showing {startRecord} – {endRecord} of {totalRecords} invoices
        </p>
      </div>

            
            <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(page)=>setPage(page)}
            
            
            />

        </div>

    )
}

export default InvoiceList;