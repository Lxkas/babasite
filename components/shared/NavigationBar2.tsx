import { NavItemPropType } from "@/types/NavigationBarTypes";
import { classNames } from "@/utils/classNames";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClickOutside } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dropdown from "./NavItems/Dropdown";
import MobileDropDown from "./NavItems/MobileDropdown";

const colors = {
	background: "bg-black/20",
	backgroundScroll: "bg-white",
};

const navItemsRight: NavItemPropType[] = [
	{ text: "Home", href: "/" },
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
];

const navItemsLeft: NavItemPropType[] = [
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

			{
				dropdownType: "normal",
				text: "Healthy Living",
				href: "/wisdom/healthy-living",
			},
		],
	},
];

function NavItem(props: NavItemPropType) {
	// TODO: Pass this as a prop
	const router = useRouter();

	return (
		<Link href={props.href} passHref>
			<a
				className={classNames(
					"inline-flex items-center rounded-md py-2 px-3 text-sm font-medium",
					router.pathname == props.href
						? "bg-black/10"
						: "hover:bg-black/10"
				)}
			>
				{props.text}
			</a>
		</Link>
	);
}

function Nav2MobileNavItem(props: NavItemPropType) {
	const router = useRouter();

	return (
		<Link href={props.href} passHref>
			<a
				onClick={() => {
					if (props.closeFunction) {
						props.closeFunction();
					}
				}}
				className={classNames(
					"block rounded-md py-2 px-3 text-base font-medium text-gray-900",
					router.pathname == props.href
						? "bg-black/10"
						: "hover:bg-black/10"
				)}
				aria-current="page"
			>
				{props.text}
			</a>
		</Link>
	);
}

export default function NavigationBar2() {
	// Shadow only appear on scroll
	// bottom part of the navbar will disappear on scroll down, only appear when on top

	const [hasScrolled, setHasScrolled] = useState(false);
	const [shouldShowBottomPart, setShouldShowBottomPart] = useState(true);

	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const menuRef = useClickOutside(() =>
		setShouldShowBottomPart(!hasScrolled)
	);

	function handleScroll() {
		if (window.scrollY > 0) {
			setHasScrolled(true);
			setShouldShowBottomPart(false);
		}

		if (window.scrollY <= 0) {
			setHasScrolled(false);
			setShouldShowBottomPart(true);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const close = () => {
		setMobileNavOpen(false);
	};

	return (
		<header className="fixed z-20 w-full bg-transparent">
			<div ref={menuRef} className="w-full">
				{/* Desktop Top part */}
				<div
					className={classNames(
						"h-24 w-full transition-all duration-150",
						hasScrolled
							? colors.backgroundScroll
							: colors.background,
						hasScrolled ? "shadow-xl" : ""
					)}
				>
					<div className="relative mx-auto flex h-full max-w-7xl justify-between">
						<div className="relative z-10 flex px-2 lg:px-0">
							<div className="flex flex-shrink-0 items-center pl-2 lg:pl-1 xl:pl-0">
								<Link href="/">
									<img
										className="block h-16 w-auto"
										src={
											hasScrolled
												? "https://www.brahmakumaris.org/images/bk-logo.png"
												: "https://www.brahmakumaris.org/images/bk-logo-white.png"
										}
										alt="Logo"
									/>
								</Link>
							</div>
						</div>
						<div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
							<div className="w-full sm:max-w-xs">
								{/* Search was here */}
							</div>
						</div>
						<div className="relative z-10 flex items-center lg:hidden">
							<button
								onClick={() => {
									setMobileNavOpen(!mobileNavOpen);
								}}
								type="button"
								className="m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open menu</span>

								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
							{/* Alert button was here */}
							{hasScrolled && (
								<button
									onClick={() =>
										setShouldShowBottomPart(
											!shouldShowBottomPart
										)
									}
								>
									<span>
										Menu{" "}
										<span className="ml-1">
											<FontAwesomeIcon
												icon={faCaretDown}
											/>
										</span>
									</span>
								</button>
							)}

							<div className="relative ml-4 flex-shrink-0">
								{/* <div>
								<button
									type="button"
									className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span className="sr-only">
										Open user menu
									</span>
									<img
										className="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</button>
							</div> */}
							</div>
						</div>
					</div>
				</div>

				{/* Desktop bottom part */}
				<div
					className={classNames(
						"w-full",
						hasScrolled
							? colors.backgroundScroll
							: colors.background,
						hasScrolled ? "" : "lg:mt-px",
						shouldShowBottomPart
							? "opacity-100 shadow-xl transition-opacity duration-150"
							: "pointer-events-none opacity-0 transition-all duration-150"
					)}
				>
					<nav
						className="mx-auto hidden max-w-7xl lg:flex lg:space-x-8 lg:py-2"
						aria-label="Global"
					>
						<div
							className={classNames(
								"flex w-full items-center px-2",
								hasScrolled ? "text-black" : "text-white"
							)}
						>
							<div className="flex gap-x-2">
								{navItemsLeft.map((navItem, i) => {
									switch (navItem.navType) {
										case "dropdown":
											return (
												<div
													key={navItem.text + i}
													className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
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
													navType={navItem.navType}
												/>
											);
									}
								})}
							</div>

							<div className="ml-auto flex space-x-2">
								{navItemsRight.map((navItem, i) => {
									switch (navItem.navType) {
										case "dropdown":
											return (
												<div
													key={navItem.text + i}
													className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium"
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
													navType={navItem.navType}
												/>
											);
									}
								})}
							</div>
						</div>
					</nav>
				</div>
			</div>

			{/* Mobile part */}
			<nav
				className={classNames(
					"bg-white",
					mobileNavOpen ? "lg:hidden" : "hidden"
				)}
				aria-label="Global"
				id="mobile-menu"
			>
				<div className="space-y-1 px-2 pt-2 pb-3">
					{navItemsLeft.map((navItem, i) => {
						switch (navItem.navType) {
							case "dropdown":
								return (
									<MobileDropDown
										text={navItem.text}
										data={navItem.data}
										closeFunction={close}
									/>
								);
							default:
								return (
									<Nav2MobileNavItem
										key={navItem.href + i}
										text={navItem.text}
										href={navItem.href}
										navType={navItem.navType}
										closeFunction={close}
									/>
								);
						}
					})}
				</div>
				<div className="border-t border-gray-200 pt-4 pb-3">
					<div className="mt-3 space-y-1 px-2">
						{navItemsRight.map((navItem, i) => {
							switch (navItem.navType) {
								case "dropdown":
									return (
										<MobileDropDown
											text={navItem.text}
											data={navItem.data}
											closeFunction={close}
										/>
									);
								default:
									return (
										<Nav2MobileNavItem
											key={navItem.href + i}
											text={navItem.text}
											href={navItem.href}
											navType={navItem.navType}
											closeFunction={close}
										/>
									);
							}
						})}
					</div>
				</div>
			</nav>
		</header>
	);
}
