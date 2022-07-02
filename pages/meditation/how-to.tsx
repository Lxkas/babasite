import {
	faCircleArrowDown,
	faPauseCircle,
	faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const oranges = [
	"bg-white",
	"bg-orange-50",
	"bg-orange-100",
	"bg-orange-200",
	"bg-orange-300",
];

type AudioLineType = {
	title: string;
	url: string;
};

type StepComponentProps = {
	icon: string;
	audios: AudioLineType[];
	title: string;
	description: string;
	ind: number;
};

function AudioLine({ audio }: { audio: AudioLineType }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrack, setCurrentTrack] = useState<
		HTMLAudioElement | undefined
	>();

	return (
		<li className="flex">
			<div className="w-full p-2">
				<div className="text-md w-full font-medium text-gray-900">
					<div className="ml-auto flex flex-row gap-x-2">
						<span className="mr-auto">{audio.title}</span>
						<button className="flex items-center justify-center rounded-full bg-white p-2 shadow-md">
							<Link href={audio.url}>
								<FontAwesomeIcon
									icon={faCircleArrowDown}
									color={"orange"}
								/>
							</Link>
						</button>
						<button
							className="flex items-center justify-center rounded-full bg-white p-2 shadow-md"
							onClick={() => {
								try {
									if (typeof currentTrack == "undefined") {
										const newTrack = new Audio(audio.url);
										setCurrentTrack(newTrack);

										newTrack.play();
										setIsPlaying(true);

										return;
									}

									if (isPlaying) {
										currentTrack?.pause();
										setIsPlaying(false);
									} else {
										currentTrack?.play();
										setIsPlaying(true);
									}
								} catch (error) {
									console.error(error);
								}
							}}
						>
							<FontAwesomeIcon
								icon={isPlaying ? faPauseCircle : faPlayCircle}
								color={"orange"}
							/>
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}

function StepComponent({
	icon,
	audios,
	title,
	description,
	ind,
}: StepComponentProps) {
	return (
		<li className={`${oranges[ind]}`}>
			<div className="block">
				<div className="flex items-center px-4 py-4 sm:px-6">
					<div className="flex min-w-0 flex-1 items-center">
						<div className="flex-shrink-0 self-start">
							<img
								className="h-24 w-24 rounded-full"
								src={icon}
								alt=""
							/>
						</div>
						<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
							<div>
								<p className="truncate text-lg font-bold text-black">
									{title}
								</p>
								<p className="mt-2 flex items-center text-sm text-black">
									{/* <svg
																className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																aria-hidden="true"
															>
																<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
																<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
															</svg> */}
									<span>{description}</span>
								</p>
							</div>
							<div>
								<div>
									<div className="text-md text-gray-900">
										<ul
											role="list"
											className="divide-y divide-gray-200"
										>
											{audios.map((audio, ind) => {
												return (
													<AudioLine
														key={ind}
														audio={audio}
													/>
												);
											})}
										</ul>
									</div>
									<p className="mt-2 flex items-center text-sm text-gray-500">
										{/* <svg
																	className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fillRule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																		clipRule="evenodd"
																	/>
																</svg>
																Completed phone
																screening */}
										{/* Extra info */}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* <svg
													className="h-5 w-5 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clipRule="evenodd"
													/>
												</svg> */}
					</div>
				</div>
			</div>
		</li>
	);
}

