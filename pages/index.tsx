import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className="relative flex flex-col justify-center w-full h-full px-4 pb-4 gap-y-4 font-roboto">
			<section className="w-full h-screen">
				<div className="relative flex items-center justify-center w-full h-full">
					<Image
						src={"https://brahmakumaris.org.au/new/wp-content/uploads/2022/01/rui-xu-XabW1JtTJ3M-unsplash-scaled.jpg"}
						alt="Lotus"
						className="object-cover"
						layout="fill"
						// width={1264}
						// height={842}
					/>

					<div className="relative flex flex-col items-center justify-center w-full h-full">
						<div className="absolute w-full h-full bg-purple-700 opacity-25"></div>
						<div className="z-10 mt-auto mb-20 text-6xl font-extrabold text-center text-white">
							<p className="mb-4">You are powerful</p>
							<p className="w-1/2 text-2xl font-normal translate-x-1/2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae illo eaque cumque placeat fuga quaerat amet ea, quam eum
								maxime ducimus quo totam quos explicabo vitae. Officia nesciunt esse modi vitae repellendus
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full h-screen">Carousel goes here</section>
		</div>
	);
};

export default Home;
