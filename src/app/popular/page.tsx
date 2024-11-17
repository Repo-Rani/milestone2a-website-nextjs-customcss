import React from "react";
import Link from "next/link";
import Image from "next/image";

const Popular = () => {
  return (
    <section className="popular-section">
      <div className="popular-container">
        {/* Heading Section */}
        <div className=" popular-div">
          <h2 className="popular-title">Popular</h2>
          <p className="popular-disc">Our Most Loved Scents</p>
        </div>

        {/* Card Grid */}
        <div className="popular-card-grid">
          
          {/* Card 1 */}
          <div className="popular-card">
            <Image
              src="/popular-1.png"
              alt="Meteor Essence"
              width={160}
              height={160}
            />
            <div className="popular-card-sec">
              <h2>Meteor Essence</h2>
              <p>
                Extracted from the heart of meteors, it captures the pure
                essence of the star.
              </p>
            </div>
            <div className="popular-arrow-btn">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>

          {/* Card 2 */}
          <div className="popular-card">
            <Image
              src="/popular-2.png"
              alt="Celestial Bloom"
              width={160}
              height={160}
            />
            <div className="popular-card-sec">
              <h2>Celestial Bloom</h2>
              <p>
                Blooming from cosmic flowers, this scent is truly out of this
                world pleasure.
              </p>
            </div>
            <div className="popular-arrow-btn">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>

          {/* Card 3 */}
          <div className="popular-card">
            <Image
              src="/popular-3.png"
              alt="Galactic Misto"
              width={160}
              height={160}
            />
            <div className="popular-card-sec">
              <h2>Galactic Misto</h2>
              <p>
                An ethereal mist from distant galaxies, bottled for your
                pleasure.
              </p>
            </div>
            <div className="popular-arrow-btn">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="popular-cta-section">
          <h2>Craft Your Personalized Fragrance</h2>
          <p>Select your preferences to find a match uniquely suited to you.</p>
          <button>
            <Link href="/collection">Begin Your Journey</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
