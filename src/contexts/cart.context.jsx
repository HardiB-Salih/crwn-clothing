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

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove.
  const existingCartItem = cartItems.find(
    (cardItem) => cardItem.id === cartItemToRemove.id
  );
  //check if quantity is equal to 1, if it is remove that item from the carts
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return back cartitems wit matching cart item with reduse the quantity.
  return cartItems.map((cardItem) =>
    cardItem.id === cartItemToRemove.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  toggle: false,
  setToggle: () => {},

  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},

  cartCount: 0,
  totalCount: 0,
});

export const CartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemToCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalCount = cartItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );
    setTotalCount(newTotalCount);
  }, [cartItems]);

  const value = {
    toggle,
    setToggle,
    addItemToCart,
    removeItemToCart,
    clearItemToCart,
    cartItems,
    cartCount,
    totalCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
