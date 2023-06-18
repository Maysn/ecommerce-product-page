import React, { useEffect, useMemo } from "react";
import "../styles/CheckoutList.css";
import "../styles/Item_btn.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CheckoutItem from "../components/CheckoutItem";
import { useProductsData } from "../context/ProductsDataContext";
import { priceAfterDiscount } from "../utilities/priceAfterDiscount";
import { formatCurrency } from "../utilities/formatCurrency";

function Checkout() {
  const PRODUCTS_DATA = useProductsData();
  const { cart, getItemQuantity } = useShoppingCart();

  const itemsInCart = useMemo(() => {
    return PRODUCTS_DATA?.filter((product) => {
      return cart.find((item) => item.id === product.id);
    });
  }, [cart]);

  const TOTAL = useMemo(() => {
    return itemsInCart?.reduce((totalAcc, item) => {
      return (
        totalAcc +
        priceAfterDiscount(item.price, item.discountPercentage) *
          getItemQuantity(item.id)
      );
    }, 0);
  }, [cart]);
  console.log(TOTAL);
  return (
    <div className="checkout_list">
      <h3>Summary</h3>
      {cart.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="checkout_total">
        <div className="total">
          <span>Total</span>
          <span>{formatCurrency(TOTAL)}</span>
        </div>
        <div className="proceed_to_payment item_btn">Proceed to payment</div>
      </div>
    </div>
  );
}

export default Checkout;
