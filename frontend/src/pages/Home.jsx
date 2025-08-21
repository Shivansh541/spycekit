import React from "react";
import Hero from "../components/Hero";
import '../styles/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (

    <div className="home">
      <Hero />
      {/* About Preview */}
      <section id="about" className="about-preview">
        <div className="about-content">
          <h2>About SpyceKit</h2>
          <p>
            At SpyceKit, we bring you spices sourced from trusted farmers, packed fresh to preserve their aroma and taste. From your grandmother’s recipes to modern delicacies, our spices turn every meal into a story worth sharing.
          </p>
          <ul className="about-highlights">
            <li>✅ 100% Natural & Pure</li>
            <li>✅ No Artificial Colors or Preservatives</li>
            <li>✅ Sourced Directly from Farms</li>
            <li>✅ Packed Fresh for Long-Lasting Flavor</li>
          </ul>
          <a href="/about" className="btn-secondary">Read More</a>
        </div>
        <img src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__96395.webp" alt="" />
      </section>

      {/* Featured Products Preview */}
      <section className="products-preview">
        <h2>Our Signature Spices</h2>
        <div className="products-preview-grid">
          <div className="product-preview-card">
            <img src="/assets/images/WhatsApp_Image_2025-08-08_at_11.02.00_8cce9761-removebg-preview.webp" alt="Turmeric Powder" />
            <p>Pure, vibrant turmeric to add warmth and color to your dishes.</p>
          </div>
          <div className="product-preview-card">
            <img src="/assets/images/WhatsApp_Image_2025-08-08_at_11.02.00_8cce9761-removebg-preview.webp" alt="Cumin Seeds" />
            <p>Earthy and aromatic seeds perfect for enhancing curries and stews.</p>
          </div>
          <div className="product-preview-card">
            <img src="/assets/images/WhatsApp_Image_2025-08-08_at_11.02.00_8cce9761-removebg-preview.webp" alt="Red Chili Powder" />
            <p>Spicy and bold chili powder to add a kick to any meal.</p>
          </div>
        </div>
        <a href="/products" className="btn-secondary">View All Products</a>
      </section>

      {/* Contact Preview */}
    <section className="contact-preview">
      <h2>Get In Touch</h2>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />{" "}
        <a href="mailto:info@spycekit.com">info@spycekit.com</a> |{" "}
        <FontAwesomeIcon icon={faPhone} />{" "}
        <a href="tel:+916386087373">+91 63860 87373</a>
      </p>

      <div className="social-icons">
<a href="https://instagram.com/spycekit" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon = {faInstagram}/>Instagram
</a>

        <a href="https://facebook.com/yourspices" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a href="https://www.linkedin.com/company/spycekit" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>

      <a href="/contact" className="btn-secondary">Contact Us</a>
    </section>

    </div>
  );
}
export default Home