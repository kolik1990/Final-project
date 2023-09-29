import React from "react";
import "./join.css";

function Join() {
  return (
    <section className="join">
      <h2 className="join__title title">
        Join shopping community to get montly promo
      </h2>
      <p className="join__text">
        Type your email down below and be young wild generation
      </p>
      <form action="#">
        <input
          className="join__input"
          type="email"
          placeholder="Add your email here"
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Join;
