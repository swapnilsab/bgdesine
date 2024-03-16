import { mULTIPLCTION } from "../actions"
import { useSelector,useDispatch } from "react-redux"
import React, { useState } from 'react';
const Services = () =>{// Sample data with states and districts
const data = [
  {
    state: 'State 1',
    districts: ['District 1', 'District 2', 'District 3'],
  },
  {
    state: 'State 2',
    districts: ['District A', 'District B', 'District C'],
  },
  // Add more state and district data as needed
];

const [selectedState, setSelectedState] = useState(data[0]); // State to hold the selected state
const [selectedDistrict, setSelectedDistrict] = useState(selectedState.districts[0]); // State to hold the selected district
//console.log(selectedState)
// Function to handle state selection
const handleStateChange = (event) => {
  const selectedStateName = event.target.value;
  const newState = data.find((item) => item.state === selectedStateName);
  setSelectedState(newState);
  // console.log(typeof newState)
  setSelectedDistrict(newState.districts[0]); // Reset district selection when state changes
};

// Function to handle district selection
const handleDistrictChange = (event) => {
  setSelectedDistrict(event.target.value);
};

return (
  <div className="bg-white">
    <h2>Select State and District</h2>
    <div>
      <label htmlFor="states">Select State:</label>
      <select id="states" value={selectedState.state} onChange={handleStateChange}>
        {data.map((item, index) => (
          <option key={index} value={item.state}>
            {item.state}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="districts">Select District:</label>
      <select id="districts" value={selectedDistrict} onChange={handleDistrictChange}>
        {selectedState.districts.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>
    <p>Selected State: {selectedState.state}</p>
    <p>Selected District: {selectedDistrict}</p>
  </div>
);
        }


        // <div className="text-white" >
        // <h1 >Services{c}</h1>
        // <button onClick={()=> dispatch(mULTIPLCTION(4))}>mul</button>
        //  </div>

       

export default Services