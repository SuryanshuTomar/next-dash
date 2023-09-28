import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Importing createSlice and PayloadAction from Redux Toolkit
import { RootState } from "./store"; // Importing the RootState type from the Redux store
import { dummyCarouselData } from "@/utils/data"; // Importing dummy data for the carousel items

import type { CarouselItem, CarouselState } from "../utils/types"; // Importing type definitions for carousel items and state

const initialState: CarouselState = {
	items: dummyCarouselData, // Initial state with dummy carousel data
};

// Create a Redux slice for the carousel using Redux Toolkit
const carouselSlice = createSlice({
	name: "carousel", // Name of the slice
	initialState, // Initial state
	reducers: {
		addCarouselData: (state, action: PayloadAction<CarouselItem[]>) => {
			state.items = action.payload; // Update the carousel items with the provided data
		},
	},
});

// Export the addCarouselData action from the slice
export const { addCarouselData } = carouselSlice.actions;

// Export the reducer function from the slice
export default carouselSlice.reducer;

// Define a selector to access the carousel items from the state
export const getCarouselItems = (state: RootState) => state.carousel.items;
