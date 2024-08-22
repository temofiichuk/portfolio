import { IPage } from "@/app/[locale]/page";
import LineCounter from "@/components/LineCounter/LineCounter";

const ContactsPage = ({ params }: IPage) => {
	const mail = process.env.NEXT_APP_MAIL || "mihail.temofiichuk@gmail.com";
	const phone = process.env.NEXT_APP_PHONE || "+491704830570";
	return (
		<LineCounter className={"h-full"}>
			<p>{"//"}contacts</p>
			<br />
			<p>
				<span>
					mail: <a href={`mailto:${mail}`}>{mail}</a>
				</span>
			</p>
			<p>
				<span>
					phone: <a href={`tel:${phone}`}>{phone}</a>
					{}
				</span>
			</p>
		</LineCounter>
	);
};

export default ContactsPage;
