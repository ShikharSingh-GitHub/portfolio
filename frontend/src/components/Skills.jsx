// src/components/Skills.jsx

import React from 'react';
import skills from '../skillsData';

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Skills</h2>
        <div style={styles.skillsList}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{skill.name}</h3>
              <p style={styles.cardDescription}>{skill.description}</p>
            </div>
          ))}
        </div>
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
  skillsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  cardDescription: {
    fontSize: '1rem',
    marginBottom: '15px',
    color: '#666',
  },
};

export default Skills;
