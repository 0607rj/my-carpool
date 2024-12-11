import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ridesearch.css';

const RideSearchPage = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const [suggestions, setSuggestions] = useState([]);
  const locations = ['Akgec', 'Govindpuram', 'Noida Sector 62', 'Noida Sector 18', 'Delhi'];
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

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

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!formData.from || !formData.to || !formData.date || !formData.time) {
      alert('Please fill all fields');
      return;
    }

    const apiUrl = process.env.REACT_APP_BACKEND_API_URL || 'https://task-4-2.onrender.com';

    try {
      const response = await axios.post(`${apiUrl}/search`, formData);
      const cars = response.data?.cars || []; // Assuming the API returns a list of cars in `cars` key
      // Navigate to the CarListPage and pass the cars data through state
      navigate('/car-list', { state: { cars } });
    } catch (error) {
      console.error('Error while searching rides:', error);
      alert('An error occurred while searching for rides. Please try again later.');
    }
  };

  return (
    <div className="full-page">
      <div className="ride-search-container">
        <h2>Find Your Ride</h2>
        <form onSubmit={handleSearch} className="ride-search-form">
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
              required
              min={today} // Restrict date to today or later
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

          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default RideSearchPage;
