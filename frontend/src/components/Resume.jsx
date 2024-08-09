// src/components/Resume.jsx

import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Resume</h2>
        <p style={styles.description}>
          Although My Portfolio Website is itself a Comprehensive Resume, you can download the single page pdf version down below.
        </p>
        <a 
          href="/Shikhar_Singh_Resume_FullStack_Developer.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.downloadLink}>
          Download Resume
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 0',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  container: {
    width: '90%',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  },
  downloadLink: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#333',
    padding: '10px 20px',
    borderRadius: '5px',
  },
};

export default Resume;
