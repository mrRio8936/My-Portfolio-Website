import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import styles from "./Styles/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can replace this with an API call)
    console.log(formData);
  };

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2 className={styles.formTitle}>Contact Me</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="name">
            <FaUser className={styles.icon} />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">
            <FaEnvelope className={styles.icon} />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone">
            <FaPhone className={styles.icon} />
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">
            <FaComment className={styles.icon} />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textareaField}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
