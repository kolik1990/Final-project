import React from "react";
import AppSection from "../appSection/AppSection";
import Brands from "../brands/Brands";
import Info from "../info/Info";
import Join from "../join/Join";
import MultipleItems from "../slider/Slider";
import "./main.css";

function Main({ products }) {
  return (
    <main className="main">
      <div className="container">
        <Info />
        <Brands />
        <MultipleItems products={products} />
        <AppSection />
        <Join />
      </div>
    </main>
  );
}

export default Main;
