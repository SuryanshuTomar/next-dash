import type { Session } from "next-auth";
import type { ReactNode } from "react";

export interface AuthState {
	isAuthenticated: boolean;
	session: Session | null;
}

export interface ProvidersProps {
	children: ReactNode;
}
