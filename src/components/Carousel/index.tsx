import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import type { CarouselComponentProps } from "../../utils/types";

export default function CarouselComponent({
	items,
}: CarouselComponentProps): JSX.Element {
	return (
		<Carousel infiniteLoop autoPlay showThumbs={false}>
			{items.map((item) => (
				<div key={item.id}>
					<Image
						src={item.imageUrl}
						alt={item.title}
						width={640}
						height={480}
					/>
					<p style={{ marginBottom: "30px" }}>{item.title}</p>
				</div>
			))}
		</Carousel>
	);
}
