import React from "react";
import "./styles.scss";

function Hero() {
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
          <div className="hero-buttons learn-more">
            <p>LEARN MORE</p>
            <img src="/images/arrow-down.svg"></img>
          </div>
          <div className="hero-buttons get-started">
            <p>GET STARTED</p>
            <img src="/images/arrow-up-45.svg"></img>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Hero;
