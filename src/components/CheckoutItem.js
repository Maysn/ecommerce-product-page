import React from "react";
import { useProductsData } from "../context/ProductsDataContext";
import { calcItemPrice, calcItemTotal } from "../prices/cartPrices";
import QuantityInCart from "./QuantityInCart";

function CheckoutItem({ id, quantity }) {
  const PRODUCTS_DATA = useProductsData();
  const ITEM = PRODUCTS_DATA.find((item) => item.id === id);
  if (ITEM == null) return null;
  const itemPrice = calcItemPrice(ITEM.price, ITEM.discountPercentage);
  const itemTotal = calcItemTotal(
    ITEM.price,
    ITEM.discountPercentage,
    quantity
  );
  return (
    <div>
      <div className="checkout_item">
        <div className="checkout_item_info">
          <div className="item_img">
            <img src={ITEM.images[0]} alt="item's picture" />
          </div>
          <div className="item_price">
            <p>{ITEM.title}</p>
          </div>
        </div>
        <QuantityInCart id={id} className="checkout_quantity" />
        <span className="checkout_item_total">{itemTotal}</span>
      </div>
    </div>
  );
}

export default CheckoutItem;
