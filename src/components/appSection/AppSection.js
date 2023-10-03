import React from "react";
import { Link } from "react-router-dom";
import "./appSection.css";
import appStore from "./appStore.svg";
import googlePlay from "./googlePlay.svg";
import app from "./mobileApp.png";

function AppSection() {
  return (
    <section className="app__section">
      <div className="app">
        <h2 className="app__title title">Download app & get the voucher!</h2>
        <p className="app__text">
          Get 30% off for first transaction using Rondovision mobile app for now
        </p>
        <div className="app__links">
          <Link to="https://www.apple.com/ru/app-store/">
            <img src={appStore} alt="appStore"></img>
          </Link>
          <Link to="https://play.google.com/store/apps">
            <img src={googlePlay} alt="googlePlay"></img>
          </Link>
        </div>
      </div>
      <img className="app__image" src={app} alt="app"></img>
    </section>
  );
}

export default AppSection;
