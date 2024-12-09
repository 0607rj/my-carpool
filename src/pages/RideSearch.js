// RideSearch.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ridesearch.css'; // Make sure to link the CSS

const RideSearch = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const [suggestions, setSuggestions] = useState([]);

  const locations = ['Akgec', 'Govindpuram', 'Noida Sector 62', 'Noida Sector 18', 'Delhi'];
  const navigate = useNavigate();

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

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Redirect to Car List Page, passing search data as state or query params
    navigate('/car-list', { state: formData });
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

export default RideSearch;
