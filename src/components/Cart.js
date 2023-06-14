import React from "react";
import "../styles/Cart.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, isOpen } = useShoppingCart();
  return (
    <div className="cart" style={{ visibility: isOpen ? "visible" : "hidden" }}>
      <h3>Cart</h3>
      <hr />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Cart;
