import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import api from '../../api/bookingapi';
const AdminLogin = () => {
    const navigate=useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
    try{
        await api.post("/admin/auth/login",{
            email,
            password,
        });
        navigate("/admin");
    }catch(err){
        setError(err.response?.data?.message||"Login failed");
    }finally{
        setLoading(false);
    }
    };
  return (

        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl shadow-md w-full max-w-sm'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Admin Login</h2>
                {
                    error &&(
                        <p className='text-red-600 text-sm mb-4 text-center'>{error}</p>
                    )
                }
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-1'>Email</label>
                    <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-1'>Password</label>
                    <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}
                    className='w-full border rounded px-3 py-2'/>
                </div>
                <div className='mb-4' >
                    <button className='' type='submit' disabled={loading}>{loading?"Logging in":"Login"}</button>
                </div>
            </form>


    </div>
  )
}

export default AdminLogin