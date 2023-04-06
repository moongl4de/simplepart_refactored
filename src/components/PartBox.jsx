import React from "react";

function PartBox(props) {
  return (
    <a
      className="qsCategoryLinkItem"
      href="https://bitcoin.org/bitcoin.pdf"
      target="_blank"
      rel="noreferrer"
      title={props.title}
    >
      <div className="qsCategoryWrapper">
        <div className="qsImgWrapper">
          <img src={props.image} aria-hidden="true" alt={props.alt} />
        </div>
        <div className="qsdisplayStringDiv">{props.label}</div>
      </div>
    </a>
  );
}

export default PartBox;
