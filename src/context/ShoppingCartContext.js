import { createContext, useContext, useMemo, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getItemQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseItemQuantity = (id) => {
    setCart((currCart) => {
      if (currCart.find((item) => item.id === id) == null) {
        return [...currCart, { id, quantity: 1 }];
      } else {
        return currCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItemQuantity = (id) => {
    setCart((currCart) => {
      if (currCart.find((item) => item.id === id)?.quantity === 1) {
        return currCart.filter((item) => item.id !== id);
      } else {
        return currCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeCartItem = (id) => {
    setCart((currCart) => {
      return currCart.filter((item) => item.id !== id);
    });
  };
  const toggleCart = () => setIsOpen((current) => !current);
  const cartQuantity = useMemo(() => {
    return cart.reduce((totalQuantity, item) => {
      return totalQuantity + item.quantity;
    }, 0);
  }, [cart]);
  return (
    <ShoppingCartContext.Provider
      value={{
        toggleCart,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeCartItem,
        isOpen,
        cart,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
