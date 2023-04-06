import React from "react";
import AustinHealey from "../../files/austin-healey.png";
import Jaguar from "../../files/jaguar.png";
import Mg from "../../files/mg.png";
import Triumph from "../../files/triumph.png";
import Make from "./Make.jsx";

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
              <Make
                image={AustinHealey}
                label="Austin Healey"
                title="Shop OEM Austin Healey Parts"
              ></Make>

              <Make
                image={Jaguar}
                label="Jaguar"
                title="Shop OEM Jaguar Parts"
              ></Make>

              <Make image={Mg} label="MG" title="Shop OEM MG Parts"></Make>

              <Make
                image={Triumph}
                label="Triumph"
                title="Shop OEM Triumph Parts"
              ></Make>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSelect;
