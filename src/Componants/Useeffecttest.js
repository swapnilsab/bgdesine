import React, { useState, useEffect } from 'react';

const Useeffecttest = ({ dealInputId }) => {
  const [loanProgram, setLoanProgram] = useState('initialLoanProgram');
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    // If dealInputId is present, skip the initial call of useEffect
    if (!dealInputId && !initialRenderComplete) {
      // Call the API after initial loading and when loanProgram changes
      console.log('Calling skip API  with dealInputId and loanProgram:', dealInputId, loanProgram);
      // Call your API here with dealInputId and loanProgram
      setInitialRenderComplete(true); // Set initialRenderComplete to true to prevent useEffect from running again
    } else if (dealInputId) {
      // If dealInputId is present, only call the API when loanProgram changes
      console.log('Calling API with dealInputId and loanProgram:', dealInputId, loanProgram);
      // Call your API here with dealInputId and loanProgram
    }
  }, [dealInputId, loanProgram, initialRenderComplete]); // useEffect will be triggered when dealInputId, loanProgram, or initialRenderComplete changes

  const handleLoanProgramChange = (newLoanProgram) => {
    setLoanProgram(newLoanProgram);
  };

  return (
    <div>
      <h1>Your Component</h1>
      {/* Your component UI */}
      <select value={loanProgram} onChange={(e) => handleLoanProgramChange(e.target.value)}>
        <option value="loanProgram1">Loan Program 1</option>
        <option value="loanProgram2">Loan Program 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default Useeffecttest;
