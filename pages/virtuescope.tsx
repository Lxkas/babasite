import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function generateRandomInteger(min: number, max: number) {
	return Math.floor(min + Math.random() * (max - min + 1));
}

class Choice {
	name: string;
	description: string;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}

const choices = [
	new Choice("Contentment", ""),
	new Choice("Compassion", ""),
	new Choice("Brotherhood", ""),
	new Choice("Simplicity", ""),
	new Choice("Courage", ""),
	new Choice("Patience", ""),
	new Choice("Discipline", ""),
	new Choice("Delicacy", ""),
	new Choice("Humility", ""),
	new Choice("Sponteneity", ""),
	new Choice("Responsibility", ""),
	new Choice("Harmony", ""),
	new Choice("Wisdom", ""),
	new Choice("Faith", ""),
	new Choice("Friendship", ""),
	new Choice("Self-confidence", ""),
	new Choice("Detachment", ""),
	new Choice("Happiness", ""),
	new Choice("Enthusiasm", ""),
	new Choice("Discernment", ""),
	new Choice("Tolerance", ""),
];

export default function Virtuescope() {
	const [spinning, setSpinning] = useState(false);
	const [wheelRotation, setWheelRotation] = useState(0);

	const [winning, setWinning] = useState(0);

	const rouletteWheelRef = useRef<HTMLDivElement>(null);

	const degressPerSlice = 360 / choices.length;
	console.log(degressPerSlice);

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
		setSpinning(false);
	};

	return (
		<div className="relative flex h-min w-min flex-col">
			<div className="flex ">
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
				className="relative w-max"
			>
				<Image src="/wheel.png" height={560} width={560} alt="Wheel" />
			</motion.div>

			<button className="z-10" onClick={spin}>
				Spin
			</button>

			<div>
				Winning index: {winning}
				<br />
				Name: {choices[winning].name}
				<br />
				Spinning: {spinning ? "True" : "False"}
				<br />
				Wheel rotation: {wheelRotation}
				<br />
				Correct rotation: {winning * degressPerSlice}
			</div>
		</div>
	);
}
