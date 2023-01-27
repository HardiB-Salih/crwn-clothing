import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartitem is contain productToAdd
  const existingCartItem = cartItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  //if found incrice quantity
  if (existingCartItem) {
    return cartItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  //return new array with contain cartitems.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const ToggleContext = createContext({
  toggle: false,
  setToggle: () => {},

  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = { toggle, setToggle, addItemToCart, cartItems, cartCount };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
