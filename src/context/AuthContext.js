import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context to provide authentication state throughout the app
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component to wrap around the app and manage the authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check localStorage to see if the user is logged in when the app loads
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        // Clear invalid data
        localStorage.removeItem("userToken");
        localStorage.removeItem("user");
      }
    }
  }, []); // Only runs once when the component mounts

  // Login function
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData.user);
    localStorage.setItem("userToken", userData.token); // Store the token in localStorage
    localStorage.setItem("user", JSON.stringify(userData.user)); // Store user data in localStorage
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("userToken"); // Clear token from localStorage
    localStorage.removeItem("user"); // Clear user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
