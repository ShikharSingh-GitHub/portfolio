import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <h1>Shikhar Singh | Fullstack Developer</h1>
      <nav>
        <a href="#home" style={{ margin: '0 10px', color: '#fff' }}>Home</a>
        <a href="#about" style={{ margin: '0 10px', color: '#fff' }}>About</a>
        <a href="#skills" style={{ margin: '0 10px', color: '#fff' }}>Skills</a>
        <a href="#projects" style={{ margin: '0 10px', color: '#fff' }}>Projects</a>
        <a href="#hobbies" style={{ margin: '0 10px', color: '#fff' }}>Hobbies</a>
        <a href="#contact" style={{ margin: '0 10px', color: '#fff' }}>Contact</a>
        <a href="#resume" style={{ margin: '0 10px', color: '#fff' }}>Resume</a>
        </nav>
    </header>
  );
};

export default Header;
