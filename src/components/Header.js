import React, { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
import MobileLinks from "./MobileLinks";
import Layout from "./Layout";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      <Layout isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
