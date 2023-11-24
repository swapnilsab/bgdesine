import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';


const Footer = () => {

    return (
        <div>
            <div className="bg-red-700 flex h-32 justify-center  text-white items-center">

                 <div> <span className="mr-6"><CallIcon />&nbsp; CALL US</span>

                    <p className="mr-16" >Ph:&nbsp;&nbsp;+91-9176947340</p>
                </div> 
                <div className="border border-solid border-gray-300 h-20 mr-3"></div>

                                <div> <span ><MailIcon />&nbsp; EMAIL US</span>

                    <p  >info@bgdesignsystem.com</p>
                </div>
                <div className="border border-solid border-gray-300 h-20 ml-12"></div>
                <div className="ml-16"> <span ><WatchLaterOutlinedIcon />&nbsp; WORKING HOURS</span>

                    <p  >Mon - Fri: 8am - 10pm</p>
                </div>


            </div>

            <div className="bg-black flex h-52 justify-center  text-white ">

                <div className='mt-8'> <span className="mr-6 ">EXPERIENCE</span>

                    <p className="mr-16" >"We are engineers  by </p>
                    <p className="mr-16" >passion not only by profession"</p>
                    <p className="mr-16 ml-28" >- BG Teams</p>
                </div>

                <div className='mt-8'> <span >OUR SERVICES</span>

                <ul>
                    <li>- Engineering Services </li>
                    <li>- Manufacturing</li>
                    <li>- Sustenance Support</li>
                    <li>- Software Services</li>
                </ul>

                   
                </div>
                <div className="ml-16 mt-8"><span >VISIT US</span>

                    <p  >No:134/15 SIDCO NP IE,</p>
                    <p  >Ambattur,Chennai,</p>
                    <p  >Tamilnadu.</p>
                    <p  >Pin Code - 600098</p>
                </div>

                

            </div>
            <div className='bg-gray-600 flex h-16 justify-center items-center text-white'>

                <p>© Copyright © 2019 BG Design Systems - All Rights Reserved.</p>



                </div>

        </div>
    )
}

export default Footer