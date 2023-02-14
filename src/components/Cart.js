import React from "react";
import "../styles/cart.css";

function Cart({ cart }) {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <hr />
      {!cart.items.length ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.items.map((item) => (
          <div className="cart_item" key={item.name}>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>
              {item.price} x {item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
