import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  return (
    <div>
      <div className="container">
        <div className="notFound">
          <h2 className="notFound__title">404</h2>
          <h5>Great page, the kind they don’t make anymore</h5>
          <p className="notFound__text">
            Try starting over and look for something else
          </p>
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
