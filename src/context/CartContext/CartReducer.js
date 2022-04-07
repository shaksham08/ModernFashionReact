import { cartActions } from "./CartActions";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      const cartItem = state.cartItem;
      const productToAdd = action.payload;
      let updatedCart;
      if (cartItem.length >= 0) {
        let newProductToAdd = cartItem.find(
          (item) => item._id === productToAdd._id
        );
        if (newProductToAdd) {
          updatedCart = cartItem.map((item) =>
            item._id === newProductToAdd._id
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        } else {
          updatedCart = [...cartItem, { ...productToAdd, qty: 1 }];
        }
      }
      return {
        ...state,
        cartItem: updatedCart,
      };

    case cartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item._id !== action.payload._id
        ),
        cartCount: state.cartCount - action.payload.qty,
      };

    case cartActions.INCREASE_QUANTITY:
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case cartActions.DECREASE_QUANTITY:
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
