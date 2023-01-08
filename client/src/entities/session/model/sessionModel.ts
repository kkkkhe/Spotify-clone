import { createBaseSelector } from "@/shared/lib/redux-hooks";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getToken, refreshToken } from "../api/api";
const name = "session/model";
const initialState = {
  isAuthed: false,
};
type State = typeof initialState;
const slice = createSlice({
  name,
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthed = action.payload;
    },
  },
});

const sessionThunk = createAsyncThunk(
  "session/getToken",
  async (action: string, { dispatch }) => {
    await getToken(action).then((res) => {
      dispatch(slice.actions.setAuth(true));
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("refreshToken", res.data.refresh_token);
    });
  }
);
const checkAuth = createAsyncThunk(
  "session/checkAuth",
  async (action: any, { dispatch }) => {
    await refreshToken(action).then((res) => {
      dispatch(slice.actions.setAuth(true));
      localStorage.setItem("token", res.data.access_token);
    });
  }
);
const baseSelector = createBaseSelector<State>(name);

const isAuthed = createSelector(baseSelector, (state) => state.isAuthed);

export const selector = {
  isAuthed,
};
export const actions = {
  setAuth: slice.actions.setAuth,
};
export const thunk = {
  sessionThunk,
  checkAuth,
};
export const reducer = { [name]: slice.reducer };
