import React from "react";
import "../styles/Layout.css";

function Layout({ isOpen, setIsOpen }) {
  return (
    <div
      className="layout"
      style={{ width: isOpen ? "100%" : "0" }}
      onClick={() => setIsOpen((open) => !open)}
    ></div>
  );
}

export default Layout;
