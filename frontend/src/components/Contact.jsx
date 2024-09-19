import React from 'react';
import '../CSS/Contact.css'; // Import external CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <h2 className="contact-heading">CONTACT ME</h2>
        <p className="contact-description">
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
        </p>
        <div className="contact-info">
          <p>
            Email: <a href="mailto:shikharsingh024@gmail.com" className="contact-link">shikharsingh024@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+917869782173" className="contact-link">+91-7869782173</a>
          </p>
        </div>
        <form action="https://formspree.io/f/xpwarrlp" method="POST" className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" name="name" required className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" required className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea name="message" required className="form-textarea"></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
