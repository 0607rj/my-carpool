import React, { useState } from "react";
import { resetPassword } from "../api/auth"; 

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous errors
    setSuccessMessage(""); 

    if (!email || !otp || !newPassword) {
      setError("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await resetPassword(email, otp, newPassword);
      setSuccessMessage("Password reset successfully!");
      console.log(data);  //i can log the response here
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Enter OTP" 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Enter new password" 
          value={newPassword} 
          onChange={(e) => setNewPassword(e.target.value)} 
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default ResetPassword;
