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
import Services from "./pages/Services"; 
import Contact from "./pages/Contact"; 
import HelpCentre from "./pages/HelpCentre";

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing styles
import './styles/global.css';           // Global styles
import './styles/navbar.css';           // Navbar styles
import './styles/footer.css';           // Footer styles
import './styles/login.css';            // Login page styles
import './styles/signup.css';           // Signup page styles
import './styles/forgot-password.css';  // Forgot Password page styles
import './styles/reset-password.css';   // Reset Password page styles
import './styles/user-selection.css';   // User Selection page styles

// Import Auth functions (ensure these are correctly defined in api/auth.js)
import { isLoggedIn, getUserFromLocalStorage, logoutUser } from "./api/auth";

// Import AuthContext and AuthProvider
import { AuthProvider } from './context/AuthContext';

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
        <Route path="/services" element={<Services />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-selection" element={<UserSelectionPage />} />
        <Route path="/offer-ride" element={<OfferRidePage />} />
        <Route path="/ridesearch" element={<RideSearch />} />
        <Route path="/help-centre" element={<HelpCentre />} />

        <Route path="/car-list" element={<CarListPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/car-verification" element={<CarVerification />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!noFooterRoutes.some(route => location.pathname.startsWith(route)) && <Footer />}
    </>
  );
};

// Wrap your app with AuthProvider
const AppWrapper = () => (
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);

export default AppWrapper;
