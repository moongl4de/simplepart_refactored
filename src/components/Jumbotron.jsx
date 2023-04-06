import React from "react";

function Jumbotron(props) {
  return (
    <div id="Content_PageBody_heroJumbotron" className="jumbotron dealer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 jumbotronElementContainer">
            <div
              id="Content_PageBody_CarouselTextPlacement"
              className="panel heroPlacementContainer"
            >
              <div className="panel-heading">
                <h2 className="panel-title">
                  Premium Austin Healey, Jaguar, MG, and Triumph Parts
                </h2>
              </div>
              <div className="panel-body">
                <span className="defaultHeroBodyText">
                  <span className="bodyTextSpan">{props.text}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
