import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Styles/SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <a
        href="https://github.com/mrRio8936"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/gaurav-c-983873139/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.icon} />
      </a>
      <a
        href="https://www.instagram.com/gaurav_chand09/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialLinks;
