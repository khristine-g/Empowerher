import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaBars } from "react-icons/fa";
import "../Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-brand">
        <FaLightbulb className="brand-icon" />
        EMPOWERHER
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/submit-project" onClick={() => setIsMenuOpen(false)}>Submit Project</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Signup</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
