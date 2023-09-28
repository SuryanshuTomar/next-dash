import { createClient } from "contentful";
import type { CarouselData, CarouselItem } from "../types";

export const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
