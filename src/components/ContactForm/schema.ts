import { object, string } from "yup";

export const contactSchema = object().shape({
	name: string().required("required field"),
	email: string().email().required(),
	message: string().required(),
});
