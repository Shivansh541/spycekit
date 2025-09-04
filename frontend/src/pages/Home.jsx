import React from "react";
import Hero from "../components/Hero";
import '../styles/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  const benefits = [
    {
      icon: "🌿",
      title: "100% Natural",
      desc: "Pure spices with no artificial colors or preservatives."
    },
    {
      icon: "🚜",
      title: "Farm to Kitchen",
      desc: "Sourced directly from trusted farmers with love and care."
    },
    {
      icon: "🧪",
      title: "Quality Tested",
      desc: "Every batch is lab-tested to ensure purity and safety."
    },
    {
      icon: "📦",
      title: "Fresh Packaging",
      desc: "Sealed to lock aroma and freshness until it reaches you."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      desc: "Quick, hassle-free delivery right to your doorstep."
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      desc: "Premium spices at pocket-friendly prices."
    }
  ];
  return (

    <div className="home">
      <Hero />
      {/* About Preview */}
      <section id="about" className="about-preview">
        <div className="about-content">
          <h2>About SpyceKit</h2>
          <p>
            At Spycekit we believe that spices are more
            than just ingredients - they are the heart of
            every Indian kitchen.
            We source directly from trusted farmers,
            handpick the best quality crops, and ensure
            that every pack you open fills your kitchen with
            authentic aroma and freshness.
          </p>
          <ul className="about-highlights">
            <li> 100% Natural & Pure</li>
            <li> No Artificial Colors or Preservatives</li>
            <li> Sourced Directly from Farms</li>
            <li> Packed Fresh for Long-Lasting Flavor</li>
          </ul>
          <a href="/about" className="btn-secondary">Read More</a>
        </div>
        <img src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__95737.png" alt="" />
      </section>

      {/* Featured Products Preview */}
      <section className="products-preview">
        <h2>Our Signature Spices</h2>
        <div className="products-preview-grid">
          <div className="product-preview-card">
            <img src="/assets/images/spices/Turmeric Powder.png" alt="Turmeric Powder" />
            <p>Pure, vibrant turmeric to add warmth and color to your dishes.</p>
          </div>
          <div className="product-preview-card">
            <img src="/assets/images/spices/Jeera Powder.png" alt="Cumin Seeds" />
            <p>Earthy and aromatic seeds perfect for enhancing curries and stews.</p>
          </div>
          <div className="product-preview-card">
            <img src="/assets/images/spices/Red Chilli Powder.png" alt="Red Chili Powder" />
            <p>Spicy and bold chili powder to add a kick to any meal.</p>
          </div>
        </div>
        <a href="/products" className="btn-secondary">View All Products</a>
      </section>
      <section className="why-choose-us">
        <h2>✨ Why Choose <span>SpyceKit?</span></h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
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
            <FontAwesomeIcon icon={faInstagram} />Instagram
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