export default function HowtoPage() {
	return (
		<div className="grid grid-cols-12 overflow-auto p-2">
			<div className="col-span-2 hidden lg:block"></div>
			<div className=" col-span-12 grid h-screen grid-cols-12 lg:col-span-8">
				<div className="relative col-span-12 lg:col-span-8">
					{/* How to Meditate header */}
					<div className="prose mb-8">
						<h2>วิธีการฝึกสมาธิ</h2>
						<p>{`การฝึกสมาธิแบบราชาโยคะนั้นเป็นเรื่องง่าย แต่เราจำเป็นต้องมีคําอธิบายเล็กน้อยก่อนที่จะฝึกฝน นี่คือห้าขั้นตอนที่เรียบง่ายในการฝึก และในไม่ช้า คุณก็จะเข้าถึงความเงียบสงบได้ในเพียงความคิดเดียว - และไม่จำเป็นต้องทําตามขั้นตอนเหล่านี้อีกต่อไป`}</p>
						<p className="ml-8 text-xl font-bold text-orange-500">
							ขั้นตอน
						</p>
					</div>

					{/* Steps and experience table */}
					<div className="flex flex-col">
						{/* Steps and experience headers */}
						{/* <div className="flex flex-col border-b border-b-orange-500 pb-4 xl:flex-row">
							<div className="w-full text-4xl xl:w-1/2">
								Steps
							</div>
							<div className="hidden w-full text-4xl xl:block xl:w-1/2">
								Experience
							</div>
						</div> */}

						{/* Steps */}
						<div className="flex flex-col gap-y-4">
							<ul
								role="list"
								className="divide-y divide-gray-200"
							>
								<StepComponent
									ind={0}
									title={"ขั้นตอนที่ 1: การผ่อนคลาย"}
									description={
										"การผ่อนคลายเป็นเรื่องของการคลายความเกร็งตัวและความตึงเครียดออกไป และนําจิตใจและร่างกายเข้าสู่สภาวะที่นื่งและเงียบสงบ"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-relaxation.png"
									}
									audios={[
										{
											title: "ผ่อนคลายในป่าใหญ่",
											url: "/assets/audio/how-to-meditate/relaxation1.m4a",
										},
										{
											title: "ผ่อนคลายกล้ามเนื้อ",
											url: "/assets/audio/how-to-meditate/relaxation2.m4a",
										},
										{
											title: "ผ่อนคลายกับลมหายใจ",
											url: "/assets/audio/how-to-meditate/relaxation3.m4a",
										},
										{
											title: "ผ่อนคลายการเชื่อมโยง",
											url: "/assets/audio/how-to-meditate/relaxation4.m4a",
										},
									]}
								/>

								<StepComponent
									ind={1}
									title={"ขั้นตอนที่ 2: การจดจ่อจิตใจ"}
									description={
										"การจดจ่อจิตใจ ช่วยให้ฉันใช้เวลาของฉันไปอย่างมีประสิทธิภาพ เมื่อผ่อนคลายแล้ว ก็จดจ่ออยู่กับความคิดที่เลือกที่จะมี"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-concentration.png"
									}
									audios={[
										{ title: "Title 1", url: "#" },
										{ title: "Title 2", url: "#" },
										{ title: "Title 3", url: "#" },
										{ title: "Title 4", url: "#" },
									]}
								/>

								<StepComponent
									ind={2}
									title={"ขั้นตอนที่ 3: การใคร่ครวญคือ"}
									description={
										"การคิดอย่างลึกล้ำเกี่ยวกับตัวฉัน โลกภายในของฉัน และคุณค่าหรือคุณงามความดีต่างที่ฉันยึดถือ"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-contemplation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>

								<StepComponent
									ind={3}
									title={"ขั้นตอนที่ 4: การตระหนักรู้"}
									description={
										"เวลาที่ความเข้าใจอย่างลึกซึ้งในระดับความคิดและความรู้สึกในหัวใจที่จริงแท้ของฉันสอดคล้องกัน และทำให้ฉันมีประสบการณ์กับบางสิ่งที่มีนัยยะสำคัญที่ลึกล้ำมากขึ้น"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-realisation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>

								<StepComponent
									ind={4}
									title={"ขั้นตอนที่ 5: สมาธิ "}
									description={
										"การสร้างสมาธิ คือการจดจ่อจิตใจอยู่กับความคิดหนึ่ง และการระลึกถึงตัวตนเดิมแท้ในความเป็นจิตวิญญาณของฉัน ปลุกเรียกและสัมผัสกับสภาวะของชีวิตที่สวยงามและเป็นสุขนั้นอีกครั้ง..."
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-meditation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>
							</ul>
						</div>
					</div>

					{/* <div className="mt-8 p-2">
						<span>
							{`Learn more about Raja Yoga meditation - what it is,
							why, how, where and when to do it, and the kind of
							people who are using it in their lives here For more
							meditation experiences here on this site, step
							across into Experience Ever thought about going on a
							Meditation Retreat? Do you feel you don't time to
							meditate? Meditating for just one minute can make a
							difference. Find out how: just-a-minute`}
						</span>
					</div> */}
				</div>

				{/* second */}
				{/* <div className="hidden lg:col-span-4 lg:block">VIDEO HERE</div> */}
			</div>

			<div className="col-span-2 hidden  lg:block"></div>
		</div>
	);
}
