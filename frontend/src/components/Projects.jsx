import React from 'react';
import projects from '../projectsData';

const generatePastelColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 100%, 85%)`; // HSL with 100% saturation and 85% lightness for pastel colors
};

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                backgroundColor: project.status === 'inactive' ? '#d3d3d3' : generatePastelColor(project.name),
                opacity: project.status === 'inactive' ? 0.6 : 1,
              }}
            >
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{project.name}</h3>
                <p style={styles.cardDescription}>{project.description}</p>
              </div>
              <a
                href={project.status === 'inactive' ? null : project.link}
                target={project.status === 'inactive' ? '' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  ...styles.cardLink,
                  pointerEvents: project.status === 'inactive' ? 'none' : 'auto',
                  backgroundColor: project.status === 'inactive' ? '#ccc' : '#333',
                }}
              >
                {project.status === 'inactive' ? 'Inactive' : 'View Project'}
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
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '40px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#333',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  cardDescription: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    color: '#666',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: '1.5',
  },
  cardLink: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#333',
    padding: '10px 15px',
    borderRadius: '5px',
    textAlign: 'center',
    marginTop: '20px',
    transition: 'background-color 0.3s',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

export default Projects;
