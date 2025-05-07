import Image from "next/image";

type EbookEntryProps = {
	title: string;
	image: string;
	link: string;
};

function downloadPdf(pdfUrl: string, pdfName: string) {
	fetch(pdfUrl)
		.then((res) => res.blob())
		.then((blob) => {
			const url = window.URL.createObjectURL(new Blob([blob]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", pdfName);
			document.body.appendChild(link);
			link.click();
			link!.parentNode!.removeChild(link);
		});
}

function EbookEntry({ title, image, link }: EbookEntryProps) {
	return (
		<div className="sm:flex">
			<div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
				<Image src={image} alt="Book Cover" width={175} height={262} />
				{/* <svg
					className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
					preserveAspectRatio="none"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 200 200"
					aria-hidden="true"
				>
					<path
						vectorEffect="non-scaling-stroke"
						strokeWidth={1}
						d="M0 0l200 200M0 200L200 0"
					/>
				</svg> */}
			</div>
			<div>
				<h4 className="text-lg font-bold">{title}</h4>
				<p className="mt-1">
					<div className="flex flex-row gap-x-4">
						{/* <button
							type="button"
							onClick={() => window.open(link)}
							className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-2"
						>
							Preview
						</button> */}
						<button
							type="button"
							className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-2"
							onClick={() => downloadPdf(link, title)}
						>
							Download
						</button>
					</div>
				</p>
			</div>
		</div>
	);
}

export default function EbookPage() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl">
				<div className="flex flex-col gap-y-8">
					<EbookEntry
						title="The Man Who Loved Angels"
						image="/assets/images/ebook-covers/angel.jpg"
						link="/assets/ebooks/angel.pdf"
					/>
					<EbookEntry
						title="Companion of God"
						image="/assets/images/ebook-covers/companion.jpg"
						link="/assets/ebooks/companion.pdf"
					/>
				</div>
			</div>
		</div>
	);
}
