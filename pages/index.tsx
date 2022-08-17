import type { NextPage } from "next";
import Image from "next/image";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Stats from "@/components/shared/Stats";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialComponent from "@/components/shared/Testimonial";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const audioNow = [
	{
		name: "ผ่อนคลายในป่าใหญ่",
		description: "ส่วนที่ 1",
		url: "/assets/audio/how-to-meditate/relaxation1.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ผ่อนคลายกล้ามเนื้อ",
		description: "ส่วนที่ 2",
		url: "/assets/audio/how-to-meditate/relaxation2.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ผ่อนคลายกับลมหายใจ",
		description: "ส่วนที่ 3",
		url: "/assets/audio/how-to-meditate/relaxation3.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ผ่อนคลายการเชื่อมโยง",
		description: "ส่วนที่ 4",
		url: "/assets/audio/how-to-meditate/relaxation4.m4a",
		icon: faPlayCircle,
	},

	{
		name: "เพ่งรวมกับการหายใจ",
		description: "ส่วนที่ 1",
		url: "/assets/audio/how-to-meditate/concentration1.m4a",
		icon: faPlayCircle,
	},

	{
		name: "เพ่งรวมกับจุด",
		description: "ส่วนที่ 2",
		url: "/assets/audio/how-to-meditate/concentration2.m4a",
		icon: faPlayCircle,
	},

	{
		name: "เพ่งรวมกับคำว่าชานติ",
		description: "ส่วนที่ 3",
		url: "/assets/audio/how-to-meditate/concentration3.m4a",
		icon: faPlayCircle,
	},

	{
		name: "เพ่งรวมอยู่กับการนับถอยหลัง",
		description: "ส่วนที่ 4",
		url: "/assets/audio/how-to-meditate/concentration4.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ใคร่ครวญกับความเป็นนิรันดร์",
		description: "ส่วนที่ 1",
		url: "/assets/audio/how-to-meditate/contemplation1.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ใคร่ครวญกับคุณสมบัติหลัก",
		description: "ส่วนที่ 2",
		url: "/assets/audio/how-to-meditate/contemplation2.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ใคร่ครวญกับชีวิตที่เป็นแสง",
		description: "ส่วนที่ 3",
		url: "/assets/audio/how-to-meditate/contemplation3.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ใคร่ครวญกับตัวตนที่แท้จริง",
		description: "ส่วนที่ 4",
		url: "/assets/audio/how-to-meditate/contemplation4.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ตระหนักรู้ในความรัก",
		description: "ส่วนที่ 1",
		url: "/assets/audio/how-to-meditate/realization1.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ตระหนักรู้ถึงแสงที่บริสุทธิ์",
		description: "ส่วนที่ 2",
		url: "/assets/audio/how-to-meditate/realization2.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ตระหนักรู้ถึงการเป็นนิรันดร์",
		description: "ส่วนที่ 3",
		url: "/assets/audio/how-to-meditate/realization3.m4a",
		icon: faPlayCircle,
	},

	{
		name: "การเปลี่ยนของดวงวิญญาณ",
		description: "ส่วนที่ 4",
		url: "/assets/audio/how-to-meditate/realization4.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ทำสมาธิให้ไปอยู่เหนือเรื่องราว",
		description: "ส่วนที่ 1",
		url: "/assets/audio/how-to-meditate/meditation1.m4a",
		icon: faPlayCircle,
	},

	{
		name: "ทำสมาธิกับผู้เป็นเเหล่ง",
		description: "ส่วนที่ 2",
		url: "/assets/audio/how-to-meditate/meditation2.m4a",
		icon: faPlayCircle,
	},

	{
		name: "การไปอยู่เหนือทุกสิ่ง",
		description: "ส่วนที่ 3",
		url: "/assets/audio/how-to-meditate/meditation3.m4a",
		icon: faPlayCircle,
	},

	{
		name: "การเปลี่ยนที่เรียบง่าย",
		description: "ส่วนที่ 4",
		url: "/assets/audio/how-to-meditate/meditation4.m4a",
		icon: faPlayCircle,
	},
];

