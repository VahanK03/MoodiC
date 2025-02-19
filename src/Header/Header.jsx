import React, { useState } from "react";
import "./Header.css";
import LoginModal from "../Auth/Login/Login";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <p id="mood">Moodi</p>
          <p id="celsius">°C</p>
        </div>
        <nav className="nav-bar">
          <ul className="navbar-buttons">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/songs">Songs</a>
            </li>
            <li>
              <a href="#chart">Top Chart</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button" onClick={() => setShowModal(true)}>
            Login
          </button>
          <button className="signup-button">Sign Up</button>
        </div>
      </header>
      <LoginModal show={showModal} closeModal={() => setShowModal(false)} />
    </>
  );
};

export default Header;
