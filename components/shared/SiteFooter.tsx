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
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = {
	meditation: [
		{ name: "ราชาโยคะคืออะไร", href: "/meditation/what-is-raja-yoga" },
		{ name: "นั่งสมาธิยังไง", href: "/meditation/how-to" },
		{ name: "เรียนสมาธิเดี๋ยวนี้", href: "/meditation/how-to" },
	],
	location: [
		{ name: "ศูนย์ในประเทศ", href: "/local-locations" },
		{
			name: "ศูนย์ทั่วโลก",
			href: "https://www.brahmakumaris.org/centre-locator/",
		},
	],
	about: [
		{ name: "เกี่ยวกับเรา", href: "/about" },
		{
			name: "ศูนย์หลักของเรา",
			href: "https://brahmakumaris.org.au/new/about-us/our-headquarters/pandav-bhavan/",
		},
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
