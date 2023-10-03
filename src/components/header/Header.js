import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Nav";
import "./header.css";
import logo from "./logo2.svg";
import cart1 from "./cart.svg";
import menu from "./burgerMenu.svg";

function Header({ cart }) {
  let nav = document.querySelector(".nav");
  let hamburger = document.querySelector(".header__burger");

  const open = () => {
    nav.classList.toggle("nav__col");
    hamburger.classList.toggle("header__burgerClick");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <NavLink to="/">
            <img className="logo2" src={logo} alt="logo"></img>
          </NavLink>
          <Nav className="nav" />
          <NavLink to="/cart" className="cart">
            <img className="cartImg" src={cart1} alt="cart"></img>
            <sup className="sup">{cart.length}</sup>
          </NavLink>
          <img
            src={menu}
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
