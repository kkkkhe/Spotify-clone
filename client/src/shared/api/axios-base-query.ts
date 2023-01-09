import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { $api } from "../lib/interceptors";

export const axiosBaseQuery =
  ({
    baseUrl,
  }: {
    baseUrl: string;
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestHeaders;
    },
    unknown,
    {
      status: number | undefined;
      data: unknown | undefined;
    }
  > =>
  async ({ url, method = "get", data, params }, api) => {
    try {
      const result = await $api({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
