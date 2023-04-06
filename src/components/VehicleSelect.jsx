import React from "react";
import AustinHealey from "../../files/austin-healey.png";
import Jaguar from "../../files/jaguar.png";
import Mg from "../../files/mg.png";
import Triumph from "../../files/triumph.png";

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
              <a
                className="seoLinkItem Make"
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noreferrer"
                title="Shop OEM Austin Healey Parts"
              >
                <img src={AustinHealey} alt="" />
                <div>Austin Healey</div>
              </a>

              <a
                className="seoLinkItem Make"
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noreferrer"
                title="Shop OEM Jaguar Parts"
              >
                <img src={Jaguar} alt="" />
                <div>Jaguar</div>
              </a>

              <a
                className="seoLinkItem Make"
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noreferrer"
                title="Shop OEM MG Parts"
              >
                <img src={Mg} alt="" />
                <div>MG</div>
              </a>

              <a
                className="seoLinkItem Make"
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noreferrer"
                title="Shop OEM Triumph Parts"
              >
                <img src={Triumph} alt="" />
                <div>Triumph</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSelect;
