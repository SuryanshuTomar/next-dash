import { RootState } from "./store"; // Importing the RootState type from the Redux store
import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Importing createSlice and PayloadAction from Redux Toolkit

import type { AuthState } from "../utils/types"; // Importing a type definition for the authentication state

const initialState: AuthState = {
	isAuthenticated: false, // Initial state for authentication status
	session: null, // Initial state for the user session
};

// Create a Redux slice for authentication using Redux Toolkit
const authSlice = createSlice({
	name: "auth", // Name of the slice
	initialState, // Initial state
	reducers: {
		login: (state, action: PayloadAction<AuthState>) => {
			const { isAuthenticated, session } = action.payload;
			state.isAuthenticated = isAuthenticated; // Update authentication status
			state.session = session; // Update user session data
		},
		logout: (state, action: PayloadAction<AuthState>) => {
			const { isAuthenticated, session } = action.payload;
			state.isAuthenticated = isAuthenticated; // Update authentication status during logout
			state.session = session; // Update user session data during logout
		},
	},
});

// Export the login and logout actions from the slice
export const { login, logout } = authSlice.actions;

// Export the reducer function from the slice
export default authSlice.reducer;

// Define selectors to access specific parts of the authentication state
export const getAuthState = (state: RootState) => state.auth.isAuthenticated; // Selects the isAuthenticated value
export const getAuthSession = (state: RootState) => state.auth.session; // Selects the user session data
