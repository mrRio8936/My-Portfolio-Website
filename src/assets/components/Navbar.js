import React, { useState } from "react";
import styles from "./Styles/Navbar.module.css";
import logo from "./Images/Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <a href="/home">
        <div className={styles.logo}>
          <img src={logo} alt="Gauav." className={styles.logoImage} />
        </div>
      </a>

      {/* Hamburger Icon */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Navigation Links */}
      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
        <div className={styles.contactLink}>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
