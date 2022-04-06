import { createContext, useContext, useReducer } from "react";
import { WishListReducer } from "./WishlistReducer";

const wishListContext = createContext();

const wishListInitialState = {
  wishListItem: [],
};

const WishListProvider = ({ children }) => {
  const [wishList, wishListDispatch] = useReducer(
    WishListReducer,
    wishListInitialState
  );

  return (
    <wishListContext.Provider value={{ wishList, wishListDispatch }}>
      {children}
    </wishListContext.Provider>
  );
};

const useWishList = () => useContext(wishListContext);

export { useWishList, WishListProvider };
