// src/App.jsx

import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
/*const App = () => {
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
};*/

function App() {
  return (
    <Router>
      <Header /> {/* Header will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<About />} /> {/* Default route */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
