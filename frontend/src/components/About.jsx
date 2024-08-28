// src/components/About.jsx

import React, { useEffect, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fadeTransition, setFadeTransition] = useState(false);

  const slides = [
    {
      text: "I am a passionate Fullstack Developer with a strong foundation in both front-end and back-end technologies. My expertise lies in creating seamless user experiences by leveraging modern web development frameworks.",
      backgroundColor: '#3498db',
      imageUrl: '/images/profile_pic.jpeg',
    },
    {
      text: "With a background in computer science, I have honed my skills in problem-solving and critical thinking, which enables me to tackle complex challenges efficiently. My goal is to build web applications that are not only functional but also scalable and maintainable.",
      backgroundColor: '#2ecc71',
      imageUrl: '/images/profile_pic.jpeg',
    },
    {
      text: "I am constantly learning and adapting to new technologies to stay ahead in the rapidly evolving tech landscape. I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality products.",
      backgroundColor: '#e74c3c',
      imageUrl: '/images/profile_pic.jpeg',
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isPlaying]);

  const handleNextSlide = () => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setFadeTransition(false);
    }, 500); // Duration of the fade transition
  };

  const handleDotClick = (index) => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFadeTransition(false);
    }, 500); // Duration of the fade transition
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <div style={styles.carouselContainer}>
        <div
          style={{
            ...styles.slide,
            backgroundColor: slides[currentSlide].backgroundColor,
            opacity: fadeTransition ? 0 : 1,
          }}
        >
          <div style={styles.content}>
            <img src={slides[currentSlide].imageUrl} alt="Shikhar Singh" style={styles.profilePic} />
            <p style={styles.text}>{slides[currentSlide].text}</p>
          </div>
        </div>
        <div style={styles.controls}>
          <div style={styles.dots}>
            {slides.map((_, index) => (
              <span
                key={index}
                style={{
                  ...styles.dot,
                  backgroundColor: currentSlide === index ? '#333' : '#ccc',
                }}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
          <div onClick={togglePlayPause} style={styles.playPauseIcon}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
    fontFamily: "'Roboto', sans-serif",
  },
  carouselContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px', // Padding to ensure equal space on both sides
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif"
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontSize: '1.2rem',
    color: '#fff',
    borderRadius: '8px',
    transition: 'opacity 0.5s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1160px', // Adjusted for consistent spacing
    margin: '0 auto',
    width: '100%',
  },
  profilePic: {
    width: '250px',
    height: '300px',
    borderRadius: '8px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: '1.5rem',
    color: '#fff',
    lineHeight: '1.5',
    flex: 1,
    textAlign: 'left',
    paddingLeft: '20px',
  },
  controls: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '20px',
  },
  dot: {
    height: '12px',
    width: '12px',
    margin: '0 5px',
    borderRadius: '50%',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  playPauseIcon: {
    fontSize: '1.5rem',
    color: '#333',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
};

export default About;
