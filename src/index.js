import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { ProductContextProvider } from "context/ProductsContext/ProductContext";
import { WishListProvider } from "context/WishlistContext/WishlistContext";
import { CartProvider } from "context/CartContext/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <WishListProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishListProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
