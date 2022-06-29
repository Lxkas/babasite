function VideoEntry() {
	return (
		<li className="relative">
			<div className="group block aspect-square w-32 overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 xl:w-40 2xl:w-60">
				<img
					src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
					alt=""
					className="object-cover group-hover:opacity-75"
					onClick={() => {
						alert("This would goto video");
					}}
				/>
				<button
					type="button"
					className="absolute inset-0 focus:outline-none"
				>
					<span className="sr-only">Play video VideoTitle</span>
				</button>
			</div>
			<p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
				Video Title
			</p>
			<p className="pointer-events-none block text-sm font-medium text-gray-500">
				4 Minutes, 5 seconds
			</p>
		</li>
	);
}

export default function ExperiencePage() {
	return (
		<div className="h-full w-full p-4">
			<div className="mb-4 grid grid-cols-12">
				<div className="col-span-8 col-start-3">
					Search bar here, along with header
				</div>
			</div>
			<div className="grid grid-cols-12">
				<ul
					role="list"
					className="col-span-8 col-start-3 grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
				>
					<VideoEntry />
					<VideoEntry />
					<VideoEntry />
					<VideoEntry />
					<VideoEntry />
				</ul>
			</div>
		</div>
	);
}
