import React from "react";
import cart from "../assets/icon-cart.svg";
function AddToCart(props) {
  return (
    <button className="add-to-cart">
      <span>
        <img src={cart} alt="add to cart" />
      </span>
      Add to cart
    </button>
  );
}

export default AddToCart;
