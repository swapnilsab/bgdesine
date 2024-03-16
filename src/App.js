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
import {Manufacturing} from './Componants/Manufacturing'
import Dummy from './Componants/Dummy';
import { Map } from './Componants/Map';
import LarCriteria from './Componants/Lar';
import Engineeringservices from './Componants/Engineeringservices';
import Useeffecttest from './Componants/Useeffecttest';



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
        <Route path="/manufacturing" element={<Manufacturing/>} />
        <Route path="/engineeringservices" element={<Engineeringservices/>} />
        <Route path="/dummy" element={<Map/>} />
        <Route path="/useeffecttest" element={<Useeffecttest dealInputId="1" />} />
        {/* dealInputId="1" */}
   <Route path="/lar" element={<LarCriteria/>} />

     </Routes>
     <Footer/>
   

   
     </Router>
    </div>
  );
}

export default App;
