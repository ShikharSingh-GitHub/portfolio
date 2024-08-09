// src/components/Projects.jsx

import React from 'react';
import projects from '../projectsData';

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{project.name}</h3>
              <p style={styles.cardDescription}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                View Project
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
    backgroundColor: '#f4f4f4',
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
  projectsGrid: {
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

export default Projects;
