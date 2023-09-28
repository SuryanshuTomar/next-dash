import React from "react";
import { signOut } from "next-auth/react";
import styles from "./index.module.scss";

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.appName}>Next Dash</div>
			<button className={styles.signOutButton} onClick={() => signOut()}>
				Sign Out
			</button>
		</div>
	);
}
