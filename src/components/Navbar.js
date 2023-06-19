import React, { useState } from "react";
import "../styles/Nav.css";
import hamburger from "../assets/icon-menu.svg";
import hamburgerClose from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { useShoppingCart } from "../context/ShoppingCartContext";
import NavLinks from "./NavLinks";
function Navbar({ toggleMenu, setToggleMenu }) {
  const { toggleCart, cartQuantity } = useShoppingCart();
  return (
    <nav className="nav">
      <div className="nav-left-side">
        <img
          src={toggleMenu ? hamburgerClose : hamburger}
          alt="show mobile menu"
          className="hamburger"
          onClick={() => setToggleMenu((curr) => !curr)}
        />
        <img src={logo} alt="Logo" className="logo" />
        <NavLinks />
      </div>
      <div className="nav-right-side">
        <div className="cart_icon noSelect">
          <img
            src={cartIcon}
            alt="user cart"
            className="cart-img"
            onClick={toggleCart}
          />
          {cartQuantity > 0 && (
            <div className="cart_quantity">{cartQuantity}</div>
          )}
        </div>
        <img src={avatar} alt="user avatar" className="avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
