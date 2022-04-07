import React from "react";
import "./index.less";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex--center container">
      <div className="flex--center login__wrapper">
        <div className="login__text">
          <div className="logo flex--center">
            <img src="/assets/MFLOGOTEXT.png" alt="" />
          </div>
          <h1 className="mt-1">Sign In</h1>
          <p className="mt-1">
            It's not long before you embark on this journey!
          </p>

          <form className="form__signUp flex--center flex__direction--column">
            <div className="input__box">
              <span className="label">E-mail</span>
              <div className="flex--center input">
                <input
                  className="form__input"
                  type="text"
                  placeholder="abc@gmail.com"
                />
              </div>
            </div>

            <div className="input__box">
              <span className="label">Password</span>
              <div className="flex--center input">
                <input
                  className="form__input"
                  type="password"
                  placeholder="**********"
                />
              </div>
            </div>

            <button className="btn mt-3 mb-1" type="submit">
              Sign In
            </button>
            <span className="extra__line">
              <span>Don't have an account?</span>
              <button href="#" onClick={() => navigate("/signUp")}>
                Sign Up
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
