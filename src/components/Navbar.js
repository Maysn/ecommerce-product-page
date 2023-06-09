import React, { useState } from "react";
import "../styles/nav.css";
import hamburger from "../assets/icon-menu.svg";
import hamburgerClose from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
function Navbar({}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="left-side">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="collection">Collection</Link>
        </span>
        <span>
          <Link to="store">Store</Link>
        </span>
      </div>
      {/* <div className="left-side">
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
      </div> */}
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
