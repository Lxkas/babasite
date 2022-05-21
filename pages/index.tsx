import type { NextPage } from "next";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Home: NextPage = () => {
	return (
		<div className="relative flex flex-col justify-center w-full h-full px-4 pb-4 gap-y-4 font-roboto">
			{/* You are powerful card */}
			<section className="w-full h-screen">
				<div className="relative flex items-center justify-center w-full h-full">
					<Image
						src={"https://brahmakumaris.org.au/new/wp-content/uploads/2022/01/rui-xu-XabW1JtTJ3M-unsplash-scaled.jpg"}
						alt="Lotus"
						className="object-cover"
						layout="fill"
						// width={1264}
						// height={842}
					/>

					<div className="relative flex flex-col items-center justify-center w-full h-full">
						<div className="absolute w-full h-full bg-purple-700 opacity-25"></div>
						<div className="z-10 mt-auto mb-20 text-6xl font-extrabold text-center text-white">
							<p className="mb-4">You are powerful</p>
							<p className="w-1/2 text-2xl font-normal translate-x-1/2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae illo eaque cumque placeat fuga quaerat amet ea, quam eum
								maxime ducimus quo totam quos explicabo vitae. Officia nesciunt esse modi vitae repellendus
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full h-screen">
				<Swiper loop={true} navigation={true} modules={[Navigation]} className="w-full h-full">
					<SwiperSlide>
						<div className="relative flex items-center justify-center w-full h-full">
							<Image
								src={
									"https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
								}
								alt="Forest"
								className="object-cover"
								layout="fill"
							/>

							<div className="relative flex flex-col items-center justify-center w-full h-full">
								<div className="absolute w-full h-full bg-gray-700 opacity-25"></div>
								<div className="z-10 mx-auto mb-20 text-6xl font-extrabold text-center text-white">
									<p className="mb-4">You are peaceful</p>
									<p className="w-1/2 text-2xl font-normal translate-x-1/2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae illo eaque cumque placeat fuga quaerat amet ea,
										quam eum maxime ducimus quo totam quos explicabo vitae. Officia nesciunt esse modi vitae repellendus
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex items-center justify-center w-full h-full">
							<Image
								src={
									"https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632"
								}
								alt="Forest"
								className="object-cover"
								layout="fill"
							/>

							<div className="relative flex flex-col items-center justify-center w-full h-full">
								<div className="absolute w-full h-full bg-gray-700 opacity-25"></div>
								<div className="z-10 mx-auto mb-20 text-6xl font-extrabold text-center text-white">
									<p className="mb-4">You are free</p>
									<p className="w-1/2 text-2xl font-normal translate-x-1/2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae illo eaque cumque placeat fuga quaerat amet ea,
										quam eum maxime ducimus quo totam quos explicabo vitae. Officia nesciunt esse modi vitae repellendus
									</p>
									<button className="p-2 mt-2 text-xl transition-all duration-100 border-2 border-gray-300 hover:border-white">
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
				<div className="relative flex items-center justify-center w-full h-full">
					<Image
						src={
							"https://images.unsplash.com/photo-1579761804843-f997ade7fa35?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
						}
						alt="Forest"
						className="object-cover"
						layout="fill"
					/>

					<div className="relative flex flex-col items-center justify-center w-full h-full py-4">
						<div className="absolute w-full h-full bg-gray-700 opacity-25"></div>
						<div className="z-10 mx-auto text-6xl font-extrabold text-center text-white">
							<p className="mb-4">Learn meditation now</p>
							<p className="w-1/2 text-2xl font-normal translate-x-1/2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae illo eaque cumque placeat fuga quaerat amet ea, quam eum
								maxime ducimus quo totam quos explicabo vitae. Officia nesciunt esse modi vitae repellendus
							</p>
							<button className="p-2 mt-2 text-xl transition-all duration-100 border-2 border-gray-300 hover:border-white">View Playlist</button>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full">
				<div className="relative flex items-center justify-center w-full h-[580px] py-4">
					<Image
						src={"https://brahmakumaris.org.au/new/wp-content/uploads/2021/01/unnamed-3.jpg"}
						alt="Forest"
						className="object-cover"
						layout="fill"
					/>

					<div className="relative w-full h-full">
						<div className="relative z-10 w-1/2 -top-1/8">
							<div className="absolute w-full h-full bg-white opacity-90"></div>
							<div className="relative flex flex-col p-4">
								<span className="font-sans text-4xl font-bold text-orange-600">New Center</span>
								<span className="mt-4 font-sans text-xl font-thin">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis doloribus nam modi expedita deleniti itaque
									voluptate nostrum architecto a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere perferendis
									aliquam obcaecati nulla et recusandae expedita nostrum eos quia!
								</span>
								<button className="relative w-1/4 p-4 mt-8 ml-auto font-sans font-extrabold text-white bg-orange-600 rounded-md">
									Browse Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center">
					<span className="px-3 text-2xl font-medium text-gray-900 bg-white">Events</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
