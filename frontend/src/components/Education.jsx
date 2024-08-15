// src/components/Education.jsx

import React from 'react';
import education from '../educationData';

const Education = () => {
  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Education</h2>
        <div style={styles.educationList}>
          {education.map((edu, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardInstitution}>{edu.institution}</h3>
              <h1 style={styles.cardCourse}>{edu.course}</h1>
              <p style={styles.cardYear}>{edu.year}</p>
              <p style={styles.cardDescription}>{edu.description}</p>
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
  educationList: {
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
  cardCourse: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#333',
    fontStyle:'italic',
  },
  cardInstitution: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    color: '#555',
  },
  cardYear: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#777',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default Education;
