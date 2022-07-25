import React from "react";
import "./styles.scss";

function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <img className="bounce" src="/images/arrow-up.svg"></img>
    </button>
  );
}

export default ScrollToTop;
