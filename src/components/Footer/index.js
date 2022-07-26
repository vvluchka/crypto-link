import React from "react";
import "./styles.scss";
import DownloadButtons from "../DownloadButtons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content content">
        <div className="upper-hr">
          <div className="help">
            <p>Need some help?</p>
            <h1>Info@TheCryptoLink.com</h1>
          </div>
          <div className="social-media">
            <img src="/images/social-media/instagram.svg"></img>
            <img src="/images/social-media/twitter.svg"></img>
            <img src="/images/social-media/youtube.svg"></img>
            <img src="/images/social-media/media.svg"></img>
          </div>
        </div>
        <hr />
        <div className="lower-hr">
          <div className="footer-rules">
            <p>© CryptoLink 2022. All Right Reserved.</p>
            <p>Terms of Use</p>
            <p>Help</p>
          </div>
          <div className="footer-download-buttons">
            <DownloadButtons  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
