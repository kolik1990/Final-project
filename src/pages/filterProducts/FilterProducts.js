import React from "react";
import { Link } from "react-router-dom";
import "./filterProducts.css";

function FilterProducts({ productsOfCategory, addToCart }) {
  return (
    <section className="categories">
      <div className="products">
        {productsOfCategory.map((product) => (
          <div className="product__card" key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="product__title title"
            >
              {product.title}
            </Link>
            <img src={product.image} alt={product.title}></img>
            <div className="product__info">
              <h4>$ {product.price}</h4>
              <button
                onClick={() => addToCart(product)}
                className="product__btn"
                type="button"
              >
                add to cart
              </button>
              <div className="product__rating">{product.rating.rate}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FilterProducts;
