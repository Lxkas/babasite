const oranges = [
	"bg-white",
	"bg-orange-100",
	"bg-orange-200",
	"bg-orange-300",
	"bg-orange-400",
];

function StepTr({ ind }: { ind: number }) {
	return (
		<div
			className={`flex min-w-full flex-col rounded-md p-4 shadow-md xl:flex-row ${oranges[ind]}`}
		>
			<div className="w-full xl:w-1/2">
				<div className="flex flex-row">
					<div className="flex flex-col items-center self-start">
						<h4 className="mb-2 font-bold">Step {ind}</h4>
						<span>
							<img
								src="https://www.brahmakumaris.org/images/icons/icon-relaxation.png"
								alt="adas"
								className="max-w-4xl"
							/>
						</span>
					</div>

					<div className="p-2">
						<h2 className="mb-2">Relaxation</h2>
						<span>
							Relaxation is about letting go of tension and stress
							and bringing the mind and body into a state of calm
							and peace...
						</span>
					</div>
				</div>
			</div>
			<ul className="flex w-full flex-col xl:w-1/2">
				<li className="flex flex-row border-b border-b-orange-500 p-2">
					<div>Line 1</div>
					<div className="ml-auto flex flex-row gap-x-2">
						<span>D</span>
						<span>P</span>
					</div>
				</li>
				<li className="flex flex-row border-b border-b-orange-500 p-2">
					<div>Line 2</div>
					<div className="ml-auto flex flex-row gap-x-2">
						<span>D</span>
						<span>P</span>
					</div>
				</li>
				<li className="flex flex-row border-b border-b-orange-500 p-2">
					<div>Line 3</div>
					<div className="ml-auto flex flex-row gap-x-2">
						<span>D</span>
						<span>P</span>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default function HowtoPage() {
	return (
		<div className="grid grid-cols-12 overflow-auto">
			<div className="col-span-2 hidden lg:block"></div>

			<div className=" col-span-12 grid h-screen grid-cols-12 lg:col-span-8">
				<div className="relative col-span-12 lg:col-span-8">
					{/* How to Meditate header */}
					<div className="prose mb-8">
						<h2>How to Meditate</h2>
						<p>{`Meditating is easy. Raja Yoga even has the name ‘Easy Raja Yoga'. But sometimes getting started needs a little explanation. Here is a simple five-step process to follow. Soon you'll arrive at the quiet still place with just a single stride - a single thought - and you won't even need to take five steps.`}</p>
					</div>

					{/* Steps and experience table */}
					<div className="flex flex-col">
						{/* Steps and experience headers */}
						<div className="flex flex-col border-b border-b-orange-500 pb-4 xl:flex-row">
							<div className="w-full text-4xl xl:w-1/2">
								Steps
							</div>
							<div className="hidden w-full text-4xl xl:block xl:w-1/2">
								Experience
							</div>
						</div>

						{/* Steps */}
						<div className="flex flex-col gap-y-4">
							{Array(5)
								.fill(0)
								.map((value, ind) => {
									return (
										<StepTr key={"step" + ind} ind={ind} />
									);
								})}
						</div>
					</div>

					<div className="mt-4 p-2">
						<span>
							Learn more about Raja Yoga meditation - what it is,
							why, how, where and when to do it, and the kind of
							people who are using it in their lives here For more
							meditation experiences here on this site, step
							across into Experience Ever thought about going on a
							Meditation Retreat? Do you feel you don't time to
							meditate? Meditating for just one minute can make a
							difference. Find out how: just-a-minute
						</span>
					</div>
				</div>

				{/* second */}
				<div className="hidden lg:col-span-4 lg:block">VIDEO HERE</div>
			</div>

			<div className="col-span-2 hidden  lg:block"></div>
		</div>
	);
}
