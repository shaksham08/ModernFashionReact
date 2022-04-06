import React from "react";
import { useProduct } from "context/ProductsContext/ProductContext";
import { price } from "utils/Filter/filterFunctions";
import { useWishList } from "context/WishlistContext/WishlistContext";
import { WishlistAction } from "context/WishlistContext/WishlistActionTypes";

const Products = () => {
  const { products } = useProduct();
  const { wishListDispatch } = useWishList();

  return (
    <div className="products p-4 d--flex flex--wrap justify__content--center">
      {products.map((product) => (
        <div key={product.id} className="card card__vertical">
          <img className="card__img" src={product.imageUrl} alt="img" />
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
            <p className="card__discount">({product.discount_percent}% off)</p>
          </div>
          <div className="card__buttons">
            <button type="button" className="btn card__btn">
              <i className="ri-shopping-cart-2-fill card__icon"></i> Add to cart
            </button>
            <button
              onClick={() => {
                wishListDispatch({
                  type: WishlistAction.ADD_ITEM,
                  payload: product,
                });
              }}
              type="button"
              className="btn"
            >
              <i className="ri-heart-fill card__icon"></i> Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
