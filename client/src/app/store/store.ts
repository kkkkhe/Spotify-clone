import { sessionModel } from "@/entities/session";
import { spotifyApi } from "@/shared/api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  ...sessionModel.reducer,
  [spotifyApi.reducerPath]: spotifyApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware),
});
