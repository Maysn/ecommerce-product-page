import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const { cart, isOpen, toggleCart } = useShoppingCart();
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
        <Link to="checkout" className="checkout" onClick={toggleCart}>
          Checkout
        </Link>
      ) : (
        <p className="empty_card">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
