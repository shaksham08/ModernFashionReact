import React from "react";
import { useProduct } from "context/ProductsContext/ProductContext";
import { price } from "utils/Filter/filterFunctions";

const Products = () => {
  const { products } = useProduct();

  return (
    <div className="products p-4 d--flex flex--wrap justify__content--center">
      {products.map(
        ({ _id: id, name, imageUrl, originalPrice, discount_percent }) => (
          <div key={id} className="card card__vertical">
            <img className="card__img" src={imageUrl} alt="img" />
            <div className="card__details">
              <h3 className="card__title">{name}</h3>
            </div>
            <div className="card__price__section">
              <strong className="card__selling__price">
                ₹ {price(originalPrice, discount_percent)}
              </strong>
              <small className="card__original__price">₹ {originalPrice}</small>
              <p className="card__discount">({discount_percent}% off)</p>
            </div>
            <div className="card__buttons">
              <button type="button" className="btn card__btn">
                <i className="ri-shopping-cart-2-fill card__icon"></i> Add to
                cart
              </button>
              <button type="button" className="btn">
                <i className="ri-heart-fill card__icon"></i> Wishlist
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
