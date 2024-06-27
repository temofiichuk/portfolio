"use client";
import styles from "./Footer.module.scss";
import { HTMLAttributes } from "react";
import Panel, { PanelPosition } from "@/components/Panel/Panel";
import { Locale } from "../../../i18n.config";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

interface IFooter extends HTMLAttributes<HTMLElement> {
	locale: Locale;
}

const social = [
	{ title: "Linkedin", href: "/", icon: <RiLinkedinFill widths={20} /> },
	{ title: "Github", href: "/", icon: <RiGithubFill widths={20} /> },
];

const Footer = ({ locale, ...props }: IFooter) => {
	const { t } = useTranslation();

	return (
		<footer {...props} className={`${props.className} ${styles.footer}`}>
			<Panel position={PanelPosition.BOTTOM}>
				<p>{t("find_me_in")}</p>
				{social.map(({ title, href, icon }) => (
					<Link title={title} href={href}>
						<button>{icon}</button>
					</Link>
				))}
				<ThemeSwitcher />
			</Panel>
		</footer>
	);
};

Footer.displayName = "Footer";
export default Footer;
