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
      query: ({ limit }) => ({
        url: "me/playlists",
        params: { limit },
      }),
    }),
    getFeaturedPlaylists: builder.query<any, any>({
      query: ({ limit }) => ({
        url: "browse/featured-playlists",
        params: { limit },
      }),
    }),
  }),
});

export const { useGetPersonalPlaylistsQuery, useGetFeaturedPlaylistsQuery } =
  spotifyApi;
