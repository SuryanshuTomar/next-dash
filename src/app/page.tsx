"use client";

import { useEffect } from "react"; // Importing the useEffect hook for side effects
import { useRouter } from "next/navigation"; // Using the Next.js router for navigation

export default function Home() {
	const { push } = useRouter(); // Initialize the Next.js router for navigation

	// Use the useEffect hook to perform an action when the component mounts
	useEffect(() => {
		push("/login"); // Redirect the user to the login page when the component mounts
	}, [push]); // The effect depends on the 'push' function from the router

	return null; // Return null because this component doesn't render any visible content
}
