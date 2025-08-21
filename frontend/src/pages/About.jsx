import React, { useEffect, useState } from "react";
import "../styles/About.css";
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
  
const reviews = [
    {
      name: "Anita Sharma",
      text: "SpyceKit spices remind me of my grandma’s kitchen. Fresh, aromatic, and absolutely authentic!",
      location: "Delhi, India",
      rating: 5
    },
    {
      name: "Rohit Verma",
      text: "I love how fast the delivery was. The packaging is premium and keeps the spices fresh.",
      location: "Mumbai, India",
      rating: 4
    },
    {
      name: "Pooja Nair",
      text: "Affordable yet premium quality! SpyceKit is now my go-to brand for all spices.",
      location: "Bangalore, India",
      rating: 5
    }
  ];

const About = () => {

    const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

    const questions = [
    {
      q: "Are SpyceKit spices 100% natural?",
      a: "Yes, all our spices are sourced directly from trusted farmers and processed without any artificial additives or preservatives."
    },
    {
      q: "Do you ship all over India?",
      a: "Absolutely! We deliver across India with reliable courier partners to ensure freshness."
    },
    {
      q: "How should I store the spices?",
      a: "Keep them in airtight containers, away from direct sunlight and moisture, to maintain aroma and flavor for longer."
    },
    {
      q: "What makes SpyceKit different from other spice brands?",
      a: "We focus on purity, traditional taste, and freshness. Our unique packaging ensures your spices stay aromatic till the last pinch."
    }
  ];

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div className="about-page">

      {/* Company Story */}
<section className="story-section">
      <div className="story-content">
        <h1>Our Story</h1>
        <p>
          SpyceKit was founded in 2025 with a simple idea — 
          to bring authentic, fresh, and high-quality spices directly to every kitchen. 
          What began as a small passion project quickly grew into a brand that celebrates 
          the rich tradition of spices while meeting the needs of today’s cooks. 
        </p>
        <p>
          From the very beginning, our focus has been on <strong>purity, flavor, and trust</strong>. 
          Every spice is carefully sourced to ensure that what reaches you is nothing but the best. 
          Though our journey has just started, our mission is clear — to make every meal 
          richer, tastier, and closer to its true roots. 
        </p>
      </div>

      <div className="story-image">
        <img src='/assets/images/Rustic Spice Collection in Earthy Bowls.png' alt="SpyceKit Story" />
      </div>
    </section>

      {/* Mission & Values */}
        <section className="mission-section">
      <div className="mission-content">
        <h1>Our Mission</h1>
        <p>
          At <strong>SpyceKit</strong>, our mission is simple — to bring
          authentic, pure, and flavorful spices into every home. We believe
          cooking should be filled with taste, tradition, and trust.
        </p>
      </div>

      <div className="values-grid">
        <div className="value-card">
          <img src="/assets/icons/mortar_4975225.png" alt="Authenticity" />
          <h3>Authenticity</h3>
          <p>Spices in their purest form, staying true to tradition.</p>
        </div>
        <div className="value-card">
          <img src="/assets/icons/sustainability_12459604.png" alt="Sustainability" />
          <h3>Sustainability</h3>
          <p>Eco-friendly sourcing and packaging that care for the earth.</p>
        </div>
        <div className="value-card">
          <img src="/assets/icons/workgroup_12886641.png" alt="Community" />
          <h3>Community</h3>
          <p>Partnering with local farmers and supporting livelihoods.</p>
        </div>
        <div className="value-card">
          <img src="/assets/icons/favorites_7601227.png" alt="Quality" />
          <h3>Quality</h3>
          <p>Every pack is carefully tested to meet the highest standards.</p>
        </div>
      </div>
    </section>
      {/* Sourcing & Quality Assurance */}
<section className="sourcing-quality">
      <div className="sq-container">
        {/* Left Side: Text */}
        <div className="sq-text">
          <h2>🌱 Sourcing & Quality</h2>
          <p>
            At <strong>SpyceKit</strong>, we believe quality begins at the roots.  
            Our spices are sourced directly from trusted farmers and processed 
            with the utmost care to ensure purity, freshness, and authenticity.
          </p>
          <ul>
            <li>Directly sourced from ethical farmers</li>
            <li>100% natural, no artificial colors</li>
            <li>Lab-tested for safety & quality</li>
            <li>Hygienically packed for long-lasting freshness</li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className="sq-image">
          <img
            src="/assets/images/_Fotor.jpg" 
            alt="Spice farm"
          />
        </div>
      </div>
    </section>

      {/* Why Choose Us */}
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

      {/* Testimonials */}
<section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-slider">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`testimonial-slide ${
              index === current ? "active" : "hidden"
            }`}
          >
            <p className="review-text">“{review.text}”</p>
            <div className="reviewer">
              <h3>{review.name}</h3>
              <span>{review.location}</span>
            </div>
            <div className="stars">{"⭐".repeat(review.rating)}</div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
    <section className="faq">
      <h2>❓ Frequently Asked Questions</h2>
      <div className="faq-container">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.q}
              <span>{active === index ? "−" : "+"}</span>
            </button>
            <div className={`faq-answer ${active === index ? "open" : ""}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default About;