const Home: NextPage = () => {
	const [hasWindow, setHasWindow] = useState(false);
	const [currentUrl, setCurrentUrl] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	const audioElemRef = useRef<HTMLAudioElement>(null);

	const playAudio = (url: string) => {
		if (audioElemRef.current) {
			if (audioElemRef.current.src.includes(url)) {
				if (audioElemRef.current.paused) {
					audioElemRef.current.play();
					setCurrentUrl(url);
				} else {
					audioElemRef.current.pause();
					setCurrentUrl("");
				}

				return;
			}

			setCurrentUrl(url);
			audioElemRef.current.pause();
			audioElemRef.current.src = url;
			audioElemRef.current.currentTime = 0;
			audioElemRef.current.play();
		} else {
			alert("Failed to play audio");
		}
	};

	return (
		<div className="relative flex h-full w-full flex-col justify-center gap-y-4 px-4 pb-4 font-roboto">
			<audio ref={audioElemRef} className="absolute hidden" src="" />
			{/* You are powerful card */}
			<section className="h-[860px] w-full">
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
								<p className="mb-4 text-center text-6xl font-extrabold text-white">
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
					</div>
				</div>
			</section>

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
										<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
											เรียนสมาธิเดี๋ยวนี้
										</p>
										<p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
											การฝึกสมาธิแบบราชาโยคะนั้นเป็นเรื่องง่าย
											แต่เราจำเป็นต้องมีคําอธิบายเล็กน้อยก่อนที่จะฝึกฝน
											นี่คือห้าขั้นตอนที่เรียบง่ายในการฝึก
											และในไม่ช้า
											คุณก็จะเข้าถึงความเงียบสงบได้ในเพียงความคิดเดียว
										</p>
									</div>

									<div className="relative mt-10">
										<Swiper
											breakpoints={{
												640: {
													slidesPerView: 1,
												},
												1280: {
													slidesPerView: 4,
												},
											}}
											navigation={true}
											modules={[Navigation]}
											className="h-full w-full max-w-sm xl:max-w-7xl"
										>
											{audioNow.map((audionow) => (
												<SwiperSlide
													key={
														audionow.name +
														audionow.url
													}
												>
													<AudioNowComponent
														currentUrl={currentUrl}
														audionow={audionow}
														playAudio={playAudio}
													/>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
								</div>
							</div>
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

			<Stats />
			{hasWindow && <TestimonialComponent />}
		</div>
	);
};

export default Home;

function AudioNowComponent({ playAudio, audionow, currentUrl }: any) {
	return (
		<div
			onClick={() => {
				playAudio(audionow.url);
			}}
			className="relative mx-16 flex h-20 flex-row items-center justify-center gap-x-4 rounded-md bg-orange-500 p-2 lg:mx-2"
		>
			<FontAwesomeIcon
				icon={currentUrl == audionow.url ? faStopCircle : audionow.icon}
				className="h-8 w-8"
				aria-hidden="true"
			/>
			<div className="max-h-16 overflow-hidden text-lg">
				{audionow.name}
			</div>
		</div>
		// <div
		// 	className="relative mx-16 rounded-md bg-orange-500 py-2 lg:mx-2"
		// 	onClick={() => {
		// 		playAudio(audionow.url);
		// 	}}
		// >
		// 	<div>
		// 		<div className="absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
		// 			<FontAwesomeIcon
		// 				icon={
		// 					currentUrl == audionow.url
		// 						? faStopCircle
		// 						: audionow.icon
		// 				}
		// 				className="h-8 w-8"
		// 				aria-hidden="true"
		// 			/>
		// 			<div className="flex h-full items-center justify-center text-center">
		// 				<p className="my-4 ml-16 text-center text-lg font-medium leading-6 text-white">
		// 					{audionow.name}
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
