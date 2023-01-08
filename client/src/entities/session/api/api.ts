import { $api } from "@/shared/lib/interceptors";
import { AxiosResponse } from "axios";
import { BaseAuthResponse } from "./types";

const getToken = async (
  code: string
): Promise<AxiosResponse<BaseAuthResponse & { scope: string }>> => {
  return await $api.post("/", { code });
};

const refreshToken = async (
  refreshToken: string
): Promise<AxiosResponse<BaseAuthResponse>> => {
  return await $api.post("/refresh_token", { refreshToken });
};

export { refreshToken, getToken };
