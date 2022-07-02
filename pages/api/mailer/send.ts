import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

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

const SEND_TO_LIST = ["hi@example.com, hi2@example.com"];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== "POST") {
		return await res.status(405).send({
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
			return await res.status(400).send({
				message: "The email address you entered is invalid.",
				error: "Invalid email",
			});
		}

		// TODO: Phone number check?

		return await res.status(400).send({ message: "Missing parameter" });
	}

	// Setup email if params do exist

	const subjectText = `${firstName} ${lastName} has signed up for the course.`;
	const plainText = `${firstName} ${lastName} has signed up for the course. Email: ${emailAddress} Phone: ${phoneNumber}`;
	const htmlContent = `
        <b>${firstName} ${lastName}</b> has signed up for the course.<br/><br/>
        Email: ${emailAddress}<br/>
        Phone: ${phoneNumber}
    `;

	// Send email

	try {
		// Generate test SMTP service account from ethereal.email
		// Only needed if you don't have a real mail account for testing
		let testAccount = await nodemailer.createTestAccount();

		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: testAccount.user, // generated ethereal user
				pass: testAccount.pass, // generated ethereal password
			},
		});

		// send mail with defined transport object
		let info = await transporter.sendMail({
			from: '"BrahmaKumaris TH" <admin@bkthailand.com>', // sender address
			to: SEND_TO_LIST, // list of receivers
			subject: subjectText, // Subject line
			text: plainText, // plain text body
			html: htmlContent, // html body
		});

		console.log("Message sent: %s", info.messageId);
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		// Preview only available when sending through an Ethereal account
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	} catch (err) {
		return await res
			.status(200)
			.json({ message: "Failed to Send!", error: "" + err });
	}

	return await res.status(200).json({ message: "Success!" });
}
