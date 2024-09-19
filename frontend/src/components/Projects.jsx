import React from 'react';
import '../CSS/Projects.css'; // Import the external CSS file
import projects from '../JS/projectsData';

// Function to generate pastel colors
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
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="heading">PROJECTS</h2>
        <div className="projectsGrid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card"
              style={{
                backgroundColor: project.status === 'inactive' ? '#d3d3d3' : generatePastelColor(project.name),
                opacity: project.status === 'inactive' ? 0.6 : 1,
              }}
            >
              <div className="cardContent">
                <h3 className="cardTitle">{project.name}</h3>
                <p className="cardDescription">{project.description}</p>
              </div>
              <a
                href={project.status === 'inactive' ? null : project.link}
                target={project.status === 'inactive' ? '' : '_blank'}
                rel="noopener noreferrer"
                className="cardLink"
                aria-label={project.status === 'inactive' ? `${project.name} is inactive` : `View ${project.name}`}
                style={{
                  pointerEvents: project.status === 'inactive' ? 'none' : 'auto',
                }}
              >
                {project.status === 'inactive' ? 'Coming Soon' : 'View Project'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
