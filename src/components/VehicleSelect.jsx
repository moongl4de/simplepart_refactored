import React from "react";
import MakeMap from "./MakeMap.jsx";

function VehicleSelect() {
  return (
    <div id="Content_PageBody_RefineVehicleLinksUpdatePanel">
      <div id="Content_PageBody_VehicleSelector" className="selectVehicle">
        <div id="Content_PageBody_div_seoLinks" className="container">
          <div id="Content_PageBody_seoContainerDiv" className="seoContainer">
            <div
              id="Content_PageBody_seoTitle"
              className="seoTitle lead text-center"
            >
              <h2>Select a Make</h2>
            </div>
            <div
              id="Content_PageBody_RefineResultsDefaultContainer"
              className="row refineResults"
            >
              <MakeMap></MakeMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSelect;
