// src/App.jsx

import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Hobbies />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;
