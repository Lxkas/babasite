import type { NextPage } from "next";
import Image from "next/image";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Stats from "@/components/shared/Stats";
import "swiper/css";
import "swiper/css/navigation";

import AtAGlanceComponent from "@/components/shared/AtAGlanceComponent";
import TestimonialComponent from "@/components/shared/Testimonial";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
			<section className="h-[720px] w-full">
				<div className="relative flex h-full w-full items-center justify-center">
					<Image
						quality={100}
						src={"/assets/images/home/a.png"}
						alt="Lotus"
						className="object-cover"
						layout="fill"
						// width={1264}
						// height={842}
					/>

					<div className="relative flex h-full w-full flex-col items-center justify-center">
						<div className="absolute h-full w-full opacity-25"></div>
						<div className="relative flex h-full w-full flex-col items-center justify-center">
							<div className="flex flex-col">
								<p className="mb-16 text-center text-4xl font-extrabold text-gray-800 lg:text-6xl">
									ความคิดที่ทรงพลัง
									<br />
									ชีวิตที่ทรงพลัง
								</p>
								<p className="w-full px-16 pb-2 text-center text-2xl font-normal text-gray-800 lg:text-4xl">
									ความคิดของเรานั้นมีอำนาจมากกว่าที่คิด
									<br />
									มันสามารถเปลี่ยนแปลงชีวิตของเรา
									<br />
									และเปลี่ยนแปลงโลกได้อย่างน่าอัศจรรย์
								</p>
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
						delay: 5000,
					}}
				>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={"/assets/images/home/f.png"}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>

							<div className="absolute cursor-default">
								<div className="flex flex-col items-center justify-center">
									<div className="text-4xl text-white md:text-6xl lg:text-8xl">
										<span className="text-yellow-200">
											ชีวิตดี เริ่มที่
										</span>{" "}
										ความคิด
									</div>
									<div className="text-2xl text-yellow-200 md:text-4xl lg:text-6xl xl:text-8xl">
										คิด
										<span className="text-white">
											อย่างไรให้เป็นสุข
										</span>
									</div>

									<div className="mt-16 text-xl text-white md:text-4xl">
										สอบถาม เรียนฟรี ราชาโยคะ โทร 081-5670784
									</div>
								</div>
								{/* <div className="flex flex-col items-center text-white">
									<p className="text-4xl font-extrabold xl:text-8xl">
										<span className="text-yellow-200">
											ชีวิตดี เริ่มที่
										</span>
										ความคิด
									</p>
									<p className="px-16 text-xl xl:text-4xl">
										<span className="text-8xl">
											คิด
											<span className="text-yellow-200">
												อย่างไรให้เป็นสุข
											</span>{" "}
										</span>
										<br />
										<br />
										สอบถาม เรียนฟรี ราชาโยคะ โทร{" "}
										<span className="font-extrabold">
											081-5670784
										</span>
									</p>
								</div> */}
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={"/assets/images/home/c.png"}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>

							<div className="absolute cursor-default">
								<div className="flex flex-col items-center justify-center">
									<div className="text-4xl text-teal-800 md:text-6xl lg:text-8xl">
										มี
										<span className="text-white">
											ความรัก
										</span>{" "}
										ความเคารพ
									</div>
									<div className="text-2xl text-teal-800 md:text-4xl lg:text-6xl xl:text-8xl">
										รู้ค่าในตนเอง อย่าง
										<span className="text-white">
											ก้าวกระโดด
										</span>
									</div>

									<div className="mt-16 text-xl text-white md:text-4xl">
										สอบถาม เรียนฟรี ราชาโยคะ โทร 081-5670784
									</div>
								</div>
								{/* <div className="flex flex-col items-center text-teal-800">
									<span className="text-4xl font-extrabold xl:text-8xl">
										มี
										<span className="text-white">
											ความรัก
										</span>{" "}
										ความเคารพ
									</span>
									<span className="px-16 text-xl xl:text-4xl">
										<span className="text-6xl xl:text-8xl">
											รู้ค่าในตนเอง อย่าง
											<span className="text-white">
												ก้าวกระโดด
											</span>
										</span>
										<br />
										<br />
									</span>
									<span className="text-4xl">
										สอบถาม เรียนฟรี ราชาโยคะ โทร 081-5670784
									</span>
								</div> */}
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<div className="relative flex h-[580px] w-full items-center justify-center py-4">
								<Image
									src={"/assets/images/home/b.png"}
									quality={100}
									alt="Forest"
									className="-z-20 object-cover"
									layout="fill"
								/>

								<div className="absolute cursor-default">
									<div className="flex flex-col items-center justify-center">
										<div className="text-4xl text-black md:text-6xl lg:text-8xl">
											มีความ
											<span className="text-orange-600">
												มั่นคง
											</span>
											ภายใน
										</div>
										<div className="text-2xl text-black md:text-4xl lg:text-6xl xl:text-8xl">
											และความ
											<span className="text-orange-600">
												มั่นใจ
											</span>
											ในตนเอง
										</div>

										<div className="mt-16 text-xl text-black md:text-4xl">
											สอบถาม เรียนฟรี ราชาโยคะ โทร
											081-5670784
										</div>
									</div>
									{/* <div className="flex flex-col items-center text-white">
									<p className="text-4xl font-extrabold xl:text-8xl">
										<span className="text-yellow-200">
											ชีวิตดี เริ่มที่
										</span>
										ความคิด
									</p>
									<p className="px-16 text-xl xl:text-4xl">
										<span className="text-8xl">
											คิด
											<span className="text-yellow-200">
												อย่างไรให้เป็นสุข
											</span>{" "}
										</span>
										<br />
										<br />
										สอบถาม เรียนฟรี ราชาโยคะ โทร{" "}
										<span className="font-extrabold">
											081-5670784
										</span>
									</p>
								</div> */}
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-[580px] w-full items-center justify-center py-4">
							<Image
								src={"/assets/images/home/e.png"}
								quality={100}
								alt="Forest"
								className="-z-20 object-cover"
								layout="fill"
							/>
							<div className="absolute cursor-default">
								<div className="flex flex-col items-center justify-center">
									<div className="text-4xl text-yellow-800 md:text-6xl lg:text-8xl">
										ชีวิตที่
										<span className="text-yellow-100">
											สว่างไสว
										</span>
									</div>
									<div className="text-2xl text-yellow-800 md:text-4xl lg:text-6xl xl:text-8xl">
										และ
										<span className="text-yellow-100">
											เบาสบาย
										</span>
										ไร้กังวล
									</div>

									<div className="mt-16 text-xl text-yellow-800 md:text-4xl">
										สอบถาม เรียนฟรี ราชาโยคะ โทร 081-5670784
									</div>
								</div>
								{/* <div className="flex flex-col items-center text-white">
									<p className="text-4xl font-extrabold xl:text-8xl">
										<span className="text-yellow-200">
											ชีวิตดี เริ่มที่
										</span>
										ความคิด
									</p>
									<p className="px-16 text-xl xl:text-4xl">
										<span className="text-8xl">
											คิด
											<span className="text-yellow-200">
												อย่างไรให้เป็นสุข
											</span>{" "}
										</span>
										<br />
										<br />
										สอบถาม เรียนฟรี ราชาโยคะ โทร{" "}
										<span className="font-extrabold">
											081-5670784
										</span>
									</p>
								</div> */}
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>

			<section>
				<Swiper
					loop={true}
					navigation={true}
					modules={[Navigation]}
					className="h-full w-full"
				>
					<SwiperSlide>
						<div className="relative flex h-full w-full cursor-pointer items-center justify-center bg-black">
							{/* TODO: Make these local images, and make them components */}
							<Link href="/meditation/register">
								<Image
									src="/assets/images/registration/basic.gif"
									alt="Basic"
									width={3000}
									height={1000}
								/>
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							{/* TODO: Make these local images, and make them components */}
							<Link href="/meditation/register">
								<Image
									src="/assets/images/home/anger.jpg"
									alt="Anger Management"
									width={3000}
									height={1000}
								/>
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							{/* TODO: Make these local images, and make them components */}
							<Link href="/meditation/register">
								<Image
									src="/assets/images/home/stress.jpg"
									alt="Stress Management"
									width={3000}
									height={1000}
								/>
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							{/* TODO: Make these local images, and make them components */}

							<Link href="/meditation/register">
								<Image
									src="/assets/images/home/positive.jpg"
									width={3000}
									height={1000}
									alt="Positive Thinking"
								/>
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative flex h-full w-full items-center justify-center bg-black">
							{/* TODO: Make these local images, and make them components */}
							<Link href="/meditation/register">
								<Image
									src="/assets/images/home/respect.jpg"
									width={3000}
									height={1000}
									alt="Respect"
								/>
							</Link>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>

			{/* <section className="w-full">
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
			</section> */}

			<Stats />

			{hasWindow && <AtAGlanceComponent />}
			{hasWindow && <TestimonialComponent />}

			{/* Circle buttons */}
			<section className="w-full p-2">
				{/* <Link href={"/virtuescope"} passHref>
					<a>วงล้อคุณธรรม</a>
				</Link> */}

				<div className="mt-8 grid grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-8">
					<CircleButton
						imgUrl="/assets/images/home/circle_buttons/circle.png"
						text="วงล้อคุณธรรม"
						url="/virtuescope"
					/>
					<CircleButton
						imgUrl="/assets/images/home/circle_buttons/ebook.png"
						text="อีบุ๊คน่าสนใจ"
						url="/ebook"
					/>
					<CircleButton
						imgUrl="/assets/images/home/circle_buttons/flowers.png"
						text="ดอกไม้คุณธรรม"
						url="https://unshakeable.me/flowersofvirtue/"
					/>
					<CircleButton
						imgUrl="/assets/images/home/circle_buttons/jewels.png"
						text="เพชรพลอยแห่งแสงสว่าง"
						url="https://unshakeable.me/JewelsOfLight/"
					/>
					<CircleButton
						imgUrl="/assets/images/home/circle_buttons/pure.png"
						text="อาหารบริสุทธิ์"
						url="https://unshakeable.me/purefood/"
					/>
					<CircleButton
						imgUrl="/assets/images/home/circle_buttons/seamsi.png"
						text="เซียมซีดีทุกใบ"
						url="http://www.brahmakumaris.or.th/seamsi/"
					/>
				</div>
			</section>
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

function CircleButton({ text, imgUrl, url }: any) {
	return (
		<Link href={url} target="_blank" passHref>
			<a
				target="_blank"
				className="relative aspect-square w-32 cursor-pointer rounded-full transition-all duration-150 hover:-translate-y-2 md:w-64"
			>
				<Image src={imgUrl} alt={`${text} button`} layout="fill" />
				<div className="-mt-2 flex w-full items-center justify-center">
					<span className="text-xs md:text-xl">{text}</span>
				</div>
			</a>
		</Link>
	);
}
