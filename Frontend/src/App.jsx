import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css'
import Faq from './components/FAQ/Faq';
import { Routes,Route } from 'react-router-dom';
import Layout  from './components/Layout/Layout';
import Home from './components/Home/Home';
import OnlineBooking from './components/OnlineBooking/OnlineBooking';
import MultiStepForm from './components/OnlineBooking/MultiStepForm';
function App() {

  return (
    <>
      
    <Routes>
    
    <Route path="/" element={<Layout hasHero={true}><Home/></Layout>}/>
    <Route path="/faq" element={<Layout><Faq/></Layout>} />
    <Route path="/contact" element={<Layout><Contact/></Layout>}/>
    <Route path="/onlinebooking" element={<Layout><MultiStepForm/></Layout>}/>
    </Routes>

        
    </>
  )
}

export default App
