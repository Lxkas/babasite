import Image from "next/image";

export default function BenefitsPage() {
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
					<h1>
						<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
							ประสบการณ์ที่เราให้
						</span>
					</h1>
					<p className="mt-8 text-xl leading-8 text-gray-500">
						เราเสนอโครงสร้างสำหรับประสบการณ์ในการเปลี่ยนแปลงชีวิต
						โดยการสำรวจและค้นหาคำตอบของคำถามพื้นฐานที่สุดที่ว่า
						“ฉันคือใคร?”
						เราพัฒนาสำนึกของการเป็นนายเหนือตนเองที่ทำให้เรารับผิดชอบต่อชีวิตของเรา
						เกมของการกล่าวโทษจบสิ้น
						สำนึกรู้ทางจิตวิญญาณที่ลึกล้าจะค่อยๆทลายกรงขังของภาพลวงตา
						เราจะกู้คืนความรับผิดชอบต่อการสร้างชีวิตของเราเองอีกครั้ง
						ปัจจุบันจึงกลายเป็นของขวัญที่แท้จริง
					</p>
				</div>
				<div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
					<p>
						เราทำสิ่งนี้ด้วยการมีทักษะในการศึกษาเล่าเรียนในสี่ด้านต่อไปนี้
					</p>

					{/* TODO: Make this a component */}
					<div className="mb-8 flex flex-col">
						<div className="font-bold">
							การศึกษาความรู้ทางจิตวิญญาณ
						</div>
						<div className="flex flex-col ">
							<div className="relative max-w-2xl">
								<Image
									src="/assets/images/about/benefits/soul_knowledge.jpg"
									quality={100}
									width={3000}
									height={2000}
									alt="Woman teaching group of adults spiritual knowledge"
								/>
							</div>
							<div>
								<ul role="list">
									<li>
										สัจจะที่เป็นสากล
										เกี่ยวกับธรรมชาติของดวงวิญญาณ พระเจ้า
										และผลกระทบของความสัมพันธ์ใกล้ชิดระหว่างทั้งสอง
										สร้างบริบทสำหรับความพยายามทางจิตวิญญาณของเรา
										ความเข้าใจนี้ช่วยให้เราควบคุมการไหลเลื่อนของประสบการณ์ที่ดำเนินอยู่อย่างต่อเนื่องซึ่งเราเรียกว่าชีวิต
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="mb-8 flex flex-col">
						<div className="font-bold">
							การฝึกฝนสมาธิของราชาโยคะ
						</div>
						<div className="flex flex-col ">
							<div className="relative max-w-2xl">
								<Image
									src="/assets/images/about/benefits/meditation.jpg"
									quality={100}
									width={3000}
									height={2000}
									alt="People meditating in room with soft flooring illuminated with orange light"
								/>
							</div>
							<div>
								<ul role="list">
									<li>
										กระบวนที่เป็นขั้นเป็นตอนที่ช่วยให้เราจดจ่อกับศักยภาพและพละกำลังที่ลึกล้ำภายในของเรา
										ซึ่งเริ่มต้นที่จะงอกงาม และขยายตัว
										ด้วยการคิดให้น้อยลงและทรงพลังมากขึ้น
										เราก็จะเริ่มรู้สึกถึงความยิ่งใหญ่ของเราเอง
									</li>
									<li>
										ในการฝึกสมาธิรูปแบบนี้
										เราจะเห็นว่าความเงียบสงบนั้นเป็นช่องทางที่แท้จริงที่จะไปสู่ความพอใจได้อย่างไร
										ความเงียบสงบนำเราไปสู่โลกของความนิ่ง
										ราวกับกดปุ่มหยุดชั่วคราวบนแผ่นฟิล์มของชีวิตของเรา
									</li>
									<li>
										สมาธิช่วยให้เราเป็นนายของเวลา
										ยิ่งเราให้เวลากับความเงียบสงบมากแค่ไหน
										ความเงียบสงบก็จะให้เวลากับเรามากตามนั้น
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="mb-8 flex flex-col">
						<div className="font-bold">การมีสำนึกของคุณธรรม</div>
						<div className="flex flex-col ">
							<div className="relative max-w-2xl">
								<Image
									src="/assets/images/about/benefits/van.jpg"
									quality={100}
									width={3000}
									height={2000}
									alt="People holding signs at the sides of a flower van"
								/>
							</div>
							<div>
								<ul role="list">
									<li>
										ด้วยสิ่งนี้เราเรียนรู้ว่าความเป็นจิตวิญญาณที่จริงแท้คือการมีความสามารถที่จะใช้คุณธรรมได้แม้ในสถานการณ์ที่ยุ่งยาก
										ด้วยการทำเช่นนี้จะส่งเสริมความเคารพตนเองของเรา
									</li>
									<li>
										เราเรียนรู้ที่จะควบคุมและเข้าใจพลังงานของความรัก
										ซึ่งอยู่ในการ ให้ไม่ใช่การรับ
									</li>
									<li>
										โดยธรรมชาติแล้ว
										เรามักจดจ่อกับคุณธรรมของเราเอง
										และของผู้อื่น มากกว่าข้อบกพร่อง
										ความสัมพันธ์จึงจะได้รับการเยียวยา
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="font-bold">
							การรับใช้ผู้อื่นทางจิตวิญญาณ
						</div>
						<div className="flex flex-col ">
							<div className="relative max-w-2xl">
								<Image
									src="/assets/images/about/benefits/placeholder.avif"
									quality={100}
									width={3000}
									height={2000}
									alt="UNK"
								/>
							</div>
							<div>
								<ul role="list">
									<li>
										เมื่อเราเข้าใจสัจจะทางจิตวิญญาณ
										ด้วยการฝึกฝนสมาธิแบบราชาโยคะ
										และสร้างสมคุณธรรมในชีวิต
										ความปรารถนาที่จะรับใช้ช่วยเหลือผู้อื่นก็จะเกิดตามมาอย่างเป็นธรรมชาติ
										การรับใช้ช่วยเหลือคือการงานสูงสุด
										ดังนั้นจึงเติมเต็มเราด้วยสำนึกใหม่ของการมีเป้าหมาย
									</li>
									<li>
										งานรับใช้ทางจิตต่อผู้อื่นคือการช่วยพวกเขาให้ยืนอยู่บนขาของตนเอง
										และตัดสินใจด้วยตนเอง
										เป็นการให้พลังแก่ผู้อื่นเพื่อที่พวกเขาเองจะได้เห็นว่าความรัก
										ความสงบ และความสุข
										นั้นเป็นทรัพย์สมบัติที่แท้จริงของพวกเขา
										ในการสร้างโลกทั้งภายในและภายนอกของพวกเขา
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
