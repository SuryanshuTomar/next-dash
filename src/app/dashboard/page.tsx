"use client";

import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ThreeDChart from "@/components/Charts/ThreedBarChart";
import CarouselComponent from "@/components/Carousel";
import React, { useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { redirect } from "next/navigation";
import { fetchCarouselItems } from "@/utils/contentful/client";
import { addCarouselData, getCarouselItems } from "@/store/carouselSlice";
import { getAuthSession, getAuthState } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import styles from "./page.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DashboardPage() {
	const dispatch = useDispatch();

	const isAuthenticated = useAppSelector(getAuthState);
	const storedSession = useAppSelector(getAuthSession);
	const carouselItems = useAppSelector(getCarouselItems);

	useEffect(() => {
		if (!isAuthenticated) {
			// Redirect to the login page if the user is not authenticated
			redirect("/login");
		}
	}, [isAuthenticated]);

	useEffect(() => {
		async function fetchAndSetCarouselItems() {
			const items = await fetchCarouselItems();
			dispatch(addCarouselData(items));
		}

		fetchAndSetCarouselItems();
	}, [dispatch]);

	return (
		<div>
			<Header />
			{isAuthenticated === true && storedSession !== null ? (
				<div className={styles.container}>
					<div className={styles.content}>
						<Sidebar />

						<div className={styles.main}>
							<div className={styles.boundary}>
								<div className={styles.text}>3D Chart</div>
								<ThreeDChart />
							</div>

							<div className={styles.boundary}>
								<div className={styles.text}>Carousel</div>
								<CarouselComponent items={carouselItems} />
							</div>
						</div>
					</div>
				</div>
			) : (
				<Loader text="Dashboard" />
			)}
		</div>
	);
}
