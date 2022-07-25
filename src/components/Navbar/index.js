import React from "react";
import "./styles.scss";
function Navbar() {
  return (
    <div className="navbar-container">
    <nav className="navigation content">
      <div className="nav-logo">
        <img src="/images/logo.svg"></img>
        <p>CryptoLink</p>
      </div>
      <div className="log-in">Log In</div>
    </nav>
    </div>
  );
}
export default Navbar;
