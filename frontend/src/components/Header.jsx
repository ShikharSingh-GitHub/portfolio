// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#education" style={styles.link}>Education</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#resume" style={styles.link}>Resume</a>
        <a href="#hobbies" style={styles.link}>Hobbies</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: '#333',
    color: '#fff',
    padding: '5px 0',
    textAlign: 'center',
    zIndex: 1000, // Ensures the Navbar stays on top of other content
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    margin: 0,
    padding: '0 20px',
    fontSize: '1 rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 10px',
  },
};

export default Header;
