import {Link} from "react-scroll"
import Body from "./Body"
import { useEffect, useState } from "react"

// const Home = () => {



//  const   [name,setName] = useState ("Innovative Technological")
//  const   [name1,setName1] = useState ("")

//     // const toggleFunction= ()=> {
       
//     //   name==="Innovative Technological" ? setName(name1) : setName("Innovative Technological")
//     // }
// //componentDidMount-
// //update
// //will unmount-



// // useEffect(()=>{
// // const i=setInterval(()=>  console.log("useEffect call after render") ,3000)
 
// //  return ()=>clearInterval(i) 
// // },[])


//     return (    
//         <div >
//         {console.log("home render")}
//             <div className="flex justify-center mt-28">
//                 <span className="text-white">Welcome to BG Design Systems</span>
//             </div>

//             <div className="flex justify-center">
//                 <span className="text-white ">For</span>

//             </div>

//             <div className="flex justify-center">
//                 <h1 className="text-white text-7xl ">{name}</h1>
//                 <input type="text" placeholder="enter anythig" 
//                 onChange={(e)=>(setName1(e.target.value))} />


//             </div>
//             <div className="flex justify-center">
//                 <h1 className="text-white text-7xl ">Solutions</h1>

//             </div>

//             <div className="flex justify-center mt-8 ">
//               <Link activeClass="active" 
//       to="/contact" 
//       spy={true} 
//       smooth={true} 
//       offset={50} 
//       duration={500} 
//      > <button className="w-auto h-12 bg-black text-white p-2 rounded-md "
//     >Discover More</button>
//               </Link>
//             </div>
//             <div className="mt-40">

//                 <Body name="swapnil"/>
//             </div>
//         </div>

//     )
// }

// export default Home

// import { useEffect, useState } from "react";

const Home = () => {
    const [name, setName] = useState("Innovative Technological");
    const [name1, setName1] = useState("");

    const scrollToBody = () => {
        // Scroll to the body component when "Discover More" button is clicked
        const bodyElement = document.getElementById("bodyComponent");
        if (bodyElement) {
            bodyElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="flex justify-center mt-28">
                <span className="text-white">Welcome to BG Design Systems</span>
            </div>

            <div className="flex justify-center">
                <span className="text-white ">For</span>
            </div>

            <div className="flex justify-center">
                <h1 className="text-white text-7xl ">{name}</h1>
                <input
                    type="text"
                    placeholder="enter anything"
                    onChange={(e) => setName1(e.target.value)}
                />
            </div>

            <div className="flex justify-center">
                <h1 className="text-white text-7xl ">Solutions</h1>
            </div>

            <div className="flex justify-center mt-8">
                <button
                    className="w-auto h-12 bg-black text-white p-2 rounded-md"
                    onClick={scrollToBody}
                >
                    Discover More
                </button>
            </div>

            <div className="mt-40" id="bodyComponent">
                <Body name="swapnil" />
            </div>
        </div>
    );
};

export default Home;
