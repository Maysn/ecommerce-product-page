import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav_links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="collection">Collection</Link>
      </li>
      <li>
        <a href="#">Categories</a>
        <ul>
          <li>
            <Link to="fragrances">Fragrances</Link>
          </li>
          <li>
            <Link to="groceries">Groceries</Link>
          </li>
          <li>
            <Link to="home-decoration">Home Decoration</Link>
          </li>
          <li>
            <Link to="laptops">Laptops</Link>
          </li>
          <li>
            <Link to="smartphones">Smartphones</Link>
          </li>
          <li>
            <Link to="skincare">Skincare</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavLinks;
