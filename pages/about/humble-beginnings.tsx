import Image from "next/image";

export default function HumbleBeginningsPage() {
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
							จากจุดเริ่มต้นเล็กๆ
						</span>
					</h1>

					<div className="mb-16 flex flex-col">
						<div>
							<Image
								src="/assets/images/about/humble_beginnings/01.jpg"
								quality={100}
								width={1500}
								height={1000}
								alt="UNK"
							/>
						</div>
						<div>
							ราวกับว่ามีเพียงไม่กี่องค์กรที่ถูกกระตุ้นให้เกิดการเปลี่ยนแปลง
							และถูกวิพากษ์วิจารณ์อย่างมาก
							ในช่วงเวลาของการเริ่มต้นก่อตั้ง
							หรือเกิดการขยายตัวอย่างมาก
							ในทศวรรษของผู้ที่รับช่วงการดำเนินงานต่อ เหมือนกับ
							บราห์มา กุมารี มหาวิทยาลัยทางจิตของโลก แต่ถึงกระนั้น
							ตลอดระยะเวลาของการเติบโตพัฒนา บราห์มา กุมารี
							มหาวิทยาลัยทางจิตของโลก
							สามารถธำรงรักษาหลักการดั้งเดิมของตน
							และยึดวัตถุประสงค์เดิม
							เป็นหลักในการดำเนินงานไว้อย่างเหนียวแน่น
						</div>
					</div>

					<div className="flex flex-col">
						<div>
							<Image
								src="/assets/images/about/humble_beginnings/02.jpg"
								quality={100}
								width={1500}
								height={1000}
								alt="UNK"
							/>
						</div>
						<div>
							นิมิตที่ดาดาเล็คราชได้รับ
							เปิดเผยองค์ความรู้เกี่ยวกับธรรมชาติของดวงวิญญาณ
							พระเจ้าและเวลา หลักการง่ายๆ
							ทว่ามีความหมายที่ลึกล้ำอย่างยิ่งในการปลุกจิตสำนึกของความทรงจำที่ทรงพลังของผู้ที่มีโอกาสได้รับรู้นิมิตเหล่านั้น
							หนึ่งปีหลังการก่อตั้ง โอม มันดาลี
							สถาบันนี้ได้ย้ายจากไฮเดราบัดไปอยู่ที่การาจี
							เป็นเวลานานถึง 14 ปี
							จนกระทั่งสองปีหลังจากเหตุการณ์แบ่งแยกดินแดนระหว่างอินเดียและปากีสถาน
							กลุ่มผู้ก่อตั้งจำนวนเกือบ 400 คน
							ยังดำเนินชีวิตอยู่ในชุมชนที่ช่วยเหลือตนเองเพื่ออุทิศเวลาในการศึกษาความรู้ทางจิต
							ฝึกสมาธิและเปลี่ยนแปลงตนเองอย่างจริงจัง
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
