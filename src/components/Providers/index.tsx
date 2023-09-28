"use client";

import React from "react"; // Importing React for creating the component
import { SessionProvider } from "next-auth/react"; // Importing Next.js authentication utility for session management
import store from "@/store/store"; // Importing the Redux store
import { Provider } from "react-redux"; // Importing the Redux provider for integrating Redux with React

import type { ProvidersProps } from "../../utils/types"; // Importing a type definition for the component's props

export function Providers({ children }: ProvidersProps) {
	return (
		<Provider store={store}>
			<SessionProvider>{children}</SessionProvider>{" "}
			{/* Wrap the application with the Redux provider and NextAuth session provider */}
		</Provider>
	);
}
