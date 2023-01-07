import { store } from "@/app/store";
import { sessionModel } from "@/entities/session";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  async (err: any) => {
    try {
      if (err.response.status === 401 && !err.config.ignore) {
        err.config.ignore = true;
        const response = await axios.post(
          "http://localhost:5000/refresh_token",
          { refreshToken: localStorage.getItem("refreshToken") }
        );
        localStorage.setItem("token", response.data.access_token);
        return axios.request(err.config);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

axios.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
