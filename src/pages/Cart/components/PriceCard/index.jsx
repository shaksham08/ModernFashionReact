import React from "react";
import { price } from "utils/Filter/filterFunctions";

const PriceCard = ({ cart }) => {
  const { cartItem } = cart;
  const DeliveryCharges = 0;

  const totalOriginalPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.originalPrice + acc,
    0
  );

  const totalSellingPrice = cartItem.reduce(
    (acc, currentItem) =>
      currentItem.qty *
        price(currentItem.originalPrice, currentItem.discount_percent) +
      acc,
    0
  );

  const BagDiscount = totalOriginalPrice - totalSellingPrice;

  const totalQuantity = cartItem.reduce(
    (acc, currentItem) => currentItem.qty + acc,
    0
  );

  const GrandTotal = totalSellingPrice + DeliveryCharges;

  return (
    <div className="card card__text">
      <h3 className="card__text__title">PRICE DETAILS</h3>
      <hr className="line__break" />
      <p className="card__text__item">
        <span className="card__text__label">
          Price (<span>{totalQuantity}</span> items)
        </span>
        <span className="card__price__align">₹{totalOriginalPrice}</span>
      </p>
      <p className="card__text__item">
        <span className="card__text__label">Discount</span>
        <span className="discount-charges card__price__align">
          - ₹{BagDiscount}
        </span>
      </p>
      <p className="card__text__item">
        <span className="card__text__label">Delivery charges</span>
        <span className="card__price__align">
          <span className="card__original__price">199</span>
          <span className="card__discount">Free</span>
        </span>
      </p>
      <hr className="line-separate" />
      <p className="card__text__item">
        <span className="card__text__label">
          <strong>TOTAL AMOUNT</strong>
        </span>
        <span className="card__price__align">₹{GrandTotal}</span>
      </p>
      <hr className="line-separate" />
      <p className="card__text__label">
        You have saved
        <strong className="discount-charges">
          ₹ {totalOriginalPrice - GrandTotal}
        </strong>{" "}
        on this purchase.
      </p>
      <button type="button" className="btn btn--success">
        Place Order
      </button>
    </div>
  );
};

export default PriceCard;
