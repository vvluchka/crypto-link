import React from "react";
import "./styles.scss";

function ScrollToTop(){

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return(
    <button className="scroll-to-top" onClick={scrollToTop}>a</button>
  )
}

export default ScrollToTop;