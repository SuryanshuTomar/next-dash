"use client";

import React, { useEffect, useRef } from "react"; // Importing React and related hooks
import { ECharts, getInstanceByDom, init } from "echarts"; // Importing ECharts library for creating 3D charts
import { data, days, hours } from "@/utils/data"; // Importing data for the chart from a utility module
import "echarts-gl"; // Importing the ECharts GL extension for 3D charts

export default function ThreeDChart(): JSX.Element {
	const chartRef = useRef<HTMLDivElement>(null); // Create a reference to the chart container div

	// Effect hook to initialize and clean up the chart
	useEffect(() => {
		let chart: ECharts | undefined;
		let observer: ResizeObserver | undefined;

		if (chartRef.current !== null) {
			// Initialize the ECharts instance inside the chart container
			chart = init(chartRef.current);

			// Create a ResizeObserver to automatically resize the chart when its container changes size
			observer = new ResizeObserver(() => {
				chart?.resize(); // Resize the chart
			});
			observer.observe(chartRef.current); // Start observing the container's size
		}

		return () => {
			chart?.dispose(); // Dispose of the chart instance when the component unmounts
			observer?.disconnect(); // Disconnect the ResizeObserver when the component unmounts
		};
	}, []);

	// Effect hook to set up the chart options and data
	useEffect(() => {
		if (chartRef.current !== null) {
			const option = {
				// Chart configuration options
				visualMap: {
					max: 20,
					inRange: {
						color: [
							"#313695",
							"#4575b4",
							"#74add1",
							"#abd9e9",
							"#e0f3f8",
							"#ffffbf",
							"#fee090",
							"#fdae61",
							"#f46d43",
							"#d73027",
							"#a50026",
						],
					},
				},
				xAxis3D: {
					type: "category",
					data: hours, // X-axis data
				},
				yAxis3D: {
					type: "category",
					data: days, // Y-axis data
				},
				zAxis3D: {
					type: "value", // Z-axis data
				},
				grid3D: {
					boxWidth: 200,
					boxDepth: 80,
					viewControl: {
						// projection: 'orthographic'
					},
					light: {
						main: {
							intensity: 1.2,
							shadow: true,
						},
						ambient: {
							intensity: 0.3,
						},
					},
				},
				series: [
					{
						type: "bar3D", // Type of the chart series
						data: data.map(function (item) {
							return {
								value: [item[1], item[0], item[2]], // Mapping data to 3D coordinates
							};
						}),
						shading: "lambert",
						label: {
							fontSize: 16,
							borderWidth: 1,
						},
						emphasis: {
							label: {
								fontSize: 20,
								color: "#900",
							},
							itemStyle: {
								color: "#900",
							},
						},
					},
				],
			};

			const chart = getInstanceByDom(chartRef.current); // Get the ECharts instance associated with the chart container
			chart?.setOption(option, false, true); // Set chart options
		}
	}, []);

	return <div ref={chartRef} style={{ width: "100%", height: "50vh" }} />; // Render the chart container with a specified width and height
}
