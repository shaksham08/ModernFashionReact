import React from "react";

const HeroSection = () => {
  return (
    <section className="hero mt-2">
      <div className="hero__container d--flex flex__direction--column justify__content--center">
        <div className="hero__content">
          <h1 className="hero__heading">Here & Now</h1>
          <h2 className="hero__subHeading mt-2 pb-4">
            Min 50% Off + Extra 10% Off
          </h2>
          <h4 className="hero__footer mt-2">Only on Modern Fashion</h4>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
