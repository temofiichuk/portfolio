import styles from "./Footer.module.scss";
import { HTMLAttributes } from "react";
import Panel, { PanelPosition } from "@/components/Panel/Panel";
import { Locale } from "../../../i18n.config";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import initTranslations from "@/i18n";

interface IFooter extends HTMLAttributes<HTMLElement> {
	locale: Locale;
}

export const SOCIAL = [
	{ title: "Linkedin", href: "/", icon: <RiLinkedinFill widths={20} /> },
	{ title: "Github", href: "/", icon: <RiGithubFill widths={20} /> },
];

const namespace = ["app-layout"];

const Footer = async ({ locale, ...props }: IFooter) => {
	const { t } = await initTranslations(locale, namespace);

	return (
		<footer {...props} className={`${props.className ?? ""} ${styles.footer}`}>
			<Panel position={PanelPosition.BOTTOM}>
				{/*<button aria-label="open professional info" title="Open professional info">*/}
				{/*	<RiTerminalBoxFill widths={20} className={"hover:fill-icon-professional-info"} />*/}
				{/*</button>*/}
				{/*<button aria-label="open personal info" title="Open personal info">*/}
				{/*	<RiPuzzleFill widths={20} className={"hover:fill-icon-personal-info"} />*/}
				{/*</button>*/}
				{/*<button aria-label="open hobbies" title="Open hobbies">*/}
				{/*	<RiGamepadFill widths={20} className={"hover:fill-icon-hobbies"} />*/}
				{/*</button>*/}
				<p>{t("find_me_in")}</p>
				{SOCIAL.map(({ title, href, icon }) => (
					<Link key={title} title={title} href={href}>
						{icon}
					</Link>
				))}
				<>
					<ThemeSwitcher />
					<p>UTF-8</p>
				</>
			</Panel>
		</footer>
	);
};

Footer.displayName = "Footer";
export default Footer;
