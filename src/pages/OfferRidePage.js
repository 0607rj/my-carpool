import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';  
import "../styles/offerride.css"; 

const OfferRidePage = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    availableSeats: 1,
  });

  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const locations = ['Akgec', 'Govindpuram', 'Noida Sector 62', 'Noida Sector 18', 'Delhi'];

  // Get the current date in 'YYYY-MM-DD' format
  const currentDate = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.length > 2) {
      setSuggestions(locations.filter(loc => loc.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (value, field) => {
    setFormData({ ...formData, [field]: value });
    setSuggestions([]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/car-verification');  

    const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    try {
      const response = await axios.post(`${apiUrl}/api/offer-ride`, formData, {
        headers: {
          'Authorization': `Bearer ${apiKey}`, 
          'Content-Type': 'application/json',
        }
      });

      console.log(response.data);  
    } catch (error) {
      console.error('Error while offering ride:', error); 
    }
  };

  return (
    <div className="offer-ride-container">
      <h2>Offer a Ride</h2>

      <form onSubmit={handleSubmit} className="offer-ride-form">
        <div className="input-group">
          <label htmlFor="from">Pickup Location:</label>
          <input
            type="text"
            id="from"
            name="from"
            placeholder="Enter pickup location"
            value={formData.from}
            onChange={handleChange}
            required
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSelect(suggestion, 'from')}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="to">Drop Location:</label>
          <input
            type="text"
            id="to"
            name="to"
            placeholder="Enter drop location"
            value={formData.to}
            onChange={handleChange}
            required
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSelect(suggestion, 'to')}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={currentDate}  // Setting the minimum date to today
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="availableSeats">Available Seats:</label>
          <input
            type="number"
            id="availableSeats"
            name="availableSeats"
            value={formData.availableSeats}
            onChange={(e) => setFormData({ ...formData, availableSeats: e.target.value })}
            min="1"
            max="6"
            required
          />
        </div>

        <button type="submit" className="offer-button">
          Offer Ride
        </button>
      </form>
    </div>
  );
};

export default OfferRidePage;
