import axios, { AxiosRequestConfig } from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios-base-query";

export const baseURL = "http://localhost:5000";
export const $api = axios.create({
  baseURL,
});
export const $httpApi = createApi({
  reducerPath: "httpApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({ url: "todos", method: "get" }),
    }),
  }),
});

export const { useGetTasksQuery } = $httpApi;

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
