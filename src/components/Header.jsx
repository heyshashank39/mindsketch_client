import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSketch } from "react-icons/fa";
import "../App.css";
const Header = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <div className="brand-name">
          <FaSketch className="brand-icon" />
          <p className="logo">MindSketch</p>
        </div>
      </Link>
      <div className="header-items">
        <Link to="/" className="header-link">
          <p className="header-home">Home</p>
        </Link>
        <Link to="/" className="header-link">
          <p className="header-products">Products</p>
        </Link>
        <Link to="/exhibition" className="header-link">
          <p className="header-exhibition">Exhibition</p>
        </Link>
        <Link to="/" className="header-link" smooth>
          <p className="header-faq">Faq</p>
        </Link>
        <div className="border-between-items"></div>
        <div className="auth-button">
          <button onClick={navigateToLogin} className="login-button">
            Login
          </button>
          <button onClick={navigateToRegister} className="signup-button">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
