import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalogue">Catalogue</NavLink>
      <NavLink to="/coming-soon">Coming soon</NavLink>
      <NavLink to="/about">About us</NavLink>
    </nav>
  );
}

export default Nav;
