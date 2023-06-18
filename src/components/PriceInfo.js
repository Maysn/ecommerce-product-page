import React from "react";
import "../styles/PriceInfo.css";
import CurrentPrice from "./CurrentPrice";
import DiscountRate from "./DiscountRate";
import OldPrice from "./OldPrice";

function PriceInfo({ price, discountPercentage }) {
  return (
    <div className="price-info">
      <CurrentPrice price={price} discountPercentage={discountPercentage} />
      <DiscountRate discountPercentage={discountPercentage} />
      <OldPrice price={price} />
    </div>
  );
}

export default PriceInfo;
