import { cartActions } from "context/CartContext/CartActions";
import { useCart } from "context/CartContext/CartContext";
import { WishlistAction } from "context/WishlistContext/WishlistActionTypes";
import { useWishList } from "context/WishlistContext/WishlistContext";
import React from "react";
import { price } from "utils/Filter/filterFunctions";

const CartCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const { wishListDispatch } = useWishList();

  return (
    <div key={product._id} className="card card__horizontal">
      <img
        className="card__img card__img__horizontal"
        src={product.imageUrl}
        alt="img"
      />
      <div className="card__details__horizontal">
        <div className="card__details">
          <h3 className="card__title">{product.name}</h3>
          <small className="card__sub-title">Some description here</small>
        </div>
        <div className="card__price__section card__horizontal__price">
          <strong className="card__selling__price">
            ₹ {price(product.originalPrice, product.discount_percent)}
          </strong>
          <small className="card__original__price">
            ₹ {product.originalPrice}
          </small>
          <p className="card__discount">({product.discount_percent}% off)</p>
        </div>

        <div className="card__quantity">
          <p>
            Quantity:
            <button
              onClick={() => {
                if (product.qty === 1) {
                  cartDispatch({
                    type: cartActions.REMOVE_ITEM,
                    payload: product,
                  });
                }
                cartDispatch({
                  type: cartActions.DECREASE_QUANTITY,
                  payload: product,
                });
              }}
              type="button"
              className="btn--float card__quantity__btn"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="content__count">{product.qty}</span>
            <button
              onClick={() => {
                cartDispatch({
                  type: cartActions.INCREASE_QUANTITY,
                  payload: product,
                });
              }}
              type="button"
              className="btn--float card__quantity__btn"
            >
              <i className="ri-add-line"></i>
            </button>
          </p>
        </div>
        <div className="card__horizontal__buttons">
          <button
            onClick={() => {
              cartDispatch({ type: cartActions.REMOVE_ITEM, payload: product });
            }}
            type="button"
            className="btn card__btn card__btn__horizontal"
          >
            <i className="ri-shopping-cart-2-fill card__icon"></i> Remove From
            Cart
          </button>
          <button
            onClick={() => {
              wishListDispatch({
                type: WishlistAction.ADD_ITEM,
                payload: product,
              });
              cartDispatch({ type: cartActions.REMOVE_ITEM, payload: product });
            }}
            type="button"
            className="btn card__btn__horizontal"
          >
            <i className="ri-heart-fill card__icon card__icon__horizontal"></i>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
