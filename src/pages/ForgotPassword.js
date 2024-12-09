import React, { useState } from "react";
import { sendResetOtp } from "../api/auth";  

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); 
    setSuccessMessage(""); 

    if (!email) {
      setError("Please enter your email.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await sendResetOtp(email);
      setSuccessMessage("OTP sent successfully to your email!");
      console.log(data);  //i can log the response here
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSendOtp}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default ForgotPassword;
