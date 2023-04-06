import React from "react";
import PartBox from "./PartBox.jsx";
import Body from "../../files/body.jpg";
import Brakes from "../../files/brake-system.jpg";
import Cables from "../../files/cables.jpg";
import CarCare from "../../files/car-care.jpg";
import CompetitionParts from "../../files/competition-parts.jpg";
import TopsCovers from "../../files/tops-covers.jpg";
import Cooling from "../../files/cooling.jpg";
import ElectricalComponents from "../../files/electrical-components.jpg";
import EngineDriveline from "../../files/engine-driveline.jpg";
import ExhaustEmissions from "../../files/exhaust-emission.jpg";
import Exterior from "../../files/exterior.jpg";
import FuelSystem from "../../files/fuel-system.jpg";
import Interior from "../../files/interior.jpg";
import Maintenance from "../../files/maintenance.jpg";
import OilSystem from "../../files/oil-system.jpg";
import PerformanceHandling from "../../files/performance-handling.jpg";
import Suspension from "../../files/suspension.jpg";
import Transmission from "../../files/transmission.jpg";

function CategoryContainer() {
  return (
    <div
      id="Content_PageBody_QuickStartControl_QuickStartUpdatePanel"
      className="quick-start-update-panel"
    >
      <div
        id="Content_PageBody_QuickStartControl_categoriesSelector"
        className="QuickStartLinksControl"
      >
        <div
          id="Content_PageBody_QuickStartControl_div_quickStartLinks"
          className="quickStart-Categories"
        >
          <div
            id="Content_PageBody_QuickStartControl_QuickStartPlacementAlternative"
            className="quickStartContentWrap qsLinksContainer"
          >
            <div className="quickStartAltTitle">
              <h2>Select a Category</h2>
            </div>
            <div className="quickStartAltText"></div>
          </div>

          {/* 
            
            
            /////////
            
            Note: ideally, this would be programmatically generated w/ an array of objects, could also use 'v-for' in Vue, would be perfect for this 
            
            /////////
            
            
            */}

          <div className="qsLinksContainer">
            <div
              id="Content_PageBody_QuickStartControl_CategoryList"
              className="category-panel"
            >
              <PartBox
                image={Body}
                title="Shop OEM Body Parts"
                alt="Shop OEM Body Parts"
                label="Body"
              ></PartBox>

              <PartBox
                image={Brakes}
                title="Shop OEM Brake System Parts"
                alt="Shop OEM Brake System Parts"
                label="Brake System"
              ></PartBox>

              <PartBox
                image={Cables}
                title="Shop OEM Cables"
                alt="Shop OEM Cables"
                label="Cables"
              ></PartBox>

              <PartBox
                image={CarCare}
                title="Shop OEM Car Care, Tools and Shop Supplies"
                alt="Shop OEM Car Care, Tools and Shop Supplies"
                label="Car Care, Tools and Shop Supplies"
              ></PartBox>

              <PartBox
                image={CompetitionParts}
                title="Shop OEM Competition Parts"
                alt="Shop OEM Competition Parts"
                label="Competition Parts"
              ></PartBox>

              <PartBox
                image={TopsCovers}
                title="Shop OEM Convertible Tops, Hard Tops and Tonneau Covers"
                alt="Shop OEM Convertible Tops, Hard Tops and Tonneau Covers"
                label="Convertible Tops, Hard Tops and Tonneau Covers"
              ></PartBox>

              <PartBox
                image={Cooling}
                title="Shop OEM Cooling System Parts"
                alt="Shop OEM Cooling System Parts"
                label="Cooling System"
              ></PartBox>

              <PartBox
                image={ElectricalComponents}
                title="Shop OEM Electrical Components"
                alt="Shop OEM Electrical Components"
                label="Electrical Components"
              ></PartBox>

              <PartBox
                image={EngineDriveline}
                title="Shop OEM Engine and Driveline Parts"
                alt="Shop OEM Engine and Driveline Parts"
                label="Engine and Driveline"
              ></PartBox>

              <PartBox
                image={ExhaustEmissions}
                title="Shop OEM Exhaust and Emissions"
                alt="Shop OEM Exhaust and Emissions"
                label="Exhaust and Emissions"
              ></PartBox>

              <PartBox
                image={Exterior}
                title="Shop OEM Exterior Parts"
                alt="Shop OEM Exterior Parts"
                label="Exterior"
              ></PartBox>

              <PartBox
                image={FuelSystem}
                title="Shop OEM Fuel Systems"
                alt="Shop OEM Fuel Systems"
                label="Fuel Systems"
              ></PartBox>

              <PartBox
                image={Interior}
                title="Shop OEM Interior Parts"
                alt="Shop OEM Interior Parts"
                label="Interior"
              ></PartBox>

              <PartBox
                image={Maintenance}
                title="Shop OEM Maintenance Parts"
                alt="Shop OEM Maintenance Parts"
                label="Maintenance"
              ></PartBox>

              <PartBox
                image={OilSystem}
                title="Shop OEM Oil System Parts"
                alt="Shop OEM Oil System Parts"
                label="Oil System"
              ></PartBox>

              <PartBox
                image={PerformanceHandling}
                title="Shop OEM Performance &amp; Handling"
                alt="Shop OEM Performance &amp; Handling"
                label="Performance &amp; Handling"
              ></PartBox>

              <PartBox
                image={Suspension}
                title="Shop OEM Suspension Parts"
                alt="Shop OEM Suspension Parts"
                label="Suspension"
              ></PartBox>

              <PartBox
                image={Transmission}
                title="Shop OEM Transmission, Gearbox and Clutch Parts"
                alt="Shop OEM Transmission, Gearbox and Clutch Parts"
                label="Transmission, Gearbox and Clutch"
              ></PartBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;