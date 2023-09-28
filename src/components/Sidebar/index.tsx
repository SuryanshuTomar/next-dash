import React from "react"; // Importing React for creating the component
import Loader from "../Loader"; // Importing the Loader component for displaying loading messages
import styles from "./index.module.scss"; // Importing styles for the component
import { useAppSelector } from "@/store/store"; // Using Redux store selector hook
import { getAuthSession } from "@/store/authSlice"; // Importing a Redux selector

export default function Sidebar(): JSX.Element {
	const storedSession = useAppSelector(getAuthSession); // Access the authentication session data from the Redux store

	return (
		<div className={styles.sidebar}>
			{storedSession ? ( // Conditional rendering based on the presence of a stored session
				<div className={styles.userInfoCard}>
					<h1>Dashboard</h1>
					<br />
					<h2>
						Welcome,{" "}
						{(storedSession?.user ?? { name: "default name" }).name}
						!
					</h2>
					<p>
						<span>
							Email:
							{
								(
									storedSession?.user ?? {
										email: "default email",
									}
								).email
							}
						</span>
					</p>
				</div>
			) : (
				<Loader text="user data" />
				// Render a loader with the text "user data" if no session is available
			)}
		</div>
	);
}
