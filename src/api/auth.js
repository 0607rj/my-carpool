// src/api/auth.js
import apiClient from './apiClient';

// Login
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/schema/login", { email, password });
    const userData = response.data;

    // Store token and user data in localStorage
    localStorage.setItem("userToken", userData.token); 
    localStorage.setItem("user", JSON.stringify(userData.user)); 
    return userData;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// Sign up function
export const signupUser = async (email, password, name) => {
  try {
    const response = await apiClient.post("/schema/signup", { email, password, name });
    const userData = response.data;
    localStorage.setItem("userToken", userData.token); // Store token in localStorage
    localStorage.setItem("user", JSON.stringify(userData.user)); // Store user data
    return userData; // Return the user data with token
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error; // Propagate the error
  }
};

// Verify OTP function
export const verifyOtp = async (userId, otp) => {
  try {
    const response = await apiClient.post(`/schema/enter-otp/${userId}`, { otp });
    return response.data; // Return the response data after OTP verification
  } catch (error) {
    console.error("OTP verification failed:", error.response?.data || error.message);
    throw error; // Propagate the error
  }
};





// Fetch User Profile
export const fetchUserProfile = async () => {
  try {
    const response = await apiClient.get("/schema/user-profile"); // Endpoint for user profile
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error.response?.data || error.message);
    throw error;
  }
};

// Update User Profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await apiClient.put("/schema/update-profile", userData); // Replace with the correct endpoint
    const updatedUser = response.data;

    // Optionally, update localStorage with the new user data after updating
    localStorage.setItem("user", JSON.stringify(updatedUser.user));

    return updatedUser;
  } catch (error) {
    console.error("Failed to update user profile:", error.response?.data || error.message);
    throw error;
  }
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("userToken");  // Clear token from localStorage
  localStorage.removeItem("user"); // Clear user data from localStorage
};

// Send Reset OTP (Forgot Password)
export const sendResetOtp = async (email) => {
  try {
    const response = await apiClient.post("http://localhost:4000/schema/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error("Sending OTP failed:", error.response?.data || error.message);
    throw error;
  }
};

// Reset Password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await apiClient.post(`http://localhost:3000/reset-password/${token}`, { newPassword });
    return response.data;
  } catch (error) {
    console.error("Resetting password failed:", error.response?.data || error.message);
    throw error;
  }
};
