import React, { useState } from "react";
import "../styles/Nav.css";
import hamburger from "../assets/icon-menu.svg";
import hamburgerClose from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import DesktopLinks from "./DesktopLinks";
function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="nav">
      <div className="nav-left-side">
        <img
          src={isOpen ? hamburgerClose : hamburger}
          alt="show mobile menu"
          className="hamburger"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
        <img
          style={{ backgroundColor: "white" }}
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>
      <DesktopLinks />
      <div className="right-side">
        <img
          src={cartIcon}
          alt="user cart"
          className="cart-img"
          // onClick={cartToggle}
        />
        <img src={avatar} alt="user avatar" className="avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
