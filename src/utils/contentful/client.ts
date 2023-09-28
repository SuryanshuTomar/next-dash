import { createClient } from "contentful";
import type { CarouselData, CarouselItem } from "../types";

export const client = createClient({
	space: "e7mzscsobclp",
	accessToken: "vYXEUCHXRysIZozN2IIvXDvJIeVp7HGHD6QP7jpbSDI",
});

export async function fetchCarouselItems(): Promise<CarouselItem[]> {
	try {
		const response = await client.getEntries({
			content_type: "carousel",
		});
		console.log("response: ", response);
		const data = response.items[0].fields.data as unknown as CarouselData;
		return data.data;
	} catch (error) {
		console.error("Error fetching carousel items from Contentful:", error);
		return [];
	}
}
