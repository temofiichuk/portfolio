"use client";
import styles from "./LanguageSwitcher.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18n as i18nConfig } from "../../../i18n.config";
import React, { HTMLAttributes, MouseEvent, useState } from "react";
import { RiTranslate2 } from "@remixicon/react";
import useOutsideEvent from "@/hooks/useOutsideEvent";

interface ILanguageSwitcher extends HTMLAttributes<HTMLDivElement> {}

const languages = [
	{ key: "en", full_name: "English" },
	{ key: "de", full_name: "German" },
	{ key: "ua", full_name: "Ukrainian" },
];

const LanguageSwitcher = (props: ILanguageSwitcher) => {
	const [isOpen, setIsOpen] = useState(false);

	const router = useRouter();
	const currentPathname = usePathname();
	const {
		i18n: { language: currentLocale },
	} = useTranslation();

	const ref = useOutsideEvent<HTMLDivElement>("click", () => setIsOpen(false));

	const handleChange = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		const newLocale = target.value;

		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = date.toUTCString();
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

		// redirect to the new locale path
		if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
			router.push("/" + newLocale + currentPathname);
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
		}

		router.refresh();
	};

	return (
		<div ref={ref} {...props} className={`${props.className} ${styles.languageSwitcher}`}>
			<button className={styles.button} onClick={() => setIsOpen((prev) => !prev)}>
				<RiTranslate2 widths={20} />
			</button>
			<div className={styles.wrapper} data-active={isOpen}>
				<div>
					<ul>
						{languages.map(({ key, full_name }) => (
							<li key={key} aria-checked={key === currentLocale}>
								<button onClick={handleChange} value={key}>
									{full_name}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

LanguageSwitcher.displayName = "LanguageSwitcher";
export default LanguageSwitcher;
