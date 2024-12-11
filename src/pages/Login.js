import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import { loginUser } from "../api/auth";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);  
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  
    setIsLoading(true);  

    
    if (!email || !password) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await loginUser(email, password); 
      localStorage.setItem("token", data.token);  
      console.log("Login successful:", data);
      navigate("/");  
    } catch (err) {
      setError(err.response?.data?.message || "Login failed! Please try again.");
      console.error("Error during login:", err);
    } finally {
      setIsLoading(false);  
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Login Form Box */}
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}  
          <div className="signup-prompt">
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;