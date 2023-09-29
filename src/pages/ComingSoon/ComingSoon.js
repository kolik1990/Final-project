import React from "react";
import { Link } from "react-router-dom";
import "./comingSoon.css";

function ComingSoon() {
  return (
    <div className="comingSoon">
      <div className="container">
        <div className="comingSoon__wrap">
          <img
            src="./images/comingSoon.png"
            alt="cominSoon"
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
