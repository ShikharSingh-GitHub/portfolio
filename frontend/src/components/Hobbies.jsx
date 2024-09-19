import React from 'react';
import '../CSS/Hobbies.css'; // Import external CSS file
import hobbies from '../JS/hobbiesData';

const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies-section section">
      <div className="hobbies-container">
        <h2 className="hobbies-heading">HOBBIES</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobbies-card">
              <h3 className="hobbies-cardTitle">{hobby.name}</h3>
              <p className="hobbies-cardDescription">{hobby.description}</p>
              {hobby.link ? (
                <a href={hobby.link} target="_blank" rel="noopener noreferrer" className="hobbies-cardLink">
                  View
                </a>
              ) : (
                <button className="hobbies-comingSoon">Coming Soon</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
