import React from "react";
import AddToCart from "../components/AddToCart";
import Carousel from "../components/Carousel";
import Quantity from "../components/Quantity";
import "../styles/home.css";

function Home(props) {
  return (
    <div className="home">
      <Carousel />
      <div className="description">
        <p>SNEAKER COMPANY</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <span>$125.00</span>
          <span>50%</span>
          <span>$250.00</span>
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
