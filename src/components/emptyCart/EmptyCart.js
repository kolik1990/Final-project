import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import Brands from "../brands/Brands";
import "./emptyCart.css";

function EmptyCart({ cart, inc, dec, total, category }) {
  return (
    <div className="empty">
      <div className="container">
        <Brands />
        {cart.length === 0 ? (
          <div className="empty__content">
            <h3 className="title empty__title">Your basket is empty</h3>
            <p className="empty__text">go to the catalog and add products</p>
            <Link to={`/catalogue/${category}`}>
              <button className="btn empty__btn" type="button">
                catalogue
              </button>
            </Link>
          </div>
        ) : (
          <Cart cart={cart} inc={inc} dec={dec} total={total} />
        )}
      </div>
    </div>
  );
}

export default EmptyCart;
