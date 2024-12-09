import React, { useState } from 'react';
import axios from 'axios'; // For sending requests
import "../styles/car-verification.css"; 

const CarVerificationPage = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    vehicleModel: '',
    vehiclePlate: '',
    location: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({ ...vehicleDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use environment variable for backend API URL
      const apiUrl = process.env.REACT_APP_BACKEND_API_URL; // This will be defined in .env file
      const response = await axios.post(`${apiUrl}/api/verify-car`, vehicleDetails);
      
      console.log(response.data);
      alert('Car verification successful!');
    } catch (error) {
      console.error('Error during car verification:', error);
      alert('Car verification failed.');
    }
  };

  return (
    <div className="car-verification-container">
      <h2>Car Verification</h2>

      <form onSubmit={handleSubmit} className="car-verification-form">
        <div className="form-group">
          <label htmlFor="vehicleModel">Vehicle Model:</label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={vehicleDetails.vehicleModel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehiclePlate">Vehicle Plate:</label>
          <input
            type="text"
            id="vehiclePlate"
            name="vehiclePlate"
            value={vehicleDetails.vehiclePlate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={vehicleDetails.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={vehicleDetails.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="verify-button">
          Verify Car
        </button>
      </form>
    </div>
  );
};

export default CarVerificationPage;
