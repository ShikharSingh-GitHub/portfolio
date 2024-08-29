import React, { useState } from 'react';
import skills from '../skillsData';

const skillColors = {
  React: '#61DAFB',
  NodeJS: '#68A063',
  ExpressJS: '#000000',
  MongoDB: '#4DB33D',
  JavaScript: '#F7DF1E',
  Redux: '#764ABC',
  Thunk: '#9A32CD',
  Git: '#F05032',
  DSA: '#FFA500',
  LLD: '#00008B',
  HLD: '#008B8B',
  SQL: '#336791',
  HTML: '#E34F26',
  CSS: '#1572B6',
  'Product Management': '#FF4500',
  DevOps: '#FF9900',
  'Data Engineering': '#006699',
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Skills</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                backgroundColor: skill.status === 'inactive' ? '#d3d3d3' : skillColors[skill.name] || '#f4f4f4',
                opacity: skill.status === 'inactive' ? 0.6 : 1,
                height: hoveredSkill === index ? 'auto' : '150px',
                transform: hoveredSkill === index ? 'scale(1.05)' : 'scale(1)', 
              }}
              // Only enable hover effects if the skill is active
              onMouseEnter={skill.status === 'inactive' ? null : () => setHoveredSkill(index)}
              onMouseLeave={skill.status === 'inactive' ? null : () => setHoveredSkill(null)}
            >
              <h3
                style={{
                  ...styles.cardTitle,
                  opacity: hoveredSkill === index ? 0 : 1,
                }}
              >
                {skill.name}
              </h3>
              <ul
                style={{
                  ...styles.cardDescription,
                  opacity: hoveredSkill === index ? 1 : 0,
                }}
              >
                {skill.description.map((point, i) => (
                  <li key={i} style={styles.bulletPoint}>{point}</li>
                ))}
              </ul>
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
    marginBottom: '40px'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s, height 0.3s, padding 0.3s',
    cursor: 'pointer',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
  },
  cardTitle: {
    fontSize: '1.8rem',
    color: '#fff',
    transition: 'opacity 0.3s',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#fff',
    textAlign: 'left',
    transition: 'opacity 0.3s',
    lineHeight: '1.5',
    padding: '0 20px',
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  bulletPoint: {
    marginBottom: '10px',
  },
};

export default Skills;
