import React from "react";

function UtilityBar() {
  return (
    <div className="utility-bar cf" id="UtilityBar">
      <div className="utility-bar-top">
        <div className="container utility-bar-container">
          <div
            className="utility-bar__section utility-bar__search"
            id="SmartSearch"
            role="search"
            aria-labelledby="header-search"
          >
            <div
              id="utilitySmartSearch"
              className="input-group utility-bar__element"
            >
              <span className="input-group-addon utility-bar__search-icon icon-magnifier"></span>
              <label htmlFor="SearchInput" className="sr-only">
                Search
              </label>
              <input
                id="SearchInput"
                type="text"
                title="Click here to search"
                className="form-control utility-bar__search-input"
                placeholder="Search by Keywords, Part Numbers or VIN"
                autoComplete="off"
              />
              <span className="input-group-btn" title="Search Button">
                <button
                  type="button"
                  className="btn btn-default utility-bar__search-button"
                  id="searchBtn"
                >
                  Go{" "}
                </button>
              </span>
            </div>
          </div>
          <div
            id="MyGarage"
            className="utility-bar__section utility-bar__select-vehicle"
          >
            <div id="selectVehicle" className="utility-bar__element">
              <div
                id="selectVehicleText"
                title="My Garage"
                className="utility-bar__select-vehicle-text"
              >
                Select Your Vehicle
              </div>{" "}
              <button
                type="button"
                id="UtilityBarToggleButton"
                title="Select Vehicle Button"
                aria-label="Select Vehicle Button"
                className="utility-bar__select-vehicle-button"
              >
                <span className="icon-arrow-down select-vehicle-icon"></span>
              </button>
            </div>{" "}
            <div className="boxTriangle" style={{ display: "none" }}>
              <span className="top-bot my-garage-top"></span>
            </div>{" "}
            <div className="garage__container" style={{ display: "none" }}>
              <div id="garageContainer" className="garage garage-vehicles">
                <div className="garage__header">
                  My Garage
                  <button
                    type="button"
                    aria-label="close"
                    className="close my-garage__close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>{" "}
                <div className="garage__content no-garage-content">
                  <div
                    className="garage__selection"
                    style={{ display: "none" }}
                  >
                    <span aria-hidden="true" className="icon-partman"></span>{" "}
                    <div className="garage__help">
                      You can edit the name of your vehicle by clicking the
                      pencil icon on the right.
                    </div>{" "}
                    <div className="garage-vehicles"></div>{" "}
                    <div className="garage__additions no-vehicles">
                      <div className="vehicle-selection-addition">
                        <button
                          type="button"
                          className="garage__select-vehicle"
                        >
                          + Add New Vehicle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>

          <div
            className="utility-bar__section"
            id="CartWidgetUtility"
            title="Cart"
          >
            <button
              type="button"
              id="CartWidgetHeaderButton"
              className="utility-bar__section utility-bar__element utility-bar__cart cart-widget-button"
            >
              <span className="cart-widget-button__icon icon-basket"></span>{" "}
              <span
                id="NumCartItems"
                aria-label="0 in Cart. Click to view Cart"
                className="cart-widget-button__number badge-normal"
              >
                0
              </span>
            </button>
          </div>
        </div>

        <div className="cartControlContainer" style={{ maxHeight: "1894px" }}>
          <div
            className="cartControlLightBox"
            style={{ maxHeight: "1894px" }}
          ></div>
          <div className="cartWidgetContainer">
            <div className="row">
              <div className="col-md-12 cartWidget">
                <div className="panel">
                  <div className="panel-heading">
                    <div className="panel-title">
                      <div className="row">
                        <div className="col-xs-8">
                          <h2
                            id="LblCart"
                            tabIndex="0"
                            aria-labelledby="Your Cart"
                          >
                            Your Cart
                          </h2>
                        </div>
                        <button
                          type="button"
                          className="col-xs-4 closeWidget"
                          title=""
                        >
                          <span className="sr-only">Close Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body mobileCheckoutTop">
                    <input
                      type="button"
                      name="proceedtoCheckoutMbl"
                      value="Checkout"
                      id="proceedtoCheckoutMbl"
                      title="Go to Secure Checkout"
                      className="btn btn-primary btn-block text-uppercase"
                    />
                  </div>
                  <div className="widgetItemsWrapper"></div>
                  <div className="panel-body orderTotalWidget">
                    <div className="row">
                      <div className="col-xs-7 text-left"></div>
                      <div className="col-xs-5 text-right"></div>
                    </div>
                  </div>
                  <div className="panel-body cartWidgetTotal ">
                    <div className="row">
                      <div className="col-xs-6 text-left totalText"></div>
                      <div className="col-xs-6 text-right money"></div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <div className="panel-body">
                      <button
                        type="button"
                        className="btn btn-default btn-block btn-tertiary"
                        title=""
                      >
                        Continue Shopping
                      </button>
                      <a
                        href="https://bitcoin.org/bitcoin.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-tertiary btn-block viewCartWidgetBtn"
                        title=""
                      >
                        View Cart
                      </a>
                      <input
                        type="button"
                        name="proceedtoCheckout"
                        value="Checkout"
                        id="proceedtoCheckout"
                        title="Go to Secure Checkout"
                        className="btn btn-primary btn-block text-uppercase"
                      />
                    </div>
                  </div>
                  <div className="panel-body cartWidgetWarning">
                    <a
                      href="https://bitcoin.org/bitcoin.pdf"
                      target="_blank"
                      rel="noreferrer"
                      id="TabbingCartWidgetWarning"
                      className="lastLink"
                      tabIndex="0"
                      aria-labelledby="Tabbing past or clicking of this link will close the Cart"
                    >
                      Tabbing past or clicking of this link will close the Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilityBar;
