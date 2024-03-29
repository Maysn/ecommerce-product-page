import { useProductsData } from "../context/ProductsDataContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { calcItemPrice, calcItemTotal } from "../prices/cartPrices";

function CartItem({ id, quantity }) {
  const { removeCartItem } = useShoppingCart();
  const PRODUCTS_DATA = useProductsData();
  const ITEM = PRODUCTS_DATA?.find((item) => item.id === id);
  if (ITEM == null) return null;

  const itemPrice = calcItemPrice(ITEM.price, ITEM.discountPercentage);
  const itemTotal = calcItemTotal(
    ITEM.price,
    ITEM.discountPercentage,
    quantity
  );
  return (
    <div className="cart_item">
      <div className="item_info">
        <div className="item_img">
          <img src={ITEM.images[0]} alt="item's picture" />
        </div>
        <div className="item_price">
          <p>{ITEM.title}</p>
          <span>
            {`${itemPrice} x ${quantity} `}{" "}
            <span className="total_price">{itemTotal}</span>
          </span>
        </div>
      </div>
      <span className="remove_item" onClick={() => removeCartItem(id)}>
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a"
            />
          </defs>
          <use fill="#C3CAD9" fillRule="nonzero" href="#a" />
        </svg>
      </span>
    </div>
  );
}

export default CartItem;
