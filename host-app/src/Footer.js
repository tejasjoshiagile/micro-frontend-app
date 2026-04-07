import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="app-footer-bar">
      <div className="app-shell app-footer-content">
        <p className="footer-text">Built with React Module Federation</p>
        <p className="footer-copy">Copyright {currentYear} RJS Team</p>
      </div>
    </footer>
  );
}

export default Footer;
