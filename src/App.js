import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

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

const App = () => {
  const location = useLocation();

  // List of routes that shouldn't display the footer
  const noFooterRoutes = ["/login", "/signup", "/forgot-password", "/ridesearch", "/offer-ride", "/verify-otp/:userId"];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-selection" element={<UserSelectionPage />} />
        <Route path="/offer-ride" element={<OfferRidePage />} />
        <Route path="/ridesearch" element={<RideSearch />} />
        <Route path="/car-verification" element={<CarVerification />} />
        <Route path="/verify-otp/:userId" element={<VerifyOtp />} />  
      </Routes>

  
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
