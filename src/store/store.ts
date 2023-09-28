import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit for store configuration
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"; // Importing Redux hooks for store interaction
import authReducer from "./authSlice"; // Importing the authReducer
import carouselReducer from "./carouselSlice"; // Importing the carouselReducer

// Configure the Redux store using Redux Toolkit
const store = configureStore({
	reducer: {
		auth: authReducer, // Assigning the authReducer to the 'auth' slice of the store
		carousel: carouselReducer, // Assigning the carouselReducer to the 'carousel' slice of the store
	},
});

export type RootState = ReturnType<typeof store.getState>; // Define a type for the root state of the Redux store
export type AppDispatch = typeof store.dispatch; // Define a type for the dispatch function of the Redux store

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Custom hook for accessing the Redux dispatch function
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Typed hook for accessing the Redux state

export default store; // Export the configured Redux store
