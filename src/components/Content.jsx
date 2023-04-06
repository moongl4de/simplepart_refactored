import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import VehicleSelect from "./VehicleSelect.jsx";
import CategoryContainer from "./CategoryContainer.jsx";

function Content() {
  return (
    <div id="contentWrapper">
      <div className="" id="contentDiv" role="main">
        <Jumbotron></Jumbotron>
        <VehicleSelect></VehicleSelect>
        <CategoryContainer></CategoryContainer>
      </div>
    </div>
  );
}

export default Content;
