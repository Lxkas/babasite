import Head from "next/head";
import { useEffect, useState } from "react";
import NavigationBar2 from "./shared/NavigationBar2";
import SiteFooter from "./shared/SiteFooter";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const randomImages = [
	"https://www.brahmakumaris.org/images/headers/Head8banner.jpg",
	"https://images.unsplash.com/photo-1526276828468-fa777352f5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	"/assets/images/backgrounds/sunset.png",
];

/** ----------------------------------------------------
 * Metadata - About Us / รู้จักบราห์มากุมารี
 * -------------------------------------------------- */
export const metadata = {
	// <title>
	title: "รู้จักบราห์มากุมารี | Brahma Kumaris Thailand",

	// <meta name="description">
	description:
		"บราห์มากุมารีเป็นองค์กรการเคลื่อนไหวทางจิตวิญญาณระดับนานาชาติ " +
		"ก่อตั้ง พ.ศ. 2480 เพื่อส่งเสริมการเปลี่ยนแปลงตนเองและสร้างโลกที่สงบสุข " +
		"มีศูนย์กว่า 110 ประเทศและเป็นองค์กรทางจิตวิญญาณที่นำโดยสตรีที่ใหญ่ที่สุดในโลก",

	// Helpful for search relevance
	keywords: [
		"บราห์มากุมารี",
		"Brahma Kumaris",
		"ราชาโยคะ",
		"rajayoga",
		"rajyoga",
		"การทำสมาธิ",
		"จิตวิญญาณ",
		"องค์กรไม่แสวงหากำไร",
		"ผู้นำสตรี",
		"สันติภาพภายใน",
	],

	// Recommended by Next.js for i18n pages
	// alternates: {
	// 	canonical: "https://rajayoga.life/about",
	// 	languages: {
	// 		"th-TH": "/th/about-us",
	// 		"en-US": "/en/about-us",
	// 	},
	// },

	// Open Graph (Facebook, LinkedIn, etc.)
	openGraph: {
		title: "รู้จักบราห์มากุมารี | Brahma Kumaris Thailand",
		description:
			"ร่วมค้นพบพันธกิจแห่งสันติภาพของบราห์มากุมารี - " +
			"องค์การจิตวิญญาณสากลที่มุ่งสร้างโลกที่สงบสุขผ่านการเปลี่ยนแปลงตนเอง",
		url: "https://rajayoga.life/about",
		siteName: "Brahma Kumaris Thailand",
		locale: "th_TH",
		type: "website",
		images: [
			{
				url: "https://www.brahmakumaris.org/images/bk-logo-white.png", // 1200×630 px recommended
				width: 1200,
				height: 630,
				alt: "โลโก้บราห์มากุมารี",
			},
		],
	},

	// Twitter Card
	twitter: {
		card: "summary_large_image",
		title: "รู้จักบราห์มากุมารี | Brahma Kumaris Thailand",
		description:
			"บราห์มากุมารี - องค์กรจิตวิญญาณสากลเพื่อสันติภาพและการเปลี่ยนแปลงตนเอง",
		// creator: "@IdkTheTwitterHandle",
		images: ["https://www.brahmakumaris.org/images/bk-logo-white.png"],
	},

	// Optional: basic structured‑data hint
	other: {
		"og:locale:alternate": "en_US",
	},
};

export default function Layout({ children }: any) {
	const [randomImg, setRandomImg] = useState(
		randomImages.sort(() => 0.5 - Math.random())[0],
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
			<div className="block w-auto mb-2 overflow-hidden h-36 lg:h-72">
				<img
					className="object-cover w-full h-full"
					src={randomImg}
					alt="Banner"
				/>
			</div>
			<main>{children}</main>
			<GoogleAnalytics gaId="AW-17060814569" />
			<SiteFooter />
		</>
	);
}
