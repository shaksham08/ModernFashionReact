import { useCart } from "context/CartContext/CartContext";
import React from "react";
import "./index.less";
import CartCard from "./components/CartCard";
import PriceCard from "./components/PriceCard";

const Cart = () => {
  const { cart } = useCart();
  const { cartItem } = cart;
  return (
    <main className="main__cartContainer mt-2">
      <h1 className="text--center mt-2 mb-2">My Cart ({cartItem.length})</h1>
      <div className="cart__cardContainer d--flex justify__content--center">
        <div className="card__container">
          {cartItem.map((product) => (
            <CartCard key={product._id} product={product} />
          ))}
        </div>
        <PriceCard cart={cart} />
      </div>
    </main>
  );
};

export default Cart;
