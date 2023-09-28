import React from "react"; // Importing React for creating the component
import { signOut } from "next-auth/react"; // Importing Next.js authentication utility
import styles from "./index.module.scss"; // Importing styles for the component

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.appName}>Next Dash</div>{" "}
			<button className={styles.signOutButton} onClick={() => signOut()}>
				Sign Out
				{/* Render a "Sign Out" button with an onClick handler to trigger the sign-out process */}
			</button>
		</div>
	);
}
