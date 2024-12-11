import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/carlist.css';

const CarListPage = () => {

  const { state } = useLocation();
  
  
  const { cars } = state || { cars: [] };

  return (
    <div className="car-list-container">
      <h2>Available Cars</h2>
      
      {/* Check if there are cars available */}
      <div className="car-list">
        {cars && cars.length > 0 ? (
        
          cars.map((car, index) => (
            <div key={index} className="car-card">
              <h3>{car.from} to {car.to}</h3>
              <p>Date: {car.travelDate}</p>
              <p>Time: {car.travelTime}</p>
              <p>Available Seats: {car.availableSeats}</p>
            </div>
          ))
        ) : (
          
          <p>No available cars for your search criteria</p>
        )}
      </div>
    </div>
  );
};

export default CarListPage;
