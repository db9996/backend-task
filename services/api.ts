import axios, { AxiosInstance } from "axios";

// Create Axios instance
const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
