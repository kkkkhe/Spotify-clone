import { sessionModel } from "@/entities/session";
import { $httpApi } from "@/shared/api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  ...sessionModel.reducer,
  [$httpApi.reducerPath]: $httpApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($httpApi.middleware),
});
