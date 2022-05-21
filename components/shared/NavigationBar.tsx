import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Dropdown from "./NavItems/Dropdown";

export default function NavigationBar() {
	const [hasScrolled, setHasScrolled] = useState(false);

	function handleScroll() {
		if (window.scrollY > 0) {
			setHasScrolled(true);
		}

		if (window.scrollY <= 0) {
			setHasScrolled(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		// Make transaprent on scroll
		<nav
			className={`fixed z-30 flex flex-row items-center justify-center w-full p-4 font-sans font-light h-28 transition-all duration-100 ${
				hasScrolled ? "bg-transparent text-white" : "bg-white text-black shadow-sm"
			}`}
		>
			<div>
				<Link href={"/"}>
					<Image
						// TODO: Fix the background on this
						src={"https://brahmakumaris.org.au/new/wp-content/uploads/2020/09/the-brahma-kumaris-australia-1024x212.png"}
						width={400}
						height={80}
						alt="Logo"
					/>
				</Link>
			</div>
			<div className="flex flex-row ml-auto gap-x-8">
				<Link href="/">
					<a>Home</a>
				</Link>

				<Link href="/courses">
					<a>Courses, Classes & Meditations</a>
				</Link>

				<Dropdown
					text={"Meditation"}
					options={[
						{ text: "Test 1", href: "Test" },
						{ text: "Test 2", href: "Test2" },
					]}
				/>
				<div>Locations</div>
				<div>About Us</div>
				<div>Contact Us</div>
			</div>
		</nav>
	);
}
