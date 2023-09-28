import styles from "./page.module.scss";

export default function LoginPage() {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginCard}>
				<h1>My App</h1>
				<p>Please log in to access your account.</p>
				<button className={styles.loginButton}>Login</button>
			</div>
		</div>
	);
}
