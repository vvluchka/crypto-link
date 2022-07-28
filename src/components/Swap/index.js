import React from "react";
import "./styles.scss";

function Swap() {
  return (
    <div className="swap-container">
      <div className="content">
        <div className="text">
          <h1 className="heading">CryptoLink</h1>
          <p>
            The CryptoLink is a centralized DeFi application built for
            next-generation staking, yield farming and financial services. Our
            mission is to remove all the technical barriers that come with
            decentralized finance so that everyone can experience the benefits of
            DeFi.
          </p>
          <button className="get-started">
            GET STARTED
            <img src="/images/arrow-up-45.svg"></img>
          </button>
        </div>
      </div>

      <img src="images/iphone/phone-illustration.png" className="phone"></img>
      <img src="images/iphone/phone-illustration-mobile.png" className="phone-mobile"></img>
    </div>
  );
}

export default Swap;
