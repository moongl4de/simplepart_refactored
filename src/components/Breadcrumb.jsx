import React from "react";

function Breadcrumb() {
  return (
    <div className="breadcrumb-container">
      <div className="container topBreadcrumbs">
        <ol className="breadcrumb" itemProp="breadcrumb">
          <li>
            <a
              id="breadcrumbItem-1"
              href="https://bitcoin.org/bitcoin.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label=""
              title=""
            >
              Welcome to EnglishParts.com, your home for Jaguar, MG, Triumph and
              Austin Healey Parts!
            </a>
          </li>
        </ol>
        <div className="breadcrumb-links"></div>
      </div>
    </div>
  );
}

export default Breadcrumb;
