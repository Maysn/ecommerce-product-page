import React from "react";
import "../styles/Layout.css";

function MobileLayout({ toggleMenu, setToggleMenu }) {
  return (
    <div
      className="mobile_layout"
      style={{
        width: toggleMenu ? "100%" : "0",
        opacity: toggleMenu ? ".7" : "0",
      }}
      onClick={() => setToggleMenu((open) => !open)}
    ></div>
  );
}

export default MobileLayout;
