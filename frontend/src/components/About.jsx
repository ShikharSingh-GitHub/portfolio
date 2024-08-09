// src/components/About.jsx

import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.description}>
          I am a passionate Fullstack Developer with a strong background in building dynamic and responsive web applications. With expertise in technologies like React, Node.js, and MongoDB, I enjoy creating solutions that are not only functional but also intuitive and user-friendly.
        </p>
        <p style={styles.description}>
          I have a keen interest in problem-solving, having solved over 500 Data Structures and Algorithms problems. My experience in Low-Level Design (LLD) and High-Level Design (HLD) allows me to architect systems that are scalable, maintainable, and efficient.
        </p>
        <p style={styles.description}>
          Outside of work, I enjoy sketching, trekking, and photography. These hobbies fuel my creativity and help me bring a unique perspective to my professional projects. Whether it's collaborating with a team or working on solo projects, I am always eager to learn, grow, and contribute to meaningful work.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 0',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  container: {
    width: '90%',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '40px',
    fontSize: '2.5rem',
    color: '#333',
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default About;
