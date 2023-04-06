import React from "react";
import AustinHealey from "../../../files/austin-healey.png";
import Jaguar from "../../../files/jaguar.png";
import Mg from "../../../files/mg.png";
import Triumph from "../../../files/triumph.png";
import Make from "../Make.jsx";

function MakeMap() {
  const makes = [
    {
      image: AustinHealey,
      label: "Austin Healey",
      title: "Shop OEM Austin Healey Parts",
    },
    {
      image: Jaguar,
      label: "Jaguar",
      title: "Shop OEM Jaguar Parts",
    },
    {
      image: Mg,
      label: "MG",
      title: "Shop OEM MG Parts",
    },
    {
      image: Triumph,
      label: "Triumph",
      title: "Shop OEM Triumph Parts",
    },
  ];
  return (
    <>
      {makes.map((make, x) => (
        <Make
          title={make.title}
          label={make.label}
          image={make.image}
          alt={make.alt}
          key={x}
        ></Make>
      ))}
    </>
  );
}

export default MakeMap;
