import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import api from '../../api/bookingapi';
import logo from '../../assets/ngri-logo.png';
import emailimg from '../../assets/AdminDashboard/Login/email (2).svg';
import eyeopen from '../../assets/AdminDashboard/Login/eyeopen.svg';
import eyeclosed from  '../../assets/AdminDashboard/Login/eyeclosed.svg';
import passwordimg  from '../../assets/AdminDashboard/Login/password.svg';
import {useAdminAuth} from '../Context/AdminAuthContext';
const AdminLogin = () => {
    const navigate=useNavigate();

    const {login,isAuthenticated}=useAdminAuth();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    const [showPassword,setShowPassword]=useState(false);

    const toggleShowPassword=()=>{
        setShowPassword(!showPassword);
    }

    const handleSubmit=async(e)=>{
        console.log("ADMIN LOGIN HIT");
        e.preventDefault();
        // console.log("SUBMIT CLICKED",email,password);
        setLoading(true);
        setError("");
    try{
        console.log("SENDING REQUEST...");
        const res=await api.post("/admin/auth/login",{
            email,
            password,
        });
        console.log("LOGIN RESPONSE:",res.data);
        
        login(res.data.token,res.data.admin);
        navigate("/admin");
    }catch(err){
        console.log("LOGIN ERROR:",err);
        setError(err.response?.data?.message||"Login failed");
    }finally{
        setLoading(false);
    }
    };


    // prevent Admin from seeing login page after logging in
    useEffect(()=>{
        if(isAuthenticated){
            navigate("/admin")
        }
    },[]);

  return (

        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl shadow-md w-full max-w-sm'>
                <div className='flex items-center justify-center gap-3 mb-6'>
                     <img src={logo} alt='ngri' className='w-8 h-8'/>
                <h2 className='text-xl font-bold  text-center'>Guest House Admin Login</h2>
              
                </div>

                  {
                    error &&(
                        <div className='mb-4'>
                               <p className='text-red-600 text-sm mb-4 text-center'>{error}</p>
                        </div>
                     
                    )
                }

               
                <div className='mb-4'>
                    <label htmlFor='Email' className='block text-sm font-medium mb-1'>Email</label>
                    <div className='relative'>
                         <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email Address'
                    className="w-full border rounded-lg px-3 py-2 hover:border-cyan-600 pr-10 pl-12"
                    />
                        <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3'>
                            <img src={emailimg} alt="email" className='w-6 h-6 bg-white text-white'/>

                        </div>

                    </div>
                   
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-sm font-medium mb-1'>Password </label>
                    <div className='relative'>
                    <input type={showPassword?'text':'password'} required value={password} onChange={(e)=>setPassword(e.target.value)}
                    className='w-full border rounded-lg px-3 py-2 hover:border-cyan-600 pr-10 pl-12' placeholder='Enter Password'/>
                    {/* left icon */}
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3'>
                        <img src={passwordimg} alt='password' className='w-6 h-6 bg-white text-white' />
                            
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center  pr-3'>
                           <button type="button" onClick={toggleShowPassword} className='focus:outline-none'><img src={showPassword?eyeopen:eyeclosed} className='w-6 h-6 '
                           alt={showPassword ? "Hide password" : "Show password"}/> 
                           </button>
                          
                    </div>
                    </div>
                </div>

                <div className='mb-4' >
                    <button className='w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg disabled:opacity-50' type='submit' disabled={loading}>{loading?"Logging in...":"Login"}</button>
                </div>
                
            </form>


    </div>
  )
}

export default AdminLogin;