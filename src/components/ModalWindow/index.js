import React from "react";
import "./styles.scss";

function ModalWindow(props) {
  const { isOpened, closeModal } = props;
  
  const onSubmit = (event) => {
    event.preventDefault();
    closeModal();
  }
  
  if (!isOpened) {
    return null;
  }

  return (
    <div className="modal-window-container">
      <div className="modal-window">
        <button className="close-modal" onClick={closeModal}></button>
        <p className="less-label">
          <span className="main-label">Stay tuned</span>
          <br />
          Subscribe to our newsletter and never miss our info
        </p>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="text-input"
            type="text"
            placeholder="email@example.com"
            required
          />
          <button className="submit-button" type="submit">CONFIRM<img className="confirm-arrow" src="/images/confirm-arrow.svg"></img></button>
        </form>
      </div>
    </div>
  );
}

export default ModalWindow;
