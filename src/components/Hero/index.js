import React from "react";
import "./styles.scss";

function Hero(props) {
  const { openModal } = props;
  // const openModal = props.openModal
  
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
            <b>LEARN MORE</b>
            <img src="/images/arrow-down.svg"></img>
          </div>
          <button className="hero-buttons get-started" onClick={openModal}>
            GET STARTED
            <img src="/images/arrow-up-45.svg"></img>
          </button>
        </div>
      </main>
      <img src="images/iphone/iPhone2.png" className="phone" />
    </div>
  );
}
export default Hero;
