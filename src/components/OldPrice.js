import React from "react";
import "../styles/prices.css";
import { formatCurrency } from "../utilities/formatCurrency";

function OldPrice({ price }) {
  return <span className="old-price">{formatCurrency(price)}</span>;
}

export default OldPrice;
