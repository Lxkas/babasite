import Image from "next/image";

function LeaderCard({ name, desc, img }: any) {
	return (
		<div className="mb-16 flex flex-col">
			<h3 className="font-bold">{name}</h3>
			<div className="flex flex-col md:flex-row">
				<Image
					className="rounded-lg"
					src={img}
					alt="Dadi Janki"
					width={2000}
					height={0}
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
							ผู้นำท่านปัจจุบัน
						</span>
					</h1>

					<LeaderCard
						name="Dadi Ratan Mohini"
						desc={`She is the Administrative Head of Brahma Kumaris and is one of the backbone members residing at the Headquarters. In childhood she created the foundation of her life in the early days of Brahma Kumaris. She lives up to her name 'most beautiful jewel' by always appearing light and tension-free. Dedicated and forthright, her focus has been the development and training programmes for teachers throughout India and serves as the spiritual resource to the team of young people responsible for the personal development and growth of youth. Now in her nineties, she remains lively and young at heart. `}
						img={"/assets/images/about/current_leaders/03.jpg"}
					/>

					<LeaderCard
						name="Dadi Mohini Panjabi"
						desc={`She is the Additional Administrative Head of Brahma Kumaris. She has been with the BK's since childhood in Delhi, even while she was a student at the University of Delhi. She served with the founder, Brahma Baba, opening centres in India. In 1974 she began serving abroad, establishing a BK presence in North American, first in the Caribbean (1976) and then in New York (1978). She is president of the Brahma Kumaris World Spiritual Organization of the USA, the regional coordinator of the Brahma Kumaris for the Americas and the Caribbean and is representative of the BK's to the United Nations. She will share her time between India and the USA.`}
						img={"/assets/images/about/current_leaders/03.jpg"}
					/>

					<LeaderCard
						name="Dadi Jayanti Kirpalani"
						desc={`She is an Additional Administrative Head of the Brahma Kumaris. Born in India, she moved with her family to London in 1957 at the age of 8. Her family was instrumental in bringing Raj Yoga to the West. As she returned to India over the years, she met the founder, Brahma Baba on many occasions and at age 19 she made the decision to pursue a life of spiritual study and service with the Brahma Kumaris. Her unique childhood prepared her to bring the wisdom of the East to the West. She is an eloquent speaker and has spoken widely on climate change, applied values and spiritual practice. She is the regional coordinator for the Brahma Kumaris activities in Europe and the Middle East.`}
						img={"/assets/images/about/current_leaders/03.jpg"}
					/>
				</div>
			</div>
		</div>
	);
}
