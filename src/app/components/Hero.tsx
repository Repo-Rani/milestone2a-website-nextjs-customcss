// Hero.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="herocontainer">
      {/* Background Text */}
      <div className="herobackgroundText">
        <p className="herobackgroundTextContent">
          FRA <br /> GRA <br /> NCE
        </p>
      </div>

      {/* Hero Content */}
      <div className="heroContent">
        <div className="heroTitle">MysticAura.</div>

        <div className="heroImageWrapper">
          <Image
            src="/hero.png"
            alt="hero-image"
            width={900}
            height={900}
            className="heroImage"
          />
          <p className="heroCaption">made by Rani</p>
        </div>

        <div className="heroDescription">
          {/* Left side text */}
          <p className="heroleftText">
            MysticAura captures the allure of cosmic beauty, crafted from rare
            celestial wonders.
          </p>

          <div className="herobuttonWrapper">
            <button className="heroButton">
              <Link href="/collection" className="link">
                <span className="discoverText">Discover</span>
                <span className="nowText">Now</span>
              </Link>
            </button>
          </div>

          {/* Right side text */}
          <p className="herorightText">
            MysticAura captures the allure of cosmic beauty, meticulously and
            timeless elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
