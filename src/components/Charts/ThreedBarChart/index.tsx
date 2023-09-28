"use client";

import React, { useEffect, useRef } from "react";
import { ECharts, getInstanceByDom, init } from "echarts";
import { data, days, hours } from "@/utils/data";
import "echarts-gl";

export default function ThreeDChart(): JSX.Element {
	const chartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let chart: ECharts | undefined;
		let observer: ResizeObserver | undefined;

		if (chartRef.current !== null) {
			chart = init(chartRef.current);
			observer = new ResizeObserver(() => {
				chart?.resize();
			});
			observer.observe(chartRef.current);
		}

		return () => {
			chart?.dispose();
			observer?.disconnect();
		};
	}, []);

	useEffect(() => {
		if (chartRef.current !== null) {
			const option = {
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
					data: hours,
				},
				yAxis3D: {
					type: "category",
					data: days,
				},
				zAxis3D: {
					type: "value",
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
						type: "bar3D",
						data: data.map(function (item) {
							return {
								value: [item[1], item[0], item[2]],
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

			const chart = getInstanceByDom(chartRef.current);
			chart?.setOption(option, false, true);
		}
	}, []);

	return <div ref={chartRef} style={{ width: "100%", height: "50vh" }} />;
}
