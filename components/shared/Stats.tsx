import {
	faBuilding,
	faEarthAsia,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stats() {
	return (
		<div className="bg-white pt-12 font-sans sm:pt-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-extrabold text-orange-600 sm:text-4xl">
						The Brahma Kumaris Worldwide
					</h2>
					{/* <p className="mt-3 text-xl text-gray-500 sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
					</p> */}
				</div>
			</div>
			<div className="mt-10 bg-white pb-12 font-sans sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 bg-white" />
					<div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-full">
							<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
								<div className="flex flex-col border-b border-gray-100 p-6 text-center hover:border-b-orange-600 sm:border-0 sm:border-b-2 sm:border-r sm:border-b-transparent">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon
											icon={faEarthAsia}
											className="h-12 w-12"
										/>
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">
										ประเทศทั่วโลก
									</dt>
									<dd className="order-2 text-5xl font-extrabold text-gray-600">
										110
									</dd>
								</div>
								<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center hover:border-b-orange-600 sm:border-l sm:border-b-2 sm:border-r sm:border-b-transparent">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon
											icon={faBuilding}
											className="h-12 w-12"
										/>
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">
										ศูนย์นั่งสมาธิ
									</dt>
									<dd className="order-2 text-4xl font-extrabold text-gray-600 md:text-5xl">
										4500+
									</dd>
								</div>
								<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center hover:border-b-orange-600 sm:border-0 sm:border-l sm:border-b-2">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon
											icon={faPeopleGroup}
											className="h-12 w-12"
										/>
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">
										นักเรียน
									</dt>
									<dd className="order-2 text-4xl font-extrabold text-gray-600 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">
										1,000,000+
									</dd>
								</div>
								{/* <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center hover:border-b-orange-600 sm:border-l sm:border-b-2">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon
											icon={faHourglass}
											className="h-12 w-12"
										/>
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">
										นาทีที่นั่งสมาธิไปแล้ว
									</dt>
									<dd className="order-2 text-4xl font-extrabold text-gray-600 sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl">
										100,000,000
									</dd>
								</div> */}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
