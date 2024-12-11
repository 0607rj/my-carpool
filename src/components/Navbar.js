import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Use the auth context to manage authentication

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Destructure the isAuthenticated and logout from useAuth

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
    }
  };

  return (
    <nav className="navbar">
      <h1><b>ECO-DRIVE!</b></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {isAuthenticated ? (
          <>
            <li><button onClick={handleLogout}>Logout</button></li>
            <li><Link to="/profile">Profile</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
