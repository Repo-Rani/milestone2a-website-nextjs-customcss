import React from "react";
import Button from "../components/Button";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Heading Section */}
        <div className="about-heading">
          <h2 className="about-title">About Us</h2>
          <hr className="about-title-underline" />
          <p className="description">Things you need to know</p>
        </div>
        {/* Content Section */}
        <div className="about-grid-container">
          <div className="about-image-container">
            <Image
              src="/about.png"
              alt="About Us"
              width={750}
              height={700}
              className="  rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="about-content">
            <p className="about-content-title">TOP STAFF PICK</p>
            <h3 className="about-content-heading">Our Perfume Philosophy</h3>
            <p className="about-content-text">
              Our perfumes are crafted with a blend of luxurious ingredients,
              carefully selected to create long-lasting, unforgettable aromas.
              From floral tones to musky undertones, each fragrance is designed
              to leave a lasting impression, wherever you go.
            </p>
            <p className="about-content-texts">
              At LovelyPerfume, we believe a perfume is not just a scent; its a
              statement, a reflection of your personality. Every spray envelops
              you in a world of sophistication, where elegance and charm dance
              in harmony.
            </p>

            <ul className="about-listed">
              <li>
                <strong>Luxurious Ingredients:</strong> Crafted with care
              </li>
              <li>
                <strong>Long-lasting Fragrances:</strong> Perfect for all-day
                wear
              </li>
              <li>
                <strong>Unique Blends:</strong> Designed to leave a lasting
                impression
              </li>
            </ul>

            <div className="about-lists">
              <ul className="about-list-container">
                <li>Handcrafted Quality</li>
                <li>Luxurious Ingredients</li>
                <li>Artistic Craftsmanship</li>
              </ul>
            </div>
            <div className="about-button-container">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
