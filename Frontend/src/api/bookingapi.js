import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:5000/api',
    withCredentials:true,
});

api.interceptors.response.use(
    (res)=>res,
    (error)=>{
        const isLoginRequest=error.config?.url?.includes("/admin/auth/login");
        if(error.response?.status===401 && !isLoginRequest) {
            localStorage.removeItem("adminUser");
            localStorage.removeItem("adminToken");
            window.location.href="/admin/login";
        }
        return Promise.reject(error);
    }
)
export default api;