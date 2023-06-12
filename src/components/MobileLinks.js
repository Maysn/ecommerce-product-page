import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileLinks.css";
function MobileLinks({ isOpen, setIsOpen }) {
  return (
    <div
      className="mobile-links"
      style={{ width: isOpen ? "70%" : "0" }}
      onClick={() => setIsOpen((open) => !open)}
    >
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="collection">Collection</Link>
      </span>
      <span>
        <Link to="store">Offers</Link>
      </span>
    </div>
  );
}

export default MobileLinks;
