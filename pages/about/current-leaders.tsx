import Image from "next/image";

function LeaderCard({ name, desc, img }: any) {
	return (
		<div className="mb-8 flex flex-col">
			<h3 className="font-bold">{name}</h3>
			<div>
				<Image
					className="rounded-lg"
					src={img}
					alt={name}
					width={656}
					height={936}
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
							ผู้นำในปัจจุบัน
						</span>
					</h1>

					<LeaderCard
						name="Dadi Ratan Mohini"
						desc={`ดาดี้รัตตัน โมหินี หัวหน้าผู้บริหาร (Administrative Head) ของบราห์มากุมารี และเป็นหนึ่งในสมาชิกผู้เปรียบเป็นกระดูกสันหลังขององค์กรอยู่ที่สำนักงานใหญ่ ในวัยเด็ก เธอได้สร้างพื้นฐานชีวิตของเธอ ตั้งแต่ช่วงเวลาเริ่มต้นของบราห์มากุมารี และได้ใช้ชีวิตของเธอสมกับชื่อของเธอที่แปลว่า เพชรพลอยที่งดงามที่สุด ด้วยการอยู่อย่างเบาสบายและปราศจากความตึงเครียดใดๆ ด้วยความทุ่มเท ซื่อสัตย์ ชัดเจน เธอมุ่งมั่นกับการพัฒนาโปรแกรมการฝึกฝนต่างๆสำหรับผู้ที่เป็นครูทั่วทั้งอินเดีย และรับใช้ในฐานะทรัพยากรทางจิตวิญญาณให้กับทีมของผู้รับผิดชอบต่อการพัฒนาและการเติบโตของเหล่าเยาวชน เวลานี้ ในวัยกว่า 90 ปี เธอยังอยู่อย่างมีชีวิตชีวาและมีหัวใจที่อ่อนเยาว์อยู่เสมอ`}
						img={"/assets/images/current-leaders/ratan.jpg"}
					/>

					<LeaderCard
						name="Brahma Kumari Mohini Panjabi"
						desc={`ซิสเตอร์โมหินี ปันจาบี หัวหน้าผู้บริหารอีกท่านหนึ่งของบราห์มากุมารี (Additional Administrative Head) เธออยู่กับบราห์มากุมารีมาตั้งแต่วัยเด็ก ในเมืองเดลี และในขณะที่เป็นนักศึกษาอยู่ในมหาวิทยาลัยแห่งเดลี เธอก็ทำงานรับใช้โลกกับบราห์มาบาบา ผู้ก่อตั้งองค์กร ในการเปิดศูนย์ต่างๆมากมายในอินเดีย ในปี 1974 เธอเริ่มออกไปทำงานรับใช้ในต่างประเทศ และทำให้บราห์มากุมารีให้เป็นที่รู้จักในอเมริกาเหนือ เริ่มที่แคริบเบียนในปี 1976 และต่อมาในนิวยอร์กในปี 1978 เธอเป็นประธานของบราห์มากุมารี องค์กรทางจิตวิญญาณของโลก แห่งสหรัฐอเมริกา และเป็นผู้ประสานงานภูมิภาคของบราห์มากุมารีในทวีปอเมริกาและแคริบเบียน และเป็นตัวแทนของบราห์มากุมารีในองค์การสหประชาชาติ เธอจะใช้เวลาของเธออยู่ในอินเดียและในอเมริกาเป็นส่วนใหญ่
						`}
						img={"/assets/images/current-leaders/mohini.jpg"}
					/>

					<LeaderCard
						name="Brahma Kumari Jayanti Kirpalani"
						desc={`ซิสเตอร์จยันตี เคอพาลานี หัวหน้าผู้บริหารอีกท่านหนึ่งของบราห์มากุมารี (Additional Administrative Head) เธอเกิดในประเทศอินเดีย และย้ายไปอยู่ที่ลอนดอนกับครอบครัวในปี 1957 เมื่อมีอายุได้ 8 ปี ครอบครัวของเธอเป็นผู้ที่นำราชาโยคะไปสู่โลกตะวันตก เมื่อเดินทางกลับมายังอินเดียในเวลาต่อมา เธอได้พบกับบราห์มาบาบาผู้ก่อตั้งหลายครั้ง และเมื่ออายุได้ 19 ปี เธอได้ตัดสินใจที่จะใช้ชีวิตของการศึกษาและรับใช้โลกในทางจิตวิญญาณนี้ กับบราห์มากุมารี วัยเด็กที่พิเศษของเธอนั้น ได้ทำให้เธอนำภูมิปัญญาของโลกตะวันออกสู่โลกตะวันตก เธอคือนักพูดที่เชี่ยวชาญ และได้พูดเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศของโลกอย่างกว้างขวาง รวมทั้งเรื่องเกี่ยวกับคุณค่า และการฝึกฝนทางจิตวิญญาณ เธอเป็นผู้ประสานงานส่วนภูมิภาคของบราห์มากุมารี ในยุโรปและตะวันออกกลาง
						`}
						img={"/assets/images/current-leaders/jayanti.jpg"}
					/>
				</div>
			</div>
		</div>
	);
}
