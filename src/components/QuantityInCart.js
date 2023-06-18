import React from "react";
import "../styles/QuantityInCart.css";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

function QuantityInCart({ id, className = "" }) {
  const { decreaseItemQuantity, getItemQuantity, increaseItemQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className={`quantity-in-cart ${className}`}>
      <span onClick={() => decreaseItemQuantity(id)}>
        <img src={iconMinus} alt="remove one unit" />
      </span>
      {quantity}
      <span onClick={() => increaseItemQuantity(id)}>
        <img src={iconPlus} alt="add one unit" />
      </span>
    </div>
  );
}

export default QuantityInCart;
