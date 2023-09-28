import Image from "next/image"; // Importing the Next.js Image component for optimized image loading
import React from "react"; // Importing React
import { Carousel } from "react-responsive-carousel"; // Importing the Carousel component from the "react-responsive-carousel" library

import type { CarouselComponentProps } from "../../utils/types"; // Importing a type definition for the component's props

export default function CarouselComponent({
	items,
}: CarouselComponentProps): JSX.Element {
	return (
		<Carousel infiniteLoop autoPlay showThumbs={false}>
			{items.map((item) => (
				<div key={item.id}>
					<Image
						src={item.imageUrl} // Set the image source from the item's data
						alt={item.title} // Set the image alt text from the item's title
						width={640} // Set the image width
						height={480} // Set the image height
					/>
					<p style={{ marginBottom: "30px" }}>{item.title}</p>{" "}
				</div>
			))}
		</Carousel>
	);
}
