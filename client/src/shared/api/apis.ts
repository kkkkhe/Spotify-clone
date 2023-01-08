import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios-base-query";
import { PlaylistResponse } from "./types";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASEURL,
  }),
  endpoints: (builder) => ({
    getPersonalPlaylists: builder.query<PlaylistResponse, { limit?: number }>({
      query: ({ limit = 20 }) => ({
        url: "me/playlists",
        method: "get",
        params: { limit },
      }),
    }),
  }),
});

export const { useGetPersonalPlaylistsQuery } = spotifyApi;
