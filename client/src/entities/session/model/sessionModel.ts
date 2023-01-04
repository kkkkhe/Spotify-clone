import { createBaseSelector } from "@/shared/lib/redux-hooks";
import { createSelector, createSlice } from "@reduxjs/toolkit";
const name = 'session/model'
const initialState = {
isAuthed: false
}
type State = typeof initialState
const slice = createSlice({
	name,
	initialState,
	reducers: {
		setAuth(state){
			state.isAuthed = true
		}
	}
})

const baseSelector = createBaseSelector<State>(name)

const isAuthed = createSelector(baseSelector, (state) => state.isAuthed)

export const selector = {
	isAuthed
}

export const reducer = {[name]: slice.reducer}