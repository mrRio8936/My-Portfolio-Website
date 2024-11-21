import React from "react";
import styles from "./Styles/ResumeDownload.module.css"; // Create a new CSS module for styling
import Resume from "./Resume/Resume.pdf";
const ResumeDownload = () => {
  return (
    <div className={styles.resumeContainer}>
      <a
        href={Resume} // Replace this with the actual path to your resume PDF
        download="Gaurav_Chand_Resume.pdf" // Filename when downloaded
        className={styles.downloadButton}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
