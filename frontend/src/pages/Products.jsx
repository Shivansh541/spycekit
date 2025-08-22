import React, { useState } from "react";
import "../styles/Products.css";

const spices = [
  {
    name: "Chaat Masala",
    description: "Chaat Masala is a tangy, spicy, and flavorful blend of spices that instantly enhances the taste of any snack or dish. It is made from dried mango powder (amchur), cumin, coriander, black salt, and a variety of other aromatic spices. The unique sourness and slight pungency of chaat masala make it a favorite for street food lovers in India. It is sprinkled on fruits, salads, chaats, pakoras, sandwiches, and even beverages like lemonade to give them a zesty punch. Apart from taste, it aids digestion and stimulates appetite. No Indian pantry is complete without this versatile spice mix."
  },
  {
    name: "Garam Masala",
    description: "Garam Masala is one of the most essential spice blends in Indian cooking, often referred to as the 'soul of Indian curries.' It is a warming mix of ground spices such as black pepper, cinnamon, cardamom, cloves, cumin, and nutmeg. The term 'garam' means heat, not in terms of spiciness but the warmth it provides to the body. Garam masala is typically added towards the end of cooking to retain its aroma and depth of flavor. It enhances the richness of curries, dals, rice dishes, and even marinades. Its fragrant profile is what gives Indian cuisine its authentic character."
  },
  {
    name: "Meat Masala",
    description: "Meat Masala is a robust spice mix crafted to bring out the best flavors in non-vegetarian dishes. It combines spices like cumin, coriander, black pepper, cloves, cinnamon, and red chilies, offering a balance of heat and aroma. This masala is specifically designed to enhance mutton, chicken, and other meat preparations, making them rich, flavorful, and restaurant-style. It adds thickness to gravies and intensifies the taste of marinades. Whether you are preparing a spicy curry, a dry fry, or a slow-cooked dish, meat masala is the perfect choice for an authentic Indian meat delicacy."
  },
  {
    name: "Kashmiri Lal Mirch",
    description: "Kashmiri Lal Mirch is a vibrant red chili powder known for its rich color rather than extreme spiciness. Unlike regular chili powder, it imparts a brilliant red hue to dishes without overwhelming them with heat. It is commonly used in Indian gravies, tandoori dishes, and biryanis to enhance the visual appeal and flavor profile. Popular in Kashmiri cuisine, it balances mild heat with a smoky undertone. It is also packed with antioxidants, which make it both a flavorful and healthy addition to meals."
  },
  {
    name: "Chhole Masala",
    description: "Chhole Masala is a special spice blend that brings the authentic taste of North Indian chana (chickpea) curry. Made with a combination of roasted cumin, coriander, dried pomegranate seeds, black pepper, cinnamon, and other aromatic spices, it delivers a unique balance of tangy, spicy, and earthy flavors. This masala is the secret behind the bold, street-style taste of popular dishes like Chhole Bhature and Chana Masala. It enhances the gravy, giving it a thick texture and irresistible aroma. It’s an absolute must-have for lovers of Punjabi cuisine."
  },
  {
    name: "Coriander Powder",
    description: "Coriander Powder, also known as Dhania Powder, is one of the most commonly used spices in Indian households. It is made by grinding dried coriander seeds, which have a citrusy, nutty, and slightly sweet flavor. This powder is a base spice used in almost all curries, dals, and vegetable preparations. Apart from enhancing taste, coriander powder has digestive benefits and is often used in traditional remedies. Its subtle flavor helps in balancing the heat of chilies and other strong spices, making it an integral part of spice mixes and everyday cooking."
  },
  {
    name: "Jeera Powder",
    description: "Jeera Powder, or Cumin Powder, is made from roasted cumin seeds that are ground into a fine powder. It has a warm, earthy flavor with a hint of bitterness and nuttiness, which adds depth to dishes. Cumin powder is widely used in Indian curries, dals, rice preparations, chutneys, and spice blends like garam masala. Roasted jeera powder is particularly valued for its enhanced aroma and digestive properties. Its strong fragrance and taste make it indispensable in both vegetarian and non-vegetarian cooking."
  },
  {
    name: "Red Chilli Powder",
    description: "Red Chilli Powder is a fiery spice that brings heat and color to Indian food. Made by grinding dried red chilies, it varies in pungency depending on the variety used. It is a key ingredient in curries, sauces, pickles, and spice mixes. Beyond just spiciness, good quality red chili powder adds a smoky depth of flavor to dishes. It stimulates taste buds and boosts metabolism, making it one of the most loved and essential spices in every kitchen."
  },
  {
    name: "Turmeric Powder",
    description: "Turmeric Powder, or Haldi, is a golden-yellow spice renowned for its earthy flavor, vibrant color, and medicinal properties. It has been used in Indian households for centuries not only as a culinary ingredient but also as a natural remedy for various ailments. Turmeric adds a subtle bitterness and warm undertone to curries, vegetables, rice, and soups. Its active compound, curcumin, is known for its powerful anti-inflammatory and antioxidant benefits. From traditional cooking to skincare and Ayurveda, turmeric holds a sacred place in Indian culture and cuisine."
  }
];


const Products = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="products-page">
      {spices.map((spice, index) => (
        <div
          key={index}
          className={`spice-card ${selected === index ? "expanded" : ""}`}
          onClick={() => setSelected(selected === index ? null : index)}
        >
          <img src={`/assets/images/spices/${spice.name}.png`} alt={spice.name} />
          {selected === index && (
            <div className="spice-details">
              <h2>{spice.name}</h2>
              <p>{spice.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
