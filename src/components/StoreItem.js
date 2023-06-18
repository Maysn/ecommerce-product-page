import "../styles/StoreItem.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ItemInfo from "./ItemInfo";
import QuantityInCart from "./QuantityInCart";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
import CurrentPrice from "./CurrentPrice";
import OldPrice from "./OldPrice";
import DiscountRate from "./DiscountRate";

function StoreItem({ brand, discountPercentage, id, title, price, images }) {
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="item">
      <div className="item-image">
        <img src={images[0]} alt="item's image" />
      </div>
      <div className="item-body">
        <ItemInfo brand={brand} title={title} />
        <div className="price_info">
          <CurrentPrice price={price} discountPercentage={discountPercentage} />
          <DiscountRate discountPercentage={discountPercentage} />
          <OldPrice price={price} />
        </div>
        {/* item's logic */}
        <div className="item_buttons">
          <QuantityInCart id={id} />
          {quantity === 0 ? <AddToCart id={id} /> : <RemoveFromCart id={id} />}
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
