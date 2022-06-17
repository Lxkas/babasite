import type { NextPage } from "next";
import Image from "next/image";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Stats from "@/components/shared/Stats";
import "swiper/css";
import "swiper/css/navigation";

const Home: NextPage = () => {
	return (
		<div className="relative flex h-full w-full flex-col justify-center gap-y-4 px-4 pb-4 font-roboto">
			{/* You are powerful card */}
			<section className="h-screen w-full">
				<div className="relative flex h-full w-full items-center justify-center">
					<Image
						src={
							"https://brahmakumaris.org.au/new/wp-content/uploads/2022/01/rui-xu-XabW1JtTJ3M-unsplash-scaled.jpg"
						}
						alt="Lotus"
						className="object-cover"
						layout="fill"
						// width={1264}
						// height={842}
					/>

					<div className="relative flex h-full w-full flex-col items-center justify-center">
						<div className="absolute h-full w-full bg-purple-700 opacity-25"></div>
						<div className="z-10 mt-auto mb-20 text-center text-6xl font-extrabold text-white">
							<p className="mb-4">You are powerful</p>
							<p className="w-1/2 translate-x-1/2 text-2xl font-normal">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Tenetur quae illo eaque cumque
								placeat fuga quaerat amet ea, quam eum maxime
								ducimus quo totam quos explicabo vitae. Officia
								nesciunt esse modi vitae repellendus
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="h-screen w-full">
				<Swiper
					loop={true}
					navigation={true}
					modules={[Navigation]}
					className="h-full w-full"
				>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center">
							<Image
								src={
									"https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
								}
								alt="Forest"
								className="object-cover"
								layout="fill"
							/>

							<div className="relative flex h-full w-full flex-col items-center justify-center">
								<div className="absolute h-full w-full bg-gray-700 opacity-25"></div>
								<div className="z-10 mx-auto mb-20 text-center text-6xl font-extrabold text-white">
									<p className="mb-4">You are peaceful</p>
									<p className="w-1/2 translate-x-1/2 text-2xl font-normal">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Tenetur quae illo
										eaque cumque placeat fuga quaerat amet
										ea, quam eum maxime ducimus quo totam
										quos explicabo vitae. Officia nesciunt
										esse modi vitae repellendus
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center">
							<Image
								src={
									"https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632"
								}
								alt="Forest"
								className="object-cover"
								layout="fill"
							/>

							<div className="relative flex h-full w-full flex-col items-center justify-center">
								<div className="absolute h-full w-full bg-gray-700 opacity-25"></div>
								<div className="z-10 mx-auto mb-20 text-center text-6xl font-extrabold text-white">
									<p className="mb-4">You are free</p>
									<p className="w-1/2 translate-x-1/2 text-2xl font-normal">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Tenetur quae illo
										eaque cumque placeat fuga quaerat amet
										ea, quam eum maxime ducimus quo totam
										quos explicabo vitae. Officia nesciunt
										esse modi vitae repellendus
									</p>
									<button className="mt-2 border-2 border-gray-300 p-2 text-xl transition-all duration-100 hover:border-white">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
				</Swiper>
			</section>

			<section className="w-full">
				<div className="relative flex h-full w-full items-center justify-center">
					<Image
						src={
							"https://images.unsplash.com/photo-1579761804843-f997ade7fa35?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
						}
						alt="Forest"
						className="object-cover"
						layout="fill"
					/>

					<div className="relative flex h-full w-full flex-col items-center justify-center py-4">
						<div className="z-10 mx-auto text-center text-6xl font-extrabold text-white">
							<p className="mb-4">Learn meditation now</p>
							<p className="w-1/2 translate-x-1/2 text-2xl font-normal">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Tenetur quae illo eaque cumque
								placeat fuga quaerat amet ea, quam eum maxime
								ducimus quo totam quos explicabo vitae. Officia
								nesciunt esse modi vitae repellendus
							</p>
							<button className="mt-2 border-2 border-gray-300 p-2 text-xl transition-all duration-100 hover:border-white">
								View Playlist
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full">
				<div className="relative flex h-[580px] w-full items-center justify-center py-4">
					<Image
						src={
							"https://brahmakumaris.org.au/new/wp-content/uploads/2021/01/unnamed-3.jpg"
						}
						alt="Forest"
						className="-z-20 object-cover"
						layout="fill"
					/>

					<div className="relative flex h-full w-full items-center justify-center xl:block">
						<div className="relative mx-4 flex h-2/3 w-full flex-col xl:-right-[10%] xl:top-[10%] xl:w-1/3">
							<div className="absolute -z-10 h-full w-full rounded-md bg-white opacity-95"></div>
							<div className="p-4">
								<div className="font-sans text-6xl font-extrabold text-orange-600">
									New
									<br />
									Virtual Center
								</div>
								<div className="mt-8 font-sans">
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Ad, ab iusto. Quasi nulla
									cumque veritatis ducimus tempore fugit
									nostrum voluptatibus? Lorem ipsum dolor sit
									amet consectetur, adipisicing elit. Cum eius
									ad officiis!
								</div>
							</div>
							<button className="text-bold absolute -bottom-16 rounded-md bg-orange-600 p-4 font-sans text-white opacity-100">
								Browse Now
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Divider */}
			{/* <div className="relative">
				<div
					className="absolute inset-0 flex items-center"
					aria-hidden="true"
				>
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-white px-3 text-2xl font-medium text-gray-900">
						Events
					</span>
				</div>
			</div>

			<Calendar /> */}

			<Stats />
		</div>
	);
};

export default Home;
