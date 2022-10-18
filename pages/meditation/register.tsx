import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import translation from "@/public/assets/translations/meditation/courses.json";
import Image from "next/image";
import Link from "next/link";

function SignUpComponent() {
	return (
		<div className="bg-white py-16 sm:py-24">
			<div className="relative sm:py-16">
				<div aria-hidden="true" className="hidden sm:block">
					<div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-white" />
					<svg
						className="absolute top-8 left-1/2 -ml-3"
						width={404}
						height={392}
						fill="none"
						viewBox="0 0 404 392"
					>
						<defs>
							<pattern
								id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
							height={392}
							fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
						/>
					</svg>
				</div>
				<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="relative overflow-hidden rounded-2xl bg-orange-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
						<div
							aria-hidden="true"
							className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
						>
							<svg
								className="absolute inset-0 h-full w-full"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 1463 360"
							>
								<path
									className="text-orange-500 text-opacity-40"
									fill="currentColor"
									d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
								/>
								<path
									className="text-orange-700 text-opacity-40"
									fill="currentColor"
									d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
								/>
							</svg>
						</div>
						<div className="relative">
							<div className="sm:text-center">
								<h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
									Sign up for our 7 day course
								</h3>
								<p className="mx-auto mt-6 max-w-2xl text-lg text-orange-200">
									Sagittis scelerisque nulla cursus in enim
									consectetur quam. Dictum urna sed
									consectetur neque tristique pellentesque.
								</p>
							</div>
							<form
								action="#"
								className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
							>
								<div className="min-w-0 flex-1">
									<label
										htmlFor="cta-email"
										className="sr-only"
									>
										Email address
									</label>
									<input
										id="cta-email"
										type="email"
										className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
										placeholder="Enter your email"
									/>
								</div>
								<div className="mt-4 sm:mt-0 sm:ml-3">
									<button
										type="submit"
										className="block w-full rounded-md border border-transparent bg-orange-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 sm:px-10"
									>
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function RegisterPage() {
	const { locale } = useRouter();
	const [currentLocaleStrings, setCurrentLocaleStrings] = useState(
		translation.translation.filter((p) => p.locale === locale)
	);

	useEffect(() => {
		setCurrentLocaleStrings(
			translation.translation.filter((p) => p.locale === locale)
		);
	}, [locale]);

	return (
		<div className="relative h-full w-full">
			<div className="relative flex h-full w-full flex-col">
				{/* Explanation section */}
				<section className="relative h-full w-full">
					<div className="relative overflow-hidden bg-white py-16">
						<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
							<div
								className="relative mx-auto h-full max-w-prose text-lg"
								aria-hidden="true"
							>
								<svg
									className="absolute top-12 left-full translate-x-32 transform"
									width={404}
									height={384}
									fill="none"
									viewBox="0 0 404 384"
								>
									<defs>
										<pattern
											id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
										fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
									/>
								</svg>
								<svg
									className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
									width={404}
									height={384}
									fill="none"
									viewBox="0 0 404 384"
								>
									<defs>
										<pattern
											id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
										fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
									/>
								</svg>
								<svg
									className="absolute bottom-12 left-full translate-x-32 transform"
									width={404}
									height={384}
									fill="none"
									viewBox="0 0 404 384"
								>
									<defs>
										<pattern
											id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
										fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
									/>
								</svg>
							</div>
						</div>
						<div className="relative px-4 sm:px-6 lg:px-8">
							<div className="mx-auto max-w-prose text-lg">
								<h1>
									<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
										หลักสูตรของเรา
									</span>
								</h1>
								<p className="mt-8 text-xl leading-8 text-gray-500">
									หัวใจสําคัญของคําสอนของบราห์มากุมารี
									คือหลักสูตรพื้นฐานในการฝึกสมาธิแบบราชาโยคะ
									หลักสูตรนี้ให้ความเข้าใจเกี่ยวกับความสัมพันธ์ระหว่างจิตวิญญาณและวัตถุธาตุ
									การทํางานร่วมกันระหว่างดวงวิญญาณ
									ดวงวิญญาณสูงสุด และโลกวัตถุ หัวข้อต่างๆ
									ในหลักสูตรนี้จะช่วยให้เราตระหนักรู้จักตนเองและเดินทางกลับเข้าสู่ภายในได้อย่างมีประสิทธิภาพ
								</p>

								<p className="mt-4 text-gray-500">
									ทุกหลักสูตร เรียนฟรี ไม่มีค่าใช้จ่าย
									สนใจติดต่อ
									<Link href="/contact" passHref>
										<a className="text-blue-400">
											{" "}
											คลิกที่นี่
										</a>
									</Link>
								</p>
							</div>

							<BlockTemplate>
								<h2 className="underline">
									หลักสูตรพื้นฐานราชาโยคะ
								</h2>
								<figure>
									<Image
										src="/assets/images/registration/basic.gif"
										alt="Anger"
										width={3000}
										height={1000}
									/>
								</figure>
								<p>หัวข้อการเรียนรู้</p>
								<ul role="list">
									<li>จิตสํานึกและการตระหนักรู้จักตนเอง</li>
									<li>
										การเชื่อมต่อและความสัมพันธ์กับพระเจ้า
									</li>
									<li>กฎแห่งกรรม</li>
									<li>วงจรเวลา ต้นไม้แห่งชีวิต</li>
									<li>วิถีชีวิตทางจิตวิญญา</li>
								</ul>
							</BlockTemplate>

							<br />
							<BlockTemplate>
								<h2 className="underline">
									หลักสูตรและกิจกรรมอื่นๆ
									<br />
									(หลังจากเรียนหลักสูตรพื้นฐานแล้ว)
								</h2>
								<p>
									นอกจากหลักสูตรการฝึกสมาธิแบบราชาโยคะแล้ว
									บราห์มา กุมารียังจัดสัมมนา
									ประชุมเชิงปฏิบัติการ
									และการรีทรีตในหลากหลายหัวข้อเพื่อการพัฒนาตนเอง
									<br />
									<br />
									<BlockTemplate>
										<h3>การเอาชนะความโกรธ</h3>
										<figure>
											<Image
												src="/assets/images/registration/anger.jpg"
												alt="Anger"
												width={1500}
												height={500}
											/>
										</figure>
										<p>
											ความโกรธเป็นการแสดงออกของความเจ็บปวดภายใน
											เป็นสิ่งชี้บอกว่าโลกภายในของคุณนั้นไม่ราบรื่น
											ความโกรธเป็นหนึ่งในอารมณ์ที่มีพลังในการทําลายมากที่สุด
											หลักสูตรนี้จะช่วยให้ความเข้าใจที่จะเปลี่ยนความโกรธที่มีอยู่ภายในและใช้พลังงานของคุณในทางที่เป็นบวกมากขึ้น
										</p>
										<p>
											เรียนรู้วิธีการ
											<ul>
												<li>
													เข้าใจกระบวนการของความโกรธ
												</li>
												<li>
													ตระหนักถึงพลังของความคิดของคุณในการจัดการกับความโกรธ
												</li>
												<li>
													ปล่อยวางจากความเจ็บปวดภายใน
												</li>
												<li>
													ใช้ความรู้ทางจิตวิญญาณและการตระหนักรู้เพื่อเปลี่ยนแปลงความโกรธ
												</li>
												<li>
													พัฒนาวิธีการที่หลากหลายเพื่อการมีชีวิตที่สงบสุขยิ่งขึ้น
												</li>
											</ul>
										</p>
									</BlockTemplate>
									<br />
									<BlockTemplate>
										<h3>การคิดเชิงบวก</h3>
										<figure>
											<Image
												src="/assets/images/registration/positive.jpg"
												alt="Anger"
												width={1500}
												height={500}
											/>
										</figure>
										<p>
											หลักสูตรนี้สําหรับผู้ที่ไม่แน่ใจว่าพวกเขาพร้อมสําหรับการฝึกสมาธิ
											แต่ต้องการทำความเข้าใจการทํางานของจิตใจให้และกระจ่างมากขึ้น
											และเรียนรู้วิธีการจัดการความคิดของพวกเขา
										</p>
										<p>
											ประโยชน์ที่ได้รับ:
											<ul>
												<li>
													การกลับมาเป็นนายของความคิดและความรู้สึกของตนเอง
												</li>
												<li>
													ศิลปะการสะท้อนตนเองที่อ่อนโยน
												</li>
												<li>
													ทดลองมีประสบการณ์กับธรรมชาติของจิตใจที่มีความเป็นบวก
												</li>
												<li>
													จบสิ้นความเป็นลบ,
													ภาษาที่สูบพลังงาน
													และการพูดคุยกับตนเอง
												</li>
												<li>
													พัฒนาทัศนคติเชิงบวกอย่างต่อเนื่อง
												</li>
											</ul>
										</p>
									</BlockTemplate>
									<br />
									<BlockTemplate>
										<h3>ความนับถือตนเอง</h3>
										<figure>
											<Image
												src="/assets/images/registration/respect.jpg"
												alt="Anger"
												width={1500}
												height={500}
											/>
										</figure>
										<p>
											ไม่ว่าเราจะประสบความสําเร็จมามากขนาดไหนก็ตาม
											เราจะประสบความได้สำเร็จมากขึ้นด้วยการเพิ่มความนับถือตนเอง
											เตือนตนเองถึงคุณค่าหลักของเรา
											คุณค่าดั้งเดิมของเรา
											เราสามารถเผชิญกับชีวิตได้อย่างมั่นใจและสงบสุข
										</p>
										<p>
											เรียนรู้วิธีการที่จะ:
											<ul>
												<li>
													รู้จักและค้นพบตัวตนในเชิงบวกของคุณ
												</li>
												<li>
													ยอมรับตนเอง ระบุจุดแข็ง
													ความสามารถ
													และเอกลักษณ์ส่วนบุคคล
												</li>
												<li>
													พัฒนากลยุทธ์ที่มีประสิทธิภาพสําหรับการสร้างความสัมพันธ์ที่ดี
													ปล่อยวางความกลัวและความก้าวร้าวรุนแรง
												</li>

												<li>
													เพิ่มพลังอํานาจให้ตัวเอง,
													สร้างทางเลือกที่เหมาะสมเพื่อรักษาสมดุลภายใ
												</li>
											</ul>
										</p>
									</BlockTemplate>
									<br />
									<BlockTemplate>
										<h3>การใช้ชีวิตที่ปราศจากความเครียด</h3>
										<figure>
											<Image
												src="/assets/images/registration/stress.jpg"
												alt="Anger"
												width={1500}
												height={500}
											/>
										</figure>
										<p>
											ความเครียดถูกระบุว่าเป็นสาเหตุหลักของปัญหาสุขภาพมากมาย
											สาเหตุส่วนใหญ่มาจากเรื่องทางจิตมากกว่าทางกาย
											และดังนั้นจึงเป็นเรื่องยากมากที่จะป้องกันและแก้ไข
											ความเครียดขส่งผลกระทบต่อพวกเราส่วนใหญ่ในบางช่วงเวลาของชีวิต
											ไม่ว่าจะเกิดจากสาเหตุใดก็ตาม
											ความเครียดจะสูบพลังงานทั้งทางร่างกาย
											อารมณ์และจิตใจ
										</p>
										<p>
											เรียนรู้วิธีการที่จะ:
											<ul>
												<li>
													ระบุรูปแบบต่างๆ
													ของความเครียดและผลกระทบต่อสุขภาพของเรา
												</li>
												<li>
													ระบุตัวกระตุ้นของความเครียด
													วิธีการ
													และเหตุผลที่เราตอบโต้
												</li>
												<li>
													เครื่องมือที่ใช้งานได้จริงเพื่อทำให้เกิดการเปลี่ยนแปลงภายใน
												</li>
												<li>
													เปลี่ยนความกลัวเป็นการโอบกอดความรู้สึกนั้น
												</li>
												<li>
													พัฒนาความฉลาดทางจิตวิญญาณของคุณเพื่อจัดการความเครียด
												</li>
											</ul>
										</p>
									</BlockTemplate>
								</p>
							</BlockTemplate>
						</div>
					</div>
				</section>

				{/* Sign up section */}
				{/* <section>
					<SignUpComponent />
				</section> */}
			</div>
		</div>
	);
}

function BlockTemplate({ children }: any) {
	return (
		<div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
			{children}
		</div>
	);
}
