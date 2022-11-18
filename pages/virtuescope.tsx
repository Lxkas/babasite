import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Choice } from "@/classes/choice";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import translation from "@/public/assets/translations/virtuescope.json";
import { classNames } from "@/utils/classNames";

function generateRandomInteger(min: number, max: number) {
	return Math.floor(min + Math.random() * (max - min + 1));
}

// const choices = [
// 	new Choice("Contentment", ""),
// 	new Choice("Compassion", ""),
// 	new Choice("Brotherhood", ""),
// 	new Choice("Simplicity", ""),
// 	new Choice("Courage", ""),
// 	new Choice("Patience", ""),
// 	new Choice("Discipline", ""),
// 	new Choice("Delicacy", ""),
// 	new Choice("Humility", ""),
// 	new Choice("Sponteneity", ""),
// 	new Choice("Responsibility", ""),
// 	new Choice("Harmony", ""),
// 	new Choice("Wisdom", ""),
// 	new Choice("Faith", ""),
// 	new Choice("Friendship", ""),
// 	new Choice("Self-confidence", ""),
// 	new Choice("Detachment", ""),
// 	new Choice("Happiness", ""),
// 	new Choice("Enthusiasm", ""),
// 	new Choice("Discernment", ""),
// 	new Choice("Tolerance", ""),
// ];

export default function Virtuescope() {
	const { locale, locales } = useRouter();

	const [choices, setChoices] = useState<Choice[]>();
	const [resultIndex, setResultIndex] = useState(-1);

	useEffect(() => {
		const tmp: Choice[] = [];

		translation.translation.forEach((elem) => {
			if (elem.locale == locale) {
				elem.choices.forEach((element) => {
					tmp.push(new Choice(element.text, element.description));
				});
			}
		});

		setChoices(tmp);
	}, [locale]);

	const [spinning, setSpinning] = useState(false);
	const [wheelRotation, setWheelRotation] = useState(-1);

	const [winning, setWinning] = useState(-1);

	const rouletteWheelRef = useRef<HTMLDivElement>(null);

	if (choices == undefined) return <div>Loading...</div>;

	const degressPerSlice = 360 / choices.length;

	const rouletteWheelVariants = {
		spinning: {
			rotate: -wheelRotation,
			transition: { ease: "easeOut", duration: 2 },
		},

		default: {
			rotate: -wheelRotation,
		},
	};

	const spin = async () => {
		if (spinning) return;

		setResultIndex(-1);

		const minimumSpin = 2 * 360;

		const spunNumber = generateRandomInteger(0, 360);
		const winningIndex = Math.floor(spunNumber / degressPerSlice);

		setWinning(winningIndex);

		const correctRotation = winningIndex * degressPerSlice;

		setWheelRotation(
			wheelRotation +
				minimumSpin +
				(360 - (wheelRotation % 360)) +
				correctRotation
		);

		setSpinning(true);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		await new Promise((resolve) => setTimeout(resolve, 500));
		setResultIndex(winningIndex);
		await new Promise((resolve) => setTimeout(resolve, 250));
		setSpinning(false);
	};

	return (
		<div className="relative grid h-full w-full grid-cols-12">
			<div className="lg:col-span-2"></div>

			{/* Center div */}
			<div className="col-span-12 grid grid-cols-1 overflow-auto lg:col-span-8 2xl:grid-cols-2">
				<div className="flex flex-col items-center overflow-hidden p-4">
					<h1 className="font text-4xl">วงล้อคุณธรรม</h1>

					<div
					// className={classNames(
					// 	resultIndex != -1 ? "hidden" : "",
					// 	"flex"
					// )}
					>
						<FontAwesomeIcon
							icon={faCaretDown}
							color="black"
							className="mx-auto"
						/>
					</div>

					<motion.div
						ref={rouletteWheelRef}
						animate={spinning ? "spinning" : "default"}
						variants={rouletteWheelVariants}
						initial={false}
						className="aspect-square h-[560px] w-[560px]"
					>
						<div
						// className={classNames(
						// 	resultIndex != -1 ? "hidden" : "",
						// 	""
						// )}
						>
							<Image
								src="/wheel.png"
								layout="fill"
								// height={560}
								// width={560}
								alt="Wheel"
							/>
						</div>
					</motion.div>
				</div>
				<div className="grid grid-cols-12 grid-rows-6 p-4">
					<div className="col-span-12 row-span-1 hidden lg:block" />
					<div className="col-span-12 row-span-4 grid grid-rows-6">
						<div className="row-span-1">
							คุณธรรมเปรียบเสมือนความสว่างไสวงดงามของชีวิต
							ที่จะชี้นำไปสู่ความสุขและความสำเร็จ กลับเข้าสู่ภายใน
							นิ่ง สงบ กดที่ปุ่มด้านล่าง
							เพื่อดูว่าคุณธรรมใดที่เหมาะกับตัวตน
							หรือสถานการณ์ในปัจจุบันของท่าน
						</div>
						<div
							className={classNames(
								resultIndex == -1 ? "hidden" : "flex",
								"row-span-2 mt-2 flex-col rounded-md bg-cyan-600 p-4 text-white"
							)}
						>
							<span className="text-4xl uppercase">
								{choices[winning]?.name}
							</span>
							<span className="text-xl">
								{choices[winning]?.description}
							</span>
						</div>

						<div className="row-span-1">
							<button
								disabled={spinning}
								type="button"
								className="text-bold mt-4 w-full rounded-md bg-orange-600 p-2 text-white 2xl:w-1/2"
								onClick={spin}
							>
								{winning == -1 ? "Spin" : "Spin Again"}
							</button>
						</div>
					</div>
					<div className="col-span-12 row-span-1 row-start-6" />
				</div>
			</div>

			<div className="lg:col-span-2"></div>

			{/* {winning == -1 ? "Spin" : "Spin Again"} */}

			{/* <div className="col-span-12 p-4">
				Winning index: {winning}
				<br />
				Name: {choices[winning].name}
				<br />
				Desc: {choices[winning].description}
				<br />
				Spinning: {spinning ? "True" : "False"}
				<br />
				Wheel rotation: {wheelRotation}
				<br />
				Correct rotation: {winning * degressPerSlice}
				<br />
				Result Index: {resultIndex}
			</div> */}
		</div>
	);
}
