import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import SocialLinks from "./assets/components/SocialLinks";
import ContactForm from "./assets/components/ContactForm";
// import AreasOfInterest from "./assets/components/AreasOfInterest";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SocialLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
