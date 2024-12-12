import React from "react";
import { Link } from "react-router-dom";

// Importing styles for the page
import '../styles/services.css';  // Assuming your CSS is in the 'styles' folder

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <header className="services-header">
        <h1>Our Carpool Services</h1>
        <p>Join our community for safe, affordable, and eco-friendly ridesharing.</p>
      </header>

      {/* Ride-Sharing Services Section */}
      <section className="services-section">
        <h2>Ride-Sharing Made Easy</h2>
        <p>Our platform connects drivers with riders to share trips, reduce costs, and lessen environmental impact. Whether you're commuting to work, heading to a special event, or simply need a ride, we've got you covered!</p>
        <ul>
          <li>Offer or request rides easily through our app.</li>
          <li>Save money by sharing your trip with others.</li>
          <li>Reduce your carbon footprint with eco-friendly options.</li>
        </ul>
      </section>

      {/* Safety and Security Section */}
      <section className="services-section">
        <h2>Your Safety is Our Priority</h2>
        <p>We take safety seriously. From verifying users and vehicles to providing insurance, we ensure that every ride is secure.</p>
        <ul>
          <li>Comprehensive background checks for all drivers.</li>
          <li>In-app ride tracking and real-time notifications.</li>
          <li>24/7 customer support for any issues that arise during your ride.</li>
        </ul>
      </section>

      {/* Vehicle Verification Section */}
      <section className="services-section">
        <h2>Verified Vehicles for Safe Journeys</h2>
        <p>We make sure all vehicles on our platform meet high safety and cleanliness standards through regular inspections and verification processes.</p>
        <ul>
          <li>Vehicles undergo routine safety checks before being approved.</li>
          <li>Drivers must upload clear photos and vehicle documents.</li>
          <li>Track vehicle conditions with our easy-to-use platform.</li>
        </ul>
      </section>

      {/* User Profiles Section */}
      <section className="services-section">
        <h2>Build Your Reputation</h2>
        <p>Our community thrives on trust. Each user has a profile with ratings and reviews, helping both drivers and passengers make informed decisions.</p>
        <ul>
          <li>Rate your driver or passenger after each ride.</li>
          <li>View user profiles with verified reviews.</li>
          <li>Earn trust points and unlock benefits as a top-rated user.</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="services-section">
        <h2>Affordable Pricing</h2>
        <p>Whether you're offering a ride or requesting one, our pricing is designed to be fair and affordable for everyone. We aim to make carpooling an accessible option for all users.</p>
        <ul>
          <li>No hidden fees — clear pricing up front.</li>
          <li>Pay per trip or subscribe for additional savings.</li>
          <li>Split costs with others to make rides even more affordable.</li>
        </ul>
      </section>

      {/* Why Choose Us? Section */}
      <section className="services-section">
        <h2>Why Choose Us?</h2>
        <p>We are committed to creating a seamless carpooling experience. Here’s why our users love us:</p>
        <ul>
          <li>Eco-friendly solution to reduce traffic and pollution.</li>
          <li>Earn rewards for offering rides and helping the community.</li>
          <li>Simple, user-friendly platform with a mobile app for on-the-go access.</li>
          <li>Dedicated customer support to address any concerns.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Carpooling?</h2>
        <p>Join our community today and start sharing rides! Whether you're looking for a ride or ready to offer one, we make carpooling easy and safe for everyone.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button">Sign Up</Link>
          <Link to="/login" className="cta-button">Log In</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
