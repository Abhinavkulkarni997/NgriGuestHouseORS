import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import api from "../../api/bookingapi";

const InvoiceView=()=>{
    const {invoiceId}= useParams();
    const [invoice,setInvoice]=useState(null);

    useEffect(()=>{
        api.get("/admin/invoice")
        .then((response)=>{response.data})
        .catch((error)=>console.log(error));
    })

    return(
        <div className="">
            <div className=""></div>
            
        </div>
    )
}

export default InvoiceView;