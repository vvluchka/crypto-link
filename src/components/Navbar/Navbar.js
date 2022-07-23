import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img src="/images/logo.svg"></img>
        <p>CryptoLink</p>
      </div>
      <div className="log-in">Log In</div>
    </nav>
  );
}
export default Navbar;
