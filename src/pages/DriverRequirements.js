import React from 'react';
import '../styles/driver-requirements.css'; // Correct relative path


const DriverRequirements = () => {
  return (
    <div className="driver-requirements-container">
      <div className="driver-container">
      <h2><b>Here's what you need to sign up</b></h2>
      <p>To offer rides, make sure you meet the following requirements:</p>
      <ul className="requirements-list">
        <li>✔️ A valid driver’s license</li>
        <li>✔️ A registered vehicle in good condition</li>
        <li>✔️ Proof of insurance for your vehicle</li>
        <li>✔️ Ability to provide a safe and reliable ride</li>
        <li>✔️ Must be at least 18 years old</li>
        <li>✔️ Clean driving record (no major violations in the past 2 years)</li>
      </ul>
      <p>If you meet these criteria, you're ready to sign up and start offering rides!</p>
      </div>
    </div>
  );
};

export default DriverRequirements;
