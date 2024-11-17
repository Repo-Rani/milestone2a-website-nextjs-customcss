"use client";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  // State for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo Section */}
        <div className="logo">
          <Image
            src="/logo.png"
            alt="logo_image"
            height={200}
            width={200}
            className="logo-img"
          />
        </div>

        {/* Menu Section */}
        <div className={`menu ${isMenuOpen ? "menu-open" : "menu-close"}`}>
          <ul className="menu-list">
            <li><Link href="/" onClick={toggleMenu} className={`menu-link ${pathName === "/" ? "active" : ""}`}>Home</Link></li>
            <li><Link href="/collection" onClick={toggleMenu} className={`menu-link ${pathName === "/collection" ? "active" : ""}`}>Collection</Link></li>
            <li><Link href="/popular" onClick={toggleMenu} className={`menu-link ${pathName === "/popular" ? "active" : ""}`}>Popular</Link></li>
            <li><Link href="/about" onClick={toggleMenu} className={`menu-link ${pathName === "/about" ? "active" : ""}`}>About</Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className={`menu-link ${pathName === "/contact" ? "active" : ""}`}>Contact</Link></li>
          </ul>
        </div>

        {/* Toggle Button for Mobile View */}
        <div className="toggle-button" onClick={toggleMenu}>
          <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
