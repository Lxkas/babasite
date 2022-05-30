import { faEarthAsia, faBuilding, faPeopleGroup, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stats() {
	return (
		<div className="pt-12 font-sans bg-white sm:pt-16">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold text-orange-600 sm:text-4xl">The Brahma Kumaris Worldwide</h2>
					{/* <p className="mt-3 text-xl text-gray-500 sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
					</p> */}
				</div>
			</div>
			<div className="pb-12 mt-10 font-sans bg-white sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 bg-white h-1/2" />
					<div className="relative max-w-full px-4 mx-auto sm:px-6 lg:px-8">
						<div className="max-w-full mx-auto">
							<dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-4">
								<div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-b-transparent sm:border-b-2 sm:border-r hover:border-b-orange-600">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon icon={faEarthAsia} className="w-12 h-12" />
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">Countries Worldwide</dt>
									<dd className="order-2 text-5xl font-extrabold text-gray-600">110</dd>
								</div>
								<div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-b-transparent sm:border-l sm:border-b-2 sm:border-r hover:border-b-orange-600">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon icon={faBuilding} className="w-12 h-12" />
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">Meditation Centers</dt>
									<dd className="order-2 text-4xl font-extrabold text-gray-600 md:text-5xl">4500+</dd>
								</div>
								<div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-b-2 hover:border-b-orange-600">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon icon={faPeopleGroup} className="w-12 h-12" />
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">Students</dt>
									<dd className="order-2 text-4xl font-extrabold text-gray-600 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">1,000,000+</dd>
								</div>
								<div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-l sm:border-b-2 hover:border-b-orange-600">
									<dt className="order-1 mb-2 text-lg font-medium leading-6 text-gray-500">
										<FontAwesomeIcon icon={faHourglass} className="w-12 h-12" />
									</dt>
									<dt className="order-3 mt-2 text-lg font-medium leading-6 text-gray-500">Minutes of Meditation</dt>
									<dd className="order-2 text-4xl font-extrabold text-gray-600 sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl">
										100,000,000
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
