import React from "react";
import "./styles.scss";

function ModalWindow() {
  return (
    <div className="modal-window-container">
      <div className="window">
        <div className="modal-window content">
          <p className="less-label">
            <span className="main-label">Stay tuned </span>
            <br />
            Subscribe to our newsletter and never miss our info
          </p>
          <form className="form">
            <input
              className="text-input"
              type="text"
              placeholder="email@example.com"
              required
            ></input>
            <input className="submit-input" type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
