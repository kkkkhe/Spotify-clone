import { createBaseSelector } from "@/shared/lib/redux-hooks";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getToken, refreshToken } from "../api/api";
const name = "session/model";
const initialState = {
  isAuthed: false,
  test: [1, 2, 3],
};
type State = typeof initialState;
const slice = createSlice({
  name,
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthed = action.payload;
    },

    setTest: (state, action) => ({ isAuthed: true, test: [1, 3, 3, 4] }),
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
const test = createSelector(baseSelector, (state) => state.test);
export const selector = {
  isAuthed,
  test,
};
export const actions = {
  setAuth: slice.actions.setAuth,
  setTest: slice.actions.setTest,
};
export const thunk = {
  sessionThunk,
  checkAuth,
};
export const reducer = { [name]: slice.reducer };
