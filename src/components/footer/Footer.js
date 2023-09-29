import React from "react";
import SocialLinks from "../socialLinks/SocialLinks";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="social">
            <h3 className="social__title title">Fashion</h3>
            <p className="social__text ">
              Complete your style with awesome clothes from us.
            </p>
            <SocialLinks />
          </div>
          <div className="footer__info">
            <p>Quick Link</p>
            <ul className="footer__links">
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer__info">
            Legal
            <ul className="footer__links">
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
