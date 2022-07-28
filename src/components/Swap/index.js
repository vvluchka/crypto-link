import React from "react";
import "./styles.scss";

function Swap(props) {

  const { openModal } = props;

  return (
    <div className="swap-container">
      <div className="content">
        <div className="text">
          <p className="swap-heading">CryptoLink</p>
          <p className="swap-paragraph">
            The CryptoLink is a centralized DeFi application built for
            next-generation staking, yield farming and financial services. Our
            mission is to remove all the technical barriers that come with
            decentralized finance so that everyone can experience the benefits of
            DeFi.
          </p>
          <button className="get-started" onClick={openModal}>
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
