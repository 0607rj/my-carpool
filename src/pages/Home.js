import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "../styles/home.css"; // Ensure you have home.css for styling of the Home page
import DriverRequirements from "./DriverRequirements"; // Import the DriverRequirements component
import UserSelectionPage from "./UserSelectionPage"; // Correct import path to UserSelectionPage

const Home = () => {
  const navigate = useNavigate(); // For navigation to the signup page

  // Function to navigate to the signup page (optional)
  const handleSignup = () => {
    navigate("/signup"); // Navigates to the signup route
  };

  return (
    <>
      <div className="home-page">
        <div className="welcome-container">
          <h1>WELCOME TO</h1>
          <h1><b>ECO-DRIVE!</b></h1>
          <p>Travel Safe With Us</p>
          <p className="animate-text">Share your ride, save your money!</p>
        </div>
      </div>


      {/* Displaying UserSelectionPage below */}
      <div className="user-selection">
        <UserSelectionPage /> {/* Rendering UserSelectionPage component */}
      </div>


      
      {/* Displaying the Driver Requirements */}
      <div className="driver-requirements-section">
        <DriverRequirements /> {/* Displaying driver signup requirements */}
      </div>

      {/* Optional Signup Button to navigate to the signup page */}
      <div className="signup-button-section">
        <button onClick={handleSignup} className="signup-button">
          Sign Up as a Driver
        </button>
      </div>




    </>
  );
};

export default Home;
