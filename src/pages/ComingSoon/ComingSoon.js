import React from "react";
import { Link } from "react-router-dom";
import "./comingSoon.css";
import comingSoon from "./comingSoon.png";

function ComingSoon() {
  return (
    <div className="comingSoon">
      <div className="container">
        <div className="comingSoon__wrap">
          <img
            src={comingSoon}
            alt="comingSoon"
            className="comingSoon__img"
          ></img>
          <Link to="/">
            <button className="btn" type="button">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
