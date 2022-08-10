import type { NextPage } from "next";
import Image from "next/image";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Stats from "@/components/shared/Stats";
import "swiper/css";
import "swiper/css/navigation";

import {
	faMedkit,
	faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const audioNow = [
	{
		name: "Audio Clip 1",
		description: "Some description",
		icon: faMoneyBillTrendUp,
	},

	{
		name: "Audio Clip 2",
		description: "Some description 2",
		icon: faMedkit,
	},
];

function WordSlider() {
	return (
		<SwiperSlide>
			<div className="relative flex h-[580px] w-full items-center justify-center py-4">
				<Image
					src={
						"https://images.unsplash.com/photo-1596461009523-7d647a4e2399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					}
					quality={100}
					alt="Forest"
					className="-z-20 object-cover"
					layout="fill"
				/>

				<div className="absolute">
					<div className="flex flex-col items-center text-white">
						<h1 className="text-4xl font-extrabold">ปัญญา</h1>
						<p className="text-xl">
							การมีปัญญา หมายถึง
							การตอบสนองต่อสถานการณ์อย่างถูกต้องเหมาะสม
							ด้วยความเข้าใจ การใส่ใจดูแล และความกรุณา
						</p>
					</div>
				</div>
			</div>
		</SwiperSlide>
	);
}

const Home: NextPage = () => {
	return (
		<div className="relative flex h-full w-full flex-col justify-center gap-y-4 px-4 pb-4 font-roboto">
			{/* You are powerful card */}
			<section className="h-screen w-full">
				<div className="relative flex h-full w-full items-center justify-center">
					<Image
						quality={100}
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
						<div className="relative flex h-full w-full flex-col items-center justify-center">
							<div className="flex flex-col sm:absolute sm:bottom-0 sm:h-1/4">
								<p className="mb-8 text-center text-6xl font-extrabold text-white">
									คุณทรงพลัง
								</p>
								<p className="w-full px-2 pb-2 text-center text-2xl font-normal text-white">
									{`ด้วยความปั่นป่วนที่เพิ่มขึ้นเรื่อยๆ ในโลกนี้ จึงเป็นเรื่องยากที่จะรู้วิธีช่วยเหลือ หรือ แม้แต่จะรับมือกับมันทั้งหมด`}
									<br />
									ความคิดของเรามีพลัง
									พวกมันหล่อหลอมโลกและมีอิทธิพลต่อผู้คนและธรรมชาติ
									<br />
									การใช้เวลา 5
									นาทีต่อวันอย่างมีสติสัมปชัญญะสร้างความรักและสันติสุขให้กับโลกสามารถช่วยยกระดับบรรยากาศในแบบที่ละเอียดอ่อนแต่มีความหมายมาก
									อิทธิพลของความคิดที่ทรงพลังเหล่านี้ไม่สามารถพูดเกินจริงได้
								</p>
							</div>
						</div>
						{/* <div className="z-10 mt-auto mb-20 text-center text-6xl font-extrabold text-white">
							<p className="mb-4">You are powerful</p>
							<p className="w-1/2 translate-x-1/2 text-2xl font-normal">
								With an ever increasing amount of turmoil in the
								world it's difficult to know how to help or even
								cope with it all.
								<br />
								Our thoughts have power. They shape the world
								and can influence people and nature. <br />
								Spending 5 mins a day consciously creating
								thoughts of love and peace for the world can
								help lift the atmosphere in a subtle yet very
								meaningful way. The influence of these powerful
								thoughts cannot be overstated.
							</p>
						</div> */}
					</div>
				</div>
			</section>

			{/* <section className="h-screen w-full">
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
			</section> */}

			<section>
				<Swiper
					loop={true}
					navigation={true}
					modules={[Navigation]}
					className="h-full w-full"
				>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							{/* TODO: Make these local images, and make them components */}
							<img
								className="h-auto w-full"
								src="http://brahmakumaris.or.th/images/2018/09/25/think-.jpg"
								alt="Some"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							<img
								className="h-auto w-full"
								src="http://brahmakumaris.or.th/images/2018/09/25/course-1.jpg"
								alt="Some"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							<img
								className="h-auto w-full"
								src="http://brahmakumaris.or.th/images/2018/09/25/stress-free.jpg"
								alt="Some"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>

			<section className="w-full">
				<div className="relative flex h-full w-full items-center justify-center">
					<Image
						src={
							"https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80"
						}
						alt="Forest"
						className="object-cover"
						layout="fill"
						quality={100}
					/>

					<div className="relative flex h-full w-full flex-col items-center justify-center py-4">
						<div className="z-10 mx-auto text-center text-6xl font-extrabold text-white">
							<div className="py-12">
								<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
									<div className="lg:text-center">
										{/* <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
											Transactions
										</h2> */}
										<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
											เรียนสมาธิเดี๋ยวนี้
										</p>
										<p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
											Lorem ipsum dolor sit amet consect
											adipisicing elit. Possimus magnam
											voluptatum cupiditate veritatis in
											accusamus quisquam. This can be some
											description
										</p>
									</div>

									<div className="mt-10">
										<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
											{audioNow.map((audionow) => (
												<div
													key={audionow.name}
													className="relative rounded-md bg-orange-500 p-2"
												>
													<dt>
														<div className="absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
															<FontAwesomeIcon
																icon={
																	audionow.icon
																}
																className="h-6 w-6"
																aria-hidden="true"
															/>
														</div>
														<p className="ml-16 text-lg font-medium leading-6 text-white">
															{audionow.name}
														</p>
													</dt>
													<dd className="mt-2 ml-16 text-base text-white">
														{audionow.description}
													</dd>
												</div>
											))}
										</dl>
									</div>
								</div>
							</div>
							{/* <p className="mb-4">เรียนสมาธิเดี๋ยวนี้</p>
							<p className="w-1/2 translate-x-1/2 text-2xl font-normal">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Tenetur quae illo eaque cumque
								placeat fuga quaerat amet ea, quam eum maxime
								ducimus quo totam quos explicabo vitae. Officia
								nesciunt esse modi vitae repellendus
							</p>
							<Link href="/meditation/how-to">
								<button className="mt-2 border-2 border-gray-300 p-2 text-xl transition-all duration-100 hover:border-white">
									View Playlist
								</button>
							</Link> */}
						</div>
					</div>
				</div>
			</section>

			<section className="w-full">
				<Swiper
					loop={true}
					navigation={true}
					modules={[Navigation, Autoplay]}
					className="h-full w-full"
					autoplay={{
						delay: 3000,
					}}
				>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={
									"https://images.unsplash.com/photo-1572061485545-9399b66acedd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
								}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>

							<div className="absolute">
								<div className="flex flex-col items-center text-white">
									<h1 className="text-4xl font-extrabold xl:text-8xl">
										ปัญญา
									</h1>
									<p className="px-16 text-xl xl:text-4xl">
										การมีปัญญา หมายถึง
										การตอบสนองต่อสถานการณ์อย่างถูกต้องเหมาะสม
										ด้วยความเข้าใจ การใส่ใจดูแล และความกรุณา
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={
									"https://images.unsplash.com/photo-1594684198422-2b625d9281e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
								}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>

							<div className="absolute">
								<div className="flex flex-col items-center text-white">
									<h1 className="text-4xl font-extrabold xl:text-8xl">
										ความสุข
									</h1>
									<p className="px-16 text-xl xl:text-4xl">
										คือการที่ฉันใช้เวลาทุกขณะได้ตามที่ต้องการเป็นอย่างดี
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={
									"https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
								}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>

							<div className="absolute">
								<div className="flex flex-col items-center text-white">
									<h1 className="text-4xl font-extrabold xl:text-8xl">
										ความสงบ
									</h1>
									<p className="px-16 text-xl xl:text-4xl">
										มีบางสิ่งที่คุณสามารถทําได้เพื่อช่วยสร้างสันติสุขในโลก
										นั่นคือการทําให้ตัวเองสงบสุข
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={
									"https://images.unsplash.com/photo-1484609047056-d27d44e97ede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
								}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>

							<div className="absolute">
								<div className="flex flex-col items-center text-white">
									<h1 className="text-4xl font-extrabold xl:text-8xl">
										ความรัก
									</h1>
									<p className="px-16 text-xl xl:text-4xl">
										แม้ว่าฉันอาจจะไม่เห็นผลของความรักได้ในทันที
										แต่ความรักนั้นทำงานเสมอ
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
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
