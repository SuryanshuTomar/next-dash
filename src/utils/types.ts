import type { Session } from "next-auth";
import type { ReactNode } from "react";

export interface AuthState {
	isAuthenticated: boolean;
	session: Session | null;
}

export interface ProvidersProps {
	children: ReactNode;
}

export interface LoaderProps {
	text: string;
}

export interface CarouselItem {
	id: number;
	title: string;
	imageUrl: string;
}

export interface CarouselData {
	data: CarouselItem[];
}

export interface CarouselState {
	items: CarouselItem[];
}
