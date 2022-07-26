import React from "react";
import "./styles.scss";

function Swap() {
  return (
    <div className="cover-image">
      <div className="swap-container content">
        <div className="text">
          <h1 className="heading">CryptoLink</h1>
          <p>
            The CryptoLink is a centralized DeFi application built for
            next-generation staking, yield farming and financial services. Our
            mission is to remove all the technical barriers that come with
            decentralized finance so that everyone can experience the benefits
            of DeFi.
          </p>
          <div className="get-started">
            <p>GET STARTED</p>
            <img src="/images/arrow-up-45.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
