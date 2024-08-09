"use client";

import styles from "./ContactForm.module.scss";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { EmailTemplateProps } from "@/components/ContactForm/EmailTamplate";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/components/ContactForm/schema";
import Input from "@/components/Input/Input";
import { HTMLAttributes } from "react";
import useSend from "@/hooks/useSend";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import codeThemeStyles from "@/components/ContactForm/codeThemeStyles";
import moment from "moment/min/moment-with-locales";
import { useParams } from "next/navigation";

interface IContactForm extends HTMLAttributes<HTMLFormElement> {}

const initialValues: EmailTemplateProps = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = (props: IContactForm) => {
	const [send, { loading }] = useSend();
	const { locale } = useParams();
	const methods = useForm<EmailTemplateProps>({
		resolver: yupResolver(contactSchema),
		defaultValues: initialValues,
	});

	const onSubmit: SubmitHandler<EmailTemplateProps> = (data) => send(data);
	const [name, email, message] = methods.watch(["name", "email", "message"]);
	const code = `const button = document.querySelector('#sendBtn'); \n\nconst message = { \n\tname: "${name.trim()}",\n\temail: "${email.trim()}",\n\tmessage: "${message.replace(/\n+/g, '" + \n"').trim()}",\n\tdate: "${moment().locale(locale).format("dddd, DD MMMM")}"\n}\n\nbutton?.addEventListener('click', () => {\n\tform.send(message);\n})`;

	return (
		<form {...props} onSubmit={methods.handleSubmit(onSubmit)} className={styles.contactForm}>
			<FormProvider {...methods}>
				<div className={styles.formWrapper}>
					<Input label="name" className={styles.input} />
					<Input label="email" className={styles.input} />
					<Input type="textarea" label="message" className={styles.input} />
					<button type="submit" disabled={loading}>
						{!loading ? "Send" : "...Loading"}
					</button>
				</div>
				<div className={styles.codeWrapper}>
					<SyntaxHighlighter language="javascript" style={codeThemeStyles} wrapLines wrapLongLines>
						{code}
					</SyntaxHighlighter>
				</div>
			</FormProvider>
		</form>
	);
};

ContactForm.displayName = "ContactForm";
export default ContactForm;
