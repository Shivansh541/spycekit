import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxtboo6p2MoyyqkPiYhqVXn5jt782mvZxpSHKODwPC56fWvbCcUjlqjUdGPcGOx4n8H/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      // Don't check response.ok since it's opaque
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error: " + error.message);
    }
  };



  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {/* Contact Info */}
      <section className="contact-info">
        <p><strong>Phone: </strong><a href="tel:+916386087373">+91 63860 87373</a></p>
        <p><strong>Email: </strong><a href="mailto:info@spycekit.com">info@spycekit.com</a></p>
        <p><strong>Address:</strong> 4th floor, Plot no 93, Sector 44, Gurugram, Haryana, India</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        {submitted && <p className="success-msg">Thank you for reaching out! We'll get back to you soon.</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />

          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
          ></textarea>

          <button type="submit" className="btn-secondary">Send Message</button>
        </form>
      </section>

      {/* Map */}
      <section className="map-section">
        <h2>Our Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.6434282073717!2d77.07131556162258!3d28.451939388722376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e228ae8477%3A0x4822968973b40601!2sSpycekit!5e0!3m2!1sen!2sin!4v1757657786330!5m2!1sen!2sin"
          title="Location"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      {/* Social Media */}
      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://instagram.com/spycekit" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />Instagram
          </a>

          <a href="https://facebook.com/spycekit" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="https://www.linkedin.com/company/spycekit" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
