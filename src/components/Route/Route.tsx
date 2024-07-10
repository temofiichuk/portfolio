"use client";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { HTMLProps, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Route = memo(({ href, children, ...props }: LinkProps & HTMLProps<HTMLAnchorElement>) => {
	const pathname = usePathname();
	const {
		i18n: { languages },
	} = useTranslation();

	const regex = new RegExp(`^\\/(${languages.join("|")})(\\/|$)|^\\/(?![^\\/])$`, "g");
	const basePath = pathname.replace(regex, (match, p1) => (p1 ? "/" : match));

	useEffect(() => {
		console.log(basePath.startsWith(href), href, basePath);
	}, []);

	return (
		<Link
			href={href}
			{...props}
			aria-label={props.title}
			aria-current="page"
			data-active={href === "/" ? href === basePath : basePath.startsWith(href)}>
			{children}
		</Link>
	);
});

Route.displayName = "Route";
export default Route;
