import Image from "next/image";

export default function StudentsPage() {
	return (
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
					<figure>
						<Image
							className="w-full rounded-lg"
							src="/assets/images/about/students.jpg"
							alt=""
							width={1310}
							height={873}
							quality={100}
						/>
					</figure>
					<p>
						นักเรียนของ บราห์มา กุมารี นั้นมาจากทุกวัย
						และทุกพื้นฐานชีวิต
						เป็นผู้ที่เข้ามาศึกษาความรู้ทางจิตวิญญาณ
						ให้ความเคารพต่อทุกพื้นฐานความเชื่อ ความศรัทธา
						และให้การอธิบายอย่างสอดคล้องในเรื่องของธรรมชาติของดวงวิญญาณ
						พระเจ้า เวลาและกรรม
						และให้แรงบันดาลใจต่อการมีวิถึชีวิตที่รู้แจ้ง นักเรียนของ
						บราห์มา กุมารี คือผู้ที่ฝึกฝนและสอนสมาธิแบบราชาโยคะ
						ที่ช่วยผ่อนคลายจิตใจและหล่อเลี้ยงให้เกิดความสมดุลอย่างดีระหว่างโลกภายในและภายนอกของเรา
						ผ่านกิจกรรมช่วยเหลือสังคม และการมีส่วนร่วมในหลายๆ
						กิจกรรม เราสนับสนุนให้เกิดความเข้าใจด้านจิตวิญญาณ
						ความเป็นผู้นำที่มีความซื่อตรงและมีการกระทำที่สูงส่งเพื่อสร้างสรรค์โลกที่น่าอยู่
					</p>
				</div>
			</div>
		</div>
	);
}
