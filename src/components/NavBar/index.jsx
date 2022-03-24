import React from "react";
import { Link } from "react-router-dom";
import "./index.less";
import LogoPng from "images/MFLOGOTEXT.png";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div>
          <Link className="nav__brand" to="/">
            <img src={LogoPng} alt="modernFashion" />
          </Link>
        </div>
        <div className="nav__links">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" aria-current="page" to="/products">
                Shop
              </Link>
            </li>
          </ul>

          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                <span>Login</span>
                <i className="ri-user-line"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" aria-current="page" to="/wishlist">
                <span> WishList </span>
                <i className="ri-heart-line"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/cart">
                <span>Cart</span>
                <i className="ri-shopping-cart-2-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
