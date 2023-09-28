// src/carouselSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { dummyCarouselData } from "@/utils/data";

import type { CarouselItem, CarouselState } from "../utils/types";

const initialState: CarouselState = {
	items: dummyCarouselData,
};

const carouselSlice = createSlice({
	name: "carousel",
	initialState,
	reducers: {
		addCarouselData: (state, action: PayloadAction<CarouselItem[]>) => {
			state.items = action.payload;
		},
	},
});

export const { addCarouselData } = carouselSlice.actions;
export default carouselSlice.reducer;

export const getCarouselItems = (state: RootState) => state.carousel.items;
