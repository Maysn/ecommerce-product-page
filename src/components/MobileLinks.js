import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MobileLinks.css";
function MobileLinks({ toggleMenu, setToggleMenu }) {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const TRIGGER_MENU = () => setToggleMenu((open) => !open);

  return (
    <ul className="mobile-links" style={{ width: toggleMenu ? "70%" : "0" }}>
      <li onClick={TRIGGER_MENU}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={TRIGGER_MENU}>
        <Link to="collection">Collection</Link>
      </li>
      <li onClick={() => setShowSubmenu((curr) => !curr)}>
        <a href="#">
          Categories
          {showSubmenu ? (
            <span>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                  fill="#000000"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                />
              </svg>
            </span>
          )}
        </a>

        <ul
          className={` submenu ${showSubmenu ? "show_submenu" : ""}`}
          onClick={TRIGGER_MENU}
        >
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
    // <div
    //   className="mobile-links"
    //   style={{ width: toggleMenu ? "70%" : "0" }}
    //   onClick={() => setToggleMenu((open) => !open)}
    // >
    //   <span>
    //     <Link to="/">Home</Link>
    //   </span>
    //   <span>
    //     <Link to="collection">Collection</Link>
    //   </span>
    //   <span>
    //     <Link to="store">Offers</Link>
    //   </span>
    // </div>
  );
}

export default MobileLinks;
