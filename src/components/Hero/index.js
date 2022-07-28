import React from "react";

import { publicUrl } from '../../utils/public'

import "./styles.scss";

function Hero(props) {
  const { openModal } = props;

  return (
    <div className="hero-container">
      <main className="main content">
        <h1 className="heading">
          The Passive
          <br />
          Income App For All
        </h1>
        <p className="text">
          Swap,Yield Farm, Stake, Borrow and Lend cryptocurrency all in one
          application.
        </p>
        <div className="hero-buttons-container">
          <button className="hero-buttons learn-more">
            LEARN MORE
            <img src={publicUrl("/images/arrow-down.svg")}></img>
          </button>
          <button className="hero-buttons get-started" onClick={openModal}>
            GET STARTED
            <img src={publicUrl("/images/arrow-up-45.svg")}></img>
          </button>
        </div>
      </main>
      <img src={publicUrl('/images/iphone/iPhone2.png')} className="phone" />
    </div>
  );
}
export default Hero;
