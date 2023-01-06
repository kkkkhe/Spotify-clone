import axios from "axios";

export const baseURL = "http://localhost:5000";

export const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config: any): any => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
