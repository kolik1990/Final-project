import React from "react";
import "./cart.css";

function Cart({ cart, inc, dec, total }) {
  return (
    <div className="cart__block">
      <h3 className="title cart__title">Products in cart</h3>
      <ul>
        {cart.map((product) => (
          <li className="cart__card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="cartCard__img"
            ></img>
            <div className="cartCard__description">
              <h4 className="cartCard__title"> {product.title}</h4>

              <h4 className="title">
                $ {(product.price * product.count).toFixed(2)}
              </h4>
            </div>
            <div className="counter">
              <button
                type="button"
                className="counter__btn"
                onClick={() => inc(product.id)}
              >
                +
              </button>
              <p className="count">{product.count}</p>
              <button
                type="button"
                className="counter__btn"
                onClick={() => dec(product.id)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="cart__total title">total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
