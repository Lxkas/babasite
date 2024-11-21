import Link from "next/link";

export default function UNMeetingPage() {
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
				<div className="prose mx-auto max-w-prose text-lg">
					<h1>
						บราห์มากุมารี <br /> ณ องค์การสหประชาชาติ
					</h1>

					<p>
						บราห์มากุมารี ซึ่งมีสำนักงานใหญ่อยู่ที่ภูเขาอาบู
						ประเทศอินเดีย ประกอบด้วยเครือข่ายของศูนย์การเรียนรู้
						ในประเทศต่างๆกว่า 110 ประเทศ และเป็นองค์กร NGO
						ระดับนานาชาติ ที่ได้รับสถานภาพที่ปรึกษา (Consultative
						Status)ในองค์การสหประชาชาติ (UN)
						ต่อสภาคณะมนตรีเศรษฐกิจและสังคม (ECOSOC) และ
						กองทุนเด็กแห่งสหประชาชาติ หรือยูนิเซฟ (UNICEF)
					</p>

					<div>
						<p>
							นอกจากนั้น บราห์มากุมารียังมีสถานภาพในการทำงานร่วม
							(Associate Status) กับแผนกข่าวสารสาธารณะ (DIP),
							สถานภาพร่วมสังเกตการณ์ (Observer Status)
							กับสมัชชาด้านสิ่งแวดล้อมของสหประชาชาติ (UNEP)
							และเป็นองกรณ์ร่วมสังเกตการณ์ (Observer Organization)
							ในการประชุมของสหประชาชาติเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศของโลก
							(UNFCCC)
							รวมทั้งเป็นสมาชิกผู้นำด้านการศึกษาสำหรับประชาชนในชนบท
							(ERP) และองค์กรด้านอาหารและการเกษตร (FAO)
						</p>
					</div>

					<div>
						<p>
							เพื่อที่จะส่งเสริมการบรรลุเป้าหมายและหลักการขององค์การสหประชาชาติ
							ตามวิถีทางจิตวิญญาณของบราห์มากุมารี การตระหนักรู้
							ทัศนคติ วิสัยทัศน์ และการปฏิบัติ
							ได้ถูกนำไปใช้เป็นเป้าหมายในการพัฒนาด้านการเปลี่ยนแปลงสภาพอากาศ
							วิกฤตด้านอาหาร ความเท่าเทียมทางเพศ การสาธารณสุขโลก
							การช่วยเหลือในภาวะฉุกเฉินตามหลักมนุษยธรรม
							สิทธิมนุษยชน รวมถึงวันและทศวรรษสากลต่างๆ
							ที่เกี่ยวกับสตรี เด็ก และเยาวชน
						</p>
					</div>

					<p>
						เพื่ออ่านข้อมูลเพิ่มเติมเกี่ยวกับกิจกรรมของเรากับสหประชาชาติ{" "}
						<Link
							href="https://www.brahmakumaris.org/about-us/united-nations/un-faqs"
							className="text-blue-700"
							passHref
						>
							คลิกที่นี่
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
