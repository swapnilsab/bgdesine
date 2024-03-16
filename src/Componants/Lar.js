import React, { useState } from 'react';

const LarCriteria = () => {
  const [deal, setDeal] = useState('');
  const [risk, setRisk] = useState('');

  const [countFailed, setCountFailed] = useState([]);
  const [dealValues, setDealValues] = useState({
    Eachproduct: 151,
    ASP: 'Y',
    Community: 'N',
    TOP: 'High Risk',
    ExistingProduct: 'Y',
    ExistingSubmarket: 'Y',
    Gatheringsproject: 'N',
    RollingOption: 'No-Bulk',
    TotalLandAcq: 10000,
    TotalLandDev: 10000,
  });

  const [overRideValues, setOverRideValues] = useState({
    Eachproduct: 0,
    ASP: '',
    Community: '',
    TOP: '',
    ExistingProduct: '',
    ExistingSubmarket: '',
    Gatheringsproject: '',
    RollingOption: '',
    TotalLandAcq: 0,
    TotalLandDev: 0,
  });

  const handleOverRideValueChange = (e) => {
    setOverRideValues({ ...overRideValues, [e.target.name]: e.target.value });
  };

  const handleDealValueChange = (e) => {
    setDealValues({ ...dealValues, [e.target.name]: e.target.value });
  };

  const handleDealChange = (e) => {
    setDeal(e.target.value);
  };

  // Function to count the number of failed conditions
  const countFailedConditions = () => {
    return [
      overRideValues.Eachproduct ? overRideValues.Eachproduct >=150 : dealValues.Eachproduct >=150,
      dealValues.ASP === 'N',
      dealValues.Community === 'N',
      (overRideValues.TOP && overRideValues.TOP !== 'Very Low Risk' && overRideValues.TOP !== 'Low Risk') ||
        (!overRideValues.TOP && dealValues.TOP !== 'Very Low Risk' && dealValues.TOP !== 'Low Risk'),
      dealValues.ExistingProduct === 'N',
      dealValues.ExistingSubmarket === 'N',
      dealValues.Gatheringsproject === 'N',
      dealValues.RollingOption === 'No-Bulk',
      overRideValues.TotalLandAcq ? overRideValues.TotalLandAcq >= 10000000 : dealValues.TotalLandAcq >=10000000 ,
      overRideValues.TotalLandDev ? overRideValues.TotalLandDev >= 10000000 : dealValues.TotalLandDev>= 10000000,
    ].filter(e=>e===true).length;
  };

  // Function to calculate risk level based on failed conditions
  const calculateRiskLevel = (failedCount) => {
    if (failedCount > 5) {
      return 'Very High Risk';
    } else if (failedCount >= 3 && failedCount <= 4) {
      return 'High Risk';
    } else if (failedCount >= 1 && failedCount <= 2) {
      return 'Low Risk';
    } else {
      return 'Very Low Risk';
    }
  };

  // Render failed conditions as a row
  const renderFailedConditionsRow = () => {
    const failedCount = countFailedConditions();
    console.log(failedCount)
    if (failedCount > 0) {
      return (
        <tr>
          <td colSpan="5">Risk Level:</td>
          <td colSpan="5">{calculateRiskLevel(failedCount)}</td>
        </tr>
      );
    }
    return null;
  };

  return (
    <>
   <div className="bg-dark text-white row">
        <div className='col-4'>

        </div>
        <div className='col-8 text-end'>
          <button className='btn btn-info me-2 my-2'>View all deal</button>
 
        </div>
      </div>
      <div className="bg-gradient text-center p-2" style={{ backgroundColor: "#9BE52A", height: "45px" }}>
        <h5>LAR CRITERIA</h5>
      </div>

      <div className='container'>
        <table className="table table-bordered my-3">
          <thead className='text-center'>
            <tr>
              <th >#</th>
              <th> Criteria</th>
              <th>This Deal </th>
              <th>Override</th>
              <th> Result </th>

            </tr>
          </thead>

      <tbody>
      <tr>

              <td>1</td>
              <td>{`Each product line < 150 lots`}</td>
              <td>{`${dealValues?.Eachproduct} lots`}</td>
              <td> <input type="text" className="form-control" value={overRideValues.Eachproduct} name="Eachproduct"
                onChange={handleOverRideValueChange} /></td>
              <td> {overRideValues.Eachproduct ? overRideValues.Eachproduct < 150 ?
                 <button className="btn btn-success">Passed </button>:
                <button className="btn btn-danger">Failed </button>
                : dealValues.Eachproduct < 150 ? <button className="btn btn-success">Passed</button> :
                  <button className="btn btn-danger">Failed</button>}</td>

            </tr>

            <tr>
              <td>2</td>
              <td>{`ASP < FY ASP`}</td>
              <td>Y</td>
              <td> </td>
              <td><button className="btn btn-success">Passed</button> </td>

            </tr>

            <tr>

              <td>3</td>
              <td>Community active within 18 months</td>
              <td><select className="form-select" id="yesNoDropdown"
                name="Community"
                onChange={handleDealValueChange}
              >
                <option value="N">N</option>
                <option value="Y">Y</option>
              </select></td>
              <td><select className="form-select" id="yesNoDropdown">
                <option value=""></option>
                <option value="N">N</option>
                <option value="Y">Y</option>
              </select> </td>
              <td>  {dealValues?.Community === "Y" ? <button className="btn btn-success">Passed</button> :
                <button className="btn btn-danger">Failed</button>}</td>



            </tr>

            <tr>

              <td>4</td>
              <td>Triangle of Potential output is Low Risk or Very Low</td>
              <td>{dealValues.TOP}</td>
              <td > <select className="form-select" name="TOP"
                onChange={handleOverRideValueChange}>
                <option value=""></option>
                <option value="Very Low Risk">Very Low Risk</option>
                <option value="Low Risk">Low Risk</option>
                <option value="Moderate Risk">Moderate Risk</option>
                <option value="High Risk">High Risk</option>
              </select> </td>
              <td>{overRideValues?.TOP ? (overRideValues?.TOP === "Very Low Risk" || overRideValues?.TOP === "Low Risk") ? <button className="btn btn-success">Passed</button>
                : <button className="btn btn-danger">Failed</button> :
                (dealValues?.TOP === "Very Low Risk" || dealValues?.TOP === "Low Risk") ? <button className="btn btn-success">Passed</button>
                  : <button className="btn btn-danger">Failed</button>}</td>

            </tr>

            <tr>

              <td>5</td>
              <td>Existing Product</td>
              <td><select className="form-select"
                name="ExistingProduct"
                onChange={handleDealValueChange}>

                <option value="Y">Y</option>
                <option value="N">N</option>
              </select></td>
              <td> <select className="form-select" id="yesNoDropdown">
                <option value=""></option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select></td>
              <td>{dealValues?.ExistingProduct === "Y" ? <button className="btn btn-success">Passed</button> :
                <button className="btn btn-danger">Failed</button>}</td>



            </tr>


            <tr>

              <td>6</td>
              <td>Existing Submarket</td>
              <td><select className="form-select"
                name="ExistingSubmarket"
                onChange={handleDealValueChange}>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select></td>
              <td><select className="form-select" id="yesNoDropdown">
                <option value=""></option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select> </td>
              <td> {dealValues?.ExistingSubmarket === "Y" ? <button className="btn btn-success">Passed</button> :
                <button className="btn btn-danger">Failed</button>}</td>


            </tr>
            <tr>

              <td>7</td>
              <td>Gatherings project</td>
              <td><select className="form-select"

                name="Gatheringsproject"
                onChange={handleDealValueChange}>
                <option value="N">N</option>
                <option value="Y-Market Rate">Y-Market Rate</option>
                <option value="Y-Age Targeted">Y-Age Targeted</option>
                <option value="Y-Gatherings">Y-Gatherings</option>
              </select></td>
              <td><select className="form-select" id="yesNoDropdown">
                <option value=""></option>
                <option value="N">N</option>
                <option value="Y-Market Rate">Y-Market Rate</option>
                <option value="Y-Age Targeted">Y-Age Targeted</option>
                <option value="Y-Gatherings">Y-Gatherings</option>
              </select></td>
              <td> {dealValues?.Gatheringsproject === "N" ?
                <button className="btn btn-danger">Failed</button> :
                <button className="btn btn-success">Passed</button>}
              </td>


            </tr>
            <tr>

              <td>8</td>
              <td>Rolling Option </td>
              <td><select className="form-select"

                name="RollingOption"
                onChange={handleDealValueChange}>
                <option value="No-Bulk">No-Bulk</option>
                <option value="Y-Seller Option">Y-Seller Option</option>
                <option value=" Y-Land Bank Option"> Y-Land Bank Option</option>

              </select></td>
              <td><select className="form-select" id="yesNoDropdown">
                <option value=""></option>
                <option value="No-Bulk">No-Bulk</option>
                <option value="Y-Seller Option">Y-Seller Option</option>
                <option value=" Y-Land Bank Option"> Y-Land Bank Option</option>

              </select></td>
              <td> {dealValues?.RollingOption === "No-Bulk" ?
                <button className="btn btn-danger">Failed</button> :
                <button className="btn btn-success">Passed</button>}</td>


            </tr>
            <tr>

              <td>9</td>
              <td>{`Total Land Acq Spend (Year 1) < $10 million `}</td>
              <td>${dealValues?.TotalLandAcq}</td>
              <td><input type="number" className="form-control"
                name="TotalLandAcq"
                value={overRideValues?.TotalLandAcq}
                onChange={handleOverRideValueChange} /> </td>
              <td>
                {overRideValues?.TotalLandAcq ? overRideValues?.TotalLandAcq < 10000000 ?
                  <button className="btn btn-success">Passed</button> :
                  <button className="btn btn-danger">Failed</button>
                  : dealValues?.TotalLandAcq < 10000000 ?
                    <button className="btn btn-success">Passed</button> :
                    <button className="btn btn-danger">Failed</button>
                }
              </td>


            </tr>
            <tr>

              <td>10</td>
              <td>{`Total Land Dev Spend < $10 million`}</td>
              <td>${dealValues?.TotalLandDev}</td>
              <td><input type="text" className="form-control"
                name="TotalLandDev"
                value={overRideValues?.TotalLandDev}
                onChange={handleOverRideValueChange} /> </td>
              <td>
                {overRideValues?.TotalLandDev ? overRideValues?.TotalLandDev < 10000000 ?
                  <button className="btn btn-success">Passed</button> :
                  <button className="btn btn-danger">Failed</button>
                  : dealValues?.TotalLandDev < 10000000 ?
                    <button className="btn btn-success">Passed</button> :
                    <button className="btn btn-danger">Failed</button>
                }
              </td>


            </tr>
        {renderFailedConditionsRow()}
      </tbody>
        </table>
      </div> 
    </>
  );
};

export default LarCriteria;
