import apiClient from './apiClient';  // Import the apiClient to interact with the backend

// Login function
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/schema/login", { email, password });
    const userData = response.data;

    // Store token and user data in localStorage for persistence
    localStorage.setItem("userToken", userData.token); 
    localStorage.setItem("user", JSON.stringify(userData.user)); 

    return userData;  // Return the user data
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;  // Propagate error to the calling function
  }
};

// Signup function
export const signupUser = async (email, password, name) => {
  try {
    const response = await apiClient.post("/schema/signup", { email, password, name });
    const userData = response.data;

    // Store token and user data in localStorage for persistence
    localStorage.setItem("userToken", userData.token);
    localStorage.setItem("user", JSON.stringify(userData.user)); 

    return userData; // Return the user data with token
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error;  // Propagate error
  }
};

// Verify OTP function (no userId needed)
export const verifyOtp = async (otp) => {
  try {
    const response = await apiClient.post("/schema/verify-otp", { otp });
    return response.data;  // Return the response data after OTP verification
  } catch (error) {
    console.error("OTP verification failed:", error.response?.data || error.message);
    throw error;  // Propagate error
  }
};

// Fetch user profile (returns profile data of the logged-in user)
export const fetchUserProfile = async () => {
  try {
    const response = await apiClient.get("/schema/user-profile"); // Endpoint for user profile
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error.response?.data || error.message);
    throw error; // Propagate error
  }
};

// Update user profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await apiClient.put("/schema/update-profile", userData); // Correct API endpoint for updating profile
    const updatedUser = response.data;

    // Optionally, update localStorage with the new user data after updating
    localStorage.setItem("user", JSON.stringify(updatedUser.user)); 

    return updatedUser;
  } catch (error) {
    console.error("Failed to update user profile:", error.response?.data || error.message);
    throw error;
  }
};

// Logout function
export const logoutUser = () => {
  localStorage.removeItem("userToken"); // Clear token from localStorage
  localStorage.removeItem("user"); // Clear user data from localStorage
};

// Send reset OTP for forgot password
export const sendResetOtp = async (email) => {
  try {
    const response = await apiClient.post("http://localhost:4000/schema/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error("Sending OTP failed:", error.response?.data || error.message);
    throw error;  // Propagate error
  }
};

// Reset password using a token
export const resetPassword = async (token, newPassword) => {
  try {
    // Corrected the URL string by using backticks for string interpolation
    const response = await apiClient.post(`http://localhost:3000/reset-password/${token}`, { newPassword });
    return response.data;
  } catch (error) {
    console.error("Resetting password failed:", error.response?.data || error.message);
    throw error;  // Propagate error
  }
};

// Helper function to check if user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem("userToken");  // Check if token exists in localStorage
};

// Helper function to get the user data from localStorage
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;  // Return the user data if it exists
};
