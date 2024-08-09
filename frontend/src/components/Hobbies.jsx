// src/components/Hobbies.jsx

import React from 'react';
import hobbies from '../hobbiesData';

const Hobbies = () => {
  return (
    <section id="hobbies" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Hobbies</h2>
        <div style={styles.hobbiesList}>
          {hobbies.map((hobby, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{hobby.name}</h3>
              <p style={styles.cardDescription}>{hobby.description}</p>
              <a href={hobby.link} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                View
              </a>
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
  hobbiesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
  cardLink: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#333',
    padding: '10px 15px',
    borderRadius: '5px',
  },
};

export default Hobbies;
