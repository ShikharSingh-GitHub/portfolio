import React, { useState } from 'react';
import '../CSS/About.css'; // Assuming the CSS is in a separate file
import profilePic1 from '../assets/profile_pic1.jpeg';
import profilePic2 from '../assets/profile_pic2.jpeg';
import profilePic3 from '../assets/profile_pic3.jpeg';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);

  const slides = [
    {
      text: "I am a passionate Fullstack Developer with a strong foundation in both front-end and back-end technologies. My expertise lies in creating seamless user experiences by leveraging modern web development frameworks.",
      imageUrl: profilePic1,
    },
    {
      text: "With a background in computer science, I have honed my skills in problem-solving and critical thinking, enabling me to tackle complex challenges efficiently. My goal is to build web applications that are functional and scalable.",
      imageUrl: profilePic2,
    },
    {
      text: "I am constantly learning and adapting to new technologies. I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality products.",
      imageUrl: profilePic3,
    }
  ];

  const handleDotClick = (index) => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFadeTransition(false);
    }, 500);
  };

  return (
    <section id="about" className="about-section section">
      <h2 className="about-heading">ABOUT ME</h2>
      <div className="carousel-container">
        <div className={`slide ${fadeTransition ? 'fade' : ''}`}>
          <div className="content">
            <img src={slides[currentSlide].imageUrl} alt="Shikhar Singh" className="profile-pic" />
            <p className="text">{slides[currentSlide].text}</p>
          </div>
        </div>
        <div className="controls">
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
