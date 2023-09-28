import { Providers } from "@/components/Providers";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Dash",
	description: "Next Dash App generated with Next js 13",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* Adding All providers for the app through a component */}
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
