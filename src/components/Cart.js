import React from "react";
import "../styles/Cart.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, isOpen } = useShoppingCart();
  return (
    <div
      className="cart"
      style={{
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <h3>Cart</h3>
      <hr />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      {cart.length > 0 ? (
        <div className="checkout">Checkout</div>
      ) : (
        <p className="empty_card">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
