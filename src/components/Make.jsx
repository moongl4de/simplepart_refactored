import React from "react";

function Make(props) {
  return (
    <a
      className="seoLinkItem Make"
      href="https://bitcoin.org/bitcoin.pdf"
      target="_blank"
      rel="noreferrer"
      title={props.title}
    >
      <img src={props.image} alt="" />
      <div>{props.label}</div>
    </a>
  );
}

export default Make;
