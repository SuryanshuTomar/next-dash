"use client";

import { signIn, useSession } from "next-auth/react"; // Using Next.js authentication utilities
import { useRouter } from "next/navigation"; // Using Next.js router for navigation
import { useDispatch } from "react-redux"; // Using Redux dispatch to manage state
import { login } from "@/store/authSlice"; // Importing a Redux action
import styles from "./page.module.scss"; // Importing styles for this component

export default function LoginPage() {
	const dispatch = useDispatch(); // Initialize the Redux dispatch function
	const { push } = useRouter(); // Initialize the Next.js router for navigation
	const { data: session } = useSession(); // Access the authentication session data

	// Check if a user is already authenticated, and if so, redirect to the dashboard
	if (
		session !== null &&
		session !== undefined &&
		session.user !== undefined
	) {
		dispatch(login({ session, isAuthenticated: true })); // Dispatch an action to update the authentication state
		push("/dashboard"); // Redirect the user to the dashboard
	}

	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<p>Please log in to access your account.</p>{" "}
				<button className={styles.loginButton} onClick={() => signIn()}>
					Login
				</button>{" "}
			</div>
		</div>
	);
}
