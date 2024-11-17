import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/starry__rani/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram social-icon xl:text-4xl xs:text-3xl"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100089698213012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook-circle social-icon xl:text-4xl xs:text-3xl"></i>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter social-icon xl:text-4xl xs:text-3xl"></i>
          </a>

          <a
            href="mailto:ranimiss968@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-gmail social-icon xl:text-4xl xs:text-3xl"></i>
          </a>
        </div>

        <div className="nav-links">
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Privacy Policy
          </a>
        </div>

        <div className="footer-text">
          <p>
            &copy; 2024 LovelyPerfume | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
