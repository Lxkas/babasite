import ReactPlayer from "react-player";

export default function TestimonialComponent() {
	return (
		<div className="relative flex h-full min-w-full flex-col items-center justify-center gap-x-4 overflow-hidden xl:flex-row">
			<div className="aspect-video h-52 md:h-96">
				<ReactPlayer
					controls
					width={"100%"}
					height={"100%"}
					url="https://www.youtube.com/watch?v=Zt0JfmV7CyI"
				></ReactPlayer>
			</div>

			<div className="flex h-full flex-col">
				<div className="prose max-h-80 max-w-prose font-sans text-4xl">
					<h3>Testimonial</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Fugit ea nostrum expedita quod ratione quibusdam
						optio? Expedita sint id aspernatur!
					</p>
					<p>Testimonial video will have to be uploaded to youtube</p>
				</div>
			</div>
		</div>
	);
}
