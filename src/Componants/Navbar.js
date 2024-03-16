import { Link } from "react-router-dom"
import React, { useState } from 'react';

const Navbar = () => {  
     const [isHovered, setIsHovered] = useState(false);
     // const [activeTab, setActiveTab] = useState('Tab 1');
   
     const handleMouseEnter = () => {
       setIsHovered(true);
     };
   
     const handleMouseLeave = () => {
       setIsHovered(false);
     };
   
     // const handleTabChange = (tab) => {
     //   setActiveTab(tab);
     // };
     return (
    <div className="py-3  ">
   
     <div className=" bg-black flex  justify-between mt-4 h-24  container">
<div className="mt-4 mx-32">
     <img src="https://static.wixstatic.com/media/161409_428fd4ca36a84cf8a7539668039a9509~mv2.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/g941.png"
     alt="img" />

</div>

     <ul className="text-white flex  mt-6 space-x-8 mr-44 ">

      <Link to="/">  <li className="hover:bg-gray-300 "  >Home</li> </Link>
      <Link to="/services"> <li  className="hover:bg-gray-300 h-7 w-16 relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
       >Services
       { isHovered &&
        <ul className="  h-auto w-24 text-white   text-center absolute left-1/2 transform -translate-x-1/2  py-2 ">
        <Link to="/manufacturing">  <li className="text-white only-of-type hover:bg-gray-200 inline-block  ">Manufacturing</li> </Link>
        <Link to="/engineeringservices"> <li className="bg-gray-200 inline-block   mt-2">Engineeringservices</li></Link> 
       
        </ul> 
       }
        </li>
         
       </Link>
       
     <Link to="/about"> <li  className="hover:bg-gray-300">About Us</li></Link>
       <Link to="/gallery"> <li  className="hover:bg-gray-300 ">Gallery</li> </Link>
       <Link to="/contact"> <li className="hover:bg-gray-300 ">Contact Us</li> </Link>
      
      
     
     </ul>     

       
     </div>

    </div>
)}

export default Navbar

  
