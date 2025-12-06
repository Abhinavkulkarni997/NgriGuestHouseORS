import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css'
import Faq from './components/FAQ/Faq';
import { Routes,Route } from 'react-router-dom';
import GuestHouseCharges from './components/Charges/GuestHouseCharges';
import Layout  from './components/Layout/Layout';
import Guidelines from './components/Guidelines/Guidelines';
function App() {

  return (
    <>
      
    <Routes>
    <Route path="/" element={<Layout><GuestHouseCharges/></Layout>} /> 
    <Route path="/" element={<Layout><Guidelines/></Layout>}/>
    <Route path="/faq" element={<Layout><Faq/></Layout>} />
    <Route path="/contact" element={<Layout><Contact/></Layout>}/>
    </Routes>

        
    </>
  )
}

export default App
