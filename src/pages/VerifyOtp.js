import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../api/auth"; // Assuming you have an API function to verify OTP
import "../styles/verifyOtp.css";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(""); // State to hold OTP input
  const [error, setError] = useState(""); // State to show error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state for OTP verification
  const navigate = useNavigate(); // To navigate after OTP verification

  // Retrieve the email from localStorage (assuming the email is saved after signup or email submission)
  const email = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setIsLoading(true);

    if (!otp) {
      setError("OTP is required.");
      setIsLoading(false);
      return;
    }

    if (!email) {
      setError("Email is missing. Please try again.");
      setIsLoading(false);
      return;
    }

    try {
      // Call the API with email and OTP for verification
      const data = await verifyOtp(email, otp); // Pass both email and OTP
      console.log("OTP verification successful:", data);

      // Redirect to login page after successful OTP verification
      navigate("/login"); // Navigate to login page (or wherever you want)

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
