import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/home.css"; // 
import DriverRequirements from "./DriverRequirements"; 
import UserSelectionPage from "./UserSelectionPage"; 

const Home = () => {
  const navigate = useNavigate(); 

  
  const handleSignup = () => {
    navigate("/signup"); 
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


      
      <div className="user-selection">
        <UserSelectionPage /> 
      </div>


      
    
      <div className="driver-requirements-section">
        <DriverRequirements /> 
      </div>

      
      <div className="signup-button-section">
        <button onClick={handleSignup} className="signup-button">
          Sign Up as a Driver
        </button>
      </div>




    </>
  );
};

export default Home;
