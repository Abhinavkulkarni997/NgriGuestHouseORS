import axios from 'axios';

const api=axios.create({
    baseURL:'/api',
    withCredentials:true,
});

api.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('adminToken');
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response)=>response,
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