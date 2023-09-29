import React from "react";
import { Link } from "react-router-dom";
import "./info.css";

function Info() {
  return (
    <section className="info">
      <div>
        <h1 className="info__title ">
          Let`s
          <br /> explore
          <br /> unique
          <br /> clothes.
        </h1>

        <p className="info__text">
          Live for Influential and Innovative fashion!
        </p>
        <Link to="/catalogue">
          <button className="btn" type="button">
            shop now
          </button>
        </Link>
      </div>
      <img src="./images/info.png" alt="info"></img>
    </section>
  );
}

export default Info;
