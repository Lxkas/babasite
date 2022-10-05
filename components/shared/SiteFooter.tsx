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
		{ name: "สมาธิแบบราชาโยคะ", href: "/meditation/what-is-raja-yoga" },
		{ name: "ขั้นตอนการฝึกเบื้องต้น", href: "/meditation/how-to" },
		{ name: "หลักสูตรของเรา (เรียนฟรี)", href: "/meditation/register" },
	],
	learning: [{ name: "การเรียนรู้", href: "/about/benefits" }],
	contact: [{ name: "ติดต่อเรา", href: "/contact" }],
	global: [
		{
			name: "ศูนย์ทั่วโลก",
			href: "https://www.brahmakumaris.org/centre-locator",
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

		{
			name: "Line",
			href: "http://line.me/ti/p/~bupsaman",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 30 30" {...props}>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 15.003906 7.6660156 C 19.720906 7.6660156 23.558594 10.780375 23.558594 14.609375 C 23.558594 16.142375 22.964609 17.523813 21.724609 18.882812 C 19.929609 20.948812 15.916906 23.464609 15.003906 23.849609 C 14.091906 24.233609 14.225719 23.604672 14.261719 23.388672 C 14.283719 23.260672 14.384766 22.65625 14.384766 22.65625 C 14.413766 22.43725 14.442469 22.099812 14.355469 21.882812 C 14.258469 21.645813 13.880563 21.520937 13.601562 21.460938 C 9.4895625 20.916937 6.4472656 18.041375 6.4472656 14.609375 C 6.4472656 10.781375 10.286906 7.6660156 15.003906 7.6660156 z M 12.626953 12.910156 C 12.375953 12.910156 12.171875 13.107656 12.171875 13.347656 L 12.171875 16.652344 C 12.171875 16.894344 12.375953 17.089844 12.626953 17.089844 C 12.877953 17.089844 13.082031 16.893344 13.082031 16.652344 L 13.082031 13.347656 C 13.082031 13.107656 12.877953 12.910156 12.626953 12.910156 z M 14.5625 12.910156 C 14.5175 12.910156 14.470781 12.915641 14.425781 12.931641 C 14.248781 12.991641 14.128906 13.157703 14.128906 13.345703 L 14.128906 16.650391 C 14.128906 16.892391 14.3225 17.089844 14.5625 17.089844 C 14.8025 17.089844 14.996094 16.890391 14.996094 16.650391 L 14.996094 14.605469 L 16.679688 16.914062 C 16.760687 17.024063 16.889391 17.089844 17.025391 17.089844 C 17.072391 17.089844 17.118109 17.082406 17.162109 17.066406 C 17.340109 17.006406 17.460938 16.840344 17.460938 16.652344 L 17.457031 16.652344 L 17.457031 13.347656 C 17.457031 13.107656 17.263391 12.910156 17.025391 12.910156 C 16.787391 12.910156 16.591797 13.107656 16.591797 13.347656 L 16.591797 15.392578 L 14.908203 13.085938 C 14.827203 12.975938 14.6985 12.910156 14.5625 12.910156 z M 18.929688 12.910156 C 18.678688 12.910156 18.474609 13.107656 18.474609 13.347656 L 18.474609 14.998047 L 18.474609 15 L 18.474609 16.650391 C 18.474609 16.892391 18.678687 17.089844 18.929688 17.089844 L 20.654297 17.089844 C 20.906297 17.089844 21.111328 16.892344 21.111328 16.652344 C 21.111328 16.412344 20.905297 16.216797 20.654297 16.216797 L 19.384766 16.216797 L 19.384766 15.435547 L 20.654297 15.435547 C 20.906297 15.435547 21.111328 15.24 21.111328 15 C 21.111328 14.758 20.905297 14.5625 20.654297 14.5625 L 19.384766 14.564453 L 19.384766 13.783203 L 20.654297 13.783203 C 20.906297 13.783203 21.111328 13.588656 21.111328 13.347656 C 21.111328 13.107656 20.905297 12.910156 20.654297 12.910156 L 18.929688 12.910156 z M 9.34375 12.912109 C 9.09275 12.912109 8.8886719 13.106656 8.8886719 13.347656 L 8.8886719 16.652344 C 8.8886719 16.894344 9.09275 17.089844 9.34375 17.089844 L 11.068359 17.089844 C 11.320359 17.089844 11.522438 16.893297 11.523438 16.654297 C 11.523437 16.414297 11.319359 16.21875 11.068359 16.21875 L 9.7988281 16.21875 L 9.7988281 13.347656 C 9.7988281 13.107656 9.59475 12.912109 9.34375 12.912109 z"
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
								<h3 className="text-md font-semibold uppercase tracking-wider text-gray-700">
									meditation
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.meditation.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-orange-500"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-md font-semibold uppercase tracking-wider text-gray-700">
									learning
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.learning.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-orange-500"
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
								<h3 className="text-md font-semibold uppercase tracking-wider text-gray-700">
									contact
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.contact.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-orange-500"
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
				<div className="mb-2">
					ท่านสามารถดาวน์โหลดแอพพลิเคชั่น Bee.Zone ได้ฟรี
					ในการฝึกสมาธิอย่างง่ายๆ ที่จะช่วยให้กลับมาผ่อนคลาย
					และสัมผัสกับความสงบสุข และความเข้มแข็งจากภายใน
				</div>
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
				{/* <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
							Contact Us
						</h3>
						<p className="mt-2 text-base text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laborum, perspiciatis.
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
								Send
							</button>
						</div>
					</form>
				</div> */}

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
									className="h-8 w-8"
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
