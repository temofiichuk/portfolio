"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { extension } from "@/components/Header/Header";
import { useTranslation } from "react-i18next";

interface ITitle extends HTMLAttributes<HTMLElement> {}

const Title = (props: ITitle) => {
	const [title, setTitle] = useState<string | null>(null);
	const pathname = usePathname();
	const {
		i18n: { language },
	} = useTranslation();

	useEffect(() => {
		if (pathname === "/") return;
		const paths = pathname.replace(language === "en" ? "/" : `/${language}/`, "").split("/");
		if (paths.length === 0) return;
		setTitle(paths[0]);
		console.log(pathname !== `/${language}` || pathname !== "/");
	}, [pathname]);

	return (
		pathname !== `/${language}` &&
		pathname !== "/" && <p {...props}>{title && `${title}${extension}`}</p>
	);
};

Title.displayName = "Title";
export default Title;
