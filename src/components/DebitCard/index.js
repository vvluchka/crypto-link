import React from "react";
import "./styles.scss";

function DebitCard() {
  return (
    <div className="debit-card">
      <div className="debit-card-content content ">
        <p className="debit-card-heading">
          CryptoLink <br />
          Debit Card
        </p>
        <p className="debit-card-paragraph">
          The CryptoLink card is used to spend your account balance anytime and
          anywhere without ever needing to withdrawal funds and wait for bank
          transfer to process. The CryptoLink debit card makes spending your
          portfolios passive income extremely easy.{" "}
        </p>
        <div className="debit-link">
          <p className="link-text">Get Your CryptoLink Debit Card Today</p>
          <img src="/images/arrow-right.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default DebitCard;
