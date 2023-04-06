import React from "react";

function Header(props) {
  return (
    <div className="h1TextHeader">
      <div className="container">
        <div className="row navbar-row">
          <div className="col-sm-11 small single-text-line-small h1Text">
            <h1 className="body-2 text-muted">{props.text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
