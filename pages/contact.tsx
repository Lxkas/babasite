import Link from "next/link";

export default function ContactUsPage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
				<p className="text-xl font-extrabold">
					ท่านสามารถติดต่อสอบถามข้อมูลเพิ่มเติม
					<br />
					หรือเรียนรู้เกี่ยวกับราชาโยคะ และหลักสูตรอื่นๆของเราได้
				</p>
				<br />
				<p className="font-bold">ในประเทศไทย:</p>
				<span className="prose">
					<ul role="list">
						<li>
							ศูนย์ราชาโยคะ ลาดพร้าว กรุงเทพฯ (บ้านพินทุ)
							<br />
							081-5670784, 084-7778850
							<br />
							<Link
								href="https://facebook.com/baanpinthu"
								className="text-blue-400"
								passHref
							>
								www.facebook.com/baanpinthu
							</Link>
							<br />
							LINE ID : bupsaman{" "}
							<Link
								href="http://line.me/ti/p/~bupsaman"
								className="text-blue-400"
								passHref
							>
								หรือคลิกที่นี่
							</Link>
						</li>
						<li>นครปฐม 086-4486700, 097-2383251</li>
						<li>เชียงใหม่ 081-8813178, 081-9602577</li>
						<li>ปัตตานี 085-3858217, 089-1970108</li>
					</ul>
				</span>

				<br />
				<p className="font-bold">ในต่างประเทศ:</p>
				<ul className="text-blue-400">
					<li>
						<Link
							href="https://www.brahmakumaris.org/centre-locator"
							passHref
						>
							https://www.brahmakumaris.org/centre-locator
						</Link>
					</li>
					<li>
						<Link
							href="https://www.brahmakumaris.org/meditation/retreat-centres"
							passHref
						>
							https://www.brahmakumaris.org/meditation/retreat-centres
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
