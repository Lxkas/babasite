import Head from "next/head";
import NavigationBar from "./shared/NavigationBar";
import SiteFooter from "./shared/SiteFooter";

export default function Layout({ children }: any) {
	return (
		<>
			<Head>
				<title>Brahma Kumaris TH</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<NavigationBar />
			<div className="mb-2 block h-32"></div>
			<main>{children}</main>
			<SiteFooter />
		</>
	);
}
