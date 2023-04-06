import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import VehicleSelect from "./VehicleSelect.jsx";
import CategoryContainer from "./CategoryContainer.jsx";

function Content() {
  return (
    <div id="contentWrapper">
      <div className="" id="contentDiv" role="main">
        <Jumbotron
          title="Premium Austin Healey, Jaguar, MG, and Triumph Parts"
          text="Unmistakable style. That's what you love about your Austin Healey, Jaguar, MG, or Triumph. At EnglishParts.com, we carry a large selection of premium repair, maintenance and restoration parts for classic British cars. You know you can count on us because we're located in Kalamazoo, MI. Finding the right premium repair parts has always been our first priority. Our state of the art premium parts diagrams ensure that you're getting the perfect part the first time. Our experienced team knows these cars inside and out, and is here to help. Excellence. The first time, every time."
        ></Jumbotron>
        <VehicleSelect></VehicleSelect>
        <CategoryContainer></CategoryContainer>
      </div>
    </div>
  );
}

export default Content;
