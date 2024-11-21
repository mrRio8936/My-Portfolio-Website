import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaRobot,
  FaCloud,
  FaDatabase,
  FaChartBar,
  FaGithub,
} from "react-icons/fa";
import styles from "./Styles/AreasOfInterest.module.css";

const AreasOfInterest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const interests = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive and dynamic web applications.",
    },
    {
      icon: <FaRobot />,
      title: "Machine Learning",
      description: "Creating intelligent models to solve real-world problems.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description: "Deploying scalable and secure cloud-based solutions.",
    },
    {
      icon: <FaDatabase />,
      title: "Data Analytics",
      description: "Analyzing complex datasets to uncover insights.",
    },
    {
      icon: <FaChartBar />,
      title: "Artificial Intelligence",
      description: "Exploring AI to automate and innovate.",
    },
    {
      icon: <FaGithub />,
      title: "Open Source",
      description: "Contributing to the open-source community.",
    },
  ];

  return (
    <div
      className={`${styles.interestContainer} ${
        isVisible ? styles.fadeIn : ""
      }`}
      ref={sectionRef}
    >
      <h2
        className={`${styles.title} ${isVisible ? styles.animatedTitle : ""}`}
      >
        Areas of Interest
      </h2>
      <p className={`${styles.subtitle} ${isVisible ? styles.typewriter : ""}`}>
        Take a look at some of the things I love working on.
      </p>
      <div className={styles.grid}>
        {interests.map((interest, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{interest.icon}</div>
            <h3 className={styles.cardTitle}>{interest.title}</h3>
            <p className={styles.cardDescription}>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasOfInterest;
