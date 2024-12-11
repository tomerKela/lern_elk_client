import axios from "axios";
import { useAuthStore } from "../../data/authStore";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost";

export const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

const addTokenToRequest = (config: any) => {
  const authState = useAuthStore.getState() || {};
  const token = authState?.data?.token;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
};

apiClient.interceptors.request.use(addTokenToRequest, (error) =>
  Promise.reject(error)
);
