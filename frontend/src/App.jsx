import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
        <Resume />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
