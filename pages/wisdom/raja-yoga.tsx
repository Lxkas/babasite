import translation from "@/public/assets/translations/wisdom/raja-yoga.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function RajaYoga() {
	const { locale, locales } = useRouter();
	const [currentLocaleStrings, setCurrentLocaleStrings] = useState(
		translation.translation.filter((p) => p.locale === locale)
	);

	const [hasWindow, setHasWindow] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	useEffect(() => {
		setCurrentLocaleStrings(
			translation.translation.filter((p) => p.locale === locale)
		);
	}, [locale]);

	return (
		<div className="overflow-hidden py-16">
			<div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-prose text-base lg:max-w-none">
					<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
						{currentLocaleStrings[0].title}
					</p>
				</div>
				<div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
					<p className="text-lg text-gray-500">
						{currentLocaleStrings[0].paragraph1}
					</p>
				</div>
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
					<div className="relative z-10">
						<div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
							<p className="text-lg">
								{currentLocaleStrings[0].paragraph2}
							</p>
							{/* <ul role="list">
								<li>Quis elit egestas venenatis mattis dignissim.</li>
								<li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
								<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
							</ul>
							<p>
								Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper.
								Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
								lacus in. Viverra.
							</p> */}
							{/* <h3>We’re here to help</h3>
							<p>
								Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
								feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non
								morbi. Mi a platea auctor mi.
							</p> */}
						</div>
						{/* <div className="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
							<div className="rounded-md shadow">
								<a
									href="#"
									className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
								>
									Contact sales
								</a>
							</div>
							<div className="ml-4 rounded-md shadow">
								<a
									href="#"
									className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50"
								>
									Learn more
								</a>
							</div>
						</div> */}
					</div>
					<div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
						<svg
							className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
							/>
						</svg>
						<blockquote className="relative rounded-lg bg-white shadow-lg">
							<div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
								{/* <img
									src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
									alt="Workcation"
									className="h-8"
								/> */}
								<div className="text-4xl font-bold">
									<p className="mb-4">Who am I?</p>
									{hasWindow && (
										<ReactPlayer
											controls
											url={
												"http://www.brahmakumaris.org/alfresco/guestDownload/direct/workspace/SpacesStore/6a329832-0f96-4d9d-bbd8-0aa7e0a5c3f0/Raja%20Yoga%20Meditation%20Who%20Am%20I%20HD.mp4"
											}
										/>
									)}
								</div>
								<div className="relative mt-8 text-lg font-medium text-gray-700">
									{/* <svg
										className="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
										fill="currentColor"
										viewBox="0 0 32 32"
										aria-hidden="true"
									>
										<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
									</svg> */}
									<div className="relative">
										{/* <YouTube
											iframeClassName="w-full h-full"
											videoId="2g811Eo7K8U"
											onError={(err) => console.log(err)}
										/> */}
									</div>
								</div>
							</div>
							{/* <cite className="relative flex items-center px-6 py-5 not-italic bg-indigo-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
								<span className="relative border-2 border-white rounded-full sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
									<img
										className="w-12 h-12 bg-indigo-300 rounded-full sm:w-20 sm:h-20"
										src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
										alt=""
									/>
								</span>
								<span className="relative ml-4 font-semibold leading-6 text-indigo-300 sm:ml-24 sm:pl-1">
									<span className="font-semibold text-white sm:inline">Judith Black</span>{" "}
									<span className="sm:inline">CEO at Workcation</span>
								</span>
							</cite> */}
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}
