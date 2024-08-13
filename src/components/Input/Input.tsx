"use client";
import styles from "./Input.module.scss";
import { HTMLAttributes } from "react";
import { Controller, FieldError, Path, useFormContext } from "react-hook-form";
import { EmailTemplateProps } from "@/components/ContactForm/EmailTamplate";
import toRegularCase from "@/utils/toRegularCase";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
	label: Path<EmailTemplateProps>;
	type?: "text" | "password" | "textarea";
}

const Input = ({ label, type = "text", ...props }: InputProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			name={label}
			control={control}
			render={({ field }) => (
				<div {...props} className={props.className ?? styles.input}>
					<label>{toRegularCase(label)}</label>
					{type !== "textarea" ? (
						<input type={type} {...field} name={label} />
					) : (
						<textarea {...field} name={label}></textarea>
					)}
					{errors[label] && <p role="alert">{(errors[label] as FieldError).message}</p>}
				</div>
			)}
		/>
	);
};

Input.displayName = "Input";
export default Input;
