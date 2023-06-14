import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileLinks.css";
function MobileLinks({ toggleMenu, setToggleMenu }) {
  return (
    <div
      className="mobile-links"
      style={{ width: toggleMenu ? "70%" : "0" }}
      onClick={() => setToggleMenu((open) => !open)}
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
