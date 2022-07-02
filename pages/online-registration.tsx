import { FormEvent, useState } from "react";

type SubmitResponseType = {
	message: string;
	error?: string;
};

export default function OnlineRegistrationPage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const [submitting, setSubmitting] = useState(false);
	const [submitResult, setSubmitResult] = useState<SubmitResponseType>();

	const clearForm = () => {
		setFirstName("");
		setLastName("");
		setEmailAddress("");
		setPhoneNumber("");
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (submitting) return;

		setSubmitResult({ message: "Submitting..." });
		setSubmitting(true);

		const data = {
			firstName,
			lastName,
			emailAddress,
			phoneNumber,
		};

		const result = await fetch("/api/mailer/send", {
			method: "POST",

			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(data),
		});

		const resultJSON = await result.json();

		console.log(resultJSON);

		await new Promise((r) => setTimeout(r, 1000));

		clearForm();

		setSubmitResult({
			message: resultJSON.message,
			error: resultJSON.error,
		});

		setSubmitting(false);
	};

	return (
		<div className="m-2 space-y-6 lg:m-16">
			<div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Personal Information
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Nulla aperiam eligendi magnam porro
							repellendus, neque expedita placeat corrupti laborum
							debitis optio cum rerum nam nostrum numquam
							inventore in, cumque possimus officiis ab quod hic
							iste dolor asperiores! Aliquid, libero aperiam.
						</p>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium text-gray-700"
									>
										First name*
									</label>
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										required
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
										value={firstName}
										onChange={(e) =>
											setFirstName(e.target.value)
										}
									/>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium text-gray-700"
									>
										Last name*
									</label>
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										required
										value={lastName}
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
										onChange={(e) =>
											setLastName(e.target.value)
										}
									/>
								</div>

								<div className="col-span-6 sm:col-span-4">
									<label
										htmlFor="email-address"
										className="block text-sm font-medium text-gray-700"
									>
										Email address*
									</label>
									<input
										type="email"
										name="email-address"
										id="email-address"
										autoComplete="email"
										value={emailAddress}
										required
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
										onChange={(e) =>
											setEmailAddress(e.target.value)
										}
									/>
								</div>

								<div className="col-span-6">
									<label
										htmlFor="phone-number"
										className="block text-sm font-medium text-gray-700"
									>
										Phone Number*
									</label>
									<input
										type="text"
										name="phone-number"
										id="phone-number"
										autoComplete="phone-number"
										value={phoneNumber}
										required
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
										onChange={(e) =>
											setPhoneNumber(e.target.value)
										}
									/>
								</div>
								{/* 
								<div className="col-span-6 sm:col-span-6 lg:col-span-2">
									<label
										htmlFor="city"
										className="block text-sm font-medium text-gray-700"
									>
										City
									</label>
									<input
										type="text"
										name="city"
										id="city"
										autoComplete="address-level2"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3 lg:col-span-2">
									<label
										htmlFor="region"
										className="block text-sm font-medium text-gray-700"
									>
										State / Province
									</label>
									<input
										type="text"
										name="region"
										id="region"
										autoComplete="address-level1"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3 lg:col-span-2">
									<label
										htmlFor="postal-code"
										className="block text-sm font-medium text-gray-700"
									>
										ZIP / Postal code
									</label>
									<input
										type="text"
										name="postal-code"
										id="postal-code"
										autoComplete="postal-code"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
									/>
								</div> */}
							</div>

							<div className="flex justify-end">
								{/* <button
type="button"
className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
>
Cancel
</button> */}
								<button
									type="submit"
									disabled={submitting}
									className="ml-3 mt-4 inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
								>
									{submitResult?.message || "Submit"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
