import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <Link to="https://github.com/heyshashank39" className="github">
          <FiGithub />
        </Link>
        <Link
          to="https://instagram.com/mindsketch.ai"
          target="_blank"
          className="instagram">
          <FiInstagram />
        </Link>
        <Link to="/twitter" className="twitter">
          <FiTwitter />
        </Link>
        <Link to="/linkedin" className="linkedin">
          <FiLinkedin />
        </Link>
      </div>
      <div className="footer-title">
        <p className="footer-title-items">
          Made with <BsFillHeartFill className="heart-logo" /> in India{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
