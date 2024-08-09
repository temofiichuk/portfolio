import { FC } from "react";

export interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
	<div>
		<p>Name: {name}</p>
		<p>Email: {email}</p>
		<p>Message: {message}</p>
	</div>
);

export default EmailTemplate;
