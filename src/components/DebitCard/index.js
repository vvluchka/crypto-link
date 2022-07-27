import React from "react";
import "./styles.scss";

function DebitCard() {
  return (
    <div className="debit-card">
      <div className="debit-card-content content ">
        <div className="text">
          <h1>
            CryptoLink <br />
            Debit Card
          </h1>
          <p>
            The CryptoLink card is used to spend your account balance anytime
            and anywhere without ever needing to withdrawal funds and wait for
            bank transfer to process. The CryptoLink debit card makes spending
            your portfolios passive income extremely easy.{" "}
          </p>
          <div className="debit-link">
            <p>Get Your CryptoLink Debit Card Today</p>
            <img src="/images/arrow-right.svg"></img>
          </div>
        </div>
      </div>
      <img className="card-image"src="/images/card.png"></img>
    </div>
  );
}

export default DebitCard;
