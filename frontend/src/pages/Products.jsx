import React from "react";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    name: "Turmeric Powder",
    description: "Pure, vibrant turmeric to add warmth and color to your dishes.",
    image: "/assets/images/spice1.jpg",
  },
  {
    id: 2,
    name: "Cumin Seeds",
    description: "Earthy and aromatic seeds perfect for enhancing curries and stews.",
    image: "/assets/images/spice2.jpg",
  },
  {
    id: 3,
    name: "Red Chili Powder",
    description: "Spicy and bold chili powder to add a kick to any meal.",
    image: "/assets/images/spice3.jpg",
  },
  {
    id: 4,
    name: "Black Pepper",
    description: "Freshly ground black pepper for a sharp and spicy flavor.",
    image: "/assets/images/spice4.jpg",
  },
  {
    id: 5,
    name: "Coriander Powder",
    description: "Mild and fragrant coriander powder, essential for many recipes.",
    image: "/assets/images/spice5.jpg",
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Spices</h1>
      <div className="products-container">
        {products.map(({ id, name, description, image }) => (
          <div className="product-card" key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
