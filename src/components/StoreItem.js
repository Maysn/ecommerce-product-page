import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";

function StoreItem({ brand, description, title, price, images }) {
  const quantity = 0;
  return (
    <div className="item" style={{ marginBottom: "3rem" }}>
      <img
        src={images[0]}
        style={{ height: "200px", width: "100%", marginBottom: "1.25rem" }}
        alt=""
      />
      <div className="item-body">
        <div className="item-title">
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
        </div>
        <div className="item-buttons" style={{ marginTop: "auto" }}>
          {quantity === 0 ? (
            <div
              className="add-to-cart"
              style={{
                backgroundColor: "grey",
                fontSize: "1.25rem",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              Add to cart
            </div>
          ) : (
            <div
              className="in-cart"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="quantity"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: ".75rem",
                }}
              >
                <span>-</span>
                {`${quantity} in cart`}
                <span>+</span>
              </div>
              <div
                className="remove-from-cart"
                style={{
                  backgroundColor: "red",
                  fontSize: "1rem",
                  width: "30%",
                  marginTop: "1rem",
                  padding: "1rem",
                }}
              >
                Remove
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
