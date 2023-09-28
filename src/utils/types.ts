import type { Session } from "next-auth";

export interface AuthState {
	isAuthenticated: boolean;
	session: Session | null;
}
