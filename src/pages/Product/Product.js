import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
function Product({ addToCart, category }) {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const getProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div className="product">
      <div className="container">
        <div className="product__card-id" key={product.id}>
          <h3 to="/product" className="product__title title">
            {product.title}
          </h3>
          <div className="product__info-id">
            <img
              src={product.image}
              alt={product.title}
              className="product__img"
            ></img>
            <div className="product__description">
              <p>{product.description}</p>
              <h4>$ {product.price}</h4>
              <button
                onClick={() => addToCart(product)}
                className="product__btn"
                type="button"
              >
                add to cart
              </button>
            </div>
          </div>
          <Link
            to={`/catalogue/${category === "All" ? "All" : product.category}`}
          >
            <button className="btn" type="button">
              back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
