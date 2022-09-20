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
						นักเรียนของบราห์มากุมารี มาจากทุกเพศทุกวัย
						และทุกพื้นฐานชีวิต
						เป็นผู้ที่เข้ามาศึกษาความรู้ทางจิตวิญญาณ
						และฝึกฝนการทำสมาธิแบบราชาโยคะ เพื่อเข้าถึงพลังแห่งสัจจะ
						ความบริสุทธิ์ ความสงบ ความรัก ความสุข
						และพลังจากภายในตนเอง
						เราเปิดกว้างและให้ความเคารพต่อทุกพื้นฐานความเชื่อ
						ความศรัทธา และให้การอธิบายที่ชัดเจน
						ในเรื่องเกี่ยวกับธรรมชาติของดวงวิญญาณ (soul) พระเจ้า
						(Supreme Soul) วงจรแห่งกาลเวลา และกฏแห่งการกระทำ
						เพื่อการเปลี่ยนแปลงจิตสำนึก ทัศนคติ และการกระทำ
						ให้เกิดคุณประโยชน์สูงสุดต่อตนเอง ครอบครัว และสังคม
						นักเรียนของบราห์มากุมารี
						คือผู้ที่ฝึกฝนสมาธิเปิดตาแบบราชาโยคะ
						ที่ช่วยให้กลับมามีอำนาจเหนือจิตใจตนเอง
						ทั้งในระดับจิตสำนึกและจิตใต้สำนึก
						และหล่อเลี้ยงให้เกิดความสมดุลอย่างดีระหว่างโลกภายในและภายนอก
						รวมทั้งการเข้าร่วมกิจกรรมช่วยเหลือสังคม
						ฝึกฝนความเป็นผู้นำที่มีความซื่อตรง
						และมีการกระทำที่สร้างสรรค์
					</p>
				</div>
			</div>
		</div>
	);
}
