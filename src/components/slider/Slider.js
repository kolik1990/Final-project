import React from "react";
import Slider from "react-slick";
import "./slider.css";

function MultipleItems({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider">
      <h2 className="slider__title title">Preview all products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <img key={product.id} src={product.image} alt="product"></img>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
