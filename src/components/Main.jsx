import React from "react";
import TopNav from "./TopNav.jsx";
import Header from "./Header.jsx";
import UtilityBar from "./UtilityBar.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import ServerName from "./ServerName.jsx";

function Main() {
  return (
    <div className="Default dealer default">
      <form method="post" action="">
        <a href="www.com" tabIndex="0" className="skip" target="_self">
          Skip to Content
        </a>

        <Header></Header>
        <TopNav></TopNav>
        <UtilityBar></UtilityBar>
        <Breadcrumb></Breadcrumb>
        <Content></Content>
        <Footer></Footer>
        <ServerName></ServerName>
      </form>

      <div
        className="modal-light-box"
        id="ModalLightBox"
        style={{ display: "none" }}
      ></div>

      <div
        className="product-toast"
        style={{ display: "none" }}
        aria-live="polite"
      ></div>
    </div>
  );
}

export default Main;
