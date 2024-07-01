"use client";
import styles from "./Footer.module.scss";
import { HTMLAttributes } from "react";
import Panel, { PanelPosition } from "@/components/Panel/Panel";
import { Locale } from "../../../i18n.config";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import {
	RiGamepadFill,
	RiGithubFill,
	RiLinkedinFill,
	RiPuzzleFill,
	RiTerminalBoxFill,
} from "@remixicon/react";

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
				<button aria-label="open professional info" title="Open professional info">
					<RiTerminalBoxFill widths={20} className={"hover:fill-icon-professional-info"} />
				</button>
				<button aria-label="open personal info" title="Open personal info">
					<RiPuzzleFill widths={20} className={"hover:fill-icon-personal-info"} />
				</button>
				<button aria-label="open hobbies" title="Open hobbies">
					<RiGamepadFill widths={20} className={"hover:fill-icon-hobbies"} />
				</button>
				<p>{t("find_me_in")}</p>
				{social.map(({ title, href, icon }) => (
					<Link key={title} title={title} href={href}>
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
