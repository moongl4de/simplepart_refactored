import React from "react";
import PartBox from "../PartBox.jsx";
import Body from "../../../files/body.jpg";
import Brakes from "../../../files/brake-system.jpg";
import Cables from "../../../files/cables.jpg";
import CarCare from "../../../files/car-care.jpg";
import CompetitionParts from "../../../files/competition-parts.jpg";
import TopsCovers from "../../../files/tops-covers.jpg";
import Cooling from "../../../files/cooling.jpg";
import ElectricalComponents from "../../../files/electrical-components.jpg";
import EngineDriveline from "../../../files/engine-driveline.jpg";
import ExhaustEmissions from "../../../files/exhaust-emission.jpg";
import Exterior from "../../../files/exterior.jpg";
import FuelSystem from "../../../files/fuel-system.jpg";
import Interior from "../../../files/interior.jpg";
import Maintenance from "../../../files/maintenance.jpg";
import OilSystem from "../../../files/oil-system.jpg";
import PerformanceHandling from "../../../files/performance-handling.jpg";
import Suspension from "../../../files/suspension.jpg";
import Transmission from "../../../files/transmission.jpg";

function CategoryMap() {
  const urlLink = "https://bitcoin.org/bitcoin.pdf";
  const parts = [
    {
      title: "Shop OEM Body Parts",
      alt: "Shop OEM Body Parts",
      label: "Body",
      image: Body,
      url: urlLink,
    },

    {
      title: "Shop OEM Brake System Parts",
      alt: "Shop OEM Brake System Parts",
      label: "Brake System",
      image: Brakes,
      url: urlLink,
    },
    {
      title: "Shop OEM Cables",
      alt: "Shop OEM Cables",
      label: "Cables",
      image: Cables,
      url: urlLink,
    },
    {
      title: "Shop OEM Car Care, Tools and Shop Supplies",
      alt: "Shop OEM Car Care, Tools and Shop Supplies",
      label: "Car Care, Tools and Shop Supplies",
      image: CarCare,
      url: urlLink,
    },
    {
      title: "Shop OEM Competition Parts",
      alt: "Shop OEM Competition Parts",
      label: "Competition Parts",
      image: CompetitionParts,
      url: urlLink,
    },
    {
      title: "Shop OEM Convertible Tops, Hard Tops and Tonneau Covers",
      alt: "Shop OEM Convertible Tops, Hard Tops and Tonneau Covers",
      label: "Convertible Tops, Hard Tops and Tonneau Covers",
      image: TopsCovers,
      url: urlLink,
    },
    {
      title: "Shop OEM Cooling System Parts",
      alt: "Shop OEM Cooling System Parts",
      label: "Cooling System",
      image: Cooling,
      url: urlLink,
    },
    {
      title: "Shop OEM Electrical Components",
      alt: "Shop OEM Electrical Components",
      label: "Electrical Components",
      image: ElectricalComponents,
      url: urlLink,
    },
    {
      title: "Shop OEM Engine and Driveline Parts",
      alt: "Shop OEM Engine and Driveline Parts",
      label: "Engine and Driveline",
      image: EngineDriveline,
      url: urlLink,
    },
    {
      title: "Shop OEM Exhaust and Emissions",
      alt: "Shop OEM Exhaust and Emissions",
      label: "Exhaust and Emissions",
      image: ExhaustEmissions,
      url: urlLink,
    },
    {
      title: "Shop OEM Exterior Parts",
      alt: "Shop OEM Exterior Parts",
      label: "Exterior",
      image: Exterior,
      url: urlLink,
    },
    {
      title: "Shop OEM Fuel Systems",
      alt: "Shop OEM Fuel Systems",
      label: "Fuel Systems",
      image: FuelSystem,
      url: urlLink,
    },
    {
      title: "Shop OEM Interior Parts",
      alt: "Shop OEM Interior Parts",
      label: "Interior",
      image: Interior,
      url: urlLink,
    },
    {
      title: "Shop OEM Maintenance Parts",
      alt: "Shop OEM Maintenance Parts",
      label: "Maintenance",
      image: Maintenance,
      url: urlLink,
    },
    {
      title: "Shop OEM Oil System Parts",
      alt: "Shop OEM Oil System Parts",
      label: "Oil System",
      image: OilSystem,
      url: urlLink,
    },
    {
      title: "Shop OEM Performance & Handling",
      alt: "Shop OEM Performance & Handling",
      label: "Performance &amp; Handling",
      image: PerformanceHandling,
      url: urlLink,
    },
    {
      title: "Shop OEM Suspension Parts",
      alt: "Shop OEM Suspension Parts",
      label: "Suspension",
      image: Suspension,
      url: urlLink,
    },
    {
      title: "Shop OEM Transmission, Gearbox and Clutch Parts",
      alt: "Shop OEM Transmission, Gearbox and Clutch Parts",
      label: "Transmission, Gearbox and Clutch",
      image: Transmission,
      url: urlLink,
    },
  ];

  return (
    <>
      {parts.map((part, x) => (
        <PartBox
          title={part.title}
          label={part.label}
          image={part.image}
          url={part.urlLink}
          alt={part.alt}
          key={x}
        ></PartBox>
      ))}
    </>
  );
}

export default CategoryMap;
