import { Link } from "react-router-dom"


const Navbar = () => {  return (
    <div className="py-3 ">
   
     <div className=" bg-black flex  justify-between mt-4 h-24 ">
<div className="mt-4 mx-32">
     <img src="https://static.wixstatic.com/media/161409_428fd4ca36a84cf8a7539668039a9509~mv2.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/g941.png"
     alt="img" />

</div>

     <ul className="text-white flex  mt-6 space-x-8 mr-44 ">

      <Link to="/">  <li className="hover:bg-gray-300 "  >Home</li> </Link>
       <Link to="services"> <li  className="hover:bg-gray-300 ">Services</li> </Link>
     <Link to="/about"> <li  className="hover:bg-gray-300">About Us</li></Link>
       <Link to="/gallery"> <li  className="hover:bg-gray-300 ">Gallery</li> </Link>
       <Link to="contact"> <li className="hover:bg-gray-300 ">Contact Us</li> </Link>
     </ul>

       
     </div>

    </div>
)}

export default Navbar

  
