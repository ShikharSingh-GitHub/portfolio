import React from 'react';
import '../CSS/Footer.css'; // Import external CSS file

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <ul className="footer-social-links">
          <li><a href="https://github.com/ShikharSingh-GitHub" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/-shikhar-singh/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://x.com/Shikhar02737189" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
          <li><a href="https://www.scaler.com/academy/profile/70fcbf91047c/" target="_blank" rel="noopener noreferrer">Scaler</a></li>
        </ul>
        <div className="footer-copyright">
          <p>&copy; 2024 Shikhar Singh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
