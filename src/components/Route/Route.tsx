"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { HTMLAttributes, memo } from "react";
import { useTranslation } from "react-i18next";

interface IRoute extends HTMLAttributes<HTMLButtonElement> {
	href: string;
	title: string;
}

const Route = memo(({ href, title, ...props }: IRoute) => {
	const pathname = usePathname();
	const {
		i18n: { languages },
	} = useTranslation();

	const regex = new RegExp(`^\\/(${languages.join("|")})(\\/|$)|^\\/(?![^\\/])$`, "g");
	const basePath = pathname.replace(regex, (match, p1) => (p1 ? "/" : match));

	return (
		<Link aria-current="page" href={href} data-active={href === basePath}>
			<Button {...props} title={`link to the ${title}`}>
				{title}
			</Button>
		</Link>
	);
});

Route.displayName = "Route";
export default Route;
