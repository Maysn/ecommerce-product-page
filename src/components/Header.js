import React, { useState } from "react";
import "../styles/header.css";
import hamburger from "../assets/icon-menu.svg";
import hamburgerClose from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
function Header({ cart, setCart }) {
  const [open, setOpen] = useState(false);
  const cartToggle = () => {
    setCart({ ...cart, visible: !cart.visible });
  };
  return (
    <header className="header">
      <div className="left-side">
        <img
          src={open ? hamburgerClose : hamburger}
          alt="show mobile menu"
          className="hamburger"
          onClick={() => setOpen((curr) => !curr)}
        />
        <img
          style={{ backgroundColor: "white" }}
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="right-side">
        <img
          src={cartIcon}
          alt="user cart"
          className="cart-img"
          onClick={cartToggle}
        />
        <img src={avatar} alt="user avatar" className="avatar" />
      </div>
    </header>
  );
}

export default Header;
