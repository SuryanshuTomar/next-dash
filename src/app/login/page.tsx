"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";
import styles from "./page.module.scss";

export default function LoginPage() {
	const dispatch = useDispatch();
	const { push } = useRouter();
	const { data: session } = useSession();

	if (
		session !== null &&
		session !== undefined &&
		session.user !== undefined
	) {
		dispatch(login({ session, isAuthenticated: true }));
		push("/dashboard");
	}

	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<h1>My App</h1>
				<p>Please log in to access your account.</p>
				<button className={styles.loginButton} onClick={() => signIn()}>
					Login
				</button>
			</div>
		</div>
	);
}
