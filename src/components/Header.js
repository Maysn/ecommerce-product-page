import React, { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
import MobileLinks from "./MobileLinks";
import MobileLayout from "./MobileLayout";
import Cart from "./Cart";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Cart />
      <MobileLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <MobileLayout toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
}

export default Header;
