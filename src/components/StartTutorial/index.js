import React from "react";

import DownloadButtons from "../DownloadButtons";
import { publicUrl } from '../../utils/public';
import "./styles.scss";

function StartTutorial() {
  return (
    <div className="start-tutorial-container">
      <div className="mobile-app content">
        <h1>
          Passive income made easy with the <span>CryptoLink</span>
        </h1>
        <DownloadButtons />
        <div className="start-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-text">
              <h3>Download The CryptoLink</h3>
              <p className="">
                Get started with the CryptoLink on your IOS or android mobile
                device.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-text">
              <h3>Create Your CryptoLink Account</h3>
              <p>
                Choose your username, password and confirm your email address to
                register.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-text">
              <h3>Easily Begin Earning Passive Income</h3>
              <p>
                Pick a yield strategy, Track your investments with the dashboard
                then sit back relax and watch your CryptoLink portfolio grow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={publicUrl("/images/iphone/phone-illustration2.png")} className="phone" />
    </div>
  );
}

export default StartTutorial;
