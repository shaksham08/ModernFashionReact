import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ imgSrc, categoryName, index, length }) => {
  const navigate = useNavigate();

  const categoryCardClasses =
    index === length - 1 || index === length - 2
      ? "category__card card__large "
      : "category__card";

  return (
    <div onClick={() => navigate("/products")} className={categoryCardClasses}>
      <img className="" src={imgSrc} alt="" />
      <div className="category__card__content flex--center flex__direction--column text--center">
        <h1 className="category__card__title">{categoryName}</h1>
        <span className="category__card__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default CategoryCard;
