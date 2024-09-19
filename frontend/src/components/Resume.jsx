import React from 'react';
import '../CSS/Resume.css'; // Import external CSS file

const Resume = () => {
  return (
    <section id="resume" className="resume-section section">
      <div className="resume-container">
        <h2 className="resume-heading">RESUME</h2>
        <p className="resume-description">
          Although My Portfolio Website is itself a Comprehensive Resume, you can download the single-page PDF version down below.
        </p>
        <a
          href="https://drive.google.com/file/d/1xneQAgKq-uMXIKqAFiMwUOCOUbn8kc0k/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-downloadLink"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
