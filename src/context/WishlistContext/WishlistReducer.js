import { WishlistAction } from "./WishlistActionTypes";

export const WishListReducer = (state, action) => {
  switch (action.type) {
    case WishlistAction.ADD_ITEM:
      const isItemPresent = state.wishListItem.find(
        (item) => item._id === action.payload._id
      );
      if (!isItemPresent) {
        return {
          ...state,
          wishListItem: [...state.wishListItem, action.payload],
        };
      }
      return {
        ...state,
      };

    case WishlistAction.REMOVE_ITEM:
      return {
        ...state,
        wishListItem: state.wishListItem.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
