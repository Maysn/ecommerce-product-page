import React from "react";
import "../styles/cart.css";

function Cart({ cart }) {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <hr />
      {!cart.items.length ? <p>Your cart is empty.</p> : ""}
    </div>
  );
}

export default Cart;
