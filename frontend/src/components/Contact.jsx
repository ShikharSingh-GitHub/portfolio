// src/components/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.description}>
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
        </p>
        <div style={styles.contactInfo}>
          <p>Email: <a href="mailto:shikharsingh024@gmail.com" style={styles.link}>shikharsingh024@gmail.com</a></p>
          <p>Phone: <a href="tel:+917869782173" style={styles.link}>+91-7869782173</a></p>
        </div>
        <form 
          action="https://formspree.io/f/xpwarrlp" 
          method="POST" 
          style={styles.form}
        >
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input 
              type="text" 
              name="name"
              required 
              style={styles.input} 
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              name="email"
              required 
              style={styles.input} 
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea 
              name="message"
              required 
              style={styles.textarea} 
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  body:{
    fontFamily: "'Roboto', sans-serif",
  },
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
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#333',
    fontFamily: "'Roboto', sans-serif"
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px',
    fontFamily: "'Roboto', sans-serif"
  },
  contactInfo: {
    marginBottom: '40px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Contact;
