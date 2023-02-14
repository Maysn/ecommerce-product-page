import React, { useState } from "react";
import "../styles/collection.css";
import { sneakers } from "../data/products";
import AddToCart from "../components/AddToCart";
import Carousel from "../components/Carousel";
import Quantity from "../components/Quantity";

function Collection({ cart, setCart }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="collection">
      <Carousel />
      <div className="description">
        <p>{sneakers.company}</p>
        <h2>{sneakers.title}</h2>
        <p>{sneakers.description}</p>
        <div className="price">
          <span>${sneakers.priceAfter}</span>
          <span>%{sneakers.discount}</span>
          <span>${sneakers.priceBefore}</span>
        </div>
        <div className="quantity-to-add">
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <AddToCart cart={cart} setCart={setCart} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}

export default Collection;
