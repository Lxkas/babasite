import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./NavItems/Dropdown";

export default function NavigationBar() {
	return (
		// Make transaprent on scroll
		<nav className="fixed z-30 flex flex-row items-center justify-center w-full p-4 font-sans font-light bg-white shadow-sm h-28">
			<div>
				<Link href={"/"}>
					<Image
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
