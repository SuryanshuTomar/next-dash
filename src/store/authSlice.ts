import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AuthState } from "../utils/types";

const initialState: AuthState = {
	isAuthenticated: false,
	session: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<AuthState>) => {
			const { isAuthenticated, session } = action.payload;
			state.isAuthenticated = isAuthenticated;
			state.session = session;
		},
		logout: (state, action: PayloadAction<AuthState>) => {
			const { isAuthenticated, session } = action.payload;
			state.isAuthenticated = isAuthenticated;
			state.session = session;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const getAuthState = (state: RootState) => state.auth.isAuthenticated;
export const getAuthSession = (state: RootState) => state.auth.session;
