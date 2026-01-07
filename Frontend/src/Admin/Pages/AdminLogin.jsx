import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import api from '../../api/bookingapi';
const AdminLogin = () => {
    const navigate=useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    try{
        await api.post("/admin/auth/login",{
            email,
            password,
        });
        navigate("/admin");
    }catch(err){
        setError(err.response?.data?.message||"Login failed");
    }

  return (

        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form className=''></form>


    </div>
  )
}

export default AdminLogin