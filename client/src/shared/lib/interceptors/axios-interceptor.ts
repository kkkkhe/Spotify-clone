import axios from "axios";

export const $api = axios.create({
  baseURL: "http://localhost:5000",
});

$api.interceptors.request.use((config: any): any => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (res: any) => {
    return res;
  },
  async (error) => {
    try {
      if (error.response.status === 401 && !error.config.ignore) {
        error.config.ignore = true;
        const response = await axios.post(
          "http://localhost:5000/refresh_token",
          { refreshToken: localStorage.getItem("refreshToken") }
        );
        localStorage.setItem("token", response.data.access_token);
        return $api.request(error.config);
      }
    } catch (error) {
      console.log("User is not authorized");
      return;
    }
  }
);
