import React from "react";
import "../styles/layout.css";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      {/* <Outlet /> */}
    </div>
  );
}

export default Layout;
