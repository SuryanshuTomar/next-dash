import type { Session } from "next-auth";
import type { ReactNode } from "react";

// Type declaration for environment variables
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
			CONTENTFUL_ACCESS_TOKEN: string;
			CONTENTFUL_SPACE_ID: string;
			NEXTAUTH_SECRET: string;
		}
	}
}

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

export interface CarouselComponentProps {
	items: CarouselItem[];
}
