import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Dropdown from "./NavItems/Dropdown";

import { faX, faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import { NavItemPropType } from "@/types/NavigationBarTypes";
import { classNames } from "@/utils/classNames";

const navItems: NavItemPropType[] = [
	{ text: "Home", href: "/" },
	{
		text: "Meditation",
		href: "#",
		navType: "dropdown",
		data: [
			{
				dropdownType: "normal",
				text: "What is Raja Yoga Meditation",
				href: "/meditation/what-is-raja-yoga",
			},
			{
				dropdownType: "normal",
				text: "How to Meditate",
				href: "/meditation/how-to",
			},
			{
				dropdownType: "normal",
				text: "Experience Meditation",
				href: "/meditation/experience",
			},

			{
				dropdownType: "normal",
				text: "Where to Meditate",
				href: "/meditation/where",
			},

			{
				dropdownType: "normal",
				text: "Register Online For Courses",
				href: "/meditation/register",
			},
		],
	},
	{
		text: "Locations",
		href: "/locations",
		navType: "dropdown",
		data: [
			{
				dropdownType: "normal",
				text: "Local Centers",
				href: "/local-locations",
			},
			{
				dropdownType: "normal",
				text: "Global Center Locator",
				href: "https://www.brahmakumaris.org/centre-locator/",
			},
		],
	},
	{
		text: "About Us",
		href: "#",
		navType: "dropdown",
		data: [
			{
				dropdownType: "normal",
				text: "About Us",
				href: "/about",
			},
			{
				dropdownType: "innerdropdown",
				title: "Our Headquarters",
				options: [
					{
						text: "Pandav Bhavan",
						href: "https://brahmakumaris.org.au/new/about-us/our-headquarters/pandav-bhavan/",
					},
					{
						text: "Gyan Sarovar",
						href: "https://brahmakumaris.org.au/new/about-us/our-headquarters/gyan-sarovar/",
					},
					{
						text: "Shantivan",
						href: "https://brahmakumaris.org.au/new/about-us/our-headquarters/shantivan/",
					},
				],
			},
		],
	},
	{
		text: "Wisdom",
		href: "#",
		navType: "dropdown",
		data: [
			{
				dropdownType: "normal",
				text: "Raja Yoga",
				href: "/wisdom/raja-yoga",
			},

			{
				dropdownType: "normal",
				text: "Soul",
				href: "/wisdom/soul",
			},

			{
				dropdownType: "normal",
				text: "Tree in Time",
				href: "/wisdom/tree",
			},

			{
				dropdownType: "normal",
				text: "Wheel of Life",
				href: "/wisdom/wheel-of-life",
			},

			{
				dropdownType: "normal",
				text: "Karma",
				href: "/wisdom/karma",
			},

			{
				dropdownType: "normal",
				text: "God Knows",
				href: "/wisdom/god-knows",
			},
		],
	},
];

function NavItem(props: NavItemPropType) {
	const router = useRouter();
	const { text, href } = props;

	return (
		<Link href={href}>
			<a
				className={`inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-gray-700 ${
					router.pathname == href
						? "border-orange-500"
						: "hover:border-gray-300"
				}`}
			>
				{text}
			</a>
		</Link>
	);
}

function MobileNavItem(props: NavItemPropType) {
	const { text, href } = props;
	return (
		<Link href={href}>
			<Disclosure.Button
				as="a"
				href="#"
				className="block border-l-4 border-orange-500 bg-orange-50 py-2 pl-3 pr-4 text-base font-medium text-orange-700"
			>
				{text}
			</Disclosure.Button>
		</Link>
	);
}

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
		<Disclosure
			as="nav"
			className={`bg-white text-black ${
				hasScrolled ? "shadow-lg" : "shadow-sm"
			} fixed z-30 h-28 w-full font-roboto`}
		>
			{({ open }) => (
				<>
					<div className="mx-auto mt-4 max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="ml-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										// <XIcon className="block w-6 h-6" aria-hidden="true" />
										<FontAwesomeIcon
											icon={faX}
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										// <MenuIcon className="block w-6 h-6" aria-hidden="true" />
										<FontAwesomeIcon
											icon={faBars}
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									{/* <img
										className="block w-auto h-8 lg:hidden"
										src="https://tailwindui.com/img/logos/workflow-mark-orange-600.svg"
										alt="Workflow"
									/> */}

									<span
										className={`hidden h-8 w-auto items-center justify-center lg:flex`}
									>
										<Image
											width={400}
											height={80}
											src="https://brahmakumaris.org.au/new/wp-content/uploads/2020/09/the-brahma-kumaris-australia-1024x212.png"
											alt="Workflow"
										/>
									</span>
								</div>
								<div className="hidden sm:ml-auto sm:flex sm:space-x-8">
									{/* Current: "border-orange-500 text-gray-900", Default: "border-transparent  hover:border-gray-300 hover:text-gray-700" */}
									{/* <Link href={"/"}>
										<a className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-orange-500">Home</a>
									</Link> */}

									{navItems.map((navItem, i) => {
										switch (navItem.navType) {
											case "dropdown":
												return (
													<div
														key={navItem.text + i}
														className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-gray-700"
													>
														<Dropdown
															text={navItem.text}
															data={navItem.data}
														/>
													</div>
												);
											default:
												return (
													<NavItem
														key={navItem.href + i}
														text={navItem.text}
														href={navItem.href}
														navType={
															navItem.navType
														}
													/>
												);
										}
									})}

									{/* <a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
									>
										Courses, Classes & Meditations
									</a>
									<a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
									>
										Locations
									</a>
									<a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
									>
										About Us
									</a> */}

									{/* <div className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:text-gray-700">
										<Dropdown
											text={"Meditation"}
											options={[
												{ text: "Test 1", href: "Test" },
												{ text: "Test 2", href: "Test2" },
											]}
										/>
									</div> */}
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								{/* <Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
											<span className="sr-only">Open user menu</span>
											<img
												className="w-8 h-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu> */}
							</div>
						</div>
					</div>

					<Disclosure.Panel className="bg-white font-roboto text-black sm:hidden">
						<div className="space-y-1 pt-2 pb-4">
							{/* Current: "bg-orange-50 border-orange-500 text-orange-700", Default: "border-transparent  hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

							{navItems.map((navItem, i) => {
								switch (navItem.navType) {
									case "dropdown":
										return (
											<div
												key={navItem.text + i}
												className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-gray-700"
											>
												TODO: DROPDOWN
											</div>
										);
									default:
										return (
											<MobileNavItem
												key={"mob" + navItem.href + i}
												text={navItem.text}
												href={navItem.href}
												navType={navItem.navType}
											/>
										);
								}
							})}

							{/* <Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-orange-500 bg-orange-50 py-2 pl-3 pr-4 text-base font-medium text-orange-700"
							>
								Home
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Courses, Classes & Meditations
							</Disclosure.Button>

							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Locations
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								About Us
							</Disclosure.Button> */}

							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
											<span>Meditation</span>
											<FontAwesomeIcon
												icon={faChevronUp}
												className={`${
													open
														? "rotate-180 transform"
														: ""
												} ml-4 h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
											<div className="flex flex-col">
												<a href="#">Link 1</a>
												<a href="#">Link 2</a>
											</div>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
