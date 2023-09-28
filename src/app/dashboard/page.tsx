"use client";

import Loader from "@/components/Loader"; // Loader component for displaying loading messages
import Header from "@/components/Header"; // Header component
import Sidebar from "@/components/Sidebar"; // Sidebar component
import ThreeDChart from "@/components/Charts/ThreedBarChart"; // 3D Chart component
import CarouselComponent from "@/components/Carousel"; // Carousel component
import React, { useEffect } from "react"; // Importing React and useEffect hook
import { useAppSelector } from "@/store/store"; // Using Redux store selector hook
import { redirect } from "next/navigation"; // Importing a navigation function from Next.js
import { fetchCarouselItems } from "@/utils/contentful/client"; // Importing a function to fetch carousel items from some external source
import { addCarouselData, getCarouselItems } from "@/store/carouselSlice"; // Importing Redux actions and selectors
import { getAuthSession, getAuthState } from "@/store/authSlice"; // Importing Redux selectors
import { useDispatch } from "react-redux"; // Using the useDispatch hook from Redux
import styles from "./page.module.scss"; // Importing styles for this component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing styles for a carousel

// Define the DashboardPage component
export default function DashboardPage() {
	const dispatch = useDispatch(); // Initialize the Redux dispatch function

	// Selecting data from the Redux store using custom selectors
	const isAuthenticated = useAppSelector(getAuthState);
	const storedSession = useAppSelector(getAuthSession);
	const carouselItems = useAppSelector(getCarouselItems);

	// Effect hook to check if the user is authenticated
	useEffect(() => {
		if (!isAuthenticated) {
			// Redirect to the login page if the user is not authenticated
			redirect("/login");
		}
	}, [isAuthenticated]);

	// Effect hook to fetch and set carousel items
	useEffect(() => {
		async function fetchAndSetCarouselItems() {
			const items = await fetchCarouselItems(); // Fetch carousel items asynchronously
			dispatch(addCarouselData(items)); // Dispatch an action to update the Redux store with the fetched items
		}

		fetchAndSetCarouselItems(); // Call the fetch function when the component mounts
	}, [dispatch]);

	return (
		<div>
			<Header /> {/* Render the Header component */}
			{isAuthenticated === true && storedSession !== null ? ( // Conditional rendering based on authentication and session data
				<div className={styles.container}>
					<div className={styles.content}>
						<Sidebar /> {/* Render the Sidebar component */}
						<div className={styles.main}>
							<div className={styles.boundary}>
								<div className={styles.text}>3D Chart</div>{" "}
								{/* Display a label for the 3D Chart */}
								<ThreeDChart />{" "}
								{/* Render the 3D Chart component */}
							</div>
							<div className={styles.boundary}>
								<div className={styles.text}>Carousel</div>{" "}
								{/* Display a label for the Carousel */}
								<CarouselComponent items={carouselItems} />{" "}
								{/* Render the Carousel component with items */}
							</div>
						</div>
					</div>
				</div>
			) : (
				// Render a loader with the text "Dashboard"
				<Loader text="Dashboard" />
			)}
		</div>
	);
}
