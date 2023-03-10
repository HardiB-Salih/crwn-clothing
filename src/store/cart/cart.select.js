import { createSelector } from "reselect";

const selectCartReduce = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReduce],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReduce],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cardItem) => total + cardItem.quantity * cardItem.price,
    0
  )
);
