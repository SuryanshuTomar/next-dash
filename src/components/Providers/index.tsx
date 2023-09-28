"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import store from "@/store/store";
import { Provider } from "react-redux";

import type { ProvidersProps } from "../../utils/types";

export function Providers({ children }: ProvidersProps) {
	return (
		<Provider store={store}>
			<SessionProvider>{children}</SessionProvider>
		</Provider>
	);
}
