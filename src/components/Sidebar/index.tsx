import React from "react";
import Loader from "../Loader";
import styles from "./index.module.scss";
import { useAppSelector } from "@/store/store";
import { getAuthSession } from "@/store/authSlice";

export default function Sidebar(): JSX.Element {
	const storedSession = useAppSelector(getAuthSession);

	return (
		<div className={styles.sidebar}>
			{storedSession ? (
				<div className={styles.userInfoCard}>
					<h1>Dashboard</h1>
					<br />
					<h2>
						Welcome,{" "}
						{(storedSession?.user ?? { name: "default name" }).name}!
					</h2>
					<p>
						<span>
							Email: 
							{(storedSession?.user ?? { email: "default email" }).email}
						</span>
					</p>
				</div>
			) : (
				<Loader text="user data" />
			)}
		</div>
	);
}
