import React from "react";
import "../styles/Layout.css";

function Layout({ toggleMenu, setToggleMenu }) {
  return (
    <div
      className="layout"
      style={{
        width: toggleMenu ? "100%" : "0",
        opacity: toggleMenu ? ".7" : "0",
      }}
      onClick={() => setToggleMenu((open) => !open)}
    ></div>
  );
}

export default Layout;
