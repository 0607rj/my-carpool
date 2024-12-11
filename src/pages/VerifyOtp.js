import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOtp } from "../api/auth"; 
import "../styles/verifyOtp.css"; 

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {}; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setIsLoading(true);


    if (!otp) {
      setError("OTP is required.");
      setIsLoading(false);
      return;
    }

    try {
      // Call verify OTP API
      const data = await verifyOtp(userId, otp);
      console.log("OTP verification successful:", data);

      // Redirect to login page after successful OTP verification
      navigate("/login");

    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed! Please try again.");
      console.error("Error during OTP verification:", err);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-container">
        <div className="otp-form">
          <h2>Verify OTP</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
