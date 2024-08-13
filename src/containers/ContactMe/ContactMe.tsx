import ContactForm from "@/components/ContactForm/ContactForm";

interface IContactMe {}

const ContactMe = (props: IContactMe) => {
	return (
		<section>
			<ContactForm />
		</section>
	);
};

ContactMe.displayName = "ContactMe";
export default ContactMe;
