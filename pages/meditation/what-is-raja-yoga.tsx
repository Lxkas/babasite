import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function WhatIsRajaYoga() {
	const [hasWindow, setHasWindow] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	return (
		<div className="relative overflow-hidden bg-white py-16">
			<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
				<div
					className="relative mx-auto h-full max-w-prose text-lg"
					aria-hidden="true"
				>
					<svg
						className="absolute top-12 left-full translate-x-32 transform"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						{/* <rect
							width="404"
							height="384"
							fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
						/> */}
					</svg>
					<svg
						className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="384"
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute bottom-12 left-full translate-x-32 transform"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="d3eb07ae-5182-43e6-857d-35c643af9034"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="384"
							fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-prose text-lg">
					<h1>
						{/* <span className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600">
							Meditation
						</span> */}
						<span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
							สมาธิแบบราชาโยคะ
						</span>
					</h1>
					<div className="mt-8 leading-8 text-gray-500">
						<span>
							<figure>
								<img
									className="w-full rounded-lg lg:float-left lg:mb-2 lg:mr-4 lg:w-96"
									src="/assets/images/about/what-is-raja-yoga/sun.jpg"
									alt=""
								/>
							</figure>
							<p>
								ในโลกสมัยใหม่ การใช้ชีวิตที่รีบเร่งขึ้นเรื่อย ๆ
								ทำให้เราสูญเสียการเชื่อมโยงกับความสงบและพลังภายในที่แท้จริงของตนเอง
								เมื่อเราไม่สามารถรู้สึกมั่นคงกับตนเองภายในได้
								เราจึงมีประสบการณ์ของการถูกผลัก ถูกดัน
								หรือถูกดึงไปในทิศทางต่าง ๆ มากมาย
								และเริ่มรู้สึกเครียด รู้สึกติดกับอยู่ภายใน
								และเมื่อเวลาผ่านไป
								ความรู้สึกนี้ก็อาจนําไปสู่การเจ็บป่วยและโรคภัยต่างๆได้ทีละน้อย
								ซึ่งเกิดจากการขาดสมดุลในการดูแลสุขภาพของจิตใจ
								อารมณ์ และร่างกาย
							</p>
							<br />
							<p>
								การทำสมาธิเป็นการเดินทางเข้าสู่ภายใน
								เป็นการเดินทางเพื่อการค้นพบตนเองอีกครั้ง
								สมาธิคือเวลาแห่งการใคร่ครวญในความเงียบสงบ
								ออกมาจากความเร่งรีบและความสับสนวุ่นวายของการใช้ชีวิตประจําวัน
								การจัดหาเวลานอกเช่นนี้
								จะช่วยให้เราสามารถกลับคืนสู่ตัวตนภายในที่เงียบสงบได้อีกครั้ง
							</p>
						</span>
					</div>
				</div>
				<div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
					<figure>
						<img
							className="w-full rounded-lg lg:float-left lg:mr-4 lg:mb-2 lg:w-96"
							src="/assets/images/about/what-is-raja-yoga/yogi.webp"
							alt=""
						/>
					</figure>
					<p>
						สมาธิแบบราชาโยคะ เป็นสมาธิที่ทุกคนสามารถปฏิบัติได้
						เป็นการทำสมาธิที่ไม่มีพิธีกรรม ไม่ใช้มันตรา
						สามารถปฏิบัติได้ทุกที่ทุกเวลา
						สมาธิแบบราชาโยคะเป็นสมาธิแบบ {"'เปิดตา'"}
						ที่สามารถใช้ได้ในทุกสถานการณ์ เรียบง่าย
						และไม่ยากที่จะฝึกฝน เพื่อรักษาจิตสำนึกให้เท่าทัน
						และไปอยู่เหนือสำนึกรู้ธรรมดาที่เป็นอัตโนมัติในชีวิตประจำวันทั่วไป
						ซึ่งเป็นจุดเริ่มต้นของการเสริมสร้างพลังทางจิตวิญญาณ
						และราชาโยคะ
						ยังเป็นการเชื่อมโยงกับพลังงานแห่งชีวิตสูงสุดจากเบื้องบน
						อันจะนำมาซึ่งประสบการณ์ของการหวนคืนสู่ความจริงแท้
						การเติมเต็ม ความมั่นคง ความรู้สึกปลอดภัย ความสงบ
						และปิติสุขอย่างลึกล้ำ
					</p>
					<p>
						การอยู่ในสำนึกรู้ทางจิตวิญญาณนี้
						จะทําให้เรามีพลังในการเลือกที่จะสร้างความคิดที่ดีและเป็นบวก
						แทนความคิดที่เป็นลบและไร้ประโยชน์
						เราจะเริ่มเลือกได้ที่จะตอบสนองต่อสถานการณ์อย่างที่ควรจะเป็น
						แทนการตอบโต้โดยอัตโนมัติตามความคุ้นชินหรือการถูกกระตุ้น
						เราจะเริ่มใช้ชีวิตด้วยความสอดคล้องกลมกลืนมากขึ้น
						มีความสัมพันธ์ที่ดี มีความสุข และเข้มแข็งยิ่งขึ้น
						และเปลี่ยนชีวิตของเราให้เป็นไปในทางบวกให้มากที่สุด
					</p>
					<div className="relative mt-4 aspect-video 2xl:absolute 2xl:right-48 2xl:top-0 2xl:w-1/6 2xl:bg-white 2xl:p-4">
						{hasWindow && (
							<>
								<p className="mb-1 font-bold text-black">
									The Power Pack of Raja Yoga
								</p>
								<ReactPlayer
									url="http://www.brahmakumaris.org/alfresco/guestDownload/direct/workspace/SpacesStore/ce6a4c06-2cf9-47a0-82be-ec9d3b1e1da2/The%20power%20pack%20of%20raja%20Yoga%202.mp4"
									light={
										"https://www.brahmakumaris.org/images/headers/Head8banner.jpg"
									}
									controls
									width="100%"
									height="100%"
								/>
								<p>
									Sister Jayanti gives deep insight on what
									inspires people to seek truth.
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
