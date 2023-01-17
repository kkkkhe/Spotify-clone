import { createApi, QueryStatus } from "@reduxjs/toolkit/query/react";
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

    getFeaturedPlaylists: builder.query<any, { limit?: number }>({
      query: ({ limit }) => ({
        url: "browse/featured-playlists",
        params: { limit },
      }),
    }),
    getFollowedTracks: builder.query<any, { limit?: number }>({
      query: ({ limit }) => ({
        url: "me/tracks",
        params: { limit },
      }),
    }),

    getPlaylist: builder.query<any, { playlist_id?: string }>({
      query: ({ playlist_id }) => ({
        url: `playlists/${playlist_id}?fields=description,name,owner,type,uri,images,tracks(total)`,
      }),
    }),

    getPlaylistTracks: builder.query<
      any,
      { playlist_id?: string; limit?: number }
    >({
      query: ({ playlist_id, limit = 25 }) => ({
        url: `playlists/${playlist_id}/tracks`,
        params: { limit },
      }),
    }),

    setPlayback: builder.mutation({
      query: () => ({
        url: "me/player/play",
        method: "PUT",
        params: { device_id: "e1d920ccebfd1c3c9061bfee4621aeb6d970da3b" },
        data: { "context_uri": "spotify:track:4E939qrktCtjkixFqOZIjq" },
      }),
    }),

    getCurrentDevice: builder.query({
      query: () => ({
        url: "me/player/devices",
      }),
    }),

    getCurrentPlaying: builder.query({
      query: () => ({
        url: "me/player",
      }),
    }),
  }),
});
// {
//   "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
// "offset": {
//   "position": 5
// },
//   "position_ms": 0
// }
export const {
  useGetPersonalPlaylistsQuery,
  useGetFeaturedPlaylistsQuery,
  useGetFollowedTracksQuery,
  useGetPlaylistQuery,
  useGetPlaylistTracksQuery,
  useSetPlaybackMutation,
  useGetCurrentDeviceQuery,
  useGetCurrentPlayingQuery,
} = spotifyApi;
