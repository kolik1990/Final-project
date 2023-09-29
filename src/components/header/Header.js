import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Nav";
import "./header.css";

function Header({ cart }) {
  let nav = document.querySelector(".nav");

  let hamburger = document.querySelector(".header__burger");

  const open = (e) => {
    nav.classList.toggle("nav__col");
    hamburger.classList.toggle("header__burgerClick");
    return nav;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <NavLink to="/">
            <img className="logo2" src="./images/logo2.svg" alt="logo"></img>
          </NavLink>
          <Nav className="nav" />
          <NavLink to="/cart" className="cart">
            <img className="cartImg" src="./images/cart.svg" alt="cart"></img>{" "}
            <sup className="sup">{cart.length}</sup>
          </NavLink>
          <img
            src="./images/burgerMenu.svg"
            alt="menu"
            className="header__burger"
            onClick={open}
          ></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
