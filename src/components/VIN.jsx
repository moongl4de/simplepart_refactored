import React from "react";

function VIN() {
  return (
    <div id="VinControl_VinContainer" className="vin-container">
      <div className="vin-row row">
        <button
          id="VinControl_VinCloseModal"
          type="button"
          className="closeModal"
        >
          <span className="sr-only">Close VIN entry layer</span>
        </button>
        <div className="vin-col col-md-12">
          <div className="form-inline">
            <label className="center-block" for="vinEntry" tabIndex="-1">
              Enter VIN
            </label>
            <div className="form-group">
              <label for="VinControl_vinEntry" className="sr-only">
                Enter 17 digit VIN here
              </label>
              <input
                name="VinControl$vinEntry"
                type="text"
                id="VinControl_vinEntry"
                className="form-inline"
                onkeydown="return (event.keyCode!=13);"
                placeholder="Enter 17 digit VIN here"
              />
            </div>
            <button
              id="VinControl_vinSubmit"
              type="button"
              className="btn btn-sm btn-primary"
            >
              Go
            </button>
          </div>
          <div className="vinResults"></div>
        </div>
      </div>
    </div>
  );
}

export default VIN;
