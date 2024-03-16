// import React, { useEffect, useState } from 'react';

// const Engineeringservices = () => {
//   const [numbers, setNumbers] = useState({
//     num1: 0,
//     num2: 0,
//     num3: '',
//     num4: '',
//   });

//   const [isSaved, setIsSaved] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'num1' || name === 'num2') {
//       // If num1 or num2 is changed, update num3 and num4 accordingly
//       const updatedNum3 = name === 'num1' ? (parseInt(value) + parseInt(numbers.num2) || '') : (parseInt(numbers.num1) + parseInt(value) || '');
//       const updatedNum4 = name === 'num1' ? (parseInt(value) - parseInt(numbers.num2) || '') : (parseInt(numbers.num1) - parseInt(value) || '');
      
//       setNumbers(prevNumbers => ({
//         ...prevNumbers,
//         [name]: value,
//         num3: updatedNum3,
//         num4: updatedNum4,
//       }));
//     } else {
//       // If num3 or num4 is changed, just update the corresponding state
//       setNumbers(prevNumbers => ({
//         ...prevNumbers,
//         [name]: value,
//       }));
//     }
//     setIsUpdated(true); // Set isUpdated to true when changes are made after saving
//   };

//   const handleSave = () => {
//     console.log("Numbers saved:", numbers);
//     setIsSaved(true);
//     setIsUpdated(false); // Reset isUpdated when saved
//   };

//   const handleUpdate = () => {
//     console.log("Numbers updated:", numbers);
//     setIsUpdated(false); // Reset isUpdated when updated
//   };

//   const handleCalculate = () => {
//     const sum = Object.values(numbers).reduce((acc, curr) => acc + Number(curr), 0);
//     console.log("Sum of numbers:", sum);
//   };

//   const handleCancel = () => {
//     setNumbers({
//       num1: '',
//       num2: '',
//       num3: '',
//       num4: '',
//     });
//     setIsSaved(false);
//     setIsUpdated(false);
//   };

//   return (
//     <div className="flex flex-col items-center mt-8">
//       <input
//         type="number"
//         name="num1"
//         value={numbers.num1}
//         onChange={handleChange}
//         className="border rounded-md p-2 mb-4"
//         placeholder="Enter number 1"
//       />
//       <input
//         type="number"
//         name="num2"
//         value={numbers.num2}
//         onChange={handleChange}
//         className="border rounded-md p-2 mb-4"
//         placeholder="Enter number 2"
//       />
//       <input
//         type="number"
//         name="num3"
//         value={numbers.num3}
//         onChange={handleChange}
//         className="border rounded-md p-2 mb-4"
//         placeholder="Result of Addition"
//         disabled
//       />
//       <input
//         type="number"
//         name="num4"
//         value={numbers.num4}
//         onChange={handleChange}
//         className="border rounded-md p-2 mb-4"
//         placeholder="Result of Subtraction"
//         disabled
//       />
//       <div className="flex">
//         {!isSaved ? (
//           <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//             Save
//           </button>
//         ) : (
//           isUpdated ? (
//             <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//               Update
//             </button>
//           ) : (
//             <button className="bg-blue-500 opacity-50 cursor-not-allowed text-white font-bold py-2 px-4 rounded mr-2" disabled>
//               Save
//             </button>
//           )
//         )}
//         <button onClick={handleCalculate} disabled={!isSaved || isUpdated} className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ${!isSaved || isUpdated ? 'opacity-50 cursor-not-allowed' : ''}`}>
//           Calculate
//         </button>
//         <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Engineeringservices;



import React, { useState } from 'react';

const Engineeringservices = () => {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [isSaved, setIsSaved] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  // Dynamically calculate num3 and num4 based on num1 and num2
  const num3 = numbers.num1 + numbers.num2;
  const num4 = numbers.num1 - numbers.num2;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumbers(prevNumbers => ({
      ...prevNumbers,
      [name]: parseInt(value, 10) || 0, // Ensure we're working with numbers, default to 0 if NaN
    }));
    setIsUpdated(true);
  };

  const handleSave = () => {
    console.log("Numbers saved:", { ...numbers, num3, num4 });
    setIsSaved(true);
    setIsUpdated(false);
  };

  const handleUpdate = () => {
    console.log("Numbers updated:", { ...numbers, num3, num4 });
    setIsUpdated(false);
  };

  const handleCalculate = () => {
    const sum = numbers.num1 + numbers.num2 + num3 + num4;
    console.log("Sum of numbers:", sum);
  };

  const handleCancel = () => {
    setNumbers({ num1: 0, num2: 0 });
    setIsSaved(false);
    setIsUpdated(false);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="number"
        name="num1"
        value={numbers.num1}
        onChange={handleChange}
        className="border rounded-md p-2 mb-4"
        placeholder="Enter number 1"
      />
      <input
        type="number"
        name="num2"
        value={numbers.num2}
        onChange={handleChange}
        className="border rounded-md p-2 mb-4"
        placeholder="Enter number 2"
      />
      <div className="mb-4">Result of Addition: {num3}</div>
      <div className="mb-4">Result of Subtraction: {num4}</div>
      <div className="flex">
        {!isSaved ? (
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Save
          </button>
        ) : (
          isUpdated ? (
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Update
            </button>
          ) : (
            <button disabled className="bg-blue-500 opacity-50 cursor-not-allowed text-white font-bold py-2 px-4 rounded mr-2">
              Save
            </button>
          )
        )}
        <button onClick={handleCalculate} disabled={!isSaved || isUpdated} className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ${!isSaved || isUpdated ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Calculate
        </button>
        <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Engineeringservices;

