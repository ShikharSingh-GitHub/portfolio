// src/components/Header.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      if (window.scrollY > lastScrollY || window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }

      lastScrollY = window.scrollY;

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

  return (
    <header
      style={{
        ...styles.header,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        height: isAtTop ? '70px' : '50px',
      }}
    >
      <div style={styles.container}>
        <h1 style={{ ...styles.logo, fontSize: isAtTop ? '1.6rem' : '1.2rem' }}>
          Shikhar Singh | Fullstack Developer
        </h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="about" smooth={true} duration={500} style={styles.navLink}>
                About
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="skills" smooth={true} duration={500} style={styles.navLink}>
                Skills
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="projects" smooth={true} duration={500} style={styles.navLink}>
                Projects
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="education" smooth={true} duration={500} style={styles.navLink}>
                Education
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="hobbies" smooth={true} duration={500} style={styles.navLink}>
                Hobbies
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="contact" smooth={true} duration={500} style={styles.navLink}>
                Contact
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="resume" smooth={true} duration={500} style={styles.navLink}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#2c3e50',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
  },
  logo: {
    color: '#ecf0f1',
    transition: 'font-size 0.3s ease-in-out',
    fontWeight: 'normal',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#ecf0f1',
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: 'normal',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    cursor: 'pointer', // Ensures the cursor changes to a pointer on hover
  },
  navLinkHover: {
    backgroundColor: '#34495e',
  },
};

export default Header;
