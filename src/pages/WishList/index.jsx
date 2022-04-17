import { useWishList } from "context/WishlistContext/WishlistContext";
import React from "react";
import "./index.less";
import { price } from "utils/Filter/filterFunctions";
import { WishlistAction } from "context/WishlistContext/WishlistActionTypes";
import { useCart } from "context/CartContext/CartContext";
import { cartActions } from "context/CartContext/CartActions";

const Wishlist = () => {
  const { wishList, wishListDispatch } = useWishList();
  const { wishListItem } = wishList;
  const { cartDispatch } = useCart();

  return (
    <main className="wishlist__main__container mt-2">
      <h1 className="text--center mt-2 mb-2">
        My Wishlist ({wishListItem.length})
      </h1>

      <div className="wishlist p-4 d--flex flex--wrap justify__content--center">
        {wishListItem.map((product) => (
          <div key={product._id} className="card card__vertical">
            <div className="card__overlay__container">
              <img className="card__img" src={product.imageUrl} alt="img" />
              <small
                onClick={() => {
                  wishListDispatch({
                    type: WishlistAction.REMOVE_ITEM,
                    payload: product,
                  });
                }}
                className="card__badge flex--center"
              >
                <i className="ri-heart-fill"></i>
              </small>
            </div>

            <div className="card__details">
              <h3 className="card__title">{product.name}</h3>
            </div>
            <div className="card__price__section">
              <strong className="card__selling__price">
                ₹ {price(product.originalPrice, product.discount_percent)}
              </strong>
              <small className="card__original__price">
                ₹ {product.originalPrice}
              </small>
              <p className="card__discount">
                ({product.discount_percent}% off)
              </p>
            </div>
            <div className="card__buttons">
              <button
                onClick={() => {
                  cartDispatch({
                    type: cartActions.ADD_ITEM,
                    payload: product,
                  });
                  wishListDispatch({
                    type: WishlistAction.REMOVE_ITEM,
                    payload: product,
                  });
                }}
                type="button"
                className="btn card__btn"
              >
                <i className="ri-shopping-cart-2-fill card__icon"></i>Move to
                cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Wishlist;
