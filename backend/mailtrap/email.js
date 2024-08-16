import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail=async(email,name)=>{
	const recipient = [{ email }];
	try {
		const res = await mailtrapClient.send({
			from: sender,
			to: recipient,
			template_uuid:"477afe63-c511-4d76-ad36-4faa9e76e2a6",
			template_variables:{
				company_info_name:"BookStore",
				name:name

			},
		});
		console.log("Email sent successfully", res);
	}
	catch(err){
		console.error(`Error sending welcome email`, err);
		throw new Error(`Error sending welcome email: ${err}`);
	}
}

export const sendPasswordResetEmail=async(email,resetURL)=>{
	const recipient = [{ email }];
	try {
		const res = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject:"Reset your password",
			html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
			category: "Password Reset",
		});
	}
	catch(err){
		console.error(`Error sending password reset email`, err);
		throw new Error(`Error sending password reset email: ${err}`);
	}
}

export const sendResetSuccessEmail=async(email)=>{
	const recipient = [{ email }];
	try {
		const res = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject:"Password Reset Successfully",
			html:PASSWORD_RESET_SUCCESS_TEMPLATE,
			category:"Password Reset"
		});
		console.log("Email sent successfully", res);
	}
	catch(err){
		console.error(`Error sending password reset success email`, err);
		throw new Error(`Error sending password reset success email: ${err}`);
	}

}