import { sessionModel } from "@/entities/session";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	...sessionModel.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

