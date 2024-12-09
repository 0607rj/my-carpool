// CarListPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';  // Import axios for API requests

const CarListPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();  // To get data passed via state

  const { from, to, date, time } = location.state || {};  // Destructure search params

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BACKEND_API_URL;  // Blank space for backend API URL
        const response = await axios.get(`${apiUrl}/api/cars`, {
          params: {
            from,
            to,
            date,
            time
          }
        });
        setCars(response.data);
      } catch (err) {
        setError('Failed to load cars');
      } finally {
        setLoading(false);
      }
    };

    if (from && to && date && time) {
      fetchCars();
    }
  }, [from, to, date, time]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="car-list-container">
      <h2>Available Cars for Ride</h2>
      {cars.length === 0 ? (
        <p>No cars available for the selected ride.</p>
      ) : (
        <div className="car-list">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <h3>{car.make} {car.model}</h3>
              <p>Seats Available: {car.availableSeats}</p>
              <p>From: {car.from}</p>
              <p>To: {car.to}</p>
              <p>Date: {new Date(car.date).toLocaleDateString()}</p>
              <p>Time: {new Date(car.time).toLocaleTimeString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarListPage;
