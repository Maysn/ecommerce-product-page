import React from "react";
import "../styles/prices.css";
import { formatCurrency } from "../utilities/formatCurrency";
import { priceAfterDiscount } from "../utilities/priceAfterDiscount";

function CurrentPrice({ price, discountPercentage, className = "" }) {
  return (
    <span className={`curr-price ${className}`}>
      {formatCurrency(priceAfterDiscount(price, discountPercentage))}
    </span>
  );
}

export default CurrentPrice;
