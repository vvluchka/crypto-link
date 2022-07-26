import React from "react";

import { publicUrl } from '../../utils/public'
import "./styles.scss";

function DownloadButtons() {
  return (
    <div className="download-buttons-container">
      <div className="download-button">
        <img src={publicUrl("/images/google-play.svg")}></img>
        <div className=" download-button-text">
          <p>GET IT ON</p>
          <h6>Google Play</h6>
        </div>
      </div>
      <div className="download-button">
        <img src={publicUrl("/images/app-store.svg")}></img>
        <div className="download-button-text">
          <p>Download on the</p>
          <h6>App Store</h6>
        </div>
      </div>
    </div>
  );
}

export default DownloadButtons;
