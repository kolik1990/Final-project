import React from "react";
import { Link } from "react-router-dom";
import "./socialLinks.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";

function SocialLinks() {
  return (
    <div className="social__link">
      <Link to="https://www.facebook.com/">
        <img src={facebook} alt="facebook"></img>
      </Link>
      <Link to="https://www.instagram.com/">
        <img src={instagram} alt="instagram"></img>
      </Link>
      <Link to="https://twitter.com/">
        <img src={twitter} alt="twitter"></img>
      </Link>
      <Link to="https://www.linkedin.com/">
        <img src={linkedin} alt="linkedin"></img>
      </Link>
    </div>
  );
}

export default SocialLinks;
