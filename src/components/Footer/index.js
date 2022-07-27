import React from "react";
import "./styles.scss";
import DownloadButtons from "../DownloadButtons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content content">
        <div className="upper-hr">
          <div className="help">
            <p className="need-help">Need some help?</p>
            <a className="contact" href="mailto:Info@TheCryptoLink.com">
              Info@TheCryptoLink.com
            </a>
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
          <p className="rights">© CryptoLink 2022. All Right Reserved.</p>
          <div className="footer-rules">
            <p>Terms of Use</p>
            <p>Help</p>
          </div>
          <DownloadButtons />
        </div>
      </div>
    </div>
  );
}

export default Footer;
