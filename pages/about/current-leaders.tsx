import Image from "next/image";

function LeaderCard({ name, desc, img }: any) {
	return (
		<div className="mb-16 flex flex-col">
			<h3 className="font-bold">{name}</h3>
			<div className="flex flex-col md:flex-row">
				<Image
					className="rounded-lg"
					src={img}
					alt="Dadi Janki"
					width={2000}
					height={0}
					quality={100}
				/>
				<p className="mt-0 ml-4 pt-0">{desc}</p>
			</div>
		</div>
	);
}

export default function CurrentLeadersPage() {
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
				</div>
			</div>
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
					<h1>
						<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
							ผู้นำท่านปัจจุบัน
						</span>
					</h1>

					<LeaderCard
						name="ดาดี้ จางกี"
						desc={`ท่านถือกำเนิดในปีค.ศ. 1916 ท่านเป็นผู้นำทางจิตของ บราห์มา
					กุมารี ด้วยความเชื่อถือที่ไม่สั่นคลอน,
					ดาดี้ปฏิเสธที่จะกำหนดขีดจำกัดให้แก่ตัวท่านเองด้วยการทำงานรับใช้ช่วยเหลือผู้อื่นอย่างไม่รู้เหนื่อย
					ท่านมีส่วนร่วมกับองค์กรมาตั้งแต่ปี คศ. 1937
					และประจำการอยู่ที่ ลอนดอนเป็นเวลา 40 ปี นับตั้งแต่ปี คศ.
					1974
					ท่านให้แรงบันดาลใจแก่ผู้คนจากทุกวัฒนธรรมและพื้นฐานอาชีพที่จะดำเนินชีวิตตามเป้าหมายที่สูงส่ง
					เพื่อสนับสนุนการสร้างโลกที่น่าอยู่ขึ้น
					ความลึกล้ำและการหยั่งรู้,
					ดาดี้เบิกบานอย่างแท้จริงที่จะสังเกตการณ์และรับฟัง`}
						img={"/assets/images/about/current_leaders/01.jpg"}
					/>

					<LeaderCard
						name="ดาดี้ฮิระดายา โมฮินี"
						desc={`ท่านเป็นผู้ร่วมบริหารของบราห์มา กุมารี ชื่อของท่านหมายถึง “ผู้ที่ดึงดูดหัวใจ” ซึ่งเหมาะสมกับบุคลิกของท่านอย่างยิ่ง ท่านเป็นที่รู้จักอย่างดีในชื่อ กูลซาร์ (สวนดอกกุหลาบ) ท่านเป็นหนึ่งในสมาชิกก่อตั้งของโรงเรียนประจำที่ก่อตั้งขึ้นในปี ค.ศ. 1937 โดย บราห์มา บาบา ท่านฝึกสมาธิอย่างจริงจังมาเป็นเวลายาวนาน ในระเบียบวินัย และการฝึกปฏิบัติทางจิตวิญญาณทำให้ท่านกลายเป็นตัวอย่างของคุณธรรมที่มีชีวิต ท่านให้แรงบันดาลใจแก่ผู้คนนับล้านๆ ทั่วทั้งโลกด้วยความเรียบง่าย ความเงียบสงบและความลึกล้ำของท่าน
                        `}
						img={"/assets/images/about/current_leaders/02.jpg"}
					/>

					<LeaderCard
						name="ดาดี้ ระตัน โมฮินี"
						desc={`ท่านเป็นผู้ช่วยบริหารของบราห์มา กุมารี และเป็นหนึ่งในสมาชิกแกนนำที่อยู่ที่สำนักงานใหญ่ ในวัยเด็ก ท่านสร้างรากฐานของชีวิตของท่านในยุคแรกๆ ของบราห์มา กุมารี ท่านดำเนินชีวิตตามความหมายของชื่อของท่าน “อัญมณีที่สวยงามที่สุด” โดยการอยู่อย่างเบาสบายและไร้ความเครียด ด้วยการอุทิศตนและตรงไปตรงมา, ท่านจดจ่ออยู่กับโปรแกรมการพัฒนาและการฝึกอบรมให้กับครูทั่วทั้งอินเดีย และรับใช้ช่วยเหลือในฐานะที่เป็นแหล่งทรัพยากรทางจิตวิญญาณให้แก่ทีมเยาวชนที่รับผิดชอบต่อการเติบโตและพัฒนาตนเองของเยาวชน เวลานี้ ในวัยแปดสิบปีของท่าน, ท่านอยู่อย่างสดใสร่าเริง`}
						img={"/assets/images/about/current_leaders/03.jpg"}
					/>
				</div>
			</div>
		</div>
	);
}
