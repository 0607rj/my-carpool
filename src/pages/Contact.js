import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing styles for the page
import '../styles/contact.css';  // Assuming your CSS is in the 'styles' folder

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulate an API call (for now, you can replace this with a real API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("Thank you for contacting us! We will get back to you soon.");
    }, 2000);
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>If you have any questions, feedback, or just want to say hello, feel free to reach out!</p>
      </header>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Display success or error messages */}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p>Prefer to reach us directly? Here’s how you can get in touch:</p>
        <ul>
          <li>
            <strong>Email:</strong> support@carpool.com
          </li>
          <li>
            <strong>Phone:</strong> +1 123-456-7890
          </li>
          <li>
            <strong>Address:</strong> 123 Carpool Street, City, Country
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Have More Questions?</h2>
        <p>If you need more information or want to learn more about our services, feel free to <Link to="/services">explore our services</Link> or contact us anytime.</p>
      </section>
    </div>
  );
};

export default Contact;
