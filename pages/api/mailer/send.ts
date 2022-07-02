// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	message: string;
	error?: string;
};

const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== "POST") {
		return await res
			.status(405)
			.send({
				message: "Invalid Method",
				error: "Only POST requests allowed.",
			});
	}

	// Get the params
	const { firstName, lastName, emailAddress, phoneNumber } = req.body;

	// Check if they all exist
	if (!firstName || !lastName || !emailAddress || !phoneNumber) {
		// Check if email is valid
		if (!validateEmail(emailAddress)) {
			return await res
				.status(400)
				.send({
					message: "The email address you entered is invalid.",
					error: "Invalid email",
				});
		}

		// TODO: Phone number check?

		return await res.status(400).send({ message: "Missing parameter" });
	}

	// Send email params do exist
	console.log(req.body);

	return await res.status(200).json({ message: "Success!" });
}
