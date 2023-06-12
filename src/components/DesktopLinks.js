import React from "react";
import { Link } from "react-router-dom";

function DesktopLinks(props) {
  return (
    <div style={{ display: "none" }}>
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

export default DesktopLinks;
