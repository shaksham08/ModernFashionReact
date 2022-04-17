import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

const CartContext = createContext();

const cartInitialState = {
  cartItem: [],
};

const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(CartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
