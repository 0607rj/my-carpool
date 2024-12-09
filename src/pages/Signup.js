import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth"; // Ensure this function is correctly implemented
import "../styles/signup.css"; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To manage button state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous error messages
    setIsLoading(true); // Disable button during submission

    // Validation checks
    if (!name || !email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      // Call signup API
      const data = await signupUser(email, password, name);
      console.log("Signup successful:", data);

      // Navigate to login page after successful signup
      navigate("/login");
    } catch (err) {
      // Handle API errors
      setError(err.response?.data?.message || "Signup failed! Please try again.");
      console.error("Error during signup:", err);
    } finally {
      setIsLoading(false); // Re-enable button
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <div className="login-prompt">
            <p>Already have an account? <a href="/login">Login here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
