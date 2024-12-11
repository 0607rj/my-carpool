import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: <a href="happyhome18110@gmail.com">happyhome18110@gmail.com</a></li>
            <li>Phone: <a href="tel:955+">955xxxxx</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="">Instagram</a></li>
          </ul>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>&copy; 2024 Carpooling. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
