import React from 'react';
import '../CSS/Education.css'; // Import external CSS file
import education from '../JS/educationData';

const Education = () => {
  return (
    <section id="education" className="education-section section">
      <div className="education-container">
        <h2 className="education-heading">EDUCATION</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-cardInstitution">{edu.institution}</h3>
              <h4 className="education-cardCourse">{edu.course}</h4>
              <p className="education-cardYear">{edu.year}</p>
              <p className="education-cardDescription">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
