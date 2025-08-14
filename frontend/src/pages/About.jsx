import React from "react";
import "../styles/About.css";

const testimonials = [
  {
    id: 1,
    name: "Chef Anjali",
    role: "Professional Chef",
    quote: "These spices bring authentic flavor to every dish I create. Truly unmatched quality!",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Home Cook",
    quote: "I love how fresh and fragrant the spices are. They’ve become a staple in my kitchen.",
  },
];

const About = () => {
  return (
    <div className="about-page">

      {/* Company Story */}
      <section className="company-story">
        <h1>Our Story</h1>
        <p>
          Founded with a passion for authentic flavors, our startup brings the finest spices
          directly from trusted farmers to your kitchen. We believe in quality, sustainability,
          and celebrating the rich heritage of spices that enhance every meal.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <h2>Our Mission & Values</h2>
        <p>
          Our mission is to deliver pure, fresh, and sustainably sourced spices that empower
          cooks and chefs alike to create delicious, wholesome meals.
        </p>
        <ul>
          <li>Quality & Authenticity</li>
          <li>Sustainability & Ethical Sourcing</li>
          <li>Customer Satisfaction</li>
          <li>Community & Transparency</li>
        </ul>
      </section>

      {/* Sourcing & Quality Assurance */}
      <section className="sourcing-quality">
        <h2>Sourcing & Quality Assurance</h2>
        <p>
          We carefully select our spices from small-scale farmers who use traditional and organic
          farming methods. Every batch undergoes strict quality checks to ensure freshness,
          purity, and flavor.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>100% Natural and Organic Spices</li>
          <li>Farm-to-Table Freshness Guarantee</li>
          <li>Eco-Friendly Packaging</li>
          <li>Expertly Curated Blends</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map(({ id, name, role, quote }) => (
            <div key={id} className="testimonial-card">
              <p className="quote">“{quote}”</p>
              <p className="customer-name">{name}</p>
              <p className="customer-role">{role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
