import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h1>Spycekit</h1>
          <p>Pure Flavors, Packed Fresh — Bringing authentic spices from farm to your kitchen.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 SpyceKit. All rights reserved. | A brand by Zaikaverse Foods Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
