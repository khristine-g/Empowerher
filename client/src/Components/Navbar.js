import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa"; // Importing an icon
import "../Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-brand">
        <FaLightbulb className="brand-icon" /> {/* Adding an icon */}
        EMPOWERHER
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/submit-project">Submit Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
