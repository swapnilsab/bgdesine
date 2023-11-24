import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Componants/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Componants/About Us';
import Gallery from './Componants/Gallery';
import ContactUs from './Componants/Contact Us';
import Services from './Componants/Services';
import Home from './Componants/Home';
import Footer from './Componants/Footer';

function App() {
  return (
    
    <div className='background'>

<Router>
     <Navbar/>
    
     <Routes>
     <Route exact path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
     
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/" element={<Home />} />


     </Routes>
     <Footer/>
   

   
     </Router>
    </div>
  );
}

export default App;
