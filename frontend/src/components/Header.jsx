import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import '../CSS/Header.css'; // Import the external CSS file

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Control navbar visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const [isAtTop, setIsAtTop] = useState(true); // Control if user is at the top of the page

  const scrollThreshold = 50; // Set the scroll threshold

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      // Hide the navbar when scrolling down beyond the threshold
      if (window.scrollY - lastScrollY > scrollThreshold) {
        setIsVisible(false);
      }
      // Show the navbar when scrolling up beyond the threshold
      else if (lastScrollY - window.scrollY > scrollThreshold) {
        setIsVisible(true);
      }

      // Set the navbar visibility for when the user is at the top of the page
      if (window.scrollY > 0) {
        setIsAtTop(false); // User is not at the top
      } else {
        setIsAtTop(true); // User is at the top
      }

      lastScrollY = window.scrollY;

      // Ensure the navbar becomes visible after scrolling stops for a bit
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className={`header-component ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} alt="Logo" className="header-logo-image" />
          <h1 className="header-logo-text">Shikhar Singh | Fullstack Developer</h1>
        </div>

        {/* Hamburger Button for mobile */}
        <button className="header-hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Nav Links */}
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="about" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="skills" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="projects" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="education" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                Education
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="hobbies" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                Hobbies
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="contact" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="resume" smooth={true} duration={500} className="header-nav-link" onClick={toggleMenu}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
