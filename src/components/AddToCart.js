import React from "react";
import cartIcon from "../assets/icon-cart.svg";
import { sneakers } from "../data/products";
function AddToCart({ cart, setCart, quantity }) {
  const addToCart = () => {
    const updatedItems = [
      ...cart.items,
      {
        img: sneakers.img,
        name: sneakers.title,
        price: sneakers.priceAfter,
        quantity: quantity,
      },
    ];
    const updatedCart = { ...cart, items: updatedItems };
    setCart(updatedCart);
  };
  return (
    <button className="add-to-cart" onClick={addToCart}>
      <span>
        <img src={cartIcon} alt="add to cart" />
      </span>
      Add to cart
    </button>
  );
}

export default AddToCart;
