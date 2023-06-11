import React from "react";
import "../styles/StoreItem.css";
import { formatCurrency } from "../utilities/formatCurrency";
import cartIcon from "../assets/icon-cart.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";
import { priceAfterDiscount } from "../utilities/priceAfterDiscount";

function StoreItem({
  brand,
  description,
  discountPercentage,
  title,
  price,
  images,
}) {
  const quantity = 0;
  return (
    <div className="item">
      <div className="item-image">
        <img src={images[0]} alt="item's image" />
      </div>
      <div className="item-body">
        {/* <div className="item-title">
          <div
            className="name-price"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{title}</span>
            <span>{formatCurrency(price)}</span>
          </div>
        </div> */}
        <div className="item-info">
          <p>{brand}</p>
          <h3>{title}</h3>
        </div>
        <div className="item-price">
          <span>
            {formatCurrency(priceAfterDiscount(price, discountPercentage))}
          </span>
          <span>{`${Math.round(discountPercentage)}%`}</span>
          <span className="og-price">{formatCurrency(price)}</span>
        </div>
        <div className="item-buttons">
          <div className="quantity">
            <span>
              <img src={iconMinus} alt="remove one unit" />
            </span>
            {`${quantity} in cart`}
            <span>
              <img src={iconPlus} alt="add one unit" />
            </span>
          </div>
          <div className="remove-from-cart">
            {" "}
            <span>
              <img src={cartIcon} alt="cart icon" />
            </span>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
