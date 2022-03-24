import React from "react";
import { Link } from "react-router-dom";
import "./index.less";
import LogoPng from "images/MFLOGOTEXT.png";

const Navbar = () => {
  return (
    <header>
      <nav class="nav">
        <div>
          <Link class="nav__brand" to="/">
            <img src={LogoPng} alt="modernFashion" />
          </Link>
        </div>
        <div class="nav__links">
          <ul class="nav__list">
            <li class="nav__item">
              <Link class="nav__link" to="/">
                Home
              </Link>
            </li>
            <li class="nav__item">
              <Link class="nav__link" aria-current="page" to="/products">
                Shop
              </Link>
            </li>
          </ul>

          <ul class="nav__list">
            <li class="nav__item">
              <Link class="nav__link" to="/login">
                <span>Login</span>
                <i class="ri-user-line"></i>
              </Link>
            </li>
            <li class="nav__item">
              <Link class="nav__link" aria-current="page" to="/wishlist">
                <span> WishList </span>
                <i class="ri-heart-line"></i>
              </Link>
            </li>
            <li class="nav__item">
              <Link class="nav__link" to="/cart">
                <span>Cart</span>
                <i class="ri-shopping-cart-2-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
