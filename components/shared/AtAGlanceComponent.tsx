import ReactPlayer from "react-player";

export default function AtAGlanceComponent() {
	return (
		<div className="relative h-screen">
			<ReactPlayer
				controls
				width={"100%"}
				height={"100%"}
				url="https://www.youtube.com/watch?v=K4kl-EWm9O4"
			></ReactPlayer>
		</div>
	);
}
