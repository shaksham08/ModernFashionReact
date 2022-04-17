import React from "react";
import Logo from "images/MfLogo.png";
import "./index.less";

const Footer = () => {
  return (
    <footer className="footer d--flex flex__direction--column justify__content--center align__item--center">
      <img className="foooter__logo" src={Logo} alt="" />
      <h2>Designed By : shaksham</h2>
      <div className="footer__links d--flex justify__content--center align__item--center">
        <a href="https://github.com/shaksham08">
          <i className="ri-github-fill"></i>
        </a>
        <a href="https://twitter.com/ShakshamSinha">
          <i className="ri-twitter-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/shaksham-sinha-788a19190/  ">
          <i className="ri-linkedin-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
