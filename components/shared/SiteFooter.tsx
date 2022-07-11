/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { classNames } from "@/utils/classNames";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

const navigation = {
	meditation: [
		{ name: "What is Raja Yoga?", href: "#" },
		{ name: "How to Meditate", href: "#" },
		{ name: "Experience Meditation", href: "#" },
	],
	location: [
		{ name: "Local Locations", href: "#" },
		{ name: "Global Locations", href: "#" },
	],
	about: [
		{ name: "About Us", href: "#" },
		{ name: "Our Headquarters", href: "#" },
	],
	legal: [
		{ name: "Claim", href: "#" },
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
	],
	social: [
		{
			name: "Facebook",
			href: "https://www.facebook.com/baanpinthu/",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

const textMap = {
	"en-US": "English",
	"th-TH": "Thai",
};
function LanguageItem(props: { text: string; href: string; locale: string }) {
	const { text, href, locale } = props;
	return (
		<Menu.Item>
			{({ active }) => (
				<div>
					<Link href={href} passHref locale={locale}>
						<a
							className={classNames(
								active
									? "bg-gray-100 text-gray-900"
									: "text-gray-700",
								"block px-4 py-2 text-sm"
							)}
						>
							{/* @ts-ignore */}
							{textMap[text]}
						</a>
					</Link>
				</div>
			)}
		</Menu.Item>
	);
}

export default function SiteFooter() {
	const { locale, locales, asPath } = useRouter();

	return (
		<footer className="bg-white" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 xl:col-span-4">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
									meditation
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.meditation.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
									location
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.location.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
									about
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.about.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							{/* <div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
									Legal
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div> */}
						</div>
					</div>
					<div className="mt-12 xl:mt-0">
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
							Language
						</h3>
						<Menu
							as="div"
							className="relative inline-block text-right xl:text-left"
						>
							<div>
								<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-100">
									{
										// TODO: Make text align right if mobile
										// @ts-ignore
										textMap[
											// @ts-ignore
											locales?.filter(
												(x) => x == locale
											)[0]
										]
									}
									<FontAwesomeIcon
										icon={faChevronDown}
										className="-mr-1 ml-2 h-5 w-5"
										aria-hidden={true}
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										{locales!.map((l, i) => {
											return (
												// <span
												// 	key={l + i}
												// 	className={classNames(
												// 		l === locale
												// 			? "underline"
												// 			: "",
												// 		"mx-2 uppercase"
												// 	)}
												// >
												// 	<Link href={asPath} locale={l}>
												// 		{l}
												// 	</Link>
												// </span>
												<LanguageItem
													key={"lSel-" + l}
													text={l}
													href={asPath}
													locale={l}
												/>
											);
										})}
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
						{/* <form className="mt-4 sm:max-w-xs">
							<fieldset className="w-full">
								<label htmlFor="language" className="sr-only">
									Language
								</label>
								<div className="relative">
									<select
										id="language"
										name="language"
										className="block w-full appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 pl-3 pr-10 text-base text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
										defaultValue="English"
									>
										<option>English</option>
										<option>French</option>
										<option>German</option>
										<option>Japanese</option>
										<option>Spanish</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
										<FontAwesomeIcon
											icon={faChevronDown}
											className="h-4 w-4"
											aria-hidden={true}
										/>
									</div>
								</div>
							</fieldset>
						</form> */}
					</div>
				</div>

				{/* BeeZone banner */}
				{/* TODO: Make it a component, localize the assets */}
				<div className="mx-auto flex max-w-7xl flex-col rounded-lg bg-orange-400 lg:flex-none">
					<div className="px-4 py-2">
						<div className="mx-auto max-w-7xl py-6 lg:flex lg:items-center lg:justify-between lg:py-8">
							<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								<span className="flex flex-row gap-x-4">
									<img
										className="h-16 w-16"
										src="https://www.brahmakumaris.org/images/BeeZone/BeeZone-App-Logo-transparent-bg.png"
										alt=""
									/>
									<img
										className="h-16"
										src="https://www.brahmakumaris.org/images/BeeZone/beezone-white-logo.png"
										alt="BeeZone, silence is calling"
									/>
								</span>
								<span className="mt-2 block max-w-3xl text-white">
									Download BeeZone, a Multilingual Meditation
									App on Your Mobile Devices
								</span>
							</h2>
							<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
								<div className="inline-flex rounded-md">
									<a
										target="_blank"
										rel="noreferrer"
										href="https://apps.apple.com/us/app/beezone/id1326616980?ls=1"
										className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium text-white"
									>
										<img
											className="w-52"
											src="https://www.brahmakumaris.org/images/BeeZone/app-store-button.png"
											alt=""
										/>
									</a>
								</div>
								<div className="ml-3 inline-flex rounded-md">
									<a
										href="https://play.google.com/store/apps/details?id=org.brahmakumaris.beezone"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium"
									>
										<img
											className="w-52"
											src="https://www.brahmakumaris.org/images/BeeZone/googleplay-button.png"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Newsletter section */}
				<div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
							Subscribe to our newsletter
						</h3>
						<p className="mt-2 text-base text-gray-500">
							The latest news, meditations, courses, sent to your
							inbox weekly.
						</p>
					</div>
					<form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							type="email"
							name="email-address"
							id="email-address"
							autoComplete="email"
							required
							className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:placeholder-gray-400 focus:outline-none focus:ring-orange-500 sm:max-w-xs"
							placeholder="Enter your email"
						/>
						<div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
							<button
								type="submit"
								className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>

				{/* Copyright, socials */}
				<div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</a>
						))}
					</div>
					<p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
						&copy; May 25, 2022 | All Rights Reserved | Brahma
						Kumaris
					</p>
				</div>
			</div>
		</footer>
	);
}
