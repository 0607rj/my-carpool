
import apiClient from './apiClient';

export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/schema/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const signupUser = async (email, password, name) => {
  try {
    const response = await apiClient.post("/schema/signup", { email, password, name });
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error;
  }
};

export const resetPassword = async (otp, newPassword) => {
  try {
    const response = await apiClient.post("/schema/reset-password", { otp, newPassword });
    return response.data;
  } catch (error) {
    console.error("Resetting password failed:", error.response?.data || error.message);
    throw error;
  }
};

export const sendResetOtp = async (email) => {
  try {
    const response = await apiClient.post("/schema/forgot-password", { email });
    return response.data;  
  } catch (error) {
    console.error("Sending OTP failed:", error.response?.data || error.message);
    throw error;  
  }
};
