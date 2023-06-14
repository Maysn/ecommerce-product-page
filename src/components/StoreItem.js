import React, { useMemo } from "react";
import "../styles/StoreItem.css";
import { formatCurrency } from "../utilities/formatCurrency";
import cartIcon from "../assets/icon-cart.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";
import { priceAfterDiscount } from "../utilities/priceAfterDiscount";
import { useShoppingCart } from "../context/ShoppingCartContext";

function StoreItem({ brand, discountPercentage, id, title, price, images }) {
  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  const CURRENT_PRICE = useMemo(() => {
    return formatCurrency(priceAfterDiscount(price, discountPercentage));
  }, [discountPercentage]);

  const DISCOUNT_RATE = useMemo(() => {
    return `${Math.round(discountPercentage)}%`;
  }, [discountPercentage]);

  const BRAND = brand.toUpperCase();
  return (
    <div className="item">
      <div className="item-image">
        <img src={images[0]} alt="item's image" />
      </div>
      <div className="item-body">
        <div className="item-info">
          <p className="item-brand">{BRAND}</p>
          <h3 className="item-title">{title}</h3>
        </div>
        <div className="price-info">
          {/* price after discount */}
          <span className="curr-price">{CURRENT_PRICE}</span>
          {/* discount percentage */}
          <span className="discount-rate">{DISCOUNT_RATE}</span>
          {/* original price */}
          <span className="old-price">{formatCurrency(price)}</span>
        </div>
        {/* item's logic */}
        <div className="item-buttons">
          <div className="quantity-in-cart">
            <span onClick={() => decreaseItemQuantity(id)}>
              <img src={iconMinus} alt="remove one unit" />
            </span>
            {quantity}
            <span onClick={() => increaseItemQuantity(id)}>
              <img src={iconPlus} alt="add one unit" />
            </span>
          </div>
          <div className="add-to-cart" onClick={() => increaseItemQuantity(id)}>
            {" "}
            <span>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="var(--main-background)"
                  fillRule="nonzero"
                />
              </svg>
            </span>
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
