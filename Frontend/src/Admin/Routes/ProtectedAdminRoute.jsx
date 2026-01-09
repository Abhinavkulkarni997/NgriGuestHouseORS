import {Navigate} from 'react-router-dom';
import { useAdminAuth } from '../Context/AdminAuthContext';

const ProtectedAdminRoute = ({children}) => {
    const {isAuthenticated,loading}=useAdminAuth();
 
        if(!loading) return null;
        if(!isAuthenticated) return <Navigate to="/admin/login" replace/>;
        return children;
 
  
}

export default ProtectedAdminRoute;