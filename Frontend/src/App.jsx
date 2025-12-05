import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css'
import Faq from './components/FAQ/Faq';
import { Routes,Route } from 'react-router-dom';
import GuestHouseCharges from './components/Charges/GuestHouseCharges';
function App() {

  return (
    <>
        <Navbar />
        <GuestHouseCharges/>

    <Routes>
    <Route path="/faq" element={<Faq/>} />
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
        <Footer/>

        
    </>
  )
}

export default App
