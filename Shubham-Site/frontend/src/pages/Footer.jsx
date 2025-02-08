import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="mailto:your-email@example.com"><FaEnvelope /></a>
      </div>
      <p>Contact: +91 9876543210 | Email: your-email@example.com</p>
      <p>Address: ABC College, XYZ City, India</p>
      <p>© 2025 CARVAAN 2K25 | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
