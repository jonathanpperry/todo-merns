import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

export const useAxiosInstance = () => {
  const { getToken } = useAuth();

  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(async (config) => {
    const token = await getToken();
    console.log("Clerk token:", token); // ← add this

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return instance;
};
