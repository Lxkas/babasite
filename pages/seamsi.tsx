import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SeamsiPage() {
	const [isShaking, setIsShaking] = useState(false);
	const router = useRouter();

	function onButtonClick() {
		if (isShaking) return;

		setIsShaking(true);
		setTimeout(() => {
			setIsShaking(false);
			router.push(`/assets/images/seamsi/${getRandomInt(1, 28)}.jpg`);
		}, 2000);
	}

	return (
		<div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="text-center">
				<span className="text-xl font-bold">เซียมซีคุณธรรม</span>
				<br />
				ถ้อยคำแห่งความดีที่ถูกเรียงร้อยเป็นบทกลอนอันไพเราะจะช่วยเปิดเผยคุณค่าของแต่ละคน
				<br />
				เพียงเขย่าติ้วไม้ในกระบอกไม้ไผ่หลายสีสันด้วยจิตใจที่สงบ
				<br />
				เซียมซีคุณธรรม เป็นหนึ่งในกิจกรรมของโครงการปลูกดอกไม้คุณธรรม
				<br />
				จัดโดยบ้านพินทุ ศูนย์การเรียนรู้ของบราห์มา
				กุมารีมหาวิทยาลัยทางจิตของโลก
				<br />
				โดยมีวัตถุประสงค์เพื่อปลุกจิตสำนึกแห่งความดีที่มีอยู่ภายในแต่ละคนและทุกๆ
				คนให้ตื่นขึ้นมา
			</div>
			<div className="mt-4">
				<Image
					src={
						isShaking
							? "/assets/images/seamsi/button.gif"
							: "/assets/images/seamsi/button.png"
					}
					alt="yes"
					width={200}
					height={200}
					onClick={onButtonClick}
				/>
			</div>
		</div>
	);
}
