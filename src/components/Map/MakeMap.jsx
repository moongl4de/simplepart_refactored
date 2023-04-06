import React from "react";
import AustinHealey from "../../../files/austin-healey.png";
import Jaguar from "../../../files/jaguar.png";
import Mg from "../../../files/mg.png";
import Triumph from "../../../files/triumph.png";
import Make from "../Make.jsx";

function MakeMap() {
  const urlLink = "https://bitcoin.org/bitcoin.pdf";
  const makes = [
    {
      image: AustinHealey,
      label: "Austin Healey",
      title: "Shop OEM Austin Healey Parts",
      url: urlLink,
    },
    {
      image: Jaguar,
      label: "Jaguar",
      title: "Shop OEM Jaguar Parts",
      url: urlLink,
    },
    {
      image: Mg,
      label: "MG",
      title: "Shop OEM MG Parts",
      url: urlLink,
    },
    {
      image: Triumph,
      label: "Triumph",
      title: "Shop OEM Triumph Parts",
      url: urlLink,
    },
  ];
  return (
    <>
      {makes.map((make, x) => (
        <Make
          title={make.title}
          label={make.label}
          image={make.image}
          url={make.url}
          alt={make.alt}
          key={x}
        ></Make>
      ))}
    </>
  );
}

export default MakeMap;
