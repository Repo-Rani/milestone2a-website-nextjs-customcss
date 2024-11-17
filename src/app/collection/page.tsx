import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import { Card } from "../../../types/type";

const Collection = () => {
  const cards: Card[] = [
    {
      image: "/perfume-1.jpg",
      title: "Mystque",
      desc: "Discover the graceful notes of Mysterious perfume.",
    },
    {
      image: "/perfume-2.jpg",
      title: "Elegance",
      desc: "An exquisite blend of exotic, floral, and aromas.",
    },
    {
      image: "/perfume-3.jpg",
      title: "Celestial Bloom",
      desc: "A heavenly fragrance with a touch of fresh blooms.",
    },
    {
      image: "/perfume-4.jpg",
      title: "Amber Delight",
      desc: "Rich amber and vanilla make this fragrance delight.",
    },
    {
      image: "/perfume-5.jpg",
      title: "Noir Obsession",
      desc: "A captivating scent with deep woody undertones.",
    },
    {
      image: "/perfume-6.jpg",
      title: "Oceanic Breeze",
      desc: "Feel the freshness of the sea with this scent.",
    },
  ];

  return (
    <section className="collection-section">
      <div className="collection-container">
        {/* Heading */}
        <div className=" collection-heading ">
          <h2>Collection</h2>
          <p>Discover the Cosmic Scents</p>
        </div>
        {/* Cards Section */}

        <div className="collection-cards">
          {cards.map((card, index) => (
            <div key={index} className="collection-card">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
              />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Button />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
