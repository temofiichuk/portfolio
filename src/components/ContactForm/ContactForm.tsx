"use client";

import styles from "./ContactForm.module.scss";
import { FormProvider, Path, SubmitHandler, useForm } from "react-hook-form";
import { EmailTemplateProps } from "@/components/ContactForm/EmailTamplate";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/components/ContactForm/schema";
import Input from "@/components/Input/Input";
import { HTMLAttributes } from "react";
import useSend from "@/hooks/useSend";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import codeThemeStyles from "@/components/ContactForm/codeThemeStyles";
import moment from "moment";
import { motion } from "framer-motion";
import MotionDiv from "@/components/MotionDiv";
import ButtonSend from "@/components/ButtonSend/ButtonSend";

interface IContactForm extends HTMLAttributes<HTMLFormElement> {}

const initialValues: EmailTemplateProps = {
	name: "",
	email: "",
	message: "",
};

const variants = {
	visible: { y: 0, opacity: 1 },
	hidden: { opacity: 0, y: 100 },
};

const ContactForm = (props: IContactForm) => {
	const [send, { loading, sent }] = useSend();
	const methods = useForm<EmailTemplateProps>({
		resolver: yupResolver(contactSchema),
		defaultValues: initialValues,
	});

	const onSubmit: SubmitHandler<EmailTemplateProps> = (data) => send(data);
	const [name, email, message] = methods.watch(["name", "email", "message"]);
	const code = `const button = document.querySelector('#sendBtn'); \n\nconst message = { \n\tname: "${name.trim()}",\n\temail: "${email.trim()}",\n\tmessage: "${message.replace(/\n+/g, '" + \n"').trim()}",\n\tdate: "${moment().format("dddd, DD MMMM")}"\n}\n\nbutton?.addEventListener('click', () => {\n\tform.send(message);\n})`;

	return (
		<form {...props} onSubmit={methods.handleSubmit(onSubmit)} className={styles.contactForm}>
			<FormProvider {...methods}>
				<div className={styles.formWrapper}>
					{Object.keys(initialValues).map((key, i) => {
						const type = key === "message" ? "textarea" : undefined;
						return (
							<MotionDiv
								key={key}
								className={styles.input}
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: i * 0.1 }}>
								<Input
									type={type}
									label={key as Path<EmailTemplateProps>}
									className={styles.input}
								/>
							</MotionDiv>
						);
					})}
					<ButtonSend sending={loading} sent={sent} />
				</div>
				<motion.div
					className={styles.codeWrapper}
					variants={variants}
					initial="hidden"
					animate="visible">
					<SyntaxHighlighter language="javascript" style={codeThemeStyles} wrapLines wrapLongLines>
						{code}
					</SyntaxHighlighter>
				</motion.div>
			</FormProvider>
		</form>
	);
};

ContactForm.displayName = "ContactForm";
export default ContactForm;
