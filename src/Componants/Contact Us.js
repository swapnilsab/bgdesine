const ContactUs = () => {
 return (
    <div className=" text-black bg-white py-2">

<div className="text-center pt-8 pb-8">
      <h1>CONTACT US TODAY!</h1>
    </div>
    
    <div className="flex text-black bg-white">
    
    <div className="w-4/12 ml-60 ">
    <h1>Telephone</h1>
    <p> Ph: +91-9176947340</p>
    <p> Wh: +91-9176947340</p>
    <h1 className="mt-4">Email</h1>
    <p> info@bgdesignsystems.com</p>
    <h1 className="mt-4">Opening Hours</h1>
    <p> Mon - Fri: 8am - 10pm</p>
    <p> Saturday: 8am - 1pm</p>
    </div>
    <div className="w-8/12" >
      <input type="text" className="w-80  px-2 border border-gray-300 focus:outline-none focus:border-red-500 block " placeholder="name" ></input>
      <input type="email" className="w-80 px-2 border border-gray-300 mt-4 focus:outline-none focus:border-red-500 block" placeholder="email" ></input>
      <input type="text" className="w-80 px-2 border border-gray-300 mt-4 focus:outline-none focus:border-red-500 block" placeholder="Subject" ></input>
      <textarea
        placeholder="Enter your text"
        className="w-80 h-40 px-4 py-2 border border-gray-300 mt-4  focus:outline-none focus:border-red-500"
      ></textarea>
      <div className="mt-3 ml-40">
      <button
        type="submit"
        className="bg-red-500 text-white font-bold py-1 px-4 w-40 "
      >
        Submit
      </button>
      </div>
    </div> 
    </div>


    </div>
 )
}

export default ContactUs