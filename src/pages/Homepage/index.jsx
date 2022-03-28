import React, { useState, useEffect } from "react";
import CategoryCard from "./components/CategoryCard";
import HeroSection from "./components/HeroSection";
import Banner from "images/banner.png";
import axios from "axios";
import "./index.less";

const Homepage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      console.log(data.categories);
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main>
      <section className="offer d--flex justify__content--center mt-1">
        <img src={Banner} alt="40% off" />
      </section>
      <HeroSection />
      <section className="category mt-4 mb-4">
        <div className="category__container d--flex flex--wrap justify__content--space-between">
          {categories.map(
            ({ _id: categoryId, imageUrl, categoryName }, index) => (
              <CategoryCard
                key={categoryId}
                imgSrc={imageUrl}
                categoryName={categoryName}
                index={index}
                length={categories.length}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
