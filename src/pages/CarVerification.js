import React, { useState } from 'react';
import axios from 'axios';
import "../styles/car-verification.css";

const CarVerificationPage = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    vehicleType: 'Car',
    vehicleModel: '',
    vehiclePlate: '',
    yearOfPurchase: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({ ...vehicleDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId'); 
    if (!userId) {
      alert("Please login to verify your car.");
      return;
    }

    const apiUrl = 'https://task-4-2.onrender.com'; 

    
    const carData = {
      vehicleType: vehicleDetails.vehicleType,
      vehicleModel: vehicleDetails.vehicleModel,
      vehiclePlate: vehicleDetails.vehiclePlate,
      yearOfPurchase: vehicleDetails.yearOfPurchase,
    };

    try {
      // Make the request to verify the car
      const response = await axios.post(`${apiUrl}/verify-car/${userId}`, carData);
      console.log(response.data);
      alert('Car verified successfully!');
  
    } catch (error) {
      console.error('Error while verifying car:', error);
      alert("Failed to verify car. Please try again.");
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
          <label htmlFor="yearOfPurchase">Year of Purchase:</label>
          <input
            type="number"
            id="yearOfPurchase"
            name="yearOfPurchase"
            value={vehicleDetails.yearOfPurchase}
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
