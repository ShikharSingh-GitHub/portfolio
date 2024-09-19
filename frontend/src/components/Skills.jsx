import React, { useState } from 'react';
import '../CSS/Skills.css'; // Import external CSS file
import skills from '../JS/skillsData'; // Assuming skill colors are defined here

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container">
        <h2 className="skills-heading">SKILLS</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills-card"
              style={{
                backgroundColor: skill.color || '#f4f4f4', // Ensure card color is applied
                height: hoveredSkill === index ? 'auto' : '150px',
                transform: hoveredSkill === index ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3 className={`skills-cardTitle ${hoveredSkill === index ? 'hidden' : ''}`}>
                {skill.name}
              </h3>
              <ul className={`skills-cardDescription ${hoveredSkill === index ? 'visible' : ''}`}>
                {skill.description.map((point, i) => (
                  <li key={i} className="skills-bulletPoint">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
