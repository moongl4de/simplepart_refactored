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
        <a
          href="https://bitcoin.org/bitcoin.pdf"
          tabIndex="0"
          className="skip"
          target="_self"
        >
          Skip to Content
        </a>

        <Header
          text="Browse our complete catalog of OEM and licensed British heritage
              parts for your classic British automobile. | Kalamazoo, MI"
        ></Header>
        <TopNav
          siteName="EnglishParts.com"
          address="5850 Stadium Dr, Kalamazoo, MI 49009"
          phoneNumber="866.467.1776"
          webAddress="sales@englishparts.com"
          url="https://bitcoin.org/bitcoin.pdf"
        ></TopNav>
        <UtilityBar></UtilityBar>
        <Breadcrumb></Breadcrumb>
        <Content></Content>
        <Footer
          url="https://bitcoin.org/bitcoin.pdf"
          copyright="© 2021 EnglishParts.com"
        ></Footer>
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
