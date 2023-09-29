import React from "react";
import { Link } from "react-router-dom";
import "./socialLinks.css";

function SocialLinks() {
  return (
    <div className="social__link">
      <Link to="https://www.facebook.com/">
        <img src="./images/facebook.svg" alt="facebook"></img>
      </Link>
      <Link to="https://www.instagram.com/">
        <img src="./images/instagram.svg" alt="instagram"></img>
      </Link>
      <Link to="https://twitter.com/">
        <img src="./images/twitter.svg" alt="twitter"></img>
      </Link>
      <Link to="https://www.linkedin.com/">
        <img src="./images/linkedin.svg" alt="linkedin"></img>
      </Link>
    </div>
  );
}

export default SocialLinks;
