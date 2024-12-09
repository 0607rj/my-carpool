import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/user-selection.css";

const UserSelectionPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated on page load
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  // Handle "Book a Ride" button click
  const handleBookRide = () => {
    if (!isAuthenticated) {
      // Navigate to ride search page
      navigate("/ridesearch"); // Correct route path for RideSearch page
      setTimeout(() => {
        alert("You are not logged in. You can proceed, but you will need to log in to confirm and finalize the booking.");
      }, 100); // Small delay to ensure navigation happens first
    } else {
      // Navigate to ride search page
      navigate("/ridesearch"); // Navigate directly if authenticated
    }
  };

  // Handle "Offer a Ride" button click
  const handleOfferRide = () => {
    if (!isAuthenticated) {
      // Navigate to offer ride page
      navigate("/offer-ride");
      setTimeout(() => {
        alert("You are not logged in. You can proceed, but you will need to log in to confirm and finalize offering the ride.");
      }, 100); // Small delay to ensure navigation happens first
    } else {
      // Navigate directly to offer ride page if authenticated
      navigate("/offer-ride");
    }
  };

  return (
    <div className="user-selection-container">
      <div className="user-selection-content">
        <h2>Ready to Ride or Help Someone Else?</h2>
        <div className="user-selection-buttons">
          <button onClick={handleBookRide} className="selection-button">
            Book a Ride
          </button>
          <button onClick={handleOfferRide} className="selection-button">
            Offer a Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionPage;
