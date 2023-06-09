import React from "react";
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
    <div className="item" style={{ marginBottom: "3rem" }}>
      <img src={images[0]} style={{ height: "200px", width: "100%" }} alt="" />
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
          <p>{description}</p>
        </div>
        <div
          className="item-price"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <span>
            {formatCurrency(priceAfterDiscount(price, discountPercentage))}
          </span>
          <span>{`${Math.round(discountPercentage)}%`}</span>
          <span style={{ color: "GrayText", textDecoration: "line-through" }}>
            {formatCurrency(price)}
          </span>
        </div>
        <div
          className="item-buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="quantity"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>
              <img src={iconMinus} alt="" />
            </span>
            {`${quantity} in cart`}
            <span>
              <img src={iconPlus} alt="" />
            </span>
          </div>
          <div
            className="remove-from-cart"
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "grey",
              fontSize: "1rem",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            {" "}
            <span>
              <img src={cartIcon} alt="" />
            </span>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
