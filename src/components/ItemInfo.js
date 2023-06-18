import React from "react";
import "../styles/ItemInfo.css";

function ItemInfo({ brand, title }) {
  const BRAND = brand.toUpperCase();
  return (
    <div className="item-info">
      <p className="item-brand">{BRAND}</p>
      <h3 className="item-title">{title}</h3>
    </div>
  );
}

export default ItemInfo;
