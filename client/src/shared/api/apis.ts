import { Axios, AxiosResponse } from "axios";
import { $api } from "./http";
import { BaseAuthResponse } from "./types";

export const getToken = async (
  code: string
): Promise<AxiosResponse<BaseAuthResponse & { scope: string }>> => {
  return await $api.post("/", { code });
};

export const getPlaylists = async () => {
  return await $api.get("https://api.spotify.com/v1/me/playlists");
};

export const refreshToken = async (
  refreshToken: string
): Promise<AxiosResponse<BaseAuthResponse>> => {
  return await $api.post("/refresh_token", { refreshToken });
};
