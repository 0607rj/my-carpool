import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/carlist.css';

const CarListPage = () => {
  const { state } = useLocation(); // Get state passed from RideSearchPage
  const { cars } = state || { cars: [] }; // Default to empty array if no cars are passed

  return (
    <div className="car-list-container">
      <h2>Available Cars</h2>

      {/* If there are no cars, display a message */}
      {cars.length === 0 ? (
        <p>No available cars for your search criteria.</p>
      ) : (
        <div className="car-list">
          {cars.map((car, index) => (
            <div key={index} className="car-card">
              <h3>{car.from} to {car.to}</h3>
              <p>Date: {car.travelDate}</p>
              <p>Time: {car.travelTime}</p>
              <p>Available Seats: {car.availableSeats}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarListPage;
