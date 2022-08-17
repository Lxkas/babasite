import ReactPlayer from "react-player";

export default function TestimonialComponent() {
	return (
		<div className="relative h-screen">
			<ReactPlayer
				controls
				width={"100%"}
				height={"100%"}
				url="https://youtu.be/q1w3xMwycLs"
			></ReactPlayer>
		</div>
	);
}
