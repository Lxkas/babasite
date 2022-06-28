import { faDownload, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

type AudioLineType = {
	title: string;
	url: string;
};

type StepComponentProps = {
	icon: string;
	audios: AudioLineType[];
	title: string;
	description: string;
};

function AudioLine({ audio }: { audio: AudioLineType }) {
	return (
		<li className="flex">
			<div className="w-full p-2">
				<div className="text-md w-full font-medium text-gray-900">
					<div className="ml-auto flex flex-row gap-x-2">
						<span className="mr-auto">{audio.title}</span>
						<button>
							<FontAwesomeIcon icon={faDownload} />
						</button>
						<button>
							<FontAwesomeIcon icon={faPlayCircle} />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}

function StepComponent({
	icon,
	audios,
	title,
	description,
}: StepComponentProps) {
	return (
		<li>
			<div className="block">
				<div className="flex items-center px-4 py-4 sm:px-6">
					<div className="flex min-w-0 flex-1 items-center">
						<div className="flex-shrink-0 self-start">
							<img
								className="h-24 w-24 rounded-full"
								src={icon}
								alt=""
							/>
						</div>
						<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
							<div>
								<p className="truncate text-lg font-bold text-orange-600">
									{title}
								</p>
								<p className="mt-2 flex items-center text-sm text-gray-500">
									{/* <svg
																className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																aria-hidden="true"
															>
																<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
																<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
															</svg> */}
									<span className="">{description}</span>
								</p>
							</div>
							<div className="">
								<div>
									<div className="text-md text-gray-900">
										<ul
											role="list"
											className="divide-y divide-gray-200"
										>
											{audios.map((audio, ind) => {
												return (
													<AudioLine
														key={ind}
														audio={audio}
													/>
												);
											})}
										</ul>
									</div>
									<p className="mt-2 flex items-center text-sm text-gray-500">
										{/* <svg
																	className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fillRule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																		clipRule="evenodd"
																	/>
																</svg>
																Completed phone
																screening */}
										{/* Extra info */}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* <svg
													className="h-5 w-5 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clipRule="evenodd"
													/>
												</svg> */}
					</div>
				</div>
			</div>
		</li>
	);
}

export default function HowtoPage() {
	return (
		<div className="grid grid-cols-12 overflow-auto p-2">
			<div className="col-span-2 hidden lg:block"></div>
			<div className=" col-span-12 grid h-screen grid-cols-12 lg:col-span-8">
				<div className="relative col-span-12 lg:col-span-8">
					{/* How to Meditate header */}
					<div className="prose mb-8">
						<h2>How to Meditate</h2>
						<p>{`Meditating is easy. Raja Yoga even has the name 'Easy Raja Yoga'. But sometimes getting started needs a little explanation. Here is a simple five-step process to follow. Soon you'll arrive at the quiet still place with just a single stride - a single thought - and you won't even need to take five steps.`}</p>
					</div>

					{/* Steps and experience table */}
					<div className="flex flex-col">
						{/* Steps and experience headers */}
						{/* <div className="flex flex-col border-b border-b-orange-500 pb-4 xl:flex-row">
							<div className="w-full text-4xl xl:w-1/2">
								Steps
							</div>
							<div className="hidden w-full text-4xl xl:block xl:w-1/2">
								Experience
							</div>
						</div> */}

						{/* Steps */}
						<div className="flex flex-col gap-y-4">
							<ul
								role="list"
								className="divide-y divide-gray-200"
							>
								<StepComponent
									title={"Step 1: Relaxation"}
									description={
										"Relaxation is about letting go of tension and stress and bringing the mind and body into a state of calm and peace ..."
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-relaxation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>

								<StepComponent
									title={"Step 2: Concentration"}
									description={
										"Concentration allows me to use my time productively, once I have relaxed: I focus on the thoughts I choose to have ..."
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-concentration.png"
									}
									audios={[
										{ title: "Title 1", url: "#" },
										{ title: "Title 2", url: "#" },
										{ title: "Title 3", url: "#" },
										{ title: "Title 4", url: "#" },
									]}
								/>

								<StepComponent
									title={"Step 3: Contemplation"}
									description={
										"Contemplation is reflecting deeply on myself, my inner world and my values…"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-contemplation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>

								<StepComponent
									title={"Step 4: Realisation"}
									description={
										"Realisation is when my understanding and feelings combine and I experience a more profound, more meaningful reality"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-realisation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>

								<StepComponent
									title={"Step 5: Meditation"}
									description={
										"Meditation is focusing on a thought and remembering my eternal identity, and re-awakening a wonderful state of well-being …"
									}
									icon={
										"https://www.brahmakumaris.org/images/icons/icon-meditation.png"
									}
									audios={[{ title: "Title 1", url: "#" }]}
								/>
							</ul>
						</div>
					</div>

					<div className="mt-8 p-2">
						<span>
							{`Learn more about Raja Yoga meditation - what it is,
							why, how, where and when to do it, and the kind of
							people who are using it in their lives here For more
							meditation experiences here on this site, step
							across into Experience Ever thought about going on a
							Meditation Retreat? Do you feel you don't time to
							meditate? Meditating for just one minute can make a
							difference. Find out how: just-a-minute`}
						</span>
					</div>
				</div>

				{/* second */}
				{/* <div className="hidden lg:col-span-4 lg:block">VIDEO HERE</div> */}
			</div>

			<div className="col-span-2 hidden  lg:block"></div>
		</div>
	);
}
