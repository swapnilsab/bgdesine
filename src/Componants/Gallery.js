// import React, { useState } from 'react';

// const Gallery = () => {
//   const [numbers, setNumbers] = useState({
//     num1: '',
//     num2: '',
//     num3: '',
//     num4: '',
//   });

//   const [isSaved, setIsSaved] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNumbers(prevNumbers => ({
//       ...prevNumbers,
//       [name]: value,
//     }));
//     if(isSaved===true){
//     setIsUpdated(true);
//     }
//   };

//   const handleSave = () => {
//     console.log("Numbers saved:", numbers);
//     setIsSaved(true);
//     setIsUpdated(true); // Set isUpdated to true when saved
//   };

//   const handleUpdate = () => {
//     console.log("Numbers updated:", numbers);
//     setIsUpdated(true);
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
//         placeholder="Enter number 3"
//       />
//       <input
//         type="number"
//         name="num4"
//         value={numbers.num4}
//         onChange={handleChange}
//         className="border rounded-md p-2 mb-4"
//         placeholder="Enter number 4"
//       />
//       <div className="flex">
//         {isSaved ? (
//           isUpdated ? (
//             <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//               Update{console.log(isUpdated)}
//             </button>
//           ) : (
//             <button className="bg-blue-500 opacity-50 cursor-not-allowed text-white font-bold py-2 px-4 rounded mr-2" disabled>
//               Save
//             </button>
//           )
//         ) : (
//           <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
//             Save
//           </button>
//         )}
//         <button onClick={handleCalculate} 
//         disabled={(!isSaved && !isUpdated)} 
//         className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ${(!isSaved) ? 'opacity-50 cursor-not-allowed' : ''}`}>
//           Calculate{console.log(isSaved)}
//         </button>
//         <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React, { useState } from 'react';

const Gallery = () => {
  const [numbers, setNumbers] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumbers(prevNumbers => ({
      ...prevNumbers,
      [name]: value,
    }));
    setIsUpdated(true); // Set isUpdated to true when changes are made after saving
  };

  const handleSave = () => {
    console.log("Numbers saved:", numbers);
    setIsSaved(true);
    setIsUpdated(false); // Reset isUpdated when saved
  };

  const handleUpdate = () => {
    console.log("Numbers updated:", numbers);
    setIsUpdated(false); // Reset isUpdated when updated
  };

  const handleCalculate = () => {
    const sum = Object.values(numbers).reduce((acc, curr) => acc + Number(curr), 0);
    console.log("Sum of numbers:", sum);
  };

  const handleCancel = () => {
    setNumbers({
      num1: '',
      num2: '',
      num3: '',
      num4: '',
    });
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
      <input
        type="number"
        name="num3"
        value={numbers.num3}
        onChange={handleChange}
        className="border rounded-md p-2 mb-4"
        placeholder="Enter number 3"
      />
      <input
        type="number"
        name="num4"
        value={numbers.num4}
        onChange={handleChange}
        className="border rounded-md p-2 mb-4"
        placeholder="Enter number 4"
      />
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
            <button className="bg-blue-500 opacity-50 cursor-not-allowed text-white font-bold py-2 px-4 rounded mr-2" disabled>
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

export default Gallery;
