import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import { AdminAuthProvider } from './Admin/Context/AdminAuthContext.jsx';
import { ThemeProvider } from './Admin/Context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <BrowserRouter>
    <AdminAuthProvider>
      <ThemeProvider>
        <App />
        </ThemeProvider>
    </AdminAuthProvider>
    </BrowserRouter>
  </StrictMode> 
)
