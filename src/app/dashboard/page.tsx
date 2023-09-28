"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { redirect } from "next/navigation";
import { getAuthSession, getAuthState } from "@/store/authSlice";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import styles from "./page.module.scss";
import ThreeDChart from "@/components/Charts/ThreedBarChart";

export default function DashboardPage() {
	const isAuthenticated = useAppSelector(getAuthState);
	const storedSession = useAppSelector(getAuthSession);

	useEffect(() => {
		if (!isAuthenticated) {
			redirect("/login");
		}
	}, [isAuthenticated]);

	return (
		<div>
			<Header />
			{isAuthenticated === true && storedSession !== null ? (
				<div className={styles.container}>
					<div className={styles.content}>
						Dashboard
						<ThreeDChart />
					</div>
				</div>
			) : (
				<Loader text="Dashboard" />
			)}
		</div>
	);
}
