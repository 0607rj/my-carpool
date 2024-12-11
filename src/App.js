import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UserSelectionPage from "./pages/UserSelectionPage";
import OfferRidePage from "./pages/OfferRidePage";
import RideSearch from "./pages/RideSearch";
import CarListPage from './pages/CarListPage';
import CarVerification from './pages/CarVerification';
import VerifyOtp from './pages/VerifyOtp';

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/login.css';
import './styles/signup.css';
import './styles/forgot-password.css';
import './styles/reset-password.css';
import './styles/user-selection.css';

// Import Auth functions (ensure these are correctly defined in api/auth.js)
import { isLoggedIn, getUserFromLocalStorage, logoutUser } from "./api/auth";

// Import AuthContext and AuthProvider
import { AuthProvider } from './context/AuthContext';  // Ensure this path is correct

const App = () => {
  const [user, setUser] = useState(null);  // To store the logged-in user
  const location = useLocation();

  // Check if user is logged in on component mount
  useEffect(() => {
    if (isLoggedIn()) {
      const userData = getUserFromLocalStorage();
      setUser(userData);  // Set the user from localStorage if logged in
    }
  }, []);

  const handleLogout = () => {
    logoutUser();  // Call logout to clear localStorage
    setUser(null);  // Update the user state
  };

  // List of routes that shouldn't display the footer
  const noFooterRoutes = [
    "/login", 
    "/signup", 
    "/forgot-password", 
    "/ridesearch", 
    "/offer-ride", 
    "/verify-otp",
    "/car-list",
    "/car-verification"
  ];

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-selection" element={<UserSelectionPage />} />
        <Route path="/offer-ride" element={<OfferRidePage />} />
        <Route path="/ridesearch" element={<RideSearch />} />
        <Route path="/car-list" element={<CarListPage />} />
        <Route path="/car-verification" element={<CarVerification />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!noFooterRoutes.some(route => location.pathname.startsWith(route)) && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    {/* Wrap the app with AuthProvider to provide authentication context */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

export default AppWrapper;
