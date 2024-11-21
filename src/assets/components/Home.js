import React from "react";
import styles from "./Styles/Home.module.css";
import { useState } from "react";
import ResumeDownload from "./ResumeDownload";
import AreasOfInterest from "./AreasOfInterest";

const Home = () => {
  // const sectionRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Handle button click to toggle content visibility
  const handleExploreClick = () => {
    setShowContent(!showContent); // Toggle visibility
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.introText}>Hi, my name is</p>
        <h1 className={styles.name}>Gaurav Chand.</h1>
        <h2 className={styles.tagline}>I build things for the web ...</h2>
        <p className={styles.description}>
          A passionate Web Developer with a keen interest in Data Science,
          Machine Learning, and Artificial Intelligence. I specialize in
          building dynamic, responsive websites and applications that seamlessly
          integrate with innovative technologies. On this portfolio, you'll find
          a collection of my work, ranging from web development projects to
          AI-driven applications. I'm constantly exploring the intersection of
          code and data to create smarter solutions that make a difference.
        </p>
        <button className={styles.exploreButton} onClick={handleExploreClick}>
          Explore →
        </button>
      </div>
      <AreasOfInterest />
      <ResumeDownload />
    </>
  );
};

export default Home;
