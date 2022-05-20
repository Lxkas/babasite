import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./NavItems/Dropdown";

export default function NavigationBar() {
	return (
		// Make transaprent on scroll
		<nav className="fixed z-30 flex flex-row items-center justify-center w-full p-4 font-light bg-white shadow-sm h-28 font-roboto">
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
				<div>Home</div>
				<div>Courses, Classes & Meditations</div>
				<Dropdown />
				<div>Locations</div>
				<div>About Us</div>
				<div>Contact Us</div>
			</div>
		</nav>
	);
}
