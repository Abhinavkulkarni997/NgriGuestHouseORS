import React,{useState,useEffect,useContext,createContext} from 'react';
import api from '../../api/bookingapi';

const AdminAuthContext=createContext();

export const AdminAuthProvider = ({children}) => {
    const [admin,setAdmin]=useState(null);
    const [token,setToken]=useState(null);
    const [loading,setLoading]=useState(true);

    // logic to restore session on refresh
    useEffect(()=>{
        const storedToken=localStorage.getItem("adminToken");
        const storedAdmin=localStorage.getItem("adminUser");

        if(storedToken && storedAdmin){
            setToken(storedToken);
            setAdmin(JSON.parse(storedAdmin));
                api.defaults.headers.common[
            "Authorization"]=`Bearer ${storedToken}`;
        }
        setLoading(false);
        },[]);

        const login=(token,adminData)=>{
            localStorage.setItem("adminToken",token);
            localStorage.setItem("adminUser",JSON.stringify(adminData));

            api.defaults.headers.common[
                "Authorization"
            ]=`Bearer ${token}`;

            setToken(token);
            setAdmin(adminData);
        };

        const logout=()=>{
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminUser");

            delete api.defaults.headers.common["Authorization"];

            setAdmin(null);
            setToken(null);
        }

//     useEffect(()=>{
//         api.get("/admin/auth/login")
//         .then((res)=>setAdmin(res.data.admin))
//         .catch(()=>setAdmin(null))
//         .finally(()=>setLoading(false));
// },[]);
  return (
   <AdminAuthContext.Provider value={{admin,loading,token,login,logout,isAuthenticated:!!token}}>
    {children}
   </AdminAuthContext.Provider>
  )
}

export const useAdminAuth=()=>useContext(AdminAuthContext);