import React from "react";
import "../styles/prices.css";

function DiscountRate({ discountPercentage }) {
  return (
    <span className="discount-rate">{`${Math.round(
      discountPercentage
    )}%`}</span>
  );
}

export default DiscountRate;
