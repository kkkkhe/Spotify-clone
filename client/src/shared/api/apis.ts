import { AxiosResponse } from "axios";
import { $api } from "../lib/interceptors";
import { PlaylistResponse } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios-base-query";

export const baseURL = import.meta.env.BASE_URL;

// console.log(import.meta.env.BASE_URL);
export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
  }),
  endpoints: (builder) => ({
    getPersonalPlaylists: builder.query({
      query: () => ({ url: "me/playlists", method: "get" }),
    }),
  }),
});

const getPlaylists = async (): Promise<AxiosResponse<PlaylistResponse>> => {
  const res = await $api.get("https://api.spotify.com/v1/me/playlists");
  const data = await res.data;
  return data;
};

export { getPlaylists };

export const { useGetPersonalPlaylistsQuery } = spotifyApi;
