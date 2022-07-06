import Head from "next/head";
import NavigationBar2 from "./shared/NavigationBar2";
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
			<NavigationBar2 />
			<div className="mb-2 block h-36 w-auto overflow-hidden lg:h-72">
				<img
					className="h-full w-full object-cover"
					src="https://www.brahmakumaris.org/images/headers/Head8banner.jpg"
					alt="Banner"
				/>
			</div>
			<main>{children}</main>
			<SiteFooter />
		</>
	);
}
