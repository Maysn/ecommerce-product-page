import React, { useEffect, useState } from "react";
import { useProductsData } from "../context/ProductsDataContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/Carousel.css";
import "../styles/Item_btn.css";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import CurrentPrice from "./CurrentPrice";
import DiscountRate from "./DiscountRate";
import OldPrice from "./OldPrice";
import QuantityInCart from "./QuantityInCart";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";

const CAROUSEL_TICKER = 5000;

export function Carousel() {
  const { getItemQuantity } = useShoppingCart();
  const [currItem, setCurrItem] = useState(0);
  const [currImg, setCurrImg] = useState(0);
  const productsData = useProductsData();
  const CAROUSEL_DATA = productsData?.[currItem];
  const quantity = getItemQuantity(CAROUSEL_DATA.id);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrImg(0);
      setCurrItem((curr) => (curr === 29 ? 0 : curr + 1));
    }, CAROUSEL_TICKER);

    return () => {
      clearTimeout(interval);
    };
  }, [currItem]);
  const showNext = (current) => {
    if (current === 29) {
      return setCurrItem(0);
    }
    return setCurrItem(current + 1);
  };
  const showPrevious = (current) => {
    if (current === 0) {
      return setCurrItem(29);
    }
    return setCurrItem(current - 1);
  };
  const switchPreview = (num) => {
    return setCurrImg(num);
  };
  return (
    <div className="product_preview">
      <div className="product_images">
        <div className="main_view">
          <span className="previous" onClick={() => showPrevious(currItem)}>
            <img src={previous} alt="previous image" />
          </span>
          <img src={CAROUSEL_DATA.images[currImg]} alt="product preview" />
          <span className="next" onClick={() => showNext(currItem)}>
            <img src={next} alt="next image" />
          </span>
        </div>
        {CAROUSEL_DATA.images[1] ? (
          <div className="other_images">
            <span
              className={`mini_preview ${
                currImg === 0 ? "mini_preview_focus" : ""
              }`}
              onClick={() => {
                switchPreview(0);
              }}
            >
              <img
                src={CAROUSEL_DATA.images[0]}
                alt="product preview"
                className={currImg === 0 ? "img_focus" : ""}
              />
            </span>
            <span
              className={`mini_preview ${
                currImg === 1 ? "mini_preview_focus" : ""
              }`}
              onClick={() => {
                switchPreview(1);
              }}
            >
              <img
                src={CAROUSEL_DATA.images[1]}
                alt="product preview"
                className={currImg === 1 ? "img_focus" : ""}
              />
            </span>
            <span
              className={`mini_preview ${
                currImg === 2 ? "mini_preview_focus" : ""
              }`}
              onClick={() => {
                switchPreview(2);
              }}
            >
              <img
                src={CAROUSEL_DATA.images[2]}
                alt="product preview"
                className={currImg === 2 ? "img_focus" : ""}
              />
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="item_">
        <p className="item_brand">{CAROUSEL_DATA.brand}</p>
        <h3 className="item_title">{CAROUSEL_DATA.title}</h3>
        <p className="item_description">{CAROUSEL_DATA.description}</p>
        <div className="home_price price_info">
          <div className="home_item_price">
            <CurrentPrice
              price={CAROUSEL_DATA.price}
              discountPercentage={CAROUSEL_DATA.discountPercentage}
              className="home_item_price"
            />
            <DiscountRate
              discountPercentage={CAROUSEL_DATA.discountPercentage}
            />
          </div>
          <div className="old_price">
            <OldPrice price={CAROUSEL_DATA.price} />
          </div>
        </div>
        <div className="home_item_buttons">
          <QuantityInCart
            id={CAROUSEL_DATA.id}
            className="home_quantity_in_cart"
          />
          {quantity === 0 ? (
            <AddToCart id={CAROUSEL_DATA.id} className="home_btn_width" />
          ) : (
            <RemoveFromCart id={CAROUSEL_DATA.id} className="home_btn_width" />
          )}
        </div>
      </div>
    </div>
  );
}
