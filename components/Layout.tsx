import Head from "next/head";
import NavigationBar from "./shared/NavigationBar";

export default function Layout({ children }: any) {
	return (
		<>
			<Head>
				<title>Brahma Kumaris TH</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavigationBar />
			<div className="block h-32 mb-2"></div>
			<main>{children}</main>
		</>
	);
}
