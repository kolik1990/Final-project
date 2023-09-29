import React from "react";
import Brands from "../../components/brands/Brands";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="container">
        <Brands />
        <div className="aboutUs__wrap">
          {" "}
          <p>
            "Welcome to our fake online store, store "Open," where you will
            always find the best deals and high-quality products! Our store is a
            place where your satisfaction and confidence in every purchase are
            valued.
          </p>
          <img
            className="aboutUsImg"
            src="./images/aboutUs.png"
            alt="aboutUs"
          ></img>
          <p>
            We take pride in providing the highest quality products. We are
            accountable for every item we sell and ensure that it meets the
            strictest quality standards. Our team of quality control specialists
            pays attention to every detail to make sure you receive only the
            best. All our products undergo rigorous testing and certification to
            guarantee their reliability and durability. We take pride in
            offering a wide range of products, from clothing and footwear to
            electronics and household appliances. We have everything you might
            need and more.
            <br /> <br />
            Our customers are our top priority, and their satisfaction is our
            commitment. We strive to provide excellent service, fast delivery,
            and easy returns. We are proud to be a reliable, long-term partner
            for our customers.
            <br />
            <br /> Thanks to your support and trust, we have achieved incredible
            success. Our store has become a place where shoppers find what they
            need and feel confident in every transaction. We thank you for
            choosing our fake online store, store "Open," and promise to
            continue delighting you with high-quality products and excellent
            service. Your satisfaction is our inspiration, and we look forward
            to new opportunities to serve you."
          </p>
          <br />
          <ul>
            <li>
              <b>Our address</b>: 123 Fake Street, Fake City
            </li>
            <li>
              <b>Our contacts</b>: Phone: +123 456 789 Email: info@fakestore.com
            </li>
          </ul>
        </div>
        <img
          className="aboutUsBrands"
          src="./images/brands2.jpg"
          alt="brands"
        ></img>
      </div>
    </div>
  );
}

export default AboutUs;
