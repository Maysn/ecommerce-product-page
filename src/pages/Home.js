import React from "react";
import { sneakers } from "../data/products";
import AddToCart from "../components/AddToCart";
import Carousel from "../components/Carousel";
import Quantity from "../components/Quantity";
import "../styles/home.css";

function Home({ cart, setCart }) {
  return (
    <div className="home">
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
          <Quantity />
          <AddToCart />
        </div>
      </div>
    </div>
  );
}

export default Home;
