import { classNames } from "@/utils/classNames";
import { useState } from "react";

import { Link as ScrollLink, Element } from "react-scroll";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const steps = [
	{
		text: "What",
		description: "Vitae sed mi luctus laoreet.",
	},
	{
		text: "How",
		description: "Cursus semper viverra facilisis et et some more.",
	},
	{
		text: "Where",
		description: "Penatibus eu quis ante.",
	},
	{
		text: "When",
		description: "Faucibus nec enim leo et.",
	},
	{
		text: "Who",
		description: "Iusto et officia maiores porro ad non quas.",
	},
	{
		text: "Experience",
		description: "Iusto et officia maiores porro ad non quas.",
	},
];

function ScrollLinkItem(props: {
	text: string;
	href: string;
	description: string;
}) {
	const { text, href, description } = props;

	const [active, setActive] = useState(false);

	return (
		<li>
			<ScrollLink
				to={href}
				spy={true}
				smooth={true}
				duration={200}
				className="group relative flex cursor-default items-start pb-10"
				offset={-170}
				onSetActive={() => setActive(true)}
				onSetInactive={() => setActive(false)}
			>
				<span className="flex h-9 items-center" aria-hidden="true">
					<span
						className={classNames(
							active ? "border-orange-600" : "border-gray-300",
							"relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"
						)}
					>
						<span
							className={classNames(
								active ? "bg-orange-600" : "bg-gray-300",
								"h-2.5 w-2.5 rounded-full"
							)}
						/>
					</span>
				</span>
				<span className="ml-4 flex min-w-0 flex-col">
					<span
						className={classNames(
							active ? "text-orange-600" : "text-gray-500",
							"text-xs font-semibold uppercase tracking-wide"
						)}
					>
						{text}
					</span>
					<span className="text-sm text-gray-500">{description}</span>
				</span>
			</ScrollLink>
		</li>
	);
}

export default function HowToPage() {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-4 hidden lg:block xl:col-span-3">
				<ul className="fixed ml-4">
					{steps.map((step) => {
						return (
							<ScrollLinkItem
								key={"l_Step" + step.text}
								text={step.text}
								href={step.text}
								description={step.description}
							/>
						);
					})}
				</ul>
			</div>
			<div className="col-span-7 xl:col-span-9">
				<Element name="What" className="h-screen w-full">
					test 1
				</Element>

				<Element name="How" className="h-screen w-full">
					test 1
				</Element>

				<Element name="Where" className="h-screen w-full">
					test 1
				</Element>

				<Element name="When" className="h-screen w-full">
					test 1
				</Element>

				<Element name="Who" className="h-screen w-full">
					test 1
				</Element>

				<Element name="Experience" className="h-screen w-full ">
					test 1
				</Element>

				{/* <HowToSection text="What" />
				<HowToSection text="How" />
				<HowToSection text="Where" />
				<HowToSection text="When" />
				<HowToSection text="Who" />
				<HowToSection text="Experience Now" id="experience" /> */}
			</div>
		</div>
	);
}
