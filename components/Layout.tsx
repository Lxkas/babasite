import Head from "next/head";
import { useEffect, useState } from "react";
import NavigationBar2 from "./shared/NavigationBar2";
import SiteFooter from "./shared/SiteFooter";

const randomImages = [
	"https://www.brahmakumaris.org/images/headers/Head8banner.jpg",
	"https://images.unsplash.com/photo-1526276828468-fa777352f5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	"https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export default function Layout({ children }: any) {
	const [randomImg, setRandomImg] = useState(
		randomImages.sort(() => 0.5 - Math.random())[0]
	);

	useEffect(() => {
		setRandomImg(randomImages.sort(() => 0.5 - Math.random())[0]);
	}, [children]);

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
					src={randomImg}
					alt="Banner"
				/>
			</div>
			<main>{children}</main>
			<SiteFooter />
		</>
	);
}
