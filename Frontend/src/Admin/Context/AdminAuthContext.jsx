import React,{useState,useEffect,useContext,createContext} from 'react';
import api from '../../api/bookingapi';

const AdminAuthContext=createContext();

export const AdminAuthProvider = ({children}) => {
    const [admin,setAdmin]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        api.get("/admin/auth/login")
        .then((res)=>setAdmin(res.data.admin))
        .catch(()=>setAdmin(null))
        .finally(()=>setLoading(false));
},[]);
  return (
   <AdminAuthContext.Provider value={{admin,loading}}>
    {children}
   </AdminAuthContext.Provider>
  )
}

export const useAdminAuth=()=>useContext(AdminAuthContext